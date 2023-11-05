import { Open_Sans, Bebas_Neue } from 'next/font/google';
import './globals.css';

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--open-sans',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata = {
  title: 'ARTLAB - SKYLAB',
  description:
    'ARTLAB, Yıldız Teknik Üniversitesi SKY LAB: Bilgisayar Bilimleri Kulübü bünyesinde düzenlediğimiz ve yapay zeka alanında uzman kişilerle katılımcılarımızı bir araya getirmeyi hedeflediğimiz bir seminer ve fuaye etkinliğidir.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`debug-screens bg-primary-dark ${openSans.className} `}>
        {children}
      </body>
    </html>
  );
}
