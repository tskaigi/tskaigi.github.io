import Link from "next/link";
import { PageInfo } from "../lib/definitions";
import { pageInfos, ticketURL } from "../lib/data";
import { HiExternalLink } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="footer p-10 text-base-content bg-gradient-to-b to-[#0f71d3] from-neutral">
      <aside className="link-hover">
        <a
          href="https://association.tskaigi.org"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src="/logo.svg" className="w-36 my-4" alt="logo image" />
          一般社団法人TSKaigi Association
        </a>
      </aside>
      <nav>
        <header className="footer-title">ページ一覧</header>
        {pageInfos.map((link: PageInfo) => (
          <Link key={link.index} href={link.href} className="pl-2 link-hover">
            {link.title}
          </Link>
        ))}
      </nav>
      <nav>
        <header className="footer-title">チケット購入</header>
        <Link
          href={ticketURL}
          rel="noopener noreferrer"
          target="_blank"
          className="flex items-center gap-2 pl-2 text-accent link-hover"
        >
          チケット購入
          <HiExternalLink />
        </Link>
      </nav>
      <nav>
        <header className="footer-title">公式アカウント</header>
        <Link
          href={"https://twitter.com/tskaigi"}
          rel="noopener noreferrer"
          target="_blank"
          className="flex items-center gap-2 pl-2 link-hover"
        >
          公式X(Twitter)
          <HiExternalLink />
        </Link>
        <Link
          href={"https://tskaigi.hatenablog.com/"}
          rel="noopener noreferrer"
          target="_blank"
          className="flex items-center gap-2 pl-2 link-hover"
        >
          公式ブログ
          <HiExternalLink />
        </Link>
      </nav>
    </footer>
  );
}
