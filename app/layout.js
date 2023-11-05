import { Open_Sans } from 'next/font/google';
import './globals.css';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'ARTLAB - SKYLAB',
  description:
    'ARTLAB, Yıldız Teknik Üniversitesi SKY LAB: Bilgisayar Bilimleri Kulübü bünyesinde düzenlediğimiz ve yapay zeka alanında uzman kişilerle katılımcılarımızı bir araya getirmeyi hedeflediğimiz bir seminer ve fuaye etkinliğidir.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`debug-screens bg-primary-dark ${openSans.className}`}>
        {children}
      </body>
    </html>
  );
}
