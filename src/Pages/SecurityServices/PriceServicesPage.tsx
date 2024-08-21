import HeaderInPageHome from '../../Components/ShareComponents/HeaderInPageHome';
import ServiceList from '../../Components/PriceServicesComponents/ServiceList';
import Testimonials from '../../Components/PriceServicesComponents/Testimonials';

const PriceServicesPage: React.FC = () => {
  return (
    <main className="bg-white">
      <HeaderInPageHome
        title="Price Services Personal Protection"
        subtitle="View Price Services"
        page="Home"
      />
      <ServiceList />

      <Testimonials />
    </main>
  );
};
export default PriceServicesPage;
