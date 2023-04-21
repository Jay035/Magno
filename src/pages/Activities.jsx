import Slider from "react-slick";
import paintBalling from "../assets/paintballing.jpg";
import horseRiding from "../assets/games.jpg";
import movieNight from "../assets/movie-night.jpg";
import VRGames from "../assets/VR games.jpg";
import party from "../assets/party.jpg";
import bowling from "../assets/man-bowling.jpg";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";

export default function Activities() {
  const items = [
    {
      id: 1,
      title: "Parties",
      imgUrl: party,
    },
    {
      id: 2,
      title: "Movies",
      imgUrl: movieNight,
    },
    {
      id: 3,
      title: "Concerts",
      imgUrl: paintBalling,
    },
    {
      id: 4,
      title: "Paint balling",
      imgUrl: paintBalling,
    },
    {
      id: 5,
      title: "Swimming",
      imgUrl: paintBalling,
    },
    {
      id: 6,
      title: "Video games",
      imgUrl: paintBalling,
    },
    {
      id: 7,
      title: "Board games",
      imgUrl: paintBalling,
    },
    {
      id: 8,
      title: "VR games",
      imgUrl: VRGames,
    },
    {
      id: 9,
      title: "Bowling",
      imgUrl: bowling,
    },
    {
      id: 10,
      title: "Boat tours",
      imgUrl: bowling,
    },
    {
      id: 11,
      title: "Jet skiing",
      imgUrl: bowling,
    },
    {
      id: 12,
      title: "Go carting",
      imgUrl: bowling,
    },
    {
      id: 13,
      title: "Quad biking ",
      imgUrl: bowling,
    },
    {
      id: 14,
      title: "Hiking",
      imgUrl: bowling,
    },
    {
      id: 15,
      title: "Horseback riding",
      imgUrl: horseRiding,
    },
    {
      id: 16,
      title: "Painting",
      imgUrl: paintBalling,
    },
    {
      id: 17,
      title: "Excursions",
      imgUrl: bowling,
    },
    {
      id: 18,
      title: "Kayaking",
      imgUrl: bowling,
    },
    {
      id: 19,
      title: "Workouts",
      imgUrl: bowling,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="text-center mt-10 pb-20 px-6 md:px-12">
        <h2 className="text-2xl capitalize mb-8 font-medium">
          Our activities{" "}
        </h2>
        <section className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {items?.map((item) => (
            <div key={item.id} className="relative max-w-sm mx-auto">
              <img
                className="max-h-[240px] min-w-[380px] object-center object-cover w-full"
                src={item.imgUrl}
                alt={item.title}
              />
              <div className="mt-4 text-white">
                <h1 className="text-2xl">{item.title}</h1>
              </div>
            </div>
          ))}
        </section>
        {/* image slider */}
        {/* <Slider {...settings}>
        <div className="relative max-w-xl">
          <img src={img1} alt="img" />
          <div className="absolute top-0 z-50 flex justify-center bg-[#01050b]/70 w-full  h-full items-center text-white">
            <h1 className="text-2xl">Parties</h1>
          </div>
        </div>
        <div className="relative max-w-xl">
          <img src={img1} alt="img" />
          <div className="absolute top-0 z-50 flex justify-center bg-[#01050b]/70 w-full  h-full items-center text-white">
            <h1 className="text-2xl">Hangouts</h1>
          </div>
        </div>
        <div className="relative max-w-xl">
          <img src={img1} alt="img" />
          <div className="absolute top-0 z-50 flex justify-center bg-[#01050b]/70 w-full  h-full items-center text-white">
            <h1 className="text-2xl">Movie dates</h1>
          </div>
        </div>
        <div className="relative max-w-xl">
          <img src={img1} alt="img" />
          <div className="absolute top-0 z-50 flex justify-center bg-[#01050b]/70 w-full  h-full items-center text-white">
            <h1 className="text-2xl">Concerts </h1>
          </div>
        </div>
        <div className="relative max-w-xl">
          <img src={img1} alt="img" />
          <div className="absolute top-0 z-50 flex justify-center bg-[#01050b]/70 w-full  h-full items-center text-white">
            <h1 className="text-2xl">Sporting activities </h1>
          </div>
        </div>
        <div className="relative max-w-xl">
          <img src={img1} alt="img" />
          <div className="absolute top-0 z-50 flex justify-center bg-[#01050b]/70 w-full  h-full items-center text-white">
            <h1 className="text-2xl">Video games</h1>
          </div>
        </div>
        <div className="relative max-w-xl">
          <img src={img1} alt="img" />
          <div className="absolute top-0 z-50 flex justify-center bg-[#01050b]/70 w-full  h-full items-center text-white">
            <h1 className="text-2xl">Board games </h1>
          </div>
        </div>
        <div className="relative max-w-xl">
          <img src={img1} alt="img" />
          <div className="absolute top-0 z-50 flex justify-center bg-[#01050b]/70 w-full  h-full items-center text-white">
            <h1 className="text-2xl">Painting </h1>
          </div>
        </div>
        <div className="relative max-w-xl">
          <img src={img1} alt="img" />
          <div className="absolute top-0 z-50 flex justify-center bg-[#01050b]/70 w-full  h-full items-center text-white">
            <h1 className="text-2xl">Excursions</h1>
          </div>
        </div>
        <div className="relative max-w-xl">
          <img src={img1} alt="img" />
          <div className="absolute top-0 z-50 flex justify-center bg-[#01050b]/70 w-full  h-full items-center text-white">
            <h1 className="text-2xl">Workshops</h1>
          </div>
        </div>
      </Slider> */}
      </main>
      <Footer />
    </>
  );
}
