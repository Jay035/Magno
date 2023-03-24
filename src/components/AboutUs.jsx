import { Activities } from "./Activities";
import { Benefits } from "./Benefits";
import { HowItWorks } from "./HowItWorks";

export function AboutUs() {
  return (
    <section>
      <div className="">
        <h2>About Us</h2>
        <p>
          Magno is a premium entertainment service founded to bring people
          together and build connections through shared interests. Whether
          you’re looking to meet new people, or simply have some fun, Magno
          provides a perfect platform to do it. We offer a variety of events and
          activities throughout the year, so there is always something exciting
          to look forward to.
        </p>
      </div>
      <div>
        <h2>Bringing people closer</h2>
        <p>
          We host a wide variety of events and activities throughout the year.
          Get to meet people and build connections through our social events.
        </p>
      </div>

      {/* What you get */}
      <Benefits />

      {/* Our events & activities */}
      <Activities />

      {/* How it works */}
      <HowItWorks />
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
    </section>
  );
}
