'use client'
import Link from "next/link"
import { PageInfo } from "../lib/definitions"
import { acountLink, pageInfos } from "../lib/data"

const closeSideBar = () => {
  const drawerElement = document.getElementById('my-drawer-3') as HTMLInputElement;
  if (drawerElement) {
    drawerElement.checked = false;
  }
}

export default function NavBar() {
  return (
    <div className="bg-base-200 z-50 text-base-content sticky top-0 h-16 w-full bg-gradient-to-tl from-base-300 from-80% to-base-100">
      <div className="drawer drawer-end z-50">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="w-full navbar">
            <div className="flex-1 px-2 mx-2"><Link href={"/"}><img src="/logo.svg" className="w-24"></img></Link></div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {pageInfos.map((link: PageInfo) => {
                  const LinkIcon = link.icon;
                  return link.showNavbar && (
                    <li key={link.index}>
                      <Link href={link.href}>
                        <LinkIcon className="w-5 h-5" />
                        {link.title}
                      </Link>
                    </li>
                  )
                })}
                {acountLink.map((link) => {
                  const LinkIcon = link.icon;
                  return link.showNavbar && (
                    <div  key={link.index} className={link.emphasis ? 'indicator text-accent' : ''}>
                      <li>
                        <Link
                          href={link.href}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <LinkIcon className="w-5 h-5" />
                          {link.title}
                        </Link>
                      </li>
                    </div>
                  )
                }
                )}
              </ul>
            </div>
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </label>
            </div>
          </div>
        </div>
        {/* Sidebar */}
        <div className="drawer-side overflow-x-hidden lg:hidden">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="bg-gradient-to-b from-[#363541] via-base-300 to-base-200 menu p-4 w-64 sm:w-80 min-h-full">
            {pageInfos.map((link: PageInfo) => {
              const LinkIcon = link.icon;
              return (
                link.showNavbar && <li key={link.index}>
                  <Link href={link.href} onClick={closeSideBar}>
                    <LinkIcon className="w-4 h-4" />
                    {link.title}
                  </Link>
                </li>
              )
            })}
            {acountLink.map((link) => {
                  const LinkIcon = link.icon;
                  return link.showNavbar && (
                    <div  key={link.index} className={link.emphasis ? 'indicator text-accent' : ''}>
                      <li>
                        <Link
                          href={link.href}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <LinkIcon className="w-4 h-4" />
                          {link.title}
                        </Link>
                      </li>
                    </div>
                  )
                }
                )}
          </ul>
        </div>
      </div>
    </div>
  )
}