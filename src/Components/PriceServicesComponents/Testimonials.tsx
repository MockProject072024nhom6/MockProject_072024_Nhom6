import TestimonialsCarousel from "../ShareComponents/TestimonialsCarousel"
const Testimonials = () => {
  return (
    <div className='grid grid-cols-3 grid-flow-col gap-2 bg-background_world'>
      <div className='flex flex-col row-span-1 items-center justify-center text-black  ml-32'>
        <div className='font-extrabold self-start pb-5 text-blue-500'>Testimonials</div>
        <div className='text-3xl font-extrabold'>What Our Clients Say About Us</div>
      </div>
      <div className='col-span-2'>
        <div className=''>
          <div className='p-32'>
            <TestimonialsCarousel />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Testimonials
