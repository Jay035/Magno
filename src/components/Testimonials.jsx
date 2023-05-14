import img1 from '../assets/testimonial-avatar-1.png';
import img2 from '../assets/testimonial-avatar-2.png';
import img3 from '../assets/testimonial-avatar-3.png';

export function Testimonials() {
  return (
    <section className="text-center pt-12 pb-20 px-6 md:px-14 xl:px-[130px]">
      <h2 className="text-2xl capitalize mb-6 leading-[100px] md:leading-[120px]">
        Testimonials{" "}
        <span className="p-[3px] text-[1px] ml-[2px] mb-[1px] bg-[#EF5B44]"></span>
      </h2>
      <div className="grid gap-14 lg:gap-10 px-6 lg:grid-cols-3">
        <div className="text-left w-full flex flex-col gap-6 lg:min-w-[260px]">
          <h2 className=' text-lg lg:text-2xl lg:h-[200px] xl:h-fit'>
            “ Simply one of the best decisions I’ve made. The events and
            activities are super entertaining and I always look forward to the
            next one. “
          </h2>
          <div className="flex gap-2 items-center">
            <img className='w-14 sm:w-[66px] sm:h-[66px]' src={img1} alt="img 1" />
            <div className="">
              <h1 className='w-fit text-base'>Geoffrey Gentry</h1>
              <p className='w-fit text-sm'>Lagos, Nigeria</p>
            </div>
          </div>
        </div>
        <div className="text-left w-full lg:min-w-[260px] flex flex-col gap-6 border-y border-[#344054] py-8 lg:border-y-0 lg:border-x lg:px-8 lg:py-0">
          <h2 className=' text-lg lg:text-2xl lg:h-[200px] xl:h-fit'>
            “ Interacting with people and engaging in games helped me build my
            confidence and self esteem. “
          </h2>
          <div className="flex gap-2 items-center">
            <img className='w-14 sm:w-[66px] sm:h-[66px]' src={img2} alt="img 1" />
            <div className="">
              <h1 className='w-fit text-base'>Jane Leo</h1>
              <p className='w-fit text-sm'>Port Harcourt, Nigeria</p>
            </div>
          </div>
        </div>
        <div className="text-left w-full flex flex-col gap-6 lg:min-w-[260px]">
          <h2 className=' text-lg lg:text-2xl lg:h-[200px] xl:h-fit'>
            “ Magno delivers entertainment in its purest form. Great place to
            meet interesting people, relax and forget my troubles. “
          </h2>
          <div className="flex gap-2 items-center">
            <img className='w-14 sm:w-[66px] sm:h-[66px]' src={img3} alt="img 1" />
            <div className="">
              <h1 className='w-fit text-base'>Louis Dalton</h1>
              <p className='w-fit text-sm'>Ontario, Canada</p>
            </div>
          </div>
        </div>
        {/* <div className="text-center">
          “The power of engaging in social activities is real. It’s been a
          roller-coaster and I’m loving it.”
        </div> */}
      </div>
    </section>
  );
}
