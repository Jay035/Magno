import { Link } from "react-router-dom";
import { Benefits } from "../components/Benefits";
import { HeroSection } from "../components/HeroSection";
import { HowItWorks } from "../components/HowItWorks";
import { Testimonials } from "../components/Testimonials";
import asset1 from "../assets/asset-1.png";
import asset2 from "../assets/asset-2.png";
import asset3 from "../assets/asset-3.png";
import asset4 from "../assets/asset-4.png";
import Contact from "../components/Contact";
import { Carousel } from "flowbite-react";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
    <Navbar />
    <main className="home flex flex-col gap-6">
      <HeroSection />
      <section className="text-center px-6 sm:px-14 md:px-20 xl:px-[270px] overflow-hidden py-6 sm:py-14 mx-auto grid gap-6 lg:gap-16">
        <div className="">
          <h2 className="text-3xl lg:text-[64px] leading-[100px] md:leading-[120px] text-[#EAECF0] capitalize mb-2">
            Bringing people closer{" "}
            <span className="p-[3px] text-[1px] ml-[2px] mb-[1px] bg-[#EF5B44]"></span>
          </h2>
          <p className="text-[#D0D5DD] text-lg lg:text-2xl mb-8">
            We curate a number of events and activities for discerning
            individuals who enjoy getting together to explore new interests and
            hobbies that helps them relax. Our events and activities are
            exclusive, interactive, informative and fun.
          </p>
        </div>
        {/* <div className="overflow-x-auto scroll-smooth flex snap-x snap-mandatory w-full">
          <div className="snap-start shrink-0 mr-6">
            <img
              className=" object-cover"
              src={asset1}
              alt="people having fun"
            />
          </div>
          <div className="snap-start shrink-0 mr-6">
            <img className="" src={asset2} alt="people having fun" />
          </div>
          <div className="snap-start shrink-0">
            <img
              className=" object-center"
              src={asset3}
              alt="people having fun"
            />
          </div>
        </div> */}

        <div className="h-64 sm:h-96 xl:h-[540px]">
          <Carousel>
            <img src={asset1} alt="people having fun" />
            <img src={asset2} alt="people having fun" />
            <img src={asset3} alt="people having fun" />
            <img src={asset4} alt="people having fun" />
          </Carousel>
        </div>
      </section>

      {/* What you get */}
      <Benefits />

      {/* Our events & activities */}
      {/* <div className="px-6 md:px-24 mb-28 "> */}

      <Link
        to="/activities"
        className="mb-28 mt-16 border text-center w-fit mx-auto border-[#EAECF0] py-2 rounded-[50px] px-8 md:px-[55px] text-[#EAECF0] text-base sm:text-xl md:text-2xl"
      >
        EXPLORE OUR ACTIVITIES
      </Link>
      {/* </div> */}

      {/* How it works */}
      <HowItWorks />
      {/* Get Involved */}
      {/* <GetInvolved /> */}

      {/* Testimonials */}
      <Testimonials />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="pt-28 px-6 md:px-14 xl:px-[130px] text-center"
      >
        <h2 className="text-center text-3xl md:text-[42px] leading-[100px] md:leading-[120px] tracking-tight capitalize mb-5">
          Join Magno’s newsletter!
        </h2>
        <p className="text-base md:text-xl text-[#D0D5DD] mb-8">
          Get news and updates delivered to your mailbox.
        </p>
        <input
          type="email"
          name=""
          id=""
          placeholder="Your email address"
          className="w-[360px] mx-auto outline-none text-[#475467] placeholder:text-[#475467] bg-[#FEF3F2] shadow-[0px_1px_2px] shadow-[rgba(16, 24, 40, 0.05)] px-[14px] py-3 rounded-lg"
        />
        <button
          type="submit"
          className="px-[62.5px] block w-fit mx-auto bg-[#EF5B44] rounded-[30px] py-3 mt-8 border border-[#EF5B44] shadow-[0px_1px_2px] shadow-[rgba(16, 24, 40, 0.05)]"
        >
          Subscribe
        </button>
      </form>
      <Contact />
    </main>
    <Footer />
    </>
  );
}
