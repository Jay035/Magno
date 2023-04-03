import { Link } from "react-router-dom";
import image1 from "../assets/image-1.jpg";
import image2 from "../assets/image-2.jpg";
import image3 from "../assets/image-3.jpg";

export function HeroSection() {
  return (
    <section className="relative text-center  h-[90vh]">
      <div className=" ">
        <img
          className="h-[90vh] object-cover object-center"
          src={image2}
          alt="image 1"
        />
      </div>
      {/* hero container */}
      <div className="absolute top-1/2 -translate-y-1/2 bg-[#11141d]/90 h-[91vh] px-6 sm:px-14 flex flex-col justify-center items-center gap-4 tracking-wide max-w-4xl sm:max-w-full w-full mx-auto">
        <h1 className="text-4xl text-white tracking-tighter">
          Experience the extraordinary{" "}
        </h1>
        <p className="text-sm sm:text-base text-white/80">
          Magno brings together individuals who are looking to have fun, meet
          new people and make friends. We curate a number of activities for
          discerning individuals who enjoy getting together to explore new
          interests and hobbies that helps them relax. Our events and activities
          are exclusive, interactive, informative and fun.
        </p>
        <Link to="/register" className="text-white px-6 bg-[#ef5b44] py-[8px] rounded-2xl mt-4 hover:bg-[#ef5b44]/75">
          Register now
        </Link>
      </div>

      {/* <div className="mt-16">
        <img src={image1} alt="image 1" />
        <img src={image2} alt="image 2" />
      </div> */}
    </section>
  );
}
