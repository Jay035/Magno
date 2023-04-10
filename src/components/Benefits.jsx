import illustration1 from "../assets/illustration-1.png";
import illustration2 from "../assets/illustration-2.png";
import illustration3 from "../assets/illustration-3.png";
import illustration4 from "../assets/illustration-4.png";

export function Benefits() {
  return (
    <div className=" pt-6 px-6 md:px-14 xl:px-[130px]">
      <h2 className="text-center leading-[100px] md:leading-[120px] text-2xl md:text-3xl text-[#EAECF0] capitalize">
        What you get <span className="p-[2px] text-[1px] ml-[4px] mb-[1px] bg-[#EF5B44]"></span>
      </h2>
      <div className="grid gap-4 text-center text-white">
        <div className=" border-t border-[#475467] ">
          <h5 className="text-[28px] lg:text-[52px] leading-[90px] md:leading-[120px]">
            Meet new people{" "}
          </h5>
        </div>
        <div className=" border-t border-[#475467]">
          <h5 className="text-[28px] lg:text-[52px] py-7 leading-[40px] md:py-0 md:leading-[120px]">
          Learn new skills and exchange ideas{" "}
          </h5>
        </div>
        <div className=" border-t border-[#475467] ">
          <h5 className="text-[28px] lg:text-[52px] leading-[90px] md:leading-[120px]">
          Build a network{" "}
          </h5>
        </div>
        <div className=" border-y border-[#475467] ">
          <h5 className="text-[28px] lg:text-[52px] leading-[90px] md:leading-[120px]">
          Relax and have lots of fun{" "}
          </h5>
        </div>
          {/* <p className="text-sm text-[#7a7c86]">
            Whether you're cd desktoplooking to expand your social circle, network with
            like-minded professionals, or simply make new friends,{" "}
            <span className="text-white/70 font-medium">Magno </span>
            makes it easy to connect with people from all walks of life.{" "}
          </p> */}
        {/* <div className="pt-4 pb-10 border-b border-[#7a7c8670] md:border-0">
          <img src={illustration2} alt="illustration" className="w-32" />
          <h5 className="text-lg text-white my-1 Raleway font-medium">
            Learn new skills and exchange ideas{" "}
          </h5>
          <p className="text-sm text-[#7a7c86]">
            No matter what your goals are,{" "}
            <span className="text-white/70 font-medium">Magno</span> can help
            you achieve them. Whether you're looking to explore a new hobby,
            improve your skills, or network with experts in your industry, we
            offer a wide range of resources and opportunities to help you
            succeed.
          </p>
        </div>
        <div className="pt-4 pb-10 border-b border-[#7a7c8670] md:border-0">
          <img
            src={illustration3}
            alt="illustration"
            className="w-32 h-32 object-contain object-center"
          />
          <h5 className="text-lg text-white my-1 Raleway font-medium">
            Build a network{" "}
          </h5>
          <p className="text-sm text-[#7a7c86]">
            <span className="text-white/70 font-medium">Magno</span> is the
            perfect place to connect with like-minded individuals and expand
            your professional circle. Join us today and start building the
            network you need to achieve your goals!
          </p>
        </div>
        <div className="pt-4 pb-0">
          <img src={illustration4} alt="illustration" className="w-32" />
          <h5 className="text-lg text-white my-1 Raleway font-medium">
            Relax and have lots of fun{" "}
          </h5>
          <p className="text-sm text-[#7a7c86]">
            <span className="text-white/70 font-medium">Magno</span> is the
            perfect place to unwind, explore new interests, and connect with
            others who share your passion for life. With engaging content,
            interactive activities, and a supportive community of members,
            you'll be able to expand your horizons and enjoy life to the
            fullest.
          </p>
        </div> */}
      </div>
    </div>
  );
}
