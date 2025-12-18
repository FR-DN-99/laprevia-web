import type { Metadata } from 'next';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Instagram,
  Music2,
  Facebook,
  ArrowLeft,
  Calendar,
  MapPin,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'DJ Residente 1 - 1515 Drum and Bass Tenerife | La Previa Group',
  description:
    'Conoce a nuestro DJ residente de 1515, especializado en drum and bass. Sesiones, fotos, videos y próximos eventos en Tenerife. DJ drum and bass Tenerife.',
  keywords:
    'dj drum and bass tenerife, 1515 tenerife, dj residente tenerife, drum and bass canarias, dnb dj tenerife, electronic music dj',
  openGraph: {
    title: 'DJ Residente 1 - 1515 Drum and Bass | La Previa Group',
    description: 'DJ residente especializado en drum and bass en Tenerife',
    type: 'profile',
  },
};

const photos = [
  {
    url: '/djs/dendivell-1.jpeg',
    alt: 'DJ Residente 1 tocando en 1515 Tenerife',
    event: 'The Launch - Drum and Bass Night',
  },
  {
    url: '/djs/dendivell-5.jpg',
    alt: 'Público disfrutando set de drum and bass en Tenerife',
    event: '1515 Anniversary 1',
  },
  {
    url: '/djs/dendivell-3.jpg',
    alt: 'DJ Residente 1 en sesión de estudio',
    event: '1515 Anniversary 2',
  },
  {
    url: '/djs/dendivell-4.jpg',
    alt: 'Performance en vivo de drum and bass',
    event: '1515 v3',
  },
];

const videos = [];

