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
  title: 'DJ Residente 2 - Not Found Techno Tenerife | La Previa Group',
  description:
    'Conoce a nuestro DJ residente de Not Found, especializado en techno. Sesiones, fotos, videos y próximos eventos en Tenerife. DJ techno Tenerife.',
  keywords:
    'dj techno tenerife, not found tenerife, dj residente techno, techno canarias, melodic techno dj, industrial techno tenerife',
  openGraph: {
    title: 'DJ Residente 2 - Not Found Techno | La Previa Group',
    description: 'DJ residente especializado en techno en Tenerife',
    type: 'profile',
  },
};

const photos = [
  {
    url: '/djs/yayos-3.jpeg',
    alt: 'DJ Residente 2 tocando en Not Found Tenerife',
    event: 'Not Found - Techno Night',
  },
  {
    url: '/djs/yayos-4.jpg',
    alt: 'Público en evento de techno en Tenerife',
    event: 'Not Found Marathon',
  },
  {
    url: '/djs/yayos-1.jpeg',
    alt: 'Performance de techno underground en Tenerife',
    event: 'Not Found Industrial Session',
  },
  {
    url: '/djs/yayos-5.jpg',
    alt: 'DJ Residente 2 en producción de techno',
    event: 'Studio Production',
  },
];

const videos = [
  {
    title: 'La Previa Sessions #1',
    youtubeId: 'https://www.youtube.com/embed/wTVhR0ULpe8?si=_cHVUnbB-UDWDQeM', // Add your YouTube video ID here
  },
  {
    title: 'La Previa Sessions #2',
    youtubeId: 'https://www.youtube.com/embed/ANyhiTWj1rI?si=UanuCVlohjWG7uLp', // Add your YouTube video ID here
  },
];

const soundcloudSet = [
  {
    title: 'Not Found - Melodic Techno Journey ',
    thumbnail: '/techno-dj-mixing-tenerife-club.jpg',
    duration: '3:00:00',
  },
];
export default function ResidentDJ2Page() {
  return (
    <div className='min-h-screen bg-background'>
      <Navigation />
      <main className='pt-16'>
        {/* Hero Section */}
        <section className='py-24 md:py-32 bg-gradient-to-b from-muted/50 to-background relative overflow-hidden'>
          <div className="absolute inset-0 bg-[url('/djs/yayos-2.jpeg')] bg-cover bg-center opacity-10" />
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
                    NOT FOUND
                  </span>
                </div>
                <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6'>
                  YAYO BOYS
                </h1>
                <div className='flex flex-wrap gap-2 mb-8'>
                  <span className='px-4 py-2 bg-primary/10 text-primary font-medium rounded-full'>
                    Techno
                  </span>
                  <span className='px-4 py-2 bg-primary/10 text-primary font-medium rounded-full'>
                    Hard Groove
                  </span>
                  <span className='px-4 py-2 bg-primary/10 text-primary font-medium rounded-full'>
                    House
                  </span>
                </div>
                <p className='text-lg text-muted-foreground leading-relaxed mb-8'>
                  <strong>Yayo Boys</strong> es un dúo emergente de la escena
                  electrónica con base en Tenerife, conocido por transformar
                  cada set en un viaje sonoro envolvente. Desde su debut en
                  <strong>Seeds (Crownest Club)</strong>, han sido parte de
                  eventos como <strong>Re-Play</strong>, compartiendo cartel con
                  <strong>Tony Vargas (ElRow)</strong>, y del colectivo Secret
                  Society, donde han coincidido con artistas como Julian Fijma,
                  Rich NXT, Kepler, Tristan Da Cunha y Josh Baker.
                </p>
                <p className='text-lg text-muted-foreground leading-relaxed mb-8'>
                  También han actuado en espacios como{' '}
                  <strong>Papagayo (El Nido), El Búho y Gekko</strong>.
                  Actualmente forman parte de <strong>La Previa Group</strong>,
                  promotora con la que desarrollan sus proyectos{' '}
                  <strong>Not Found (techno)</strong> y su propuesta enfocada al
                  Drum and Bass, donde han compartido cartel con{' '}
                  <strong>
                    David Mallada (Aquasella) y Anabel Arroyo (Laster/Fold).
                  </strong>
                </p>
                <p className='text-lg text-muted-foreground leading-relaxed mb-8'>
                  Además, participan activamente en la organización de{' '}
                  <strong>Aquasella On The Road</strong>. Más que DJs, Yayo Boys
                  son narradores sonoros: cada set está diseñado para emocionar,
                  conectar y dejar huella.
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
                    src='/djs/yayos-2.jpeg'
                    alt='DJ Residente 2 - Techno Tenerife'
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
              {videos.map((video, index) => (
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
              ))}
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
                    height='300'
                    scrolling='no'
                    frameBorder={0}
                    allow='autoplay'
                    src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1936629746&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
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
                      href='https://soundcloud.com/la-previa-group'
                      title='La Previa Group'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{ color: '#cccccc', textDecoration: 'none' }}
                    >
                      La Previa Group
                    </a>{' '}
                    ·{' '}
                    <a
                      href='https://soundcloud.com/la-previa-group/la-previa-sessions-001-ale-mesa-x-not-foundwav'
                      title='La Previa Sessions #001 - Ale Mesa x NOT FOUND.WAV'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{ color: '#cccccc', textDecoration: 'none' }}
                    >
                      La Previa Sessions #001 - Ale Mesa x NOT FOUND
                    </a>
                  </div>
                </div>
                <h3 className='text-xl font-bold mb-2 mt-4'>
                  Ale Mesa x La Previa Sessions #001
                </h3>
                <p className='text-muted-foreground'>
                  Primera edición de La Previa Sessions donde Ale Mesa (Yayo
                  boys) trae un set con mucho groove.
                </p>
              </Card>
              <Card className='p-6'>
                <iframe
                  width='100%'
                  height='300'
                  scrolling='no'
                  frameBorder={0}
                  allow='autoplay'
                  src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2180603583&color=%236c7474&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
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
                    href='https://soundcloud.com/la-previa-group'
                    title='La Previa Group'
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{ color: '#cccccc', textDecoration: 'none' }}
                  >
                    La Previa Group
                  </a>{' '}
                  ·{' '}
                  <a
                    href='https://soundcloud.com/la-previa-group/la-previa-sessions-002-angel-angelov-yayo-boys'
                    title='La Previa Sessions #002 - Angel Angelov (Yayo Boys)'
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{ color: '#cccccc', textDecoration: 'none' }}
                  >
                    La Previa Sessions #002 - Angel Angelov (Yayo Boys)
                  </a>
                </div>
                <h3 className='text-xl font-bold mb-2 mt-4'>
                  Angel Angelov x La Previa Sessions #002
                </h3>
                <p className='text-muted-foreground'>
                  Segunda edición de La Previa Sessions donde Angel Angelov
                  (Yayo boys) trae un set hipnótico y ritmico.
                </p>
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
                Únete a nosotros en el próximo evento de Not Found para vivir
                una experiencia de techno inolvidable en Tenerife.
              </p>
              <Button size='lg' asChild>
                <Link href='/techno-tenerife'>
                  Ver Próximo Evento Not Found
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
