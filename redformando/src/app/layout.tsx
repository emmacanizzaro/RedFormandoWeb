import type { Metadata } from 'next';
import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import { Toaster } from 'sonner';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.redformando.com'),
  title: { default: 'REDFORMANDO', template: '%s | REDFORMANDO' },
  description: 'Red ministerial enfocada en formación, reforma y activación de líderes.',
  applicationName: 'REDFORMANDO',
  alternates: { canonical: '/' },
  keywords: ['red ministerial', 'formación', 'reforma', 'liderazgo', 'iglesia', 'REDFORMANDO'],
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    siteName: 'REDFORMANDO',
    title: 'REDFORMANDO',
    description: 'Recursos, formación y visión apostólica para una iglesia en reforma.',
    url: 'https://www.redformando.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'REDFORMANDO',
    description: 'Recursos, formación y visión apostólica para una iglesia en reforma.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${cormorant.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <div className="min-h-screen bg-paper text-brand-blue">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
          <Toaster richColors position="top-right" closeButton theme="light" />
        </ThemeProvider>
      </body>
    </html>
  );
}
