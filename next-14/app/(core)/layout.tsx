import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang='en'>
      <body className={inter.className + " " + "bg-slate-50"}>
        <Header />
        <main className='flex justify-center'>
          <section className='w-full max-w-screen-xl'>{children}</section>
        </main>
        <Footer />
      </body>
    </html>
  );
}
