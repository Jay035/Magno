import { Link } from "react-router-dom";
import { Benefits } from "../components/Benefits";
import Footer from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { HowItWorks } from "../components/HowItWorks";
import { Testimonials } from "../components/Testimonials";
import {GetInvolved} from "../components/GetInvolved";

export default function Home() {
  return (
    <main className="home flex flex-col gap-6">
      <HeroSection />
      <div className="text-center px-6 md:px-24 lg:px-32 py-6 md:py-12 mx-auto">
        <h2 className="text-center text-2xl capitalize mb-3 font-medium">
          Bringing people closer
        </h2>
        <p className="text-[#7a7c86]">
          We host a wide variety of events and activities throughout the year.
          Get to meet people and build connections through our social events.
        </p>
      </div>

      {/* What you get */}
      <Benefits />

      <div className="">
        {/* Our events & activities */}
        <div className="text-center px-6 md:px-24 lg:px-32 py-12 mx-auto">
          <h2 className="text-2xl capitalize mb-6 font-medium">
            Our events & activities{" "}
          </h2>
          <Link to="/events" className="bg-[#ef5b44] py-2 px-4 rounded-lg">
            Explore our events and activities
          </Link>
        </div>

        {/* How it works */}
        <HowItWorks />
      </div>
      {/* Get Involved */}
      <GetInvolved />

      {/* Testimonials */}
      <Testimonials />
      <div className="py-12 px-6 md:px-24 lg:px-32 text-center">
        <h2 className="text-center text-2xl capitalize mb-6 font-medium">
          Join Magno’s newsletter!
        </h2>
        <p className="text-sm text-[#7a7c86] mb-6">
          Get news and updates delivered to your mailbox.
        </p>
        <input
          type="text"
          name=""
          id=""
          placeholder="Your email address"
          className="w-full outline-none text-white bg-white/10 border-[#7a7c86] px-3 py-3 rounded-2xl"
        />
      </div>
      <Footer />
    </main>
  );
}
