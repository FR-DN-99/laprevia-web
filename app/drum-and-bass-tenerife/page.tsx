import type { Metadata } from 'next';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Calendar, MapPin, Music2, Radio, Users } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Drum and Bass Tenerife | La Previa Group | DnB Night Tenerife',
  description:
    'La mejor noche de Drum and Bass en Tenerife con DJs locales e internacionales, sesiones marathon y producciones visuales inmersivas. The best Drum and Bass night in Tenerife with marathon DJ sessions and immersive visuals.',
  keywords:
    'drum and bass Tenerife, dnb Tenerife, fiesta drum and bass Tenerife, música electrónica Tenerife, eventos Tenerife, party Tenerife, DnB Tenerife, underground drum and bass, electronic music Tenerife, Tenerife nightlife, Tenerife clubs',
  openGraph: {
    title: 'Drum and Bass Tenerife | La Previa Group',
    description:
      'La mejor noche de Drum and Bass en Tenerife con DJs locales e internacionales. The best Drum and Bass night in Tenerife with marathon DJ sessions and immersive visuals.',
    type: 'website',
    locale: 'es_ES',
    alternateLocale: 'en_US',
    images: [
      {
        url: '/images/dnb-event-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Drum and Bass Tenerife',
      },
    ],
  },
  alternates: {
    languages: {
      es: '/drum-and-bass-tenerife?lang=es',
      en: '/drum-and-bass-tenerife?lang=en',
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

export default function DrumAndBassPage() {
  return (
    <div className='min-h-screen bg-background'>
      <Navigation />
      <main className='pt-16'>
        {/* Hero Section */}
        <section className='relative min-h-[70vh] flex items-center justify-center overflow-hidden'>
          <div className='absolute inset-0 z-0'>
            <img
              src='/1515-public-dendivell-cabina.jpg'
              alt='1515 Drum and Bass party Tenerife with DJ and crowd'
              className='w-full h-full object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background' />
          </div>

          <div className='container mx-auto px-4 relative z-10 text-center'>
            <div className='inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full mb-6'>
              <span className='text-primary font-bold text-sm tracking-wider'>
                DRUM AND BASS TENERIFE
              </span>
            </div>
            <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 text-balance'>
              15 15
            </h1>
            <p className='text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 text-balance leading-relaxed'>
              La fiesta de Drum and Bass más intensa de Tenerife
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button size='lg' asChild>
                <Link href='/events-tenerife'>Ver Próximos Eventos</Link>
              </Button>
              <Button size='lg' variant='outline' asChild>
                <Link href='/djs'>Conocer DJs</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className='py-24 md:py-32'>
          <div className='container mx-auto px-4'>
            <div className='max-w-4xl mx-auto'>
              <h2 className='text-3xl md:text-4xl font-bold mb-6 text-balance'>
                La Referencia del Drum and Bass en Tenerife
              </h2>
              <div className='prose prose-lg prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed'>
                <p>
                  <strong className='text-foreground'>1515</strong> es la fiesta
                  de drum and bass en Tenerife que estabas buscando. Desde
                  nuestros inicios, hemos sido la referencia del DNB en la isla,
                  trayendo lo mejor de la escena nacional e internacional a
                  Tenerife.
                </p>
                <p>
                  Cada evento de 1515 es una experiencia única donde los beats
                  rápidos, los bajos profundos y la energía intensa se combinan
                  para crear noches inolvidables. Si buscas fiestas de drum and
                  bass en Tenerife con el mejor sonido y los DJs más destacados,
                  1515 es tu fiesta.
                </p>
                <p>
                  Con sistemas de sonido premium y producciones de alta calidad,
                  1515 ha establecido el estándar para las fiestas de drum and
                  bass en Tenerife. Únete a nuestra comunidad y vive la
                  experiencia del verdadero underground.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className='py-24 bg-muted/30'>
          <div className='container mx-auto px-4'>
            <h2 className='text-3xl md:text-4xl font-bold text-center mb-16'>
              ¿Por Qué 1515?
            </h2>
            <div className='grid md:grid-cols-3 gap-8'>
              <Card className='p-8 bg-card border-border hover:border-primary transition-colors'>
                <div className='w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6'>
                  <Users className='h-8 w-8 text-primary' />
                </div>
                <h3 className='text-2xl font-bold mb-4'>DJs Internacionales</h3>
                <p className='text-muted-foreground leading-relaxed'>
                  Artistas de renombre mundial del drum and bass. Desde liquid
                  hasta neurofunk, traemos lo mejor de cada subgénero a
                  Tenerife.
                </p>
              </Card>

              <Card className='p-8 bg-card border-border hover:border-primary transition-colors'>
                <div className='w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6'>
                  <Radio className='h-8 w-8 text-primary' />
                </div>
                <h3 className='text-2xl font-bold mb-4'>
                  Sistema de Sonido Premium
                </h3>
                <p className='text-muted-foreground leading-relaxed'>
                  Equipos de alta calidad diseñados específicamente para drum
                  and bass. Siente cada bajo y cada detalle con nuestra
                  tecnología de sonido.
                </p>
              </Card>

              <Card className='p-8 bg-card border-border hover:border-primary transition-colors'>
                <div className='w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6'>
                  <Music2 className='h-8 w-8 text-primary' />
                </div>
                <h3 className='text-2xl font-bold mb-4'>
                  Ambiente Underground
                </h3>
                <p className='text-muted-foreground leading-relaxed'>
                  La verdadera esencia del drum and bass. Una comunidad
                  apasionada y una atmósfera auténtica que te hará sentir parte
                  de algo especial.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Next Event Section */}
        <section className='py-24 md:py-32'>
          <div className='container mx-auto px-4'>
            <div className='max-w-4xl mx-auto'>
              <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>
                Próximo Evento
              </h2>
              <Card className='p-8 md:p-12 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/50'>
                <div className='flex flex-col md:flex-row gap-8 items-center'>
                  <div className='flex-1 space-y-6'>
                    <h3 className='text-3xl font-bold'>1515 - Próximamente</h3>
                    <div className='space-y-3'>
                      <div className='flex items-center gap-3 text-muted-foreground'>
                        <Calendar className='h-5 w-5 text-primary' />
                        <span>Fecha por confirmar</span>
                      </div>
                      <div className='flex items-center gap-3 text-muted-foreground'>
                        <MapPin className='h-5 w-5 text-primary' />
                        <span>Tenerife, Islas Canarias</span>
                      </div>
                    </div>
                    <Button size='lg' asChild className='w-full md:w-auto'>
                      <Link href='/events-tenerife'>Ver Todos los Eventos</Link>
                    </Button>
                  </div>
                  <div className='w-full md:w-64 h-64 relative rounded-lg overflow-hidden'>
                    <img
                      src='/1515-cartel.jpg'
                      alt='Next 1515 drum and bass event in Tenerife'
                      className='w-full h-full object-cover'
                    />
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
