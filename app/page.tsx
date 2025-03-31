import Navbar from '../components/navbar';
import HeroSection from '../components/heroSection';
import WelcomeComponent from '../components/welcomecomponent';
import ImageSlider from '../components/imageslider';
import ServicesComponent from '../components/servicescomponent';
import Footer from '../components/footer';
import DesignServices from '../components/designservices';
import Testimonial from '../components/testimonial';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WelcomeComponent />
      <DesignServices />
      <ImageSlider />
      <ServicesComponent />
      <Testimonial />
      <Footer />
    </>
  );
}