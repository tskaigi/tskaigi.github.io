import Link from "next/link";
import Container from "./ui/container";
import { HiExternalLink } from "react-icons/hi";
import { NavigateAnchorOnFirstRender } from "./functional/navigate-anchor-on-first-render";
import Cta from "./ui/cta";
import { ticketURL } from "./lib/data";
import { SponsorLogosSection } from "./components/SponsorLogosSection";

const pageAnchors = {
  news: 'news',
  programInfo: 'program-info',
  sponsor: 'sponsor',
}

export default function Home() {
  return (
    <>
      <NavigateAnchorOnFirstRender />
      <div className="bg-white">
        <img src="/banner.png" className="object-cover mx-auto h-screen max-h-[30vh] md:max-h-[55vh] lg:max-h-[60vh]" alt="banner image" />
      </div>
      <Container>
        <div className="relative isolate overflow-hidden">
          <div className="mx-auto max-w-7xl ">
            <div className="mx-auto max-w-4xl lg:pt-8">
              <div>
                <Link href={`#${pageAnchors.news}`} className="inline-flex space-x-6">
                  <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-400 ring-1 ring-inset ring-white">
                    新着情報
                  </span>
                  <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6">
                    2024-03-01 &gt;
                  </span>
                </Link>
              </div>
              <h1 className="mt-4 text-2xl font-bold tracking-tight text-accent">
                日本最大級の<br />TypeScriptをテーマとした技術カンファレンスへようこそ
              </h1>
              <p className="mt-6 text-lg leading-7">
                TSKaigiは、日本最大級のTypeScriptをテーマとした技術カンファレンスです。<br />
                コロナ禍で様々なオフラインイベントが打撃を受ける中、TypeScriptを扱うエンジニアが会場で集まる機会は失われていきました。<br />
                新型コロナウイルスが落ち着いた今、各所で蓄積されたノウハウが日の目を浴び、より生き生きとTSエンジニアが働ける世界を目指して、TSKaigiを開催します。
              </p>
              <div className="sm:flex">
                <Cta
                  mainLink={ticketURL}
                  mainLinkText="チケットを購入 →"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-4xl my-8 mx-auto pb-20">
          <div className="mb-10 lg:mt-20">
            
            <div className="text-2xl font-bold mb-5 text-center">
              開催: 2024年5月11日
            </div>
            <div className="text-xl font-bold m-auto text-center">
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
                    <HiExternalLink className="inline-block ml-2" />
                  </a>
                </span>
              </p>
            </div>
          </div>
          <div>
            <iframe
              className="w-full h-96 sm:h-96 md:h-96 lg:h-96 xl:h-96 2xl:h-96 rounded-md"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12959.124108748665!2d139.6616947!3d35.7070058!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f34668e0bc27%3A0x7d66caba722762c5!2z5Lit6YeO44K744Oz44OI44Op44Or44OR44O844Kv44Kr44Oz44OV44Kh44Os44Oz44K5!5e0!3m2!1sja!2sjp!4v1709223607334!5m2!1sja!2sjp"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="my-5">
            <h2 id={pageAnchors.news} className="text-xl lg:text-3xl my-10 border-l-4 pl-2 scroll-mt-20">
              <a href={`#${pageAnchors.news}`}>
                最新情報
              </a>
            </h2>
            <div className="mx-auto my-6 text-left lg:text-xl max-w-5xl text-info-contents sm:px-4">
              <a className="pl-1 link link-primary" rel="noopener noreferrer" target="_blank" href="https://twitter.com/tskaigi">
                TSKaigi公式アカウント
                <HiExternalLink className="inline-block ml-1" />
              </a>
              で最新の情報を発信しています。<br />
              フォローやリツイートでの参加表明・応援をお願いします。
            </div>
          </div>
          <div className="my-5">
            <h2 id={pageAnchors.programInfo} className="text-xl lg:text-3xl my-10 border-l-4 pl-2 scroll-mt-20">
              <a href={`#${pageAnchors.programInfo}`}>
                プログラム情報&nbsp;<span className="text-error text-sm sm:text-lg">*審査中</span>
              </a>
            </h2>
            <div className="mx-auto my-6 text-left lg:text-xl max-w-5xl text-info-contents sm:px-4">
              プログラムは現在審査中です。<br />
              公開時には公式SNSでも告知を予定しています。もうしばらくお待ち下さい。
            </div>
          </div>
        </div>
      </Container>
      <SponsorLogosSection anchor={pageAnchors.sponsor} showDraft={false}/>
    </>
  );
}
