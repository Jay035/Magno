import { Activities } from "../components/Activities";
import { Benefits } from "../components/Benefits";
import { HeroSection } from "../components/HeroSection";
import { HowItWorks } from "../components/HowItWorks";

export default function Home() {
  return (
    <div className="bg-[#01050b] flex flex-col ">
      <HeroSection />
      <div className="text-center px-6 py-6">
        <h2 className="text-xl mb-3 capitalize">Bringing people closer</h2>
        <p className="">
          We host a wide variety of events and activities throughout the year.
          Get to meet people and build connections through our social events.
        </p>
      </div>

      {/* What you get */}
      <Benefits />

      <div className="bg-[#13171a]">
        {/* Our events & activities */}
        <Activities />

        {/* How it works */}
        <HowItWorks />
      </div>
      {/* Get Involved */}
      <div className="">
        <h2>Get Involved</h2>
        <p>
          We look to have people who share in our passion for exploring new
          interests, having fun and building connections. As a subscriber,
          you’ll have access to our events and activities as well as exclusive
          perks.
        </p>
        <button>Subscribe</button>
      </div>

      {/* Testimonials */}
      <div className="">
        <h2>Join Magno’s newsletter!</h2>
        <p>Get news and updates delivered to your mailbox.</p>
      </div>
    </div>
  );
}
