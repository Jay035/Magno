import Slider from "react-slick";
import img1 from "../assets/paintballing.jpg";

export function Activities() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    swipeToSlide: true,
    // autoplay: true,
    // autoplaySpeed: 1500,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="text-center pt-12 pb-20 px-6 overflow-hidden">
      <h2 className="text-2xl capitalize mb-6 font-medium">
        Our events & activities{" "}
      </h2>
      {/* image slider */}
      <Slider {...settings}>
        <div className="relative">
          <img src={img1} alt="img" />
          <div className="absolute top-0 z-50 flex justify-center bg-[#01050b]/80 w-full  h-full items-center text-white">
            <h1 className="text-2xl">Parties</h1>
          </div>
        </div>
        <div className="relative">
          <img src={img1} alt="img" />
          <div className="absolute top-0 z-50 flex justify-center bg-[#01050b]/80 w-full  h-full items-center text-white">
            <h1 className="text-2xl">Hangouts</h1>
          </div>
        </div>
        <div className="relative">
          <img src={img1} alt="img" />
          <div className="absolute top-0 z-50 flex justify-center bg-[#01050b]/80 w-full  h-full items-center text-white">
            <h1 className="text-2xl">Movie dates</h1>
          </div>
        </div>
        <div className="relative">
          <img src={img1} alt="img" />
          <div className="absolute top-0 z-50 flex justify-center bg-[#01050b]/80 w-full  h-full items-center text-white">
            <h1 className="text-2xl">Concerts </h1>
          </div>
        </div>
        <div className="relative">
          <img src={img1} alt="img" />
          <div className="absolute top-0 z-50 flex justify-center bg-[#01050b]/80 w-full  h-full items-center text-white">
            <h1 className="text-2xl">Sporting activities </h1>
          </div>
        </div>
        <div className="relative">
          <img src={img1} alt="img" />
          <div className="absolute top-0 z-50 flex justify-center bg-[#01050b]/80 w-full  h-full items-center text-white">
            <h1 className="text-2xl">Video games</h1>
          </div>
        </div>
        <div className="relative">
          <img src={img1} alt="img" />
          <div className="absolute top-0 z-50 flex justify-center bg-[#01050b]/80 w-full  h-full items-center text-white">
            <h1 className="text-2xl">Board games </h1>
          </div>
        </div>
        <div className="relative">
          <img src={img1} alt="img" />
          <div className="absolute top-0 z-50 flex justify-center bg-[#01050b]/80 w-full  h-full items-center text-white">
            <h1 className="text-2xl">Painting </h1>
          </div>
        </div>
        <div className="relative">
          <img src={img1} alt="img" />
          <div className="absolute top-0 z-50 flex justify-center bg-[#01050b]/80 w-full  h-full items-center text-white">
            <h1 className="text-2xl">Excursions</h1>
          </div>
        </div>
        <div className="relative">
          <img src={img1} alt="img" />
          <div className="absolute top-0 z-50 flex justify-center bg-[#01050b]/80 w-full  h-full items-center text-white">
            <h1 className="text-2xl">Workshops</h1>
          </div>
        </div>
      </Slider>
    </div>
  );
}
