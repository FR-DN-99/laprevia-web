import type { Metadata } from 'next';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Instagram, Music2, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title:
    'DJs - La Previa Group | Artistas de Drum and Bass y Techno en Tenerife',
  description:
    'Conoce a los DJs residentes y artistas invitados de La Previa Group. Los mejores artistas de drum and bass y techno que tocan en las fiestas de Tenerife. Discover our resident and guest DJs performing Drum and Bass and Techno in Tenerife.',
  keywords:
    'djs Tenerife, drum and bass DJ, techno DJ Tenerife, DJs Canarias, electronic music artists, DJs residentes Tenerife, Drum and Bass Tenerife, Techno Tenerife, parties Tenerife, La Previa Group',
  openGraph: {
    title: 'DJs - La Previa Group Tenerife',
    description:
      'Los mejores DJs de drum and bass y techno en Tenerife. The best Drum and Bass and Techno DJs in Tenerife.',
    type: 'website',
    locale: 'es_ES',
    alternateLocale: 'en_US',
    images: [
      {
        url: '/images/djs-event-og.jpg',
        width: 1200,
        height: 630,
        alt: 'DJs Drum and Bass y Techno Tenerife',
      },
    ],
  },
  alternates: {
    languages: {
      es: '/djs?lang=es',
      en: '/djs?lang=en',
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

const djs = [
  {
    name: 'Dendivell',
    role: 'Residente 1515 - Drum and Bass',
    image: '/1515-dendivell.jpg',
    bio: 'Especializado en drum and bass con más de 10 años de experiencia. Ha tocado en los mejores clubs de Europa y trae lo mejor del DNB a Tenerife con sets enérgicos que van desde liquid hasta neurofunk.',
    genres: ['Drum and Bass', 'Jungle', 'Neurofunk'],
    instagram: 'https://instagram.com/dendivell',
    soundcloud: 'https://soundcloud.com',
    profileLink: '/djs/resident-1',
  },
  {
    name: 'Yayo Boys',
    role: 'Residente Not Found - Techno',
    image: '/1515-yayos.jpg',
    bio: 'Maestro del techno hipnótico y melodic techno. Sus sets son viajes sonoros que combinan melodías envolventes con beats contundentes, creando experiencias únicas en cada presentación.',
    genres: ['Techno'],
    instagram: 'https://instagram.com/yayoboys',
    soundcloud: 'https://soundcloud.com',
    profileLink: '/djs/resident-2',
  },
];

export default function DJsPage() {
  return (
    <div className='min-h-screen bg-background'>
      <Navigation />
      <main className='pt-16'>
        {/* Hero Section */}
        <section className='py-24 md:py-32 bg-gradient-to-b from-muted/50 to-background'>
          <div className='container mx-auto px-4'>
            <div className='text-center max-w-3xl mx-auto mb-16'>
              <div className='inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full mb-6'>
                <span className='text-primary font-bold text-sm tracking-wider'>
                  LA PREVIA GROUP
                </span>
              </div>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 text-balance'>
                NUESTROS DJs
              </h1>
              <p className='text-lg md:text-xl text-muted-foreground text-balance leading-relaxed'>
                Los artistas que hacen posible la mejor música electrónica en
                Tenerife. Conoce a los DJs residentes y artistas invitados que
                traen lo mejor del Drum and Bass, Techno y música electrónica a
                La Previa Group.
              </p>
            </div>
          </div>
        </section>

        {/* DJs Grid */}
        <section className='py-24'>
          <div className='container mx-auto px-4'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {djs.map((dj, index) => (
                <Card
                  key={index}
                  className='overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 group'
                >
                  <div className='relative h-80 overflow-hidden'>
                    <img
                      src={dj.image || '/placeholder.svg'}
                      alt={`${dj.name} - ${dj.role} en Tenerife`}
                      className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent' />
                    <div className='absolute bottom-4 left-4 right-4'>
                      <h3 className='text-2xl font-bold text-white mb-1'>
                        {dj.name}
                      </h3>
                      <p className='text-sm text-primary'>{dj.role}</p>
                    </div>
                  </div>

                  <div className='p-6 space-y-4'>
                    <p className='text-muted-foreground leading-relaxed text-sm'>
                      {dj.bio}
                    </p>

                    <div className='flex flex-wrap gap-2'>
                      {dj.genres.map((genre, idx) => (
                        <span
                          key={idx}
                          className='px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full'
                        >
                          {genre}
                        </span>
                      ))}
                    </div>

                    <div className='flex gap-2 pt-2'>
                      {dj.profileLink && (
                        <Button size='sm' className='flex-1' asChild>
                          <Link href={dj.profileLink}>Ver Perfil</Link>
                        </Button>
                      )}
                      <Button
                        size='sm'
                        variant='outline'
                        className={
                          dj.profileLink ? 'flex-1' : 'flex-1 bg-transparent'
                        }
                        asChild
                      >
                        <a
                          href={dj.instagram}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <Instagram className='h-4 w-4 mr-2' />
                          Instagram
                        </a>
                      </Button>
                      {!dj.profileLink && (
                        <Button
                          size='sm'
                          variant='outline'
                          className='flex-1 bg-transparent'
                          asChild
                        >
                          <a
                            href={dj.soundcloud}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <Music2 className='h-4 w-4 mr-2' />
                            Music
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-24 bg-muted/30'>
          <div className='container mx-auto px-4'>
            <div className='max-w-3xl mx-auto text-center'>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                ¿Eres DJ y Quieres Tocar con Nosotros?
              </h2>
              <p className='text-lg text-muted-foreground mb-8 leading-relaxed'>
                Si eres DJ de drum and bass, techno o música electrónica y
                quieres participar en alguno de nuestros eventos, nos encantaría
                conocerte. Envíanos tu propuesta y demos.
              </p>
              <Button size='lg' asChild>
                <a href='mailto:contact@lapreviagroup.com'>
                  <ExternalLink className='h-5 w-5 mr-2' />
                  Contáctanos
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
