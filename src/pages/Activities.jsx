import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import { items } from "../data/data";
import Transition from "../components/Transition";

export default function Activities() {
  return (
    <>
      <Navbar />
      <Transition />
      <main className="text-center mt-10 pb-20 px-6 md:px-12 w-full">
        <h2 className="text-2xl capitalize mb-8 font-medium">
          Our activities{" "}
          <span className="p-[3px] text-[1px] ml-[2px] mb-[1px] bg-[#EF5B44]"></span>
        </h2>
        <section className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {items?.map((item) => (
            <div key={item.id} className="relative max-w-sm mx-auto">
              <img
                className="max-h-[240px] mx-auto min-w-[340px] object-center object-cover w-full"
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
