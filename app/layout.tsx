
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { HotJar } from './lib/hotjar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <HotJar/>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}