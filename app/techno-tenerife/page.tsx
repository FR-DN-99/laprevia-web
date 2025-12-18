import type { Metadata } from 'next';
import { technoMetadata } from '@/lib/metadata/notfound';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Calendar, MapPin, Clock, Eye, Waves } from 'lucide-react';
import Link from 'next/link';
import { type Language } from '@/lib/translations';

interface Props {
  params: { lang: Language };
}

export const metadata: Metadata = {
  title:
    'NOT FOUND - Techno Tenerife | La Previa Group | Techno Night Tenerife',
  description:
    'Not Found es la noche de techno que estabas buscando en Tenerife. Desde techno industrial hasta melodic techno, ofrecemos sesiones marathon con los mejores DJs y producciones visuales hipnóticas. The best techno night in Tenerife with marathon DJ sessions and hypnotic visuals.',
  keywords:
    'techno Tenerife, fiesta techno Tenerife, Not Found Tenerife, melodic techno Tenerife, industrial techno Tenerife, música electrónica Tenerife, underground techno, techno night Tenerife, techno party Tenerife, electronic music Tenerife',
  openGraph: {
    title: 'NOT FOUND - Techno Tenerife | La Previa Group',
    description:
      'Las mejores noches de techno en Tenerife con sesiones marathon y producciones visuales hipnóticas. The best techno nights in Tenerife with marathon DJ sessions and immersive visual productions.',
    type: 'website',
    locale: 'es_ES',
    alternateLocale: 'en_US',
    images: [
      {
        url: '/images/techno-event-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Not Found Techno Tenerife',
      },
    ],
  },
  alternates: {
    languages: {
      es: '/techno-tenerife?lang=es',
      en: '/techno-tenerife?lang=en',
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

export default function TechnoPage() {
  return (
    <div className='min-h-screen bg-background'>
      <Navigation />
      <main className='pt-16'>
        {/* Hero Section */}
        <section className='relative min-h-[70vh] flex items-center justify-center overflow-hidden'>
          <div className='absolute inset-0 z-0'>
            <img
              src='/notfound-principal.jpg'
              alt='Not Found Techno party in Tenerife with lights and crowd'
              className='w-full h-full object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background' />
          </div>

          <div className='container mx-auto px-4 relative z-10 text-center'>
            <div className='inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full mb-6'>
              <span className='text-primary font-bold text-sm tracking-wider'>
                TECHNO TENERIFE
              </span>
            </div>
            <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 text-balance'>
              NOT FOUND
            </h1>
            <p className='text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 text-balance leading-relaxed'>
              Las mejores noches de Techno en Tenerife
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
                La Noche de Techno que Estabas Buscando
              </h2>
              <div className='prose prose-lg prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed'>
                <p>
                  <strong className='text-foreground'>NOT FOUND</strong> es una
                  experiencia nocturna dedicada a los amantes del{' '}
                  <strong>techno</strong> en <strong>Tenerife</strong>, diseñada
                  para quienes buscan sonidos <strong>intensos</strong> y{' '}
                  <strong>envolventes</strong> que transforman cada noche en un{' '}
                  <strong>viaje único</strong>. Con un enfoque claro en la
                  esencia del <strong>techno underground</strong>, reúne a DJs{' '}
                  <strong>nacionales e internacionales</strong> que ofrecen sets
                  cargados de <strong>energía</strong>, <strong>ritmo</strong> y{' '}
                  <strong>atmósferas hipnóticas</strong>.
                </p>
                <p>
                  Cada edición de <strong>Not Found</strong> va más allá de una
                  simple <strong>fiesta de techno en Tenerife</strong>: es una{' '}
                  <strong>inmersión total</strong> en la{' '}
                  <strong>cultura club</strong>, donde la{' '}
                  <strong>música</strong>, el <strong>sonido</strong> y el{' '}
                  <strong>ambiente</strong> se fusionan para crear una
                  experiencia <strong>auténtica</strong> e{' '}
                  <strong>inolvidable</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className='py-24 bg-muted/30'>
          <div className='container mx-auto px-4'>
            <h2 className='text-3xl md:text-4xl font-bold text-center mb-16'>
              ¿Por Qué Not Found?
            </h2>
            <div className='grid md:grid-cols-3 gap-8'>
              <Card className='p-8 bg-card border-border hover:border-primary transition-colors'>
                <div className='w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6'>
                  <Clock className='h-8 w-8 text-primary' />
                </div>
                <h3 className='text-2xl font-bold mb-4'>Sesiones Marathon</h3>
                <p className='text-muted-foreground leading-relaxed'>
                  Noches largas con los mejores sets de techno. Desde las 00:00
                  hasta que el cuerpo aguante, viviendo el techno en su máxima
                  expresión.
                </p>
              </Card>

              <Card className='p-8 bg-card border-border hover:border-primary transition-colors'>
                <div className='w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6'>
                  <Eye className='h-8 w-8 text-primary' />
                </div>
                <h3 className='text-2xl font-bold mb-4'>
                  Producciones Visuales
                </h3>
                <p className='text-muted-foreground leading-relaxed'>
                  Mapping, láser y visuales hipnóticos que complementan la
                  música. Cada elemento visual está diseñado para crear una
                  experiencia sensorial completa.
                </p>
              </Card>

              <Card className='p-8 bg-card border-border hover:border-primary transition-colors'>
                <div className='w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6'>
                  <Waves className='h-8 w-8 text-primary' />
                </div>
                <h3 className='text-2xl font-bold mb-4'>Espacios Únicos</h3>
                <p className='text-muted-foreground leading-relaxed'>
                  Localizaciones especiales en toda Tenerife. Desde clubs
                  underground hasta espacios al aire libre, cada venue es
                  cuidadosamente seleccionado.
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
                Próximo Evento Not Found
              </h2>
              <Card className='p-8 md:p-12 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/50'>
                <div className='flex flex-col md:flex-row gap-8 items-center'>
                  <div className='flex-1 space-y-6'>
                    <h3 className='text-3xl font-bold'>
                      Not Found - Próximamente
                    </h3>
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
                      src='/notfound-proximamente.jpeg'
                      alt='Next Not Found techno event in Tenerife'
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
