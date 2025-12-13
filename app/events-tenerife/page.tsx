import type { Metadata } from 'next';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, Eye } from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Eventos Realizados - La Previa Group | Fiestas de Música Electrónica en Tenerife',
  description:
    'Crónica de los mejores eventos de drum and bass y techno realizados por La Previa Group en Tenerife. Revive las noches más memorables de 1515 y Not Found.',
  keywords:
    'eventos tenerife, fiestas tenerife, drum and bass events, techno events, past events tenerife, electronic music history, party chronicle',
  openGraph: {
    title: 'Eventos Realizados - La Previa Group Tenerife',
    description: 'Revive las mejores fiestas de música electrónica en Tenerife',
    type: 'website',
  },
};

const pastEvents = [
  {
    title: '1515 - Halloween',
    date: '31 octubre 2025',
    location: 'Papagayo, Tenerife',
    attendees: '200',
    type: 'Drum and Bass',
    description:
      'Una noche épica de Halloween con los mejores DJs nacionales, encabezados por Bala de BCN. El sonido retumbó hasta el amanecer en esta edición especial de 1515, dejando una huella imborrable en la escena DNB de Tenerife.',
    image: '/1515-publico-pista.jpg',
    highlights: ['Line up nacional', 'Gran producción visual', 'Sold out'],
  },
  {
    title: 'Not Found - Cierre Temporada',
    date: '05 de diciembre 2025',
    location: 'Underground Venue, Tenerife',
    attendees: '200',
    type: 'Techno',
    description:
      '12 horas ininterrumpidas de techno puro. Desde el industrial más oscuro hasta el melodic más envolvente, Not Found demostró por qué es la referencia del techno en Tenerife con esta sesión marathon que quedará en la memoria de todos los asistentes.',
    image: '/notfound-logo-anabel.jpg',
    highlights: ['Line up nacional', 'Gran producción visual', 'Sold out'],
  },
  {
    title: 'Magua - Summer Vibes',
    date: '30 Agosto 2025',
    location: 'OA Beach Club, Tenerife',
    attendees: '200',
    type: 'House, Ukg, Minimal tech',
    description:
      'Una noche épica de Halloween con los mejores DJs nacionales, encabezados por Bala de BCN. El sonido retumbó hasta el amanecer en esta edición especial de 1515, dejando una huella imborrable en la escena DNB de Tenerife.',
    image: '/1515-publico-pista.jpg',
    highlights: ['Line up nacional', 'Gran producción visual', 'Sold out'],
  },
  {
    title: '1515 - Aniversario',
    date: '31 octubre 2025',
    location: 'Papagayo, Tenerife',
    attendees: '200',
    type: 'Drum and Bass',
    description:
      'Una noche épica de Halloween con los mejores DJs nacionales, encabezados por Bala de BCN. El sonido retumbó hasta el amanecer en esta edición especial de 1515, dejando una huella imborrable en la escena DNB de Tenerife.',
    image: '/1515-publico-pista.jpg',
    highlights: ['Line up nacional', 'Gran producción visual', 'Sold out'],
  },
  {
    title: 'Not Found - Aquasella',
    date: '13 de junio 2025',
    location: 'Papagayo, Tenerife',
    attendees: '200',
    type: 'Techno',
    description:
      '12 horas ininterrumpidas de techno puro. Desde el industrial más oscuro hasta el melodic más envolvente, Not Found demostró por qué es la referencia del techno en Tenerife con esta sesión marathon que quedará en la memoria de todos los asistentes.',
    image: '/notfound-logo-anabel.jpg',
    highlights: ['Line up nacional', 'Gran producción visual', 'Sold out'],
  },
  {
    title: 'Not Found - Anabel Arroyo',
    date: '02 de febrero 2025',
    location: 'Papagayo, Tenerife',
    attendees: '200',
    type: 'Techno',
    description:
      '12 horas ininterrumpidas de techno puro. Desde el industrial más oscuro hasta el melodic más envolvente, Not Found demostró por qué es la referencia del techno en Tenerife con esta sesión marathon que quedará en la memoria de todos los asistentes.',
    image: '/notfound-logo-anabel.jpg',
    highlights: ['Line up nacional', 'Gran producción visual', 'Sold out'],
  },
  {
    title: 'Not Found - David Mallada',
    date: '31 de octubre 2024',
    location: 'Papagayo, Tenerife',
    attendees: '200',
    type: 'Techno',
    description:
      '12 horas ininterrumpidas de techno puro. Desde el industrial más oscuro hasta el melodic más envolvente, Not Found demostró por qué es la referencia del techno en Tenerife con esta sesión marathon que quedará en la memoria de todos los asistentes.',
    image: '/notfound-logo-anabel.jpg',
    highlights: ['Line up nacional', 'Gran producción visual', 'Sold out'],
  },
  {
    title: '1515 - RCKT',
    date: '27 septiembre 2024',
    location: 'Papagayo, Tenerife',
    attendees: '200',
    type: 'Drum and Bass',
    description:
      'Una noche épica de Halloween con los mejores DJs nacionales, encabezados por Bala de BCN. El sonido retumbó hasta el amanecer en esta edición especial de 1515, dejando una huella imborrable en la escena DNB de Tenerife.',
    image: '/1515-publico-pista.jpg',
    highlights: ['Line up nacional', 'Gran producción visual', 'Sold out'],
  },
  {
    title: 'Magua - Summer Vibes',
    date: '30 Agosto 2025',
    location: 'OA Beach Club, Tenerife',
    attendees: '200',
    type: 'House, Ukg, Minimal tech',
    description:
      'Una noche épica de Halloween con los mejores DJs nacionales, encabezados por Bala de BCN. El sonido retumbó hasta el amanecer en esta edición especial de 1515, dejando una huella imborrable en la escena DNB de Tenerife.',
    image: '/1515-publico-pista.jpg',
    highlights: ['Line up nacional', 'Gran producción visual', 'Sold out'],
  },
  {
    title: '1515 - Andrea Alvarez',
    date: '24 mayo 2024',
    location: 'Papagayo, Tenerife',
    attendees: '200',
    type: 'Drum and Bass',
    description:
      'Una noche épica de Halloween con los mejores DJs nacionales, encabezados por Bala de BCN. El sonido retumbó hasta el amanecer en esta edición especial de 1515, dejando una huella imborrable en la escena DNB de Tenerife.',
    image: '/1515-publico-pista.jpg',
    highlights: ['Line up nacional', 'Gran producción visual', 'Sold out'],
  },
  {
    title: '1515 - Dope Ammo',
    date: '22 marzo 2024',
    location: 'Papagayo, Tenerife',
    attendees: '200',
    type: 'Drum and Bass',
    description:
      'Una noche épica de Halloween con los mejores DJs nacionales, encabezados por Bala de BCN. El sonido retumbó hasta el amanecer en esta edición especial de 1515, dejando una huella imborrable en la escena DNB de Tenerife.',
    image: '/1515-publico-pista.jpg',
    highlights: ['Line up nacional', 'Gran producción visual', 'Sold out'],
  },
];

