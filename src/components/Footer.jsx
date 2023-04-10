// import { BsTwitter } from "react-icons";
export default function Footer() {
  return (
    <section className="py-12 px-6 md:px-14 xl:px-[130px] text-center flex flex-col gap-8 border-t border-[#7a7c8670]">
      {/* footer logo */}
      <h1 id="logo" className="text-2xl">
        Magno
      </h1>

      <div className="flex flex-wrap gap-4 justify-center">
        <a href="#">About us</a>
        <a href="#">Terms of service</a>
        <a href="#">Privacy policy </a>
        <a href="#">Partnerships</a>
        {/* <a href="#">Advertise</a> */}
        <a href="#">Contact us</a>
      </div>

      {/* (Facebook, Instagram and Twitter logos)  */}
      {/* <BsTwitter /> */}

      <p className="font-medium">©2023 Magno. All rights reserved </p>
    </section>
  );
}
