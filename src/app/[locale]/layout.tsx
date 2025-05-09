import '@/app/globals.css'
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import HeaderNav from '@/components/header-nav';
import { CartProvider } from '@/hooks/use-cart';

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
      <body className='flex flex-col w-screen overflow-x-hidden items-center justify-center m-0 p-0'>
        <NextIntlClientProvider>
          <CartProvider>
            <HeaderNav />
            {children}
          </CartProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}