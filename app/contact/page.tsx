'use client';

import type React from 'react';
import { useState } from 'react';
import { Mail, Instagram, Music, Youtube } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { useLanguage } from '@/lib/language-context';
import { getTranslation } from '@/lib/translations';
import { Navigation } from '@/components/navigation';

export default function ContactPage() {
  const { language } = useLanguage();
  const t = getTranslation(language);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    company: '', // honeypot
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('Error sending message');
      }

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        company: '',
      });
    } catch (err) {
      setError(t.contactPage.formError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <title>
        {t.contactPage.title} - La Previa Group | Contact Tenerife Events
      </title>
      <meta
        name='description'
        content='Contact La Previa Group for bookings, collaborations and press. Drum and Bass, Techno events in Tenerife.'
      />
      <meta
        name='keywords'
        content='contact tenerife events, booking tenerife dj, drum and bass booking tenerife, techno booking tenerife, contacto fiestas tenerife'
      />

      <Navigation />

      {/* Background */}
      <div className='fixed inset-0 z-0'>
        <div
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{ backgroundImage: "url('/notfound-proximamente.jpeg')" }}
        />
        <div className='absolute inset-0 bg-background/90 backdrop-blur-sm' />
      </div>

      <main className='relative z-10 min-h-screen pt-24 pb-16'>
        <div className='container mx-auto px-4'>
          {/* Header */}
          <div className='max-w-3xl mx-auto text-center mb-12'>
            <h1 className='text-4xl md:text-6xl font-bold mb-4 text-balance'>
              {t.contactPage.title}
            </h1>
            <p className='text-lg text-muted-foreground text-balance'>
              {t.contactPage.subtitle}
            </p>
          </div>

          <div className='grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto'>
            {/* FORM */}
            <Card className='bg-[#1b1b1b] backdrop-blur-md border-border'>
              <CardContent className='p-6 md:p-8'>
                <h2 className='text-2xl font-bold mb-6'>
                  {t.contactPage.formTitle}
                </h2>

                <form onSubmit={handleSubmit} className='space-y-4'>
                  {/* Honeypot */}
                  <input
                    type='text'
                    name='company'
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    tabIndex={-1}
                    autoComplete='off'
                    className='hidden'
                  />

                  <div>
                    <label
                      htmlFor='name'
                      className='block text-sm font-medium mb-2'
                    >
                      {t.contactPage.formName}
                    </label>
                    <Input
                      id='name'
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder={t.contactPage.formNamePlaceholder}
                      required
                      className='bg-muted/80 border-border focus:bg-muted'
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium mb-2'
                    >
                      {t.contactPage.formEmail}
                    </label>
                    <Input
                      id='email'
                      type='email'
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder={t.contactPage.formEmailPlaceholder}
                      required
                      className='bg-muted/80 border-border focus:bg-muted'
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='subject'
                      className='block text-sm font-medium mb-2'
                    >
                      {t.contactPage.formSubject}
                    </label>
                    <Select
                      value={formData.subject}
                      onValueChange={(value) =>
                        setFormData({ ...formData, subject: value })
                      }
                      required
                    >
                      <SelectTrigger>
                        <SelectValue
                          placeholder={t.contactPage.formSubjectPlaceholder}
                        />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectItem value={t.contactPage.formSubjectBooking}>
                          {t.contactPage.formSubjectBooking}
                        </SelectItem>
                        <SelectItem
                          value={t.contactPage.formSubjectCollaboration}
                        >
                          {t.contactPage.formSubjectCollaboration}
                        </SelectItem>
                        <SelectItem value={t.contactPage.formSubjectPress}>
                          {t.contactPage.formSubjectPress}
                        </SelectItem>
                        <SelectItem value={t.contactPage.formSubjectOther}>
                          {t.contactPage.formSubjectOther}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label
                      htmlFor='message'
                      className='block text-sm font-medium mb-2'
                    >
                      {t.contactPage.formMessage}
                    </label>
                    <Textarea
                      id='message'
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder={t.contactPage.formMessagePlaceholder}
                      required
                      className='bg-muted/80 border-border resize-none focus:bg-muted'
                    />
                  </div>

                  <Button
                    type='submit'
                    size='lg'
                    className='w-full'
                    disabled={loading}
                  >
                    {loading
                      ? t.contactPage.formSending
                      : t.contactPage.formSubmit}
                  </Button>

                  {success && (
                    <p className='text-sm text-green-500 mt-3'>
                      {t.contactPage.formSuccess}
                    </p>
                  )}

                  {error && (
                    <p className='text-sm text-red-500 mt-3'>{error}</p>
                  )}
                </form>
              </CardContent>
            </Card>

            {/* INFO */}
            <div className='space-y-6'>
              <Card className='bg-[#1b1b1b] backdrop-blur-md border-border'>
                <CardContent className='p-6 md:p-8'>
                  <h2 className='text-2xl font-bold mb-4'>
                    {t.contactPage.infoTitle}
                  </h2>
                  <p className='text-muted-foreground mb-6'>
                    {t.contactPage.infoDescription}
                  </p>

                  <div className='mb-6'>
                    <h3 className='text-sm font-semibold mb-2 text-muted-foreground'>
                      {t.contactPage.email}
                    </h3>
                    <a
                      href='mailto:lapreviagroup@gmail.com'
                      className='flex items-center gap-2 text-lg font-medium hover:text-primary'
                    >
                      <Mail className='h-5 w-5' />
                      lapreviagroup@gmail.com
                    </a>
                  </div>

                  <div>
                    <h3 className='text-sm font-semibold mb-4 text-muted-foreground'>
                      {t.contactPage.followUs}
                    </h3>
                    <div className='flex flex-col gap-3'>
                      <a
                        href='https://instagram.com/lapreviagroup'
                        target='_blank'
                        className='flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-primary/20'
                      >
                        <Instagram className='h-5 w-5' />
                        @lapreviagroup
                      </a>
                      <a
                        href='https://soundcloud.com/lapreviagroup'
                        target='_blank'
                        className='flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-primary/20'
                      >
                        <Music className='h-5 w-5' />
                        SoundCloud
                      </a>
                      <a
                        href='https://youtube.com/@lapreviagroup'
                        target='_blank'
                        className='flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-primary/20'
                      >
                        <Youtube className='h-5 w-5' />
                        YouTube
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className='bg-[#1b1b1b] backdrop-blur-md border-border'>
                <CardContent className='p-6'>
                  <h2 className='text-2xl font-bold mb-4'>
                    {t.contactPage.presskit}
                  </h2>
                  <Button variant='outline' className='w-full' asChild>
                    <a href='/presskit.pdf' download>
                      {t.contactPage.presskit}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
