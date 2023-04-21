import { Link } from "react-router-dom";
import heroImg from "../assets/hero-img.png";
import image1 from "../assets/image-1.jpg";
import image2 from "../assets/image-2.jpg";
import image3 from "../assets/image-3.jpg";

export function HeroSection() {
  return (
    <section className="relative grid w-full md:items-center gap-16 h-screen xl:h-[1047.4px]">
      <img
        src={heroImg}
        className="h-screen xl:h-[1047.4px] object-cover object-center w-full"
        alt="hero img"
      />
      {/* hero container */}
      <div className="hero-container absolute top-0 text-center h-screen xl:h-[1047.4px] px-6 sm:px-14 md:px-24 w-full mx-auto">
        <div className="max-w-2xl z-[999999] mx-auto mt-20 lg:mt-32 tracking-wide flex flex-col items-center gap-4 ">
          <h1 className="text-5xl xl:text-[110.667px] leading-[1.2] md:text-5xl xl:text-6xl xl:leading-snug text-white">
            Experience the extraordinary{" "}
          </h1>
          <p className="text-[17px] md:text-[32px] leading-normal text-white/80">
            Magno brings together individuals who are looking to meet new
            people, make friends and have fun.
          </p>
          <Link
            to="/activities"
            className="text-white px-8 bg-[#EF5B44] py-2 text-lg rounded-[50px] md:text-2xl mt-4 hover:bg-[#ef5b44]/75"
          >
            GET STARTED
          </Link>
        </div>
      </div>
    </section>
  );
}
