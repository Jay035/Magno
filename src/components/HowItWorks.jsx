import formIcon from "../assets/form icon.png";

export function HowItWorks() {
  return (
    <div className="mt-4 py-6 px-6 md:px-24 lg:px-32 bg-[#1d2029]">
      <h2 className="text-center text-2xl capitalize mb-4 font-medium">How it works</h2>
      <div className="grid gap-4 sm:grid-cols-3 items-start justify-center py-10 mx-6 rounded-lg">
        {/* card 1 */}
        <div className="py-2 text-center">
          <div className="bg-[#262932] flex justify-center items-center mb-4 py-4 max-w-[200px] mx-auto">
            <img src={formIcon} alt="form icon" className="w-12" />
          </div>
          {/* <span>Step One</span> */}
          <h2 className="text-white">Register</h2>
          <p className="text-white/80 text-xs"> Register by filling the sign up form</p>
        </div>
        {/* card 2 */}
        <div className=" py-2 text-center">
          <div className="bg-[#262932] flex justify-center items-center mb-4 py-4 max-w-[200px] mx-auto">
            <img src={formIcon} alt="form icon" className="w-12" />
          </div>
          {/* <span>Step Two</span> */}
          <h2 className="text-white">Explore</h2>
          <p className="text-white/80 text-xs">2.	Explore events and get a ticket</p>
        </div>
        {/* card 3 */}
        <div className=" py-2 text-center">
          <div className="bg-[#262932] flex justify-center items-center mb-4 py-4 max-w-[200px] mx-auto">
            <img src={formIcon} alt="form icon" className="w-12" />
          </div>
          {/* <span>Step Three</span> */}
          <h2 className="text-white"> Access our events and activities</h2>
          <p className="text-white/80 text-xs">3.	Enjoy access to curated social activities and unlimited fun.</p>
        </div>
      </div>
    </div>
  );
}