export default function EventsPage() {
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
                EVENTOS REALIZADOS
              </h1>
              <p className='text-lg md:text-xl text-muted-foreground text-balance leading-relaxed'>
                Una crónica de las mejores fiestas de música electrónica en
                Tenerife. Desde noches épicas de drum and bass hasta sesiones de
                techno inolvidables, revive los momentos más memorables de 1515
                y Not Found.
              </p>
            </div>
          </div>
        </section>

        {/* Events Timeline */}
        <section className='py-24'>
          <div className='container mx-auto px-4'>
            <div className='space-y-16'>
              {pastEvents.map((event, index) => (
                <Card
                  key={index}
                  className='overflow-hidden bg-card border-border hover:border-primary transition-all duration-300'
                >
                  <div className='grid md:grid-cols-2 gap-0'>
                    <div className='relative h-64 md:h-auto'>
                      <img
                        src={event.image || '/placeholder.svg'}
                        alt={`${event.title} - ${event.type} event in Tenerife`}
                        className='w-full h-full object-cover'
                      />
                      <div className='absolute top-4 left-4'>
                        <span className='px-3 py-1 bg-primary/90 backdrop-blur-sm text-white text-xs font-bold rounded-full'>
                          {event.type}
                        </span>
                      </div>
                    </div>

                    <div className='p-8 md:p-12 flex flex-col justify-between'>
                      <div className='space-y-6'>
                        <div>
                          <h2 className='text-3xl md:text-4xl font-bold mb-4 text-balance'>
                            {event.title}
                          </h2>
                          <div className='flex flex-wrap gap-4 text-sm text-muted-foreground'>
                            <div className='flex items-center gap-2'>
                              <Calendar className='h-4 w-4 text-primary' />
                              {event.date}
                            </div>
                            <div className='flex items-center gap-2'>
                              <MapPin className='h-4 w-4 text-primary' />
                              {event.location}
                            </div>
                            <div className='flex items-center gap-2'>
                              <Users className='h-4 w-4 text-primary' />
                              {event.attendees} asistentes
                            </div>
                          </div>
                        </div>

                        <p className='text-muted-foreground leading-relaxed'>
                          {event.description}
                        </p>

                        <div className='space-y-2'>
                          <h3 className='font-semibold text-foreground'>
                            Highlights:
                          </h3>
                          <ul className='space-y-2'>
                            {event.highlights.map((highlight, idx) => (
                              <li
                                key={idx}
                                className='flex items-start gap-2 text-sm text-muted-foreground'
                              >
                                <div className='w-1.5 h-1.5 rounded-full bg-primary mt-2' />
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className='pt-6'>
                        <Button
                          variant='outline'
                          className='w-full sm:w-auto bg-transparent'
                        >
                          <Eye className='h-4 w-4 mr-2' />
                          Ver Fotos del Evento
                        </Button>
                      </div>
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
                No Te Pierdas los Próximos Eventos
              </h2>
              <p className='text-lg text-muted-foreground mb-8 leading-relaxed'>
                Síguenos en redes sociales para estar al día con los próximos
                eventos de 1515 y Not Found. Las mejores fiestas de drum and
                bass y techno en Tenerife te esperan.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Button size='lg' asChild>
                  <a
                    href='https://instagram.com/lapreviagroup'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Síguenos en Instagram
                  </a>
                </Button>
                <Button size='lg' variant='outline' asChild>
                  <a href='/about'>Conocer Más Sobre Nosotros</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
