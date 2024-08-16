import TestimonialsCarousel from '../Components/ShareComponents/TestimonialsCarousel';
import HeaderInPageHome from '../Components/ShareComponents/HeaderInPageHome';
import ListServices from '../Components/PriceServicesComponents/ListServices';
import Testimonials from '../Components/PriceServicesComponents/Testimonials';

const PriceServicesPage = () => {
  return (
    <main className="bg-white">
      <HeaderInPageHome
        title="Price Services Personal Protection"
        subtitle="View Price Services"
        page="Home"
      />
      <ListServices />
      <Testimonials />
    </main>
  );
};
export default PriceServicesPage;
