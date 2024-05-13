"use client";
import Link from "next/link";
import { accountLink, pageInfos } from "../lib/data";
import { PageInfo } from "../lib/definitions";

const closeSideBar = () => {
  const drawerElement = document.getElementById("my-drawer-3") as HTMLInputElement;
  if (drawerElement) {
    drawerElement.checked = false;
  }
};

export default function NavBar() {
  return (
    <div className="sticky top-0 z-50 h-16 w-full bg-base-200 bg-gradient-to-tl from-base-300 from-80% to-base-100 text-base-content">
      <div className="drawer drawer-end z-50">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="navbar w-full">
            <div className="mx-2 flex-1 px-2">
              <Link href={"/"}>
                <img src="/logo.svg" className="w-24" alt="logo"></img>
              </Link>
            </div>
            <div className="hidden flex-none lg:block">
              <ul className="menu menu-horizontal">
                {pageInfos.map((link: PageInfo) => {
                  const LinkIcon = link.icon;
                  return (
                    link.showNavbar && (
                      <li key={link.index}>
                        <Link href={link.href}>
                          <LinkIcon className="size-5" />
                          {link.title}
                        </Link>
                      </li>
                    )
                  );
                })}
                {accountLink.map((link) => {
                  const LinkIcon = link.icon;
                  return (
                    link.showNavbar && (
                      <div
                        key={link.index}
                        className={link.emphasis ? "indicator text-accent" : ""}
                      >
                        <li className="flex items-center">
                          <div className="relative flex items-center">
                            <Link
                              href={link.href}
                              rel="noopener noreferrer"
                              target="_blank"
                              className="flex items-center"
                            >
                              <LinkIcon className="size-5 relative mr-2" />
                              <span>{link.title}</span>
                            </Link>
                          </div>
                        </li>
                      </div>
                    )
                  );
                })}
              </ul>
            </div>
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block size-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
          </div>
        </div>
        {/* Sidebar */}
        <div className="drawer-side overflow-x-hidden lg:hidden">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu min-h-full w-64 bg-gradient-to-b from-[#363541] via-base-300 to-base-200 p-4 sm:w-80">
            {pageInfos.map((link: PageInfo) => {
              const LinkIcon = link.icon;
              return (
                link.showNavbar && (
                  <li key={link.index}>
                    <Link href={link.href} onClick={closeSideBar}>
                      <LinkIcon className="size-4" />
                      {link.title}
                    </Link>
                  </li>
                )
              );
            })}
            {accountLink.map((link) => {
              const LinkIcon = link.icon;
              return (
                link.showNavbar && (
                  <div key={link.index} className={link.emphasis ? "indicator text-accent" : ""}>
                    <li>
                      <Link href={link.href} rel="noopener noreferrer" target="_blank">
                        <LinkIcon className="size-4" />
                        {link.title}
                      </Link>
                    </li>
                  </div>
                )
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
