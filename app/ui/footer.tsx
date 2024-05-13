import Link from "next/link";
import { HiExternalLink } from "react-icons/hi";
import { pageInfos } from "../lib/data";
import { PageInfo } from "../lib/definitions";

export default function Footer() {
  return (
    <footer className="footer bg-gradient-to-b from-neutral to-[#0f71d3] p-10 text-base-content">
      <aside className="link-hover">
        <a href="https://association.tskaigi.org" rel="noopener noreferrer" target="_blank">
          <img src="/logo.svg" className="my-4 w-36" alt="logo image" />
          一般社団法人TSKaigi Association
        </a>
      </aside>
      <nav>
        <header className="footer-title">ページ一覧</header>
        {pageInfos.map(
          (link: PageInfo) =>
            link.showFooter && (
              <Link key={link.index} href={link.href} className="link-hover pl-2">
                {link.title}
              </Link>
            ),
        )}
      </nav>
      <nav>
        <header className="footer-title">公式アカウント</header>
        <Link
          href={"https://twitter.com/tskaigi"}
          rel="noopener noreferrer"
          target="_blank"
          className="link-hover flex items-center gap-2 pl-2"
        >
          公式X(Twitter)
          <HiExternalLink />
        </Link>
        <Link
          href={"https://tskaigi.hatenablog.com/"}
          rel="noopener noreferrer"
          target="_blank"
          className="link-hover flex items-center gap-2 pl-2"
        >
          公式ブログ
          <HiExternalLink />
        </Link>
      </nav>
    </footer>
  );
}
