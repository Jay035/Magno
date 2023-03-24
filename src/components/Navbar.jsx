import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export function Navbar() {
  const [menuState, setMenuState] = useState(false);

  return (
    <nav className="flex justify-between items-center tracking-tight w-full gap-x-12 py-4 px-8 md:px-10">
      <section>
        <Link to="/">
          <h1 className="text-2xl font-semibold w-fit">Magno</h1>
        </Link>
      </section>
      <section
        className={`${
          menuState ? `left-0 px-8 pt-9 gap-6` : `-left-full lg:left-0`
        } absolute top-0 lg:relative h-screen lg:h-fit w-full lg:w-fit ease-in-out flex flex-col lg:flex-row lg:gap-12 lg:justify-between lg:items-center text-base md:text-lg`}
      >
        {/* close button */}
        <span className="mb-2 cursor-pointer lg:hidden"></span>

        <NavLink
          to="/"
          exact
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
      </section>

      {/* CTA button */}
      <NavLink
        to="/postJob"
        activeStyle={{ color: "#ffffff" }}
        exact
        className=" hidden lg:inline-block  bg-[#febf4d] text-black px-6 py-[10px] rounded hover:bg-[#febf4d]/75"
      >
        Login
      </NavLink>
      <div class="flex flex-col gap-[4px] cursor-pointer md:hidden">
        <span className="w-7 h-[3px] bg-white block"></span>
        <span className="w-7 h-[3px] bg-white block"></span>
        <span className="w-7 h-[3px] bg-white block"></span>
      </div>
    </nav>
  );
}
