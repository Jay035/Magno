import { Link } from "react-router-dom";
import Slider from "react-slick";
import { settings } from "../App";
import img1 from "../assets/paintballing.jpg";

export function GetInvolved() {
  return (
    <section className="py-12 max--5xl mx-auto w-full px-[9.5vw] text-center flex flex-col gap-8">
      <div className="mb-8">
        <h2 className="text-center text-2xl capitalize mb-6 font-medium">
          Get Involved
        </h2>
        <p className="text-base text-[#7a7c86] mb-6">
          We look to have people who share in our passion for exploring new
          interests, having fun and building connections. Get to meet new
          people, build connections and have lots of fun as well as exclusive
          perks.
        </p>
        <Link
          to="/register"
          className="text-white px-6 bg-[#ef5b44] py-[8px] rounded-lg mt-4 hover:bg-[#ef5b44]/75"
        >
          Register now
        </Link>
      </div>
      <Slider {...settings}>
        <div className="relative max-w-sm">
          <img className="" src={img1} alt="img" />
          <h1 className="text-2xl mt-4">Parties</h1>
          {/* <div className="absolute top-0 z-50 flex justify-center bg-[#01050b]/70 w-full  h-full items-center text-white"> */}
          {/* </div> */}
        </div>
        <div className="relative max-w-sm">
          <img className="" src={img1} alt="img" />
          {/* <div className="absolute top-0 z-50 flex justify-center bg-[#01050b]/70 w-full  h-full items-center text-white"> */}
          <h1 className="text-2xl mt-4">Hangouts</h1>
          {/* </div> */}
        </div>
        <div className="relative max-w-sm">
          <img className="" src={img1} alt="img" />
          {/* <div className="absolute top-0 z-50 flex justify-center bg-[#01050b]/70 w-full  h-full items-center text-white"> */}
          <h1 className="text-2xl mt-4">Movie dates</h1>
          {/* </div> */}
        </div>
        <div className="relative max-w-sm">
          <img className="" src={img1} alt="img" />
          {/* <div className="absolute top-0 z-50 flex justify-center bg-[#01050b]/70 w-full  h-full items-center text-white"> */}
          <h1 className="text-2xl mt-4">Concerts</h1>
          {/* </div> */}
        </div>
        <div className="relative max-w-sm">
          <img className="" src={img1} alt="img" />
          {/* <div className="absolute top-0 z-50 flex justify-center bg-[#01050b]/70 w-full  h-full items-center text-white"> */}
          <h1 className="text-2xl mt-4">Video games</h1>
          {/* </div> */}
        </div>
        <div className="relative max-w-sm">
          <img className="" src={img1} alt="img" />
          {/* <div className="absolute top-0 z-50 flex justify-center bg-[#01050b]/70 w-full  h-full items-center text-white"> */}
          <h1 className="text- mt-4">Board games </h1>
          {/* </div> */}
        </div>
        <div className="relative max-w-sm">
          <img className="" src={img1} alt="img" />
          {/* <div className="absolute top-0 z-50 flex justify-center bg-[#01050b]/70 w-full  h-full items-center text-white"> */}
          <h1 className="text-2xl mt-4">Painting</h1>
          {/* </div> */}
        </div>
        <div className="relative max-w-sm">
          <img className="" src={img1} alt="img" />
          {/* <div className="absolute top-0 z-50 flex justify-center bg-[#01050b]/70 w-full  h-full items-center text-white"> */}
          <h1 className="text-2xl mt-4">Excursions</h1>
          {/* </div> */}
        </div>
      </Slider>
    </section>
  );
}
