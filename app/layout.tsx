'use client';

import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { HotJar } from './lib/hotjar';
import { useEffect } from 'react';
import { initMixpanel } from './lib/mixpanelClient';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  useEffect(() => {
    initMixpanel(); // Initialize Mixpanel
  }, []);

  return (
    <html lang="en">
      <head>
        <HotJar />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}