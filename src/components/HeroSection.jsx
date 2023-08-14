import { Link } from "react-router-dom";
import heroImg from "../assets/hero-img.png";
import image1 from "../assets/image-1.jpg";
import image2 from "../assets/image-2.jpg";
import image3 from "../assets/image-3.jpg";
import { useEffect, useRef } from "react";
import { Power3, gsap } from "gsap";
import { useLayoutEffect } from "react";

export function HeroSection() {
  let hero = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".text", {
        opacity: 0,
        duration: 2,
        x: 100,
        stagger: {
          amount: 0.4,
        },
        ease: Power3,
      });
    }, hero);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={hero} className="relative grid w-full md:items-center gap-16 h-screen">
      <img
        src={heroImg}
        className="hero-img h-screen object-cover object-center w-full"
        alt="hero img"
      />
      {/* hero container */}
      <div className="hero-container absolute top-0 text-center h-screen px-[9.5vw] w-full mx-auto">
        <div className="max-w-2xl z-[999999] mx-auto mt-20 tracking-wide flex flex-col items-center gap-4 ">
          <h1
            className="text text-5xl xl:text-[110.667px] leading-[1.2] md:text-5xl xl:text-6xl xl:leading-snug text-white"
          >
            Experience the extraordinary{" "}
          </h1>
          <p
            className="text text-[17px] md:text-[32px] leading-normal text-white/80"
          >
            Magno brings together individuals who are looking to meet new
            people, make friends and have fun.
          </p>
          <Link
            to="/activities"
            className="text text-white px-8 bg-[#EF5B44] py-2 text-lg rounded-[50px] md:text-2xl mt-4 hover:bg-[#ef5b44]/75"
          >
            GET STARTED
          </Link>
        </div>
      </div>
    </section>
  );
}
