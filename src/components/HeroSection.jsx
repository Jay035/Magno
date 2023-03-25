import image1 from '../assets/image-1.jpg';
import image2 from '../assets/image-2.jpg';
import image3 from '../assets/image-3.jpg';

export function HeroSection() {
  return (
    <section className="text-center">
      {/* hero container */}
      <div className="px-6 flex flex-col items-center gap-4 tracking-wide max-w-4xl mx-auto">
        <h1 className="text-3xl tracking-tighter">
          Experience the extraordinary{" "}
        </h1>
        <p className="text-xs text-white/80">
          Magno brings together individuals who are looking to meet new people,
          make friends, and have fun. Engage in curated social activities
          designed for discerning individuals who enjoy getting together to
          explore new interests and hobbies that helps them relax. Our events
          and activities are interactive, informative and fun.{" "}
        </p>
        <button className="text-black px-6 bg-[#febf4d] py-[8px] rounded-full mt-4 hover:bg-[#febf4d]/75">
          Subscribe
        </button>
      </div>

      <div className="mt-16">
        <img src={image1} alt="image 1" />
        {/* <img src={image2} alt="image 2" /> */}
      </div>
    </section>
  );
}
