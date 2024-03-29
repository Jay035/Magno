import friends from "../assets/friends.jpg";
import { useState } from "react";
import Transition from "../components/Transition";

export default function AboutUs() {
  const [loading, setLoading] = useState(true);

  return (
    <main>
      <Transition />
      <div className="px-6 sm:px-14 md:px-20 xl:px-[270px] mb-8">
        <section>
          <h2 className="text-center text-3xl md:text-[42px] leading-[100px] md:leading-[120px] tracking-tight capitalize mb-5">
            About Us
            <span className="p-[3px] text-[1px] ml-[2px] mb-[1px] bg-[#EF5B44]"></span>
          </h2>
          <p className="text-base md:text-xl text-[#D0D5DD] mb-8">
            Magno is a premium entertainment service founded to bring people
            together and build connections through shared interests. Whether
            you’re looking to meet new people, or simply have some fun, Magno
            provides a perfect platform to do it. We offer a variety of events
            and activities throughout the year, so there is always something
            exciting to look forward to.
          </p>
        </section>
        <section>
          <img src={friends} alt="friends laughing" />
        </section>
      </div>
    </main>
  );
}
