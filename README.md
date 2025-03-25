# Vyctoria Karina - Software Developer Portfolio

A modern, responsive portfolio website for me, featuring internationalization support for English 🇺🇸 and Portuguese 🇧🇷.

<!-- ![Portfolio Preview](https://via.placeholder.com/800x400?text=Vyctoria+Karina+Portfolio) -->

## Features

- 🌐 Multilingual support (English 🇺🇸 and Portuguese 🇧🇷)
- 🎨 Modern, clean design with responsive layout
- 🌓 Light/dark mode toggle
- 📱 Mobile-friendly navigation
- 📊 Skills and experience showcase
- 💼 Project portfolio with filtering
- 👥 Testimonials section
- 📝 Contact form
- 🔍 SEO optimized

## Technologies Used

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS with shadcn/ui components
- **Internationalization**: Custom i18n implementation
- **Typography**: Inter font (Google Fonts)
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/vyctoria-karina-portfolio.git
cd vyctoria-karina-portfolio
```


2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.


## Project Structure

```plaintext
├── app/                  # Next.js App Router
│   ├── [locale]/         # Locale-specific routes
│   │   ├── layout.tsx    # Root layout with i18n provider
│   │   └── page.tsx      # Home page
│   └── globals.css       # Global styles
├── components/           # React components
│   ├── ui/               # UI components from shadcn
│   ├── header.tsx        # Site header with navigation
│   ├── hero.tsx          # Hero section
│   ├── about.tsx         # About section
│   └── ...               # Other components
├── lib/                  # Utility functions and libraries
│   └── i18n/             # Internationalization utilities
│       ├── client.tsx    # Client-side i18n context
│       ├── server.ts     # Server-side i18n utilities
│       ├── translations.ts # Translation strings
│       └── types.ts      # TypeScript types for i18n
├── hooks/                # Custom React hooks
├── middleware.ts         # Next.js middleware for i18n routing
├── public/               # Static assets
└── tailwind.config.ts    # Tailwind CSS configuration
```


## Internationalization (i18n)

This portfolio supports multiple languages through a custom i18n implementation:

- **Supported languages**: English (en) and Portuguese (pt-br)
- **Default language**: English (en)
- **URL structure**: `/{locale}/path` (e.g., `/en/` or `/pt-br/`)


### How it works:

1. The middleware detects the user's preferred language and redirects to the appropriate locale path
2. Translations are stored in a central `translations.ts` file
3. The `LanguageProvider` context makes translations available throughout the app
4. The `useLanguage` hook provides access to the current locale and translation function
5. A language switcher in the header allows users to change languages


### Adding a new language:

1. Add the new locale to the `locales` array in `middleware.ts`
2. Add translations for the new locale in `lib/i18n/translations.ts`
3. Update the language switcher to include the new language.


#### Example usage in components:

```javascript

"use client"

import { useLanguage } from "@/lib/i18n/client"

export function MyComponent() {
  const { t } = useLanguage()
  
  return (
    <div>
      <h1>{t('section.title')}</h1>
      <p>{t('section.description')}</p>
    </div>
  )
}

```

## Customization

### Changing Content

Most content can be edited in the translation files located at `lib/i18n/translations.ts`. Update the text for each language as needed.

### Styling

The project uses Tailwind CSS for styling. The main theme colors and other design tokens can be customized in:

- `tailwind.config.ts` - For theme configuration
- `app/globals.css` - For global styles and CSS variables

## Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Lucide Icons](https://lucide.dev/) - Beautiful icons
- [Vercel](https://vercel.com/) - Deployment platform


## License

This project is licensed under the MIT License - see the LICENSE file for details.

Created with ❤️ by Vyctoria Karina
