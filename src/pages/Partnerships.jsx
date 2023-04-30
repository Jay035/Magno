import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import img from "../assets/partnership.jpg";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <main>
        <div className="px-6 sm:px-14 md:px-20 xl:px-[270px] mb-8">
          <section>
            <h2 className="text-center text-3xl md:text-[42px] leading-[100px] md:leading-[120px] tracking-tight capitalize mb-5">
              Partnerships
              <span className="p-[3px] text-[1px] ml-[2px] mb-[1px] bg-[#EF5B44]"></span>
            </h2>
            <p className="text-base md:text-xl text-[#D0D5DD] mb-8">
              We look to work with brands that are looking to partner or provide
              sponsorship to drive our vision of connecting people. Please get
              in touch by sending an email to{" "}
              <a href="mailto:partnerships@magno.com">partnerships@magno.com</a>
            </p>
          </section>
          <section>
            <img src={img} alt="friends laughing" />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
