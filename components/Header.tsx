"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import AppLogo from "@/components/AppLogo";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpenIs, setMobileMenuOpenIs] = useState<Boolean>(false);

  const toggleMobileMenu = () =>
    setMobileMenuOpenIs((mobileMenuOpenIs) => !mobileMenuOpenIs);

  return (
    <>
      <nav
        className={`py-2 ${
          mobileMenuOpenIs && "pb-0"
        } bg-white/50 backdrop-saturate-150 backdrop-blur-sm border-t-2 border-t-black border-b border-slate-900/10 sticky top-0`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <Link href="/" className="ml-4 text-slate-800 hover:text-slate-500">
            <AppLogo />
          </Link>
          <div className="flex gap-2 pr-4 md:pr-0">
            <button
              data-collapse-toggle="navbar-dropdown"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-800 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
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
            } w-full md:block md:w-auto mt-2 md:mt-0 px-5 md:px-0 bg-slate-100 md:bg-inherit border-t md:border-t-0 border-slate-900/10`}
            id="navbar-dropdown"
          >
            <ul className="flex flex-col font-medium md:px-4 md:p-0 md:space-x-4 md:flex-row">
              <li className="md:hidden">
                <span className="text-md uppercase font-extrabold text-slate-900 block py-4 md:py-2 md:px-2 rounded md:p-0">
                  Menu
                </span>
              </li>
              <li className="border-t border-slate-300 md:border-t-0">
                <Link
                  href="/"
                  className={`block py-4 md:py-2 md:px-2 rounded md:p-0 hover:text-green-500 ${
                    pathname === "/" && "font-extrabold theme-text-color"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li className="border-t border-slate-300 md:border-t-0">
                <Link
                  href="/about"
                  className={`block py-4 md:py-2 md:px-2 rounded md:p-0 hover:text-green-500 ${
                    pathname === "/about" && "font-extrabold theme-text-color"
                  }`}
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
