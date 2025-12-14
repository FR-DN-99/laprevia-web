'use client';

import { Card } from '@/components/ui/card';
import { Users, MapPin, Trophy, Heart } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { getTranslation } from '@/lib/translations';

export function SomosSection() {
  const { language } = useLanguage();
  const t = getTranslation(language);

  const stats = [
    { icon: Users, label: t.about.stat1, value: '100+' },
    { icon: MapPin, label: t.about.stat2, value: t.about.stat2Value },
    { icon: Trophy, label: t.about.stat3, value: '5+' },
    { icon: Heart, label: t.about.stat4, value: '10K+' },
  ];

  return (
    <section id='nosotros' className='py-24 md:py-32 bg-muted/30'>
      <div className='container mx-auto px-4'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-balance'>
              {t.about.title}
            </h2>

            <div className='space-y-4 text-lg leading-relaxed text-muted-foreground'>
              <p>
                <strong className='text-foreground'>La Previa Group</strong>{' '}
                {t.about.paragraph1}
              </p>

              <p>{t.about.paragraph2}</p>

              <p>{t.about.paragraph3}</p>
            </div>
          </div>

          <div className='relative w-full h-full min-h-[400px] lg:min-h-[520px] rounded-xl overflow-hidden'>
            <img
              src='/about-somos.jpg'
              alt='La Previa Group'
              className='absolute inset-0 w-full h-full object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
