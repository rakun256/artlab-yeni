import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import FAQ from '@/components/FAQ';
import Speakers from '@/components/Speakers';
import Sponsors from '@/components/Sponsors';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <FAQ />
      <Speakers />
      <Sponsors />
      <Footer />
    </>
  );
}
