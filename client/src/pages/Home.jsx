import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import ServiceGuarantee from '../components/ServiceGuarantee';
import ServicesGrid from '../components/ServicesGrid';
import StatsCounter from '../components/StatsCounter';
import Testimonials from '../components/Testimonials';
import ProcessSteps from '../components/ProcessSteps';
import BookingForm from '../components/BookingForm';
import usePageTitle from '../hooks/usePageTitle';

function Home() {
   usePageTitle('Home');
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <ServiceGuarantee />
      <ServicesGrid />
      <StatsCounter />
      <Testimonials />
      <ProcessSteps />
      <BookingForm />
    </>
  );
}

export default Home;