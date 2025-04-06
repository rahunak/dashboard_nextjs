// 'use client'; //Mixpanel works on serverside and clientside. But how to import mixpanel into root layout?
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { HotJar } from './lib/hotjar';
// import { useEffect } from 'react';
// import { initMixpanel } from './lib/mixpanelClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  // title: 'Dashboard',
  title: {
    template: '%s |1cme',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  // useEffect(() => {
  //   initMixpanel(); // Initialize Mixpanel
  // }, []);

  return (
    <html lang="en">
      <head>
        <HotJar />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}