import { Link } from "react-router-dom";
import { Benefits } from "../components/Benefits";
import { HeroSection } from "../components/HeroSection";
import { HowItWorks } from "../components/HowItWorks";
import { Testimonials } from "../components/Testimonials";
import asset1 from "../assets/img-1.jpg";
import asset2 from "../assets/img-2.jpg";
import asset3 from "../assets/img-3.jpg";
import asset4 from "../assets/img-4.jpg";
import Contact from "../components/Contact";
import { Power3, gsap } from "gsap";
import { useEffect, useLayoutEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Transition from "../components/Transition";
import { addDoc, collection } from "@firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../config/config";
// import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [email, setEmail] = useState("");
  const container = useRef(null);
  const tl = gsap.timeline();
  const usersEmailRef = collection(db, "newsletter-emails");

  const handleEmailChange = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      console.log(`Subscribing ${email} to the newsletter...`);
      await addDoc(usersEmailRef, { email: email });
      toast.success("Congratulations, you have subscribed to our newsletter");
      console.log("Congratulations, you have subscribed to our newsletter");
      setEmail("");
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    }
  };

  // useEffect(() => {
  //   let ctx = gsap.context(() => {
  //     let panels = gsap.utils.toArray(".card").forEach((wrapper, i) => {
  //       ScrollTrigger.create({
  //         trigger: wrapper,
  //         start: "top top",
  //         pin: true,
  //         pinSpacing: false,
  //         //       start: 'center center',
  //         // end: '+=600',
  //         // snap: 1,
  //       });
  //       // gsap.to(wrapper.children, {
  //       //   scale: "1.1",
  //       // });
  //       gsap.from(wrapper.children, {
  //         scale: "1.1",
  //         ease: Power3.easeOut,
  //         scrollTrigger: {
  //           trigger: wrapper,
  //           start: "top center",
  //           end: "top top",
  //           toggleActions: "play none reverse reset",
  //         },
  //       });
  //     });
  //     // let tops = panels.map((panel) =>
  //     //   ScrollTrigger.create({ trigger: panel, start: "top top" })
  //     // );
  //     // panels.forEach((panel, i) => {
  //     //   ScrollTrigger.create({
  //     //     trigger: panel,
  //     //     start: () =>
  //     //       panel.offsetHeight < window.innerHeight
  //     //         ? "top top"
  //     //         : "bottom bottom",
  //     //     pin: true,
  //     //     markers:true,
  //     //     pinSpacing: false,
  //     //   });
  //     // });
  //     // ScrollTrigger.create({
  //     //   snap: {
  //     //     snapTo: (progress, self) => {
  //     //       let panelStarts = tops.map((st) => st.start), // an Array of all the starting scroll positions. We do this on each scroll to make sure it's totally responsive. Starting positions may change when the user resizes the viewport
  //     //         snapScroll = gsap.utils.snap(panelStarts, self.scroll()); // find the closest one
  //     //       return gsap.utils.normalize(
  //     //         0,
  //     //         ScrollTrigger.maxScroll(window),
  //     //         snapScroll
  //     //       ); // snapping requires a progress value, so convert the scroll position into a normalized progress value between 0 and 1
  //     //     },
  //     //     duration: 0.5,
  //     //   },
  //     // });
  //   }, container);
  //   return () => ctx.revert();
  // }, []);

  return (
    <main className="home flex-col gap-6">
      <Transition />
      <HeroSection />
      <section ref={container} className="text-center py-6 sm:py-14 ">
        <div className="px-[9.5vw] mb-20">
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

        <div className="card card_1">
          <img
            className="h-screen object-cover w-full object-center"
            src={asset1}
            alt="people having fun"
            loading="lazy"
          />
        </div>
        <div className="card card_2">
          <img
            className="h-screen object-cover w-full object-top"
            src={asset2}
            alt="people having fun"
            loading="lazy"
          />
        </div>
        <div className="card card_3">
          <img
            className="h-screen object-cover w-full object-center"
            src={asset3}
            alt="people having fun"
            loading="lazy"
          />
        </div>
        <div className="card card_4">
          <img
            className="h-screen object-cover w-full"
            src={asset4}
            alt="people having fun"
            loading="lazy"
          />
        </div>
      </section>

      {/* What you get */}
      <Benefits />

      {/* Our events & activities */}
      {/* <div className="px-6 md:px-24 mb-28 "> */}

      <Link
        to="/activities"
        className="mb-28 mt-16 border text-center w-fit flex mx-auto border-[#EAECF0] py-2 rounded-[50px] px-8 md:px-[55px] text-[#EAECF0] text-base sm:text-xl md:text-2xl"
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
      <form onSubmit={handleSubscribe} className="pt-28 px-[9.5vw] text-center">
        <h2 className="text-center text-3xl md:text-[42px] leading-[100px] md:leading-[120px] tracking-tight capitalize mb-5">
          Join Magno’s newsletter!
        </h2>
        <p className="text-base md:text-xl text-[#D0D5DD] mb-8">
          Get news and updates delivered to your mailbox.
        </p>
        <input
          type="email"
          name="user_email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Your email address"
          className="w-full max-w-[360px] mx-auto outline-none text-[#475467] placeholder:text-[#475467] bg-[#FEF3F2] shadow-[0px_1px_2px] shadow-[rgba(16, 24, 40, 0.05)] px-[14px] py-2 md:py-3 rounded-lg"
        />
        <button
          type="submit"
          disabled={email === ""}
          className="px-[62.5px] block w-fit mx-auto bg-[#EF5B44] rounded-[30px] py-3 mt-8 "
        >
          Subscribe
        </button>
      </form>
      <Contact />
    </main>
  );
}
