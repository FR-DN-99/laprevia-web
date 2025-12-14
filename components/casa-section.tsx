'use client';

import { Card } from '@/components/ui/card';
import { Users, MapPin, Trophy, Heart } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { getTranslation } from '@/lib/translations';

export function CasaSection() {
  const { language } = useLanguage();
  const t = getTranslation(language);

  return (
    <section id='casa' className='py-24 md:py-32 bg-muted/30'>
      <div className='container mx-auto px-4'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-balance'>
              {t.casa.title}
            </h2>
            <div className='space-y-4 text-lg leading-relaxed text-muted-foreground'>
              <p>{t.casa.paragraph}</p>
            </div>
          </div>
          <div className='relative w-full h-full min-h-[400px] lg:min-h-[520px] rounded-xl overflow-hidden'>
            <img
              src='/notfound-principal.jpg'
              alt='La Previa Group'
              className='absolute inset-0 w-full h-full object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
