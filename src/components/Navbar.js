"use client";
import Image from "next/image";
import Link from "next/link";
import tea from "../../public/tea.gif";
import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  const [dropdown, setDropDown] = useState(false);

  return (
    <nav className="bg-black flex flex-col md:flex-row md:items-center justify-between px-6 md:px-10 py-3 md:py-2 md:h-16 w-full">
      {/* Logo Section */}
      <div className="logo flex items-center justify-between w-full md:w-auto">
        <div className="flex flex-row items-center gap-2">
          <Image className="invert" src={tea} width={40} height={40} alt="Tea img" />
          <Link href={"/"} className="cursor-pointer text-white font-medium text-lg">
            Get me a chai
          </Link>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-3 md:mt-0 gap-2">
        {session ? (
          <div className="relative flex flex-col md:flex-row md:items-center gap-4">
            {/* Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropDown(!dropdown)}
                onBlur={() => {
                  setTimeout(() => {
                    setDropDown(false);
                  }, 200);
                }}
                id="dropdownHoverButton"
                data-dropdown-toggle="dropdownHover"
                data-dropdown-trigger="hover"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                type="button"
              >
                Welcome {session.user.email}
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <div
                id="dropdownHover"
                className={`z-10 ${
                  dropdown ? "" : "hidden"
                } left-0 md:left-40 mt-2 bg-white divide-y absolute divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownHoverButton"
                >
                  <li>
                    <Link
                      href={"/dashboard"}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/${session.user.name}`}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Your Page
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"#"}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"#"}
                      onClick={() => (window.confirm("Do you want to logout?") ? signOut() : "")}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Sign out
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Logout Button */}
            <Link href={"/login"}>
              <button
                onClick={() => {
                  window.confirm("Do you want to logout?") ? signOut() : "";
                }}
                type="button"
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Logout
              </button>
            </Link>
          </div>
        ) : (
          <Link href={"/login"}>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
