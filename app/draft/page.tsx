import Link from "next/link";
import { HiExternalLink } from "react-icons/hi";
import { SponsorLogosSection } from "../components/SponsorLogosSection";
import { NavigateAnchorOnFirstRender } from "../functional/navigate-anchor-on-first-render";
import Container from "../ui/container";

const pageAnchors = {
  news: "news",
  ticketInfo: "ticket-info",
  sponsor: "sponsor",
};

export default function DraftTopPage() {
  return (
    <>
      <NavigateAnchorOnFirstRender />
      <div className="bg-white">
        <img
          src="/banner.jpg"
          className="mx-auto h-screen max-h-[30vh] object-cover md:max-h-[55vh] lg:max-h-[60vh]"
          alt="banner image"
        />
      </div>
      <Container>
        <div className="mx-auto my-8 max-w-4xl pb-20">
          <div className="mb-10 lg:my-20 lg:mb-32">
            <div className="text-info-contents mx-auto my-6 max-w-5xl text-left leading-9 sm:leading-loose lg:text-xl ">
              TSKaigiは、
              <span className="text-2xl text-accent">
                日本最大級のTypeScriptをテーマとした技術カンファレンス
              </span>
              です。
              <br />
              コロナ禍で様々なオフラインイベントが打撃を受ける中、TypeScriptを扱うエンジニアが会場で集まる機会は失われていきました。
              <br />
              新型コロナウイルスが落ち着いた今、各所で蓄積されたノウハウが日の目を浴び、より生き生きとTSエンジニアが働ける世界を目指して、TSKaigiを開催します。
            </div>
            <div className="mb-5 mt-10 text-center text-2xl font-bold">開催: 2024年5月11日</div>
            <div className="m-auto text-center text-xl font-bold">
              <p>
                <span>
                  会場：
                  <a
                    className="link link-primary inline-block items-center gap-2 text-base sm:text-xl"
                    href="https://maps.app.goo.gl/Zwff1Z3yCu32pNHz6"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    中野セントラルパーク カンファレンス
                    <HiExternalLink className="ml-2 inline-block" />
                  </a>
                </span>
              </p>
            </div>
          </div>
          <div className="my-8 flex h-32 flex-col items-center justify-center gap-4 lg:flex-row lg:gap-8">
            <Link href="/sponsor" className="w-full max-w-xs">
              <div className="btn btn-accent w-full bg-gradient-to-r from-accent to-[#FFCDA8] text-center lg:btn-lg hover:opacity-90">
                スポンサー募集
              </div>
            </Link>
            <Link href="/call-for-proposals" className="w-full max-w-xs">
              <div className="btn btn-accent w-full bg-gradient-to-r from-accent to-[#FFCDA8] text-center lg:btn-lg hover:opacity-90">
                プロポーザル募集
              </div>
            </Link>
          </div>
          <div className="my-5">
            <h2
              id={pageAnchors.news}
              className="my-10 scroll-mt-20 border-l-4 pl-2 text-xl lg:text-3xl"
            >
              <a href={`#${pageAnchors.news}`}>最新情報</a>
            </h2>
            <div className="text-info-contents mx-auto my-6 max-w-5xl text-left lg:text-xl">
              <a
                className="link link-primary pl-1"
                rel="noopener noreferrer"
                target="_blank"
                href="https://twitter.com/tskaigi"
              >
                TSKaigi公式アカウント
                <HiExternalLink className="ml-1 inline-block" />
              </a>
              で最新の情報を発信しています。
              <br />
              フォローやリツイートでの参加表明・応援をお願いします。
            </div>
          </div>
          <div className="my-5">
            <h2
              id={pageAnchors.ticketInfo}
              className="my-10 scroll-mt-20 border-l-4 pl-2 text-xl lg:text-3xl"
            >
              <a href={`#${pageAnchors.ticketInfo}`}>チケット情報</a>
            </h2>
            <div className="text-info-contents mx-auto my-6 max-w-5xl text-left lg:text-xl">
              チケット販売は3月頃を予定しています。
              <br />
              また、開始時には公式SNSでも告知を予定しています。もうしばらくお待ち下さい。
            </div>
          </div>
        </div>
      </Container>
      <SponsorLogosSection anchor={pageAnchors.sponsor} showDraft />
    </>
  );
}
