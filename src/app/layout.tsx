import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';

import './globals.css';

const font = Urbanist({ subsets: ['latin'] });

import { ModalProvider } from '@/providers/modal';
import { ToastProvider } from '@/providers/toast';

import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';

export const metadata: Metadata = {
  title: 'STORE: De Tudo Um Pouco',
  description:
    'Confira os melhores preços e descontos para seus produtos favoritos',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div className="h-screen flex flex-col">
          <ToastProvider />

          <ModalProvider />

          <Navbar />

          <main className="flex-1">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
