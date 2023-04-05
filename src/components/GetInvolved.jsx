import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { settings } from "../App";
import img1 from "../assets/paintballing.jpg";

export default function GetInvolved() {
  return (
    <section className="pb-12 pt-6 px-6 text-center flex flex-col gap-8">
      <div className="">
        <h2 className="text-center text-2xl capitalize mb-6 font-medium">
          Get Involved
        </h2>
        <p className="text-base text-[#7a7c86] mb-6">
          We look to have people who share in our passion for exploring new
          interests, having fun and building connections. Get access to our
          events and activities as well as exclusive perks.
        </p>
        <Link
          to="/register"
          className="text-white px-6 bg-[#ef5b44] py-[8px] rounded-2xl mt-4 hover:bg-[#ef5b44]/75"
        >
          Register now
        </Link>
      </div>
      <Slider {...settings}>
        <div className="relative max-w-lg">
          <img className="" src={img1} alt="img" />
          <div className="absolute top-0 z-50 flex justify-center bg-[#01050b]/70 w-full  h-full items-center text-white">
            <h1 className="text-2xl">Parties</h1>
          </div>
        </div>
        <div className="relative max-w-lg">
          <img className="" src={img1} alt="img" />
          <div className="absolute top-0 z-50 flex justify-center bg-[#01050b]/70 w-full  h-full items-center text-white">
            <h1 className="text-2xl">Hangouts</h1>
          </div>
        </div>
        <div className="relative max-w-lg">
          <img className="" src={img1} alt="img" />
          <div className="absolute top-0 z-50 flex justify-center bg-[#01050b]/70 w-full  h-full items-center text-white">
            <h1 className="text-2xl">Movie dates</h1>
          </div>
        </div>
        <div className="relative max-w-lg">
          <img className="" src={img1} alt="img" />
          <div className="absolute top-0 z-50 flex justify-center bg-[#01050b]/70 w-full  h-full items-center text-white">
            <h1 className="text-2xl">Concerts </h1>
          </div>
        </div>
        <div className="relative max-w-lg">
          <img className="" src={img1} alt="img" />
          <div className="absolute top-0 z-50 flex justify-center bg-[#01050b]/70 w-full  h-full items-center text-white">
            <h1 className="text-2xl">Video games</h1>
          </div>
        </div>
        <div className="relative max-w-lg">
          <img className="" src={img1} alt="img" />
          <div className="absolute top-0 z-50 flex justify-center bg-[#01050b]/70 w-full  h-full items-center text-white">
            <h1 className="text-2xl">Board games </h1>
          </div>
        </div>
        <div className="relative max-w-lg">
          <img className="" src={img1} alt="img" />
          <div className="absolute top-0 z-50 flex justify-center bg-[#01050b]/70 w-full  h-full items-center text-white">
            <h1 className="text-2xl">Painting </h1>
          </div>
        </div>
        <div className="relative max-w-lg">
          <img className="" src={img1} alt="img" />
          <div className="absolute top-0 z-50 flex justify-center bg-[#01050b]/70 w-full  h-full items-center text-white">
            <h1 className="text-2xl">Excursions</h1>
          </div>
        </div>
      </Slider>
    </section>
  );
}
