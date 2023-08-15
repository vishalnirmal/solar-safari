"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import classNames from "classnames";

export interface IHeaderProps {
  name: string;
}

const navItems = [
  {
    index: "00",
    name: "Home",
    href: "/",
  },
  {
    index: "01",
    name: "Destination",
    href: "/destination",
  },
  {
    index: "02",
    name: "Crew",
    href: "/crew",
  },
  {
    index: "03",
    name: "Technology",
    href: "/technology",
  },
];

const Header = ({ name }: IHeaderProps) => {
  const [showNavigation, setShowNavigation] = useState(false);

  return (
    <>
      <div className="absolute top-0 left-0 w-full z-[999] p-6 sm:p-0">
        {/* Mobile Header */}
        <div className="sm:hidden flex justify-between items-center">
          <Link href="/">
            <Image
              src="/assets/shared/logo.svg"
              width={40}
              height={40}
              alt="Logo"
            />
          </Link>
          <div
            onClick={(e) => {
              setShowNavigation(true);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
              <g fill="#D0D6F9" fill-rule="evenodd">
                <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
              </g>
            </svg>
          </div>
        </div>
        {/* Mobile navigation tab */}
        <div
          className={classNames(
            "h-[100vh] fixed top-0 right-0 z-[999] overflow-x-hidden transition-width ease-in-out duration-300",
            {
              "w-64": showNavigation,
              "w-0": !showNavigation,
            }
          )}
        >
          <div className="h-full px-8 py-40 relative flex gap-x-3 gap-y-8 justify-start items-start flex-col backdrop-blur-3xl">
            <Image
              src="/assets/shared/icon-close.svg"
              width={19}
              height={19}
              alt="close"
              className="fixed top-9 right-7"
              onClick={() => {
                setShowNavigation(false);
              }}
            />
            {navItems.map((nav, index) => (
              <Link
                key={index}
                href={nav.href}
                className="flex justify-start items-center gap-3 uppercase"
                onClick={() => {
                  setShowNavigation(false);
                }}
              >
                <p className="text-nav font-bold">{nav.index}</p>
                <p className="text-nav">{nav.name}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Tablet Header */}
        <div className="max-sm:hidden lg:hidden flex justify-between items-center pl-10">
          <Link href="/">
            <Image
              src="/assets/shared/logo.svg"
              width={48}
              height={48}
              alt="Logo"
            />
          </Link>
          <div className="flex gap-9 px-12 py-10 backdrop-blur-3xl bg-[rgba(255,255,255,0.04)]">
            {navItems.map((nav, index) => (
              <Link
                key={index}
                href={nav.href}
                className={classNames("text-nav uppercase relative", {
                  "after:absolute after:-bottom-10 after:left-0 after:h-1 after:w-full after:bg-space-white":
                    nav.name === name,
                })}
              >
                {nav.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop Header */}
        <div className="max-lg:hidden flex justify-between items-center pt-10 pl-14">
          <Link href="/" className="relative">
            <Image
              src="/assets/shared/logo.svg"
              width={48}
              height={48}
              alt="Logo"
              className="relative z-10"
            />
          </Link>
          <div className="relative miw-w-[58%] flex gap-9 px-32 py-10 backdrop-blur-3xl bg-[rgba(255,255,255,0.04)]">
            {navItems.map((nav, index) => (
              <Link
                key={index}
                href={nav.href}
                className={classNames(
                  "flex justify-start items-center gap-3 uppercase relative hover:after:absolute hover:after:-bottom-10 hover:after:left-0 hover:after:h-1 hover:after:w-full hover:after:bg-space-white hover:after:opacity-50",
                  {
                    "after:absolute after:-bottom-10 after:left-0 after:h-1 after:w-full after:bg-space-white":
                      nav.name === name,
                  }
                )}
              >
                <p className="text_nav font-bold">{nav.index}</p>
                <p className="text_nav">{nav.name}</p>
              </Link>
            ))}
            <div className="absolute w-[70%] max-w-[400px] top-[50%] right-[95%] h-[1px] bg-space-white" />
          </div>
        </div>
      </div>
      <div className="pt-[94px] sm:pt-[106px] lg:pt-[151px]" />
    </>
  );
};

export default Header;
