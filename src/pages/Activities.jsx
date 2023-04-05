import Slider from "react-slick";
import img1 from "../assets/paintballing.jpg";

export default function Activities() {
  const activities = [
    {
      id: 1,
      title: "Parties",
      imgUrl: img1,
    },
    {
      id: 2,
      title: "Movies",
      imgUrl: img1,
    },
    {
      id: 3,
      title: "Concerts",
      imgUrl: img1,
    },
    {
      id: 4,
      title: "Paint balling",
      imgUrl: img1,
    },
    {
      id: 5,
      title: "Swimming",
      imgUrl: img1,
    },
    {
      id: 6,
      title: "Video games",
      imgUrl: img1,
    },
    {
      id: 7,
      title: "Board games",
      imgUrl: img1,
    },
    {
      id: 8,
      title: "VR games",
      imgUrl: img1,
    },
    {
      id: 9,
      title: "Bowling",
      imgUrl: img1,
    },
    {
      id: 10,
      title: "Boat tours",
      imgUrl: img1,
    },
    {
      id: 11,
      title: "Jet skiing",
      imgUrl: img1,
    },
    {
      id: 12,
      title: "Go carting",
      imgUrl: img1,
    },
    {
      id: 13,
      title: "Quad biking ",
      imgUrl: img1,
    },
    {
      id: 14,
      title: "Hiking",
      imgUrl: img1,
    },
    {
      id: 15,
      title: "Horseback riding",
      imgUrl: img1,
    },
    {
      id: 16,
      title: "Painting",
      imgUrl: img1,
    },
    {
      id: 17,
      title: "Excursions",
      imgUrl: img1,
    },
    {
      id: 18,
      title: "Kayaking",
      imgUrl: img1,
    },
    {
      id: 19,
      title: "Workouts",
      imgUrl: img1,
    },
  ];

  return (
    <div className="text-center pt-28 pb-20 px-6 md:px-12 overflow-hidden">
      <h2 className="text-2xl capitalize mb-8 font-medium">
        Our events & activities{" "}
      </h2>
      <section className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {activities?.map((item) => (
          <div key={item.id} className="relative max-w-xl">
            <img src={item.imgUrl} alt={item.title} />
            <div className="absolute top-0 z-50 flex justify-center bg-[#01050b]/70 w-full  h-full items-center text-white">
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
    </div>
  );
}
