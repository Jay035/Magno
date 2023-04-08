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
      <section className="text-center md:text-left px-6 sm:px-14 xl:px-20 py-6 md:py-12 mx-auto grid md:grid-cols-2 gap-6 lg:gap-16">
        <div className="md:order-2">
          <h2 className="text-2xl capitalize mb-3 font-medium">
            Bringing people closer
          </h2>
          <p className="text-[#7a7c86]">
            We curate a number of events and activities for discerning
            individuals who enjoy getting together to explore new interests and
            hobbies that helps them relax. Our events and activities are
            exclusive, interactive, informative and fun.
          </p>
        </div>
        <div className="">
          <img src={image3} alt="" />
        </div>
      </section>

      {/* What you get */}
      <Benefits />

      <div className="">
        {/* Our events & activities */}
        <div className="text-center px-6 md:px-24 xl:px-20 py-12 mx-auto">
          <h2 className="text-2xl capitalize mb-6 font-medium">
            Explore Our activities{" "}
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
      <div className="py-12 px-6 md:px-14 xl:px-20 text-center">
        <h2 className="text-center text-2xl capitalize mb-6 font-medium">
          Join Magno’s newsletter!
        </h2>
        <p className="text-sm text-[#7a7c86] mb-6">
          Get news and updates delivered to your mailbox.
        </p>
        <input
          type="email"
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
