'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/client';
import Image from 'next/image';

export function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: t('testimonials.alex.name'),
      position: t('testimonials.alex.position'),
      content: t('testimonials.alex.content'),
      image: '/placeholder.svg',
    },
    {
      name: t('testimonials.sarah.name'),
      position: t('testimonials.sarah.position'),
      content: t('testimonials.sarah.content'),
      image: '/placeholder.svg',
    },
    {
      name: t('testimonials.michael.name'),
      position: t('testimonials.michael.position'),
      content: t('testimonials.michael.content'),
      image: '/placeholder.svg',
    },
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t('testimonials.title')}</h2>
          <div className="w-20 h-1 bg-primary mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl">{t('testimonials.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-md">
              <CardContent className="p-6 flex flex-col h-full">
                <Quote className="h-8 w-8 text-primary/40 mb-4" />
                <p className="text-muted-foreground mb-6 flex-grow">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image || '/placeholder.svg'}
                      alt={testimonial.name}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
