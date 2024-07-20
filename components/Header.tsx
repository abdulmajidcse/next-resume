"use client";

import { useState } from "react";

export default function Header() {
  const [mobileMenuOpenIs, setMobileMenuOpenIs] = useState<Boolean>(false);

  const toggleMobileMenu = () =>
    setMobileMenuOpenIs((mobileMenuOpenIs) => !mobileMenuOpenIs);

  return (
    <>
      <nav className="pt-6 md:p-6 border-b border-slate-900/10">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <a
            href="./index.html"
            className="ml-4 md:ml-0 mb-8 md:mb-0 text-slate-800 hover:text-slate-500"
          >
            <span className="font-lato self-center text-2xl font-extrabold whitespace-nowrap">
              Abdul Majid
            </span>
          </a>
          <div className="flex gap-2 pr-4 md:pr-0 pb-8 md:pb-0 font-lato">
            <button
              data-collapse-toggle="navbar-dropdown"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-dropdown"
              aria-expanded="false"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`w-5 h-5 ${mobileMenuOpenIs && "hidden"}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                className={`w-5 h-5 ${!mobileMenuOpenIs && "hidden"}`}
              >
                <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" />
              </svg>
            </button>
          </div>
          <div
            className={`${
              !mobileMenuOpenIs && "hidden"
            } w-full md:block md:w-auto px-5 md:px-0 bg-slate-100 md:bg-inherit border-t md:border-t-0 border-slate-900/10`}
            id="navbar-dropdown"
          >
            <ul className="flex flex-col font-medium md:px-4 md:p-0 md:space-x-4 md:flex-row">
              <li className="md:hidden">
                <span className="font-lato text-md uppercase font-extrabold text-slate-900 block py-4 md:py-2 md:px-2 rounded md:p-0">
                  Menu
                </span>
              </li>
              <li>
                <a
                  href="./index.html"
                  className="block py-4 md:py-2 md:px-2 rounded md:p-0 border-t border-slate-900 md:border-t-0 hover:text-slate-500 font-extrabold"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="./socials.html"
                  className="block py-4 md:py-2 md:px-2 rounded md:p-0 border-t border-slate-900 md:border-t-0 hover:text-slate-500"
                >
                  Socials
                </a>
              </li>
              <li>
                <a
                  href="./projects.html"
                  className="block py-4 md:py-2 md:px-2 rounded md:p-0 border-t border-slate-900 md:border-t-0 hover:text-slate-500"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="./contact.html"
                  className="block py-4 md:py-2 md:px-2 rounded md:p-0 border-t border-slate-900 md:border-t-0 hover:text-slate-500"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
