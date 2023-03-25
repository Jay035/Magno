import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center tracking-tight w-full gap-x-12 py-6 px-8 md:px-10">
      <section>
        <Link to="/">
          <h1 className="text-2xl font-semibold w-fit">Magno</h1>
        </Link>
      </section>
      <section
        className={`${
          menuOpen ? `left-0 px-8 pt-8 gap-6 z-40 ease-out duration-100 lg:pt-0` : `-left-full lg:left-0`
        } absolute top-0 bg-black lg:bg-transparent lg:relative h-screen lg:h-fit w-full lg:w-fit ease-in-out flex flex-col lg:flex-row lg:gap-12 lg:justify-between lg:items-center text-base md:text-lg`}
      >
        {/* close button */}
        <div
          className="flex flex-col gap-1 cursor-pointer w-fit ml-auto lg:hidden"
          //   className="mb-2 text-2xl cursor-pointer w-fit ml-auto lg:hidden"
          onClick={(e) => {
            e.preventDefault();
            setMenuOpen((prevState) => !prevState);
          }}
        >
          <span className="w-7 h-[3px] bg-white block rotate-[45deg] translate-y-2"></span>
          <span className="w-7 h-[3px] bg-white block rotate-[495deg] translate-y-1"></span>
        </div>
        <div className="flex flex-col items-center gap-6 mt-40 lg:mt-0 lg:flex-row">
          <NavLink
            to="/"
            className="text-[#b8b6b6] w-fit transition-colors hover:font-bold"
          >
            Home
          </NavLink>
          <NavLink
            to="/aboutUs"
            className="text-[#b8b6b6] w-fit transition-colors hover:font-bold"
          >
            About us
          </NavLink>
          <NavLink
            to="/aboutUs"
            className="text-[#b8b6b6] w-fit transition-colors hover:font-bold"
          >
            Blog
          </NavLink>
          <NavLink
            to="/aboutUs"
            className="text-[#b8b6b6] w-fit transition-colors hover:font-bold"
          >
            Contact
          </NavLink>
        </div>
        {/* CTA buttons */}
      <div className="flex flex-col items-center mt-4 gap-4 lg:hidden">
        <NavLink
          to="/login"
          activestyle={{ color: "#ffffff" }}
          className="border border-[#febf4d] w-28 text-center text-white px-6 py-[10px] rounded hover:bg-[#febf4d]/75"
        >
          Login
        </NavLink>
        <NavLink
          to="/signup"
          activestyle={{ color: "#ffffff" }}
          className="  bg-[#febf4d] w-28 text-center text-black px-6 py-[10px] rounded hover:bg-[#febf4d]/75"
        >
          Sign up
        </NavLink>
      </div>
      </section>

      {/* CTA buttons */}
      <div className="gap-4 hidden lg:flex">
        <NavLink
          to="/login"
          activestyle={{ color: "#ffffff" }}
          className=" border border-[#febf4d] text-white px-6 py-[10px] rounded hover:bg-[#febf4d]/75"
        >
          Login
        </NavLink>
        <NavLink
          to="/signup"
          activestyle={{ color: "#ffffff" }}
          className="   bg-[#febf4d] text-black px-6 py-[10px] rounded hover:bg-[#febf4d]/75"
        >
          Sign up
        </NavLink>
      </div>

      <div
        className="flex flex-col gap-1 cursor-pointer lg:hidden"
        onClick={(e) => {
          e.preventDefault();
          setMenuOpen((prevState) => !prevState);
        }}
      >
        <span className="w-7 h-[3px] bg-white block"></span>
        <span className="w-7 h-[3px] bg-white block"></span>
        <span className="w-7 h-[3px] bg-white block"></span>
      </div>
    </nav>
  );
}