export default function ResidentDJ1Page() {
  return (
    <div className='min-h-screen bg-background'>
      <Navigation />
      <main className='pt-16'>
        {/* Hero Section */}
        <section className='py-24 md:py-32 bg-gradient-to-b from-muted/50 to-background relative overflow-hidden'>
          <div className="absolute inset-0 bg-[url('/djs/dendivell-4.jpg')] bg-cover bg-center opacity-10" />
          <div className='container mx-auto px-4 relative z-10'>
            <Link
              href='/djs'
              className='inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors'
            >
              <ArrowLeft className='h-4 w-4 mr-2' />
              Volver a DJs
            </Link>

            <div className='grid md:grid-cols-2 gap-12 items-center'>
              <div>
                <div className='inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full mb-6'>
                  <span className='text-primary font-bold text-sm tracking-wider'>
                    1515
                  </span>
                </div>
                <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6'>
                  Dendivell
                </h1>
                <div className='flex flex-wrap gap-2 mb-8'>
                  <span className='px-4 py-2 bg-primary/10 text-primary font-medium rounded-full'>
                    Drum and Bass
                  </span>
                  <span className='px-4 py-2 bg-primary/10 text-primary font-medium rounded-full'>
                    Jump Up
                  </span>
                  <span className='px-4 py-2 bg-primary/10 text-primary font-medium rounded-full'>
                    Neurofunk
                  </span>
                </div>
                <p className='text-lg text-muted-foreground leading-relaxed mb-8'>
                  <strong>DendiVell</strong> es un DJ de Drum & Bass residente
                  en Tenerife que inicia su carrera profesional a finales de
                  2023. Influenciado por artistas como Metrik, A.M.C, Chase &
                  Status, Mefjus o Camo & Krooked, su sonido recorre distintos
                  subgéneros del Drum & Bass, desde Jungle y Jump Up hasta
                  Dancefloor y Neurofunk.
                </p>
                <p className='text-lg text-muted-foreground leading-relaxed mb-8'>
                  Forma parte de <strong>La Previa Group</strong>, colectivo
                  referente de la escena local, donde además de ser
                  <strong>residente principal de 1515</strong>, participa
                  activamente en la organización de los eventos. Ha compartido
                  cartel con artistas nacionales e internacionales, incluyendo
                  su participación en el{' '}
                  <strong>
                    cierre del After Party del Festival Return 2 Dance by Chase
                    & Status.
                  </strong>
                </p>
                <p className='text-lg text-muted-foreground leading-relaxed mb-8'>
                  Su propuesta se define por sesiones de alta energía, una
                  técnica <strong>avanzada a 3 y 4 canales</strong> y una fuerte
                  conexión con el público, lo que le convierte en un DJ versátil
                  y con gran capacidad de lectura de pista.
                </p>
                <div className='flex flex-wrap gap-4'>
                  <Button size='lg' asChild>
                    <a
                      href='https://instagram.com'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Instagram className='h-5 w-5 mr-2' />
                      Instagram
                    </a>
                  </Button>
                  <Button size='lg' variant='outline' asChild>
                    <a
                      href='https://soundcloud.com'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Music2 className='h-5 w-5 mr-2' />
                      SoundCloud
                    </a>
                  </Button>
                  <Button size='lg' variant='outline' asChild>
                    <a
                      href='https://facebook.com'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Facebook className='h-5 w-5 mr-2' />
                      Facebook
                    </a>
                  </Button>
                </div>
              </div>

              <div className='relative'>
                <div className='aspect-square rounded-2xl overflow-hidden border-4 border-primary/20'>
                  <img
                    src='/djs/dendivell-2.jpg'
                    alt='DJ Residente 1 - Drum and Bass Tenerife'
                    className='w-full h-full object-cover'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className='py-24 bg-muted/30'>
          <div className='container mx-auto px-4'>
            <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
              Galería de Fotos
            </h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
              {photos.map((photo, index) => (
                <Card
                  key={index}
                  className='overflow-hidden group cursor-pointer'
                >
                  <div className='relative aspect-square'>
                    <img
                      src={photo.url || '/placeholder.svg'}
                      alt={photo.alt}
                      className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                      <div className='absolute bottom-4 left-4 right-4'>
                        <p className='text-white font-semibold text-sm'>
                          {photo.event}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {/* Videos Section */}
        <section className='py-24'>
          <div className='container mx-auto px-4'>
            <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
              Videos
            </h2>
            <div className='grid md:grid-cols-3 gap-8'>
              <div className='grid md:grid-cols-3 gap-8'>
                {videos.length === 0 ? (
                  <div className='col-span-full text-center text-muted-foreground'>
                    No hay videos subidos
                  </div>
                ) : (
                  videos.map((video, index) => (
                    <Card
                      key={index}
                      className='overflow-hidden group hover:border-primary transition-all'
                    >
                      <div className='relative aspect-video'>
                        {video.youtubeId ? (
                          <iframe
                            width='100%'
                            height='100%'
                            src={video.youtubeId}
                            title={video.title}
                            frameBorder='0'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen
                            className='absolute inset-0'
                          />
                        ) : (
                          <div className='absolute inset-0 bg-muted flex items-center justify-center'>
                            <p className='text-muted-foreground text-sm'>
                              YouTube video ID needed
                            </p>
                          </div>
                        )}
                      </div>
                      <div className='p-4'>
                        <h3 className='font-semibold text-lg'>{video.title}</h3>
                      </div>
                    </Card>
                  ))
                )}
              </div>
            </div>
          </div>
        </section>
        {/* SoundCloud Section */}
        <section className='py-24'>
          <div className='container mx-auto px-4'>
            <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
              Sesiones en SoundCloud
            </h2>
            <div className='max-w-4xl mx-auto space-y-6'>
              <Card className='p-6'>
                <div className='w-full'>
                  <iframe
                    width='100%'
                    height='166'
                    scrolling='no'
                    frameBorder={0}
                    allow='autoplay'
                    src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2060678368&color=%236c7474&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'
                  />

                  <div
                    style={{
                      fontSize: '10px',
                      color: '#cccccc',
                      lineBreak: 'anywhere',
                      wordBreak: 'normal',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                      fontFamily:
                        'Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif',
                      fontWeight: 100,
                    }}
                  >
                    <a
                      href='https://soundcloud.com/dendivell'
                      title='Dendivell'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{ color: '#cccccc', textDecoration: 'none' }}
                    >
                      Dendivell
                    </a>{' '}
                    ·{' '}
                    <a
                      href='https://soundcloud.com/dendivell/session3'
                      title='Session #3'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{ color: '#cccccc', textDecoration: 'none' }}
                    >
                      Session #3
                    </a>
                  </div>
                </div>
                <h3 className='text-xl font-bold mb-2 mt-4'>Session #3</h3>
                <p className='text-muted-foreground'></p>
              </Card>
              <Card className='p-6'>
                <div className='w-full'>
                  <iframe
                    width='100%'
                    height='166'
                    scrolling='no'
                    frameBorder={0}
                    allow='autoplay'
                    src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1802381928&color=%236c7474&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'
                  />

                  <div
                    style={{
                      fontSize: '10px',
                      color: '#cccccc',
                      lineBreak: 'anywhere',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                      fontFamily:
                        'Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif',
                      fontWeight: 100,
                    }}
                  >
                    <a
                      href='https://soundcloud.com/dendivell'
                      title='Dendivell'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{ color: '#cccccc', textDecoration: 'none' }}
                    >
                      Dendivell
                    </a>{' '}
                    ·{' '}
                    <a
                      href='https://soundcloud.com/dendivell/session2'
                      title='Session #2 DendiVell'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{ color: '#cccccc', textDecoration: 'none' }}
                    >
                      Session #2 DendiVell
                    </a>
                  </div>
                </div>
                <h3 className='text-xl font-bold mb-2 mt-4'>
                  Session #2 DendiVell
                </h3>
                <p className='text-muted-foreground'></p>
              </Card>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className='py-24 bg-gradient-to-b from-background to-muted/30'>
          <div className='container mx-auto px-4'>
            <div className='max-w-3xl mx-auto text-center'>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                Próxima Aparición
              </h2>
              <p className='text-lg text-muted-foreground mb-8 leading-relaxed'>
                Únete a nosotros en el próximo evento de 1515 para vivir una
                experiencia de drum and bass inolvidable en Tenerife.
              </p>
              <Button size='lg' asChild>
                <Link href='/drum-and-bass-tenerife'>
                  Ver Próximo Evento 1515
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
