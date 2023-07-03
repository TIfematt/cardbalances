import Nav from '@/components/Nav';
import Verify from '@/components/Verify';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import Protection from '@/components/Protection';
import Steps from '@/components/Steps';
import Offer from '@/components/Offer';
import Header from '@/components/Header';



export default function Home() {
  return (
    <>
      <Nav />
      <Header />
      <Offer />
      <Verify />
      <Steps />
      <Testimonials />
      <Protection />
      <Footer />
  </>
  )
}
