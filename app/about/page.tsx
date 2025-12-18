import type { Metadata } from 'next';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { SomosSection } from '@/components/somos-section';
import { ValoresSection } from '@/components/valores-section';
import { CasaSection } from '@/components/casa-section';
import { ContactSection } from '@/components/contact-section';

export const metadata: Metadata = {
  title: 'Sobre Nosotros - La Previa Group | Promotora de Eventos en Tenerife',
  description:
    'La Previa Group es la promotora líder de eventos de música electrónica en Tenerife. Organizamos 1515 (Drum and Bass) y Not Found (Techno), las mejores fiestas de la isla. La Previa Group is the leading electronic music promoter in Tenerife, organizing 1515 (Drum and Bass) and Not Found (Techno), the best parties on the island.',
  keywords:
    'La Previa Group, promotora eventos Tenerife, organizador fiestas Tenerife, electronic music promoter, drum and bass promoter, techno promoter, Drum and Bass Tenerife, Techno Tenerife, parties Tenerife, Tenerife nightlife',
  openGraph: {
    title: 'Sobre Nosotros - La Previa Group Tenerife',
    description:
      'La promotora líder de eventos de música electrónica en Tenerife. Leading electronic music promoter in Tenerife.',
    type: 'website',
    locale: 'es_ES',
    alternateLocale: 'en_US',
    images: [
      {
        url: '/images/about-us-og.jpg',
        width: 1200,
        height: 630,
        alt: 'La Previa Group Tenerife',
      },
    ],
  },
  alternates: {
    languages: {
      es: '/about?lang=es',
      en: '/about?lang=en',
    },
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
};

export default function AboutPage() {
  return (
    <div className='min-h-screen bg-background'>
      <Navigation />
      <main className='pt-16'>
        <SomosSection />
        <ValoresSection />
        <CasaSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
