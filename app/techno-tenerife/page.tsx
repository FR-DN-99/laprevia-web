import type { Metadata } from 'next';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Calendar, MapPin, Clock, Eye, Waves } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title:
    'Not Found - Techno Tenerife | La Previa Group | Fiesta Techno Tenerife',
  description:
    'Not Found es la mejor fiesta de Techno en Tenerife. Sesiones marathon, producciones visuales y los mejores DJs de techno. La referencia del techno en Tenerife por La Previa Group.',
  keywords:
    'techno tenerife, fiesta techno tenerife, not found tenerife, techno party tenerife, melodic techno tenerife, industrial techno, electronic music tenerife, underground techno',
  openGraph: {
    title: 'Not Found - Techno Tenerife | La Previa Group',
    description:
      'Las mejores noches de techno en Tenerife con sesiones marathon y producciones visuales hipnóticas',
    type: 'website',
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
                  <strong className='text-foreground'>Not Found</strong> es la
                  respuesta a tu búsqueda del mejor techno en Tenerife.
                  Inspirados en los grandes clubs underground de Europa, traemos
                  sesiones marathon con los mejores DJs de techno industrial,
                  melodic techno y todas las variantes del género.
                </p>
                <p>
                  Cada noche de Not Found es un viaje hipnótico a través del
                  techno más puro. Con producciones visuales inmersivas y
                  sistemas de sonido diseñados para sentir cada kick, creamos
                  experiencias que van más allá de una simple fiesta de techno
                  en Tenerife.
                </p>
                <p>
                  Desde el primer beat hasta las primeras luces del amanecer,
                  Not Found te lleva a un estado de trance colectivo donde la
                  música techno se convierte en una experiencia transformadora.
                  Únete a la mejor escena de techno en Tenerife.
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
                      src='/techno-party-lights-tenerife-underground.jpg'
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
