import img from "../assets/partnership.jpg";

export default function TermsAndConditions() {
  return (
      <main>
        <div className="px-6 sm:px-14 md:px-20 xl:px-[270px] mb-8">
          <section>
            <h2 className="text-center text-3xl md:text-[42px] leading-[100px] md:leading-[120px] tracking-tight capitalize mb-5">
              Terms and Conditions
              <span className="p-[3px] text-[1px] ml-[2px] mb-[1px] bg-[#EF5B44]"></span>
            </h2>
            <p className="text-base md:text-xl text-[#D0D5DD] mb-8">
              Last updated: April 28, 2023
            </p>
            <p className="text-base md:text-xl text-[#D0D5DD] mb-8">
              Please read these terms and conditions carefully before using Our
              Service.
            </p>
          </section>
          <section>
            <h1>Interpretation and Definitions</h1>
            {/* interpretation */}
            <div className="">
              <h4>Interpretation</h4>
              <p>
                The words of which the initial letter is capitalized have
                meanings defined under the following conditions. The following
                definitions shall have the same meaning regardless of whether
                they appear in singular or in plural.
              </p>
            </div>
            {/* Definitions */}
            <div className="">
              <h4>Definitions</h4>
              <div className="">
                <p>For the purposes of these Terms and Conditions:</p>
                <ul>
                  <li>
                    <span>Affiliate </span> means an entity that controls, is
                    controlled by or is under common control with a party, where
                    "control" means ownership of 50% or more of the shares,
                    equity interest or other securities entitled to vote for
                    election of directors or other managing authority.
                  </li>
                  <li>
                    <span>Company</span> (referred to as either "the Company",
                    "We", "Us" or "Our" in this Agreement) refers to Magno{" "}
                  </li>
                  <li>
                    <span>Device</span> means any device that can access the
                    Service such as a computer, a cellphone or a digital tablet.
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {/* <section>
            <img src={img} alt="friends laughing" />
          </section> */}
        </div>
      </main>
  );
}
