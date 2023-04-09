import userIcon from '../assets/user-icon.svg';
import zap from '../assets/zap.svg';
import briefcase from '../assets/briefcase.svg';

export function HowItWorks() {
  return (
    <div className="mt-4 py-6 px-6 md:px-14 ">
      <h2 className="text-3xl lg:text-[64px] text-[#EAECF0] text-center mb-2">
        HOW IT WORKS{" "}
        <span className="p-[3px] text-[1px] ml-[2px] mb-[1px] bg-[#EF5B44]"></span>
      </h2>
      <div className="grid gap-8 lg:gap-16 sm:grid-cols-3 items-start justify-center py-10 mx-6 rounded-lg">
        {/* card 1 */}
        <div className="py-2 text-center flex items-center flex-col">
          <img src={userIcon} alt="" />
          <h2 className="text-white mt-8">Register</h2>
          <p className="text-white/80 text-xs">
            {" "}
            Register by filling the sign up form
          </p>
        </div>
        {/* card 2 */}
        <div className=" py-2 text-center flex items-center flex-col">
        <img src={zap} alt="" />
          <h2 className="text-white mt-8">Explore</h2>
          <p className="text-white/80 text-xs">
            Explore events and get a ticket
          </p>
        </div>
        {/* card 3 */}
        <div className=" py-2 text-center flex items-center flex-col">
          {/* <div className="bg-[#262932] flex justify-center items-center mb-4 py-4 max-w-[200px] mx-auto">
            <img src={formIcon} alt="form icon" className="w-12" />
          </div> */}
          {/* <span>Step Three</span> */}
          <img src={briefcase} alt="" />
          <h2 className="text-white mt-8"> Access our events and activities</h2>
          <p className="text-white/80 text-xs">
            Enjoy access to curated social activities and unlimited fun.
          </p>
        </div>
      </div>
    </div>
  );
}
