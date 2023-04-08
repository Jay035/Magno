import illustration1 from "../assets/illustration-1.png";
import illustration2 from "../assets/illustration-2.png";
import illustration3 from "../assets/illustration-3.png";
import illustration4 from "../assets/illustration-4.png";

export function Benefits() {
  return (
    <div className=" py-6 px-6 md:px-14 bg-[#1d2029]">
      <h2 className="text-center text-2xl capitalize mb-6 font-medium">
        What you get
      </h2>
      <div className="grid gap-6 lg:gap-16 md:grid-cols-2 py-10 mx-6 rounded-lg">
        <div className="pt-4 pb-10 border-b border-[#7a7c8670] md:border-0">
          <img src={illustration1} alt="illustration" className="w-32" />
          <h5 className="text-lg text-white my-1 Raleway font-medium">
            Meet new people{" "}
          </h5>
          <p className="text-sm text-[#7a7c86]">
            Whether you're looking to expand your social circle, network with
            like-minded professionals, or simply make new friends,{" "}
            <span className="text-white/70 font-medium">Magno </span>
            makes it easy to connect with people from all walks of life.{" "}
          </p>
        </div>
        <div className="pt-4 pb-10 border-b border-[#7a7c8670] md:border-0">
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
        </div>
      </div>
    </div>
  );
}
