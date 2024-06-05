"use client";

import Image from "next/image";
import { useState } from "react";
import Hamburger from "./Hamburger";
import Links, { HomeLink } from "./navlinks";
import Link from "next/link";
import EximiusLogo from '../../public/images/Eximius-logo.png'
import NSRCELLogo from '../../public/images/NSRCEL.png'


export default function Navbar({ home = true }) {
  const [close, setClose] = useState(false);
  const toggleClose = () => setClose(!close);

  return (
    <nav className="backdrop-saturate-180 border-b-1 sticky top-0 z-50 flex h-[75px] w-screen border-white border-opacity-100 bg-black/30 backdrop-blur-xl lg:px-9">
      <div className="absolute left-0 top-0 z-50 flex h-[75px] w-full flex-row items-center justify-between px-3 lg:justify-around" style={{ background: 'black' }}>
        <span>  
          <a href="https://eximius2024.netlify.app/">
            <Image
              src={EximiusLogo}
              height={65}
              width={65}
              loading="eager"
              alt="EXIMIUS, IIMB"
            />
          </a>
        </span>
        <div className="lg:hidden" onClick={toggleClose}>
          <Hamburger close={close} />
        </div>
        <ul className="hidden gap-12 lg:flex">
          {home ? <Links /> : <HomeLink />}
        </ul>
        <div class="hidden lg:block"><button class="pointer-events w-[165px] select-none rounded-[3px] bg-grey font-semibold text-white "><a class="flex h-full w-full justify-center px-4 py-2 lg:py-1" target="_blank" href="https://unstop.com/college-fests/eximius-2024-iim-bangalores-entrepreneurship-summit-indian-institute-of-management-iim-bangalore-245251">Register Now</a></button></div>
      </div>
      <div className="absolute left-0 top-0 z-50 flex h-[75px] w-full flex-row items-center justify-between px-3 lg:justify-around" style={{ background: 'black' }}>
        <span>  
          <a href="https://nsrcel.org/">
            <Image
              src={NSRCELLogo}
              height={65}
              width={65}
              loading="eager"
              alt="EXIMIUS, IIMB"
            />
          </a>
        </span>
        <div className="lg:hidden" onClick={toggleClose}>
          <Hamburger close={close} />
        </div>
        <ul className="hidden gap-12 lg:flex">
          {home ? <Links /> : <HomeLink />}
        </ul>
        <div class="hidden lg:block"><button class="pointer-events w-[165px] select-none rounded-[3px] bg-grey font-semibold text-white "><a class="flex h-full w-full justify-center px-4 py-2 lg:py-1" target="_blank" href="https://unstop.com/college-fests/eximius-2024-iim-bangalores-entrepreneurship-summit-indian-institute-of-management-iim-bangalore-245251">Register Now</a></button></div>
      </div>
      {/* MOBILE NAV */}
      <div
        className={`sticky left-0 top-0 z-40 flex h-screen w-screen flex-col items-center justify-center gap-12 bg-black duration-700 ease-in-out lg:hidden ${close ? "nav-close" : "nav-open"
          }`}
      >
        <ul className="flex flex-col gap-6 text-center">
          {home ? <Links setClose={setClose} /> : <HomeLink />}
        </ul>
      </div>
    </nav>
  );
}

