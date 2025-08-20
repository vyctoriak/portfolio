import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

const envSchema = z.object({
  GMAIL_USER: z.string().email('Invalid email format'),
  GMAIL_APP_PASSWORD: z.string().min(1, 'Gmail app password is required'),
});

const requestSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name too long'),
  email: z.string().email('Invalid email format'),
  subject: z.string().min(1, 'Subject is required').max(200, 'Subject too long'),
  message: z.string().min(1, 'Message is required').max(2000, 'Message too long'),
});

function getEnv() {
  return envSchema.parse({
    GMAIL_USER: process.env.GMAIL_USER,
    GMAIL_APP_PASSWORD: process.env.GMAIL_APP_PASSWORD,
  });
}

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimitMap.get(ip);

  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 60000 });
    return false;
  }

  if (limit.count >= 5) {
    return true;
  }

  limit.count++;
  return false;
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const validatedData = requestSchema.parse(body);
    const { name, email, subject, message } = validatedData;

    const env = getEnv();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: env.GMAIL_USER,
        pass: env.GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: env.GMAIL_USER,
      to: 'vyctoriak@gmail.com',
      subject: `Contato através do portfolio: ${subject}`,
      text: `
        Nome: ${name}
        Email: ${email}
        Assunto: ${subject}
        Mensagem: ${message}
      `,
      html: `
        <h2>Novo contato do portfolio</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Assunto:</strong> ${subject}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid input data', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
