import { Link } from "react-router-dom";
import { Benefits } from "../components/Benefits";
import Footer from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { HowItWorks } from "../components/HowItWorks";
import { Testimonials } from "../components/Testimonials";
import { GetInvolved } from "../components/GetInvolved";
import image3 from "../assets/image-3.jpg";

export default function Home() {
  return (
    <main className="home flex flex-col gap-6">
      <HeroSection />
      <section className="text-center px-6 sm:px-14 md:px-20 xl:px-[270px] py-6 sm:py-14 mx-auto grid gap-6 lg:gap-16">
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
        {/* <div className="">
          <img src={image3} alt="" />
        </div> */}
      </section>

      {/* What you get */}
      <Benefits />

      {/* Our events & activities */}
      {/* <div className="px-6 md:px-24 mb-28 "> */}

      <Link
        to="/events"
        className="mb-28 mt-16 border text-center w-fit mx-auto border-[#EAECF0] py-2 rounded-[50px] px-8 md:px-[55px] text-[#EAECF0] text-base sm:text-xl md:text-2xl"
      >
        EXPLORE OUR EVENTS AND ACTIVITIES
      </Link>
      {/* </div> */}

      {/* How it works */}
      <HowItWorks />
      {/* Get Involved */}
      {/* <GetInvolved /> */}

      {/* Testimonials */}
      <Testimonials />
      <div className="py-28 px-6 md:px-14 xl:px-[130px] text-center">
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
        <button className="px-[62.5px] block w-fit mx-auto bg-[#EF5B44] rounded-[30px] py-3 mt-8 border border-[#EF5B44] shadow-[0px_1px_2px] shadow-[rgba(16, 24, 40, 0.05)]">Subscribe</button>
      </div>
      <Footer />
    </main>
  );
}
