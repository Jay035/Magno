import { Activities } from "../components/Activities";
import { Benefits } from "../components/Benefits";
import { HeroSection } from "../components/HeroSection";
import { HowItWorks } from "../components/HowItWorks";
import { Testimonials } from "../components/Testimonials";

export default function Home() {
  return (
    <div className="home bg-[#11141d] flex flex-col gap-6">
      <HeroSection />
      <div className="text-center px-6 py-6 max-w-3xl mx-auto">
        <h2 className="text-center text-2xl capitalize mb-3 font-medium">Bringing people closer</h2>
        <p className="text-[#7a7c86]">
          We host a wide variety of events and activities throughout the year.
          Get to meet people and build connections through our social events.
        </p>
      </div>

      {/* What you get */}
      <Benefits />

      <div className="">
        {/* Our events & activities */}
        <Activities />

        {/* How it works */}
        <HowItWorks />
      </div>
      {/* Get Involved */}
      <div className="py-6 px-6 text-center bg-[#1d2029]">
        <h2 className="text-center text-2xl capitalize mb-6 font-medium">Get Involved</h2>
        <p className="text-base text-[#7a7c86] mb-6">
          We look to have people who share in our passion for exploring new
          interests, having fun and building connections. As a subscriber,
          you’ll have access to our events and activities as well as exclusive
          perks.
        </p>
        <button className="text-white px-6 bg-[#ef5b44] py-[8px] rounded-2xl mt-4 hover:bg-[#febf4d]/75">Subscribe</button>
      </div>

      {/* Testimonials */}
      <Testimonials />
      <div className="py-6 px-6 text-center">
        <h2 className="text-center text-2xl capitalize mb-6 font-medium">Join Magno’s newsletter!</h2>
        <p className="text-sm text-[#7a7c86] mb-6">Get news and updates delivered to your mailbox.</p>
        <input type="text" name="" id="" placeholder="Your email address" className="w-full bg-white/10 border-[#7a7c86] px-3 py-3 text-black rounded-2xl" />
      </div>
    </div>
  );
}
