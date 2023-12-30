import Link from "next/link"
import { PageInfos, PageInfo } from "../lib/definitions"

export default function NavBar() {
  return(
  <div className="drawer drawer-end">
    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
    {/* Navbar */}
    <div className="drawer-content flex flex-col">
      <div className="w-full navbar bg-base-300">
        <div className="flex-1 px-2 mx-2">TSKaigi</div>
        <div className="flex-none hidden lg:block">
          <ul className="menu menu-horizontal">
            {PageInfos.map((link: PageInfo) => (
              <li key={link.index}>
                <Link href={link.href}>
                  {link.name}
                </Link>
              </li>
            ))}
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
    <div className="drawer-side">
      <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
      <ul className="menu p-4 w-80 min-h-full bg-base-200">
        {/* Sidebar content here */}
        {PageInfos.map((link: PageInfo) => (
              <li key={link.index}>
                <Link href={link.href}>
                  {link.name}
                </Link>
              </li>
            ))}
      </ul>
    </div>
  </div>
  )
}