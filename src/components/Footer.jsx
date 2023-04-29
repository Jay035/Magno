import { Link } from "react-router-dom";

// import { BsTwitter } from "react-icons";
export default function Footer() {
  return (
    <section className="py-12 px-6 md:px-14 xl:px-[130px] text-center flex flex-col gap-12 border-t border-[#7a7c8670]">
      {/* footer logo */}
      <h1 id="logo" className="text-2xl">
        <Link to="/">Magno</Link>
      </h1>

      <div className="flex flex-wrap gap-4 justify-center">
        <Link to="/aboutUs">About us</Link>
        <a href="#">Terms of service</a>
        <a href="#">Privacy policy </a>
        <Link to="/partnerships">Partnerships</Link>
        {/* <a href="#">Advertise</a> */}
        <a href="#">Contact us</a>
      </div>

      {/* (Facebook, Instagram and Twitter logos)  */}
      {/* <BsTwitter /> */}
      <div className="flex items-center justify-center gap-4">
        <i className="ri-twitter-fill text-2xl"></i>
        <i className="ri-facebook-circle-fill text-2xl"></i>
        <i className="ri-instagram-fill text-2xl"></i>
      </div>

      <p className="font-medium mt-3">©2023 Magno. All rights reserved </p>
    </section>
  );
}
