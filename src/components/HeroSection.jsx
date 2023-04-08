import { Link } from "react-router-dom";
import image1 from "../assets/image-1.jpg";
import image2 from "../assets/image-2.jpg";
import image3 from "../assets/image-3.jpg";

export function HeroSection() {
  return (
    <section className="relative px-6 sm:px-14 xl:px-20 mt-10 grid md:grid-cols-2 md:items-center gap-16">
      {/* hero container */}
      {/* <div className="absolute top-1/2 -translate-y-1/2 bg-[#11141d]/80 h-screen px-6 sm:px-14 md:px-24 flex flex-col justify-center items-center gap-4 w-full mx-auto"> */}
      <div className="max-w-2xl mx-auto tracking-wide flex flex-col items-start gap-4 text-left">
        <h1 className="text-4xl text-white tracking-tighter">
          Experience the extraordinary{" "}
        </h1>
        <p className="text-sm sm:text-base text-white/80">
          Magno brings together individuals who are looking to meet new people,
          make friends and have fun.
        </p>
        <Link
          to="/register"
          className="text-white px-6 bg-[#ef5b44] py-2 md:px-8 md:text-lg font-light rounded-lg mt-4 hover:bg-[#ef5b44]/75"
        >
          Register now
        </Link>
      </div>
      {/* </div> */}

      <div className="">
        <img src={image1} alt="image 1" />
        {/* <img src={image2} alt="image 2" /> */}
      </div>
    </section>
  );
}
