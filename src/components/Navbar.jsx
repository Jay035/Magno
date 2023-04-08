import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "../config/config";
import FormValidation from "../formValidation/FormValidation";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { logOut } = FormValidation();

  return (
    <nav className=" flex justify-between items-center bg-[#11141d] tracking-tight w-full gap-x-12 py-6 px-8 sm:px-14 xl:px-20">
      <section>
        <Link to="/">
          <h1 id="logo" className="text-2xl font-semibold w-fit">
            Magno
          </h1>
        </Link>
      </section>
      <section
        className={`${
          menuOpen
            ? `left-0 px-8 pt-8 gap-6 z-40 ease-out lg:pt-0`
            : `-left-full opacity-0 lg:opacity-100 lg:left-0`
        } absolute top-0 bg-[#11141d] transition-all duration-100 lg:bg-transparent lg:relative h-screen lg:h-fit w-full lg:w-fit ease-in-out flex flex-col lg:flex-row lg:gap-12 lg:justify-between lg:items-center text-base md:text-lg`}
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
          <p
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen((prevState) => !prevState);
            }}
          >
            <NavLink
              to="/"
              className="text-[#b8b6b6] w-fit transition-colors hover:font-bold"
            >
              Home
            </NavLink>
          </p>
          <p
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen((prevState) => !prevState);
            }}
          >
            <NavLink
              to="/aboutUs"
              className="text-[#b8b6b6] w-fit transition-colors hover:font-bold"
            >
              About us
            </NavLink>
          </p>
          <p
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen((prevState) => !prevState);
            }}
          >
            <NavLink
              to="/events"
              className="text-[#b8b6b6] w-fit transition-colors hover:font-bold"
            >
              Events
            </NavLink>
          </p>
          <p
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen((prevState) => !prevState);
            }}
          >
            <NavLink
              to="/aboutUs"
              className="text-[#b8b6b6] w-fit transition-colors hover:font-bold"
            >
              Blog
            </NavLink>
          </p>
          <p
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen((prevState) => !prevState);
            }}
          >
            <NavLink
              to="/aboutUs"
              className="text-[#b8b6b6] w-fit transition-colors hover:font-bold"
            >
              Contact
            </NavLink>
          </p>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col items-center mt-6 gap-8 lg:hidden">
          {auth.currentUser && (
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-4">
                <img
                  className="w-10 h-10 rounded-full"
                  src={auth?.currentUser?.photoURL}
                  alt="profile pic"
                />
                <p className="text-white">
                  {auth.currentUser.displayName || auth.currentUser.email}
                </p>
              </div>
              <p
                onClick={(e) => {
                  logOut();
                  setMenuOpen((prevState) => !prevState);
                }}
                className="bg-[#ef5b44] w-28 text-center text-white px-2 py-[10px] rounded hover:bg-transparent cursor-pointer"
              >
                SIGN OUT
              </p>
            </div>
          )}
          {!auth.currentUser && (
            <div className="flex flex-col items-center gap-8">
              <p
                onClick={(e) => {
                  e.preventDefault();
                  setMenuOpen((prevState) => !prevState);
                }}
              >
                <NavLink
                  to="/login"
                  activestyle={{ color: "#ffffff" }}
                  className="border border-[#ef5b44] w-28 text-center text-white px-6 py-[10px] rounded hover:bg-[#ef5b44]/75"
                >
                  Login
                </NavLink>
              </p>
              <p
                onClick={(e) => {
                  e.preventDefault();
                  setMenuOpen((prevState) => !prevState);
                }}
              >
                <NavLink
                  to="/register"
                  activestyle={{ color: "#ffffff" }}
                  className="border border-[#ef5b44] bg-[#ef5b44] w-28 text-center text-white px-6 py-[10px] rounded hover:bg-transparent"
                >
                  Sign up
                </NavLink>
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA buttons */}
      <div className="gap-4 hidden lg:flex">
        {auth.currentUser && (
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4">
              <img
                className="w-10 h-10 rounded-full"
                src={auth?.currentUser?.photoURL}
                alt="profile pic"
              />
              <p className="text-white">
                {auth?.currentUser?.displayName || auth?.currentUser?.email}
              </p>
            </div>
            <p
              onClick={(e) => {
                logOut();
                setMenuOpen((prevState) => !prevState);
              }}
              className="bg-[#ef5b44] w-28 text-center text-white px-2 py-[10px] rounded hover:bg-transparent cursor-pointer"
            >
              SIGN OUT
            </p>
          </div>
        )}
        {!auth.currentUser && (
          <div className="flex items-center gap-4">
            <p
              onClick={(e) => {
                e.preventDefault();
                setMenuOpen((prevState) => !prevState);
              }}
            >
              <NavLink
                to="/login"
                activestyle={{ color: "#ffffff" }}
                className="border border-[#ef5b44] w-28 text-center text-white px-6 py-[10px] rounded hover:bg-[#ef5b44]/75"
              >
                Login
              </NavLink>
            </p>
            <p
              onClick={(e) => {
                e.preventDefault();
                setMenuOpen((prevState) => !prevState);
              }}
            >
              <NavLink
                to="/register"
                activestyle={{ color: "#ffffff" }}
                className="border border-[#ef5b44] bg-[#ef5b44] w-28 text-center text-white px-6 py-[10px] rounded hover:bg-transparent"
              >
                Sign up
              </NavLink>
            </p>
          </div>
        )}
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
