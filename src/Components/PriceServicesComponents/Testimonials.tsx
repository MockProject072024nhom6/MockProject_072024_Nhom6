import TestimonialsCarousel from '../ShareComponents/TestimonialsCarousel';
const Testimonials = () => {
  return (
    <div className="grid grid-cols-3 grid-flow-col gap-2 ">
      <div className=" row-span-1">
        <div>Testimonials</div>
        <div>What Our Clients Say About Us</div>
      </div>
      <div className="col-span-2">
        <div className="">
          <div className="py-10">
            <TestimonialsCarousel />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
