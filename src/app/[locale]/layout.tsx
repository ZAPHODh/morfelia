import '@/app/globals.css'
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import HeaderNav from '@/components/header-nav';

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className='flex flex-col w-full items-center justify-center'>
        <NextIntlClientProvider>
          <HeaderNav />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}