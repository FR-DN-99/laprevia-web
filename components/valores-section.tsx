'use client';

import { Card } from '@/components/ui/card';
import { useLanguage } from '@/lib/language-context';
import { getTranslation } from '@/lib/translations';

export function ValoresSection() {
  const { language } = useLanguage();
  const t = getTranslation(language);

  // Valores definidos en tu objeto de traducciones
  const valores = [
    {
      title: t.valores.value1Title,
      text: t.valores.value1Text,
    },
    {
      title: t.valores.value2Title,
      text: t.valores.value2Text,
    },
    {
      title: t.valores.value3Title,
      text: t.valores.value3Text,
    },
    {
      title: t.valores.value4Title,
      text: t.valores.value4Text,
    },
    {
      title: t.valores.value5Title,
      text: t.valores.value5Text,
    },
  ];

  return (
    <section id='valores' className='py-24 md:py-32 bg-muted/30'>
      <div className='container mx-auto px-4'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Imagen */}
          <div className='relative w-full h-full min-h-[400px] lg:min-h-[520px] rounded-xl overflow-hidden'>
            <img
              src='/about-valores.jpg'
              alt='La Previa Group'
              className='absolute inset-0 w-full h-full object-cover'
            />
          </div>

          {/* Texto */}
          <div className='space-y-6'>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-balance'>
              {t.valores.title}
            </h2>

            <div className='space-y-4 text-lg leading-relaxed text-muted-foreground'>
              {valores.map((valor, index) => (
                <Card key={index} className='bg-card border-border gap-0'>
                  <h3 className='text-xl font-bold text-card-foreground'>
                    {valor.title}
                  </h3>
                  <p className='text-muted-foreground'>{valor.text}</p>
                </Card>
              ))}
            </div>

            <div className='space-y-6'>
              <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-balance'>
                {t.objetivos.title}
              </h2>

              <div className='space-y-4 text-lg leading-relaxed text-muted-foreground'>
                <p>{t.objetivos.paragraph}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
