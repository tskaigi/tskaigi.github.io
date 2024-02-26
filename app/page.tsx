import Link from "next/link";
import Container from "./ui/container";
import { HiExternalLink } from "react-icons/hi";
import { NavigateAnchorOnFirstRender } from "./functional/navigate-anchor-on-first-render";
import { SponsorList } from "./lib/definitions";
import { sponsorList } from "./lib/data";

const pageAnchors = {
  news: 'news',
  ticketInfo: 'ticket-info',
  sponsor: 'sponsor',
}

export default function Home() {
  const plans: (keyof SponsorList)[] = Object.keys(sponsorList) as (keyof SponsorList)[];
  const sponsorVariants = {
    Platinum: {
      divider: `text-secondary divider-secondary`,
      // boxSize: `h-40 w-64 mx-3 my-2 sm:w-64 sm:h-48 sm:my-6`,
      boxSize: `gap-4 gridcols-1 sm:grid-cols-2 md:grid-cols-3`,
    },
    Gold: {
      divider: `text-accent divider-accent`,
      boxSize: `gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4`,
    },
    Silver: {
      divider: `text-primary divider-primary`,
      boxSize: `gap-2 grid-cols-3 sm:grid-cols-4 md:grid-cols-5`,
    },
    Bronze: {
      divider: `text-error divider-error`,
      boxSize: `gap-1 grid-cols-4 sm:grid-cols-5 md:grid-cols-6`,
    },
    Other: {
      divider: `text-gray-500 divider-gray-500`,
      boxSize: `gap-4 gridcols-1 sm:grid-cols-2 md:grid-cols-3`,
    },
  };

  return (
    <>
      <NavigateAnchorOnFirstRender />
      <div className="bg-white">
        <img src="/banner.png" className="object-cover mx-auto h-screen max-h-[30vh] md:max-h-[55vh] lg:max-h-[60vh]" alt="banner image" />
      </div>
      <Container>
        <div className="max-w-4xl my-8 mx-auto pb-20">
          <div className="mb-10 lg:my-20 lg:mb-32">
            <div className="leading-9 mx-auto my-6 text-left lg:text-xl max-w-5xl text-info-contents sm:leading-loose ">
              TSKaigiは、
              <span className="text-2xl text-accent">
                日本最大級のTypeScriptをテーマとした技術カンファレンス
              </span>
              です。<br />
              コロナ禍で様々なオフラインイベントが打撃を受ける中、TypeScriptを扱うエンジニアが会場で集まる機会は失われていきました。<br />
              新型コロナウイルスが落ち着いた今、各所で蓄積されたノウハウが日の目を浴び、より生き生きとTSエンジニアが働ける世界を目指して、TSKaigiを開催します。
            </div>
            <div className="text-2xl font-bold mt-10 mb-5 text-center">
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
          <div className="flex flex-col items-center justify-center lg:flex-row h-32 gap-4 lg:gap-8 my-8">
            <Link href="/sponsor-recruitment" className="w-full max-w-xs">
              <div className="btn lg:btn-lg btn-accent w-full text-center bg-gradient-to-r to-[#FFCDA8] from-accent hover:opacity-90">スポンサー募集</div>
            </Link>
            <Link href="/call-for-proposals" className="w-full max-w-xs">
              <div className="btn lg:btn-lg btn-accent w-full text-center bg-gradient-to-r to-[#FFCDA8] from-accent hover:opacity-90">プロポーザル募集</div>
            </Link>
          </div>
          <div className="my-5">
            <h2 id={pageAnchors.news} className="text-xl lg:text-3xl my-10 border-l-4 pl-2 scroll-mt-20">
              <a href={`#${pageAnchors.news}`}>
                最新情報
              </a>
            </h2>
            <div className="mx-auto my-6 text-left lg:text-xl max-w-5xl text-info-contents">
              <a className="pl-1 link link-primary" rel="noopener noreferrer" target="_blank" href="https://twitter.com/tskaigi">
                TSKaigi公式アカウント
                <HiExternalLink className="inline-block ml-1" />
              </a>
              で最新の情報を発信しています。<br />
              フォローやリツイートでの参加表明・応援をお願いします。
            </div>
          </div>
          <div className="my-5">
            <h2 id={pageAnchors.ticketInfo} className="text-xl lg:text-3xl my-10 border-l-4 pl-2 scroll-mt-20">
              <a href={`#${pageAnchors.ticketInfo}`}>
                チケット情報
              </a>
            </h2>
            <div className="mx-auto my-6 text-left lg:text-xl max-w-5xl text-info-contents">
              チケット販売は3月頃を予定しています。<br />
              また、開始時には公式SNSでも告知を予定しています。もうしばらくお待ち下さい。
            </div>
          </div>
        </div>
      </Container>
      <div className="py-20">
        <div className="max-w-4xl mx-auto">
          <h2 id={pageAnchors.sponsor} className="text-2xl font-bold text-center text-accent lg:text-3xl mb-20 scroll-mt-20">
            <a href="#sponsor">TSKaigi 2024 スポンサー各社</a>
          </h2>
        </div>
        <div className="mx-auto pb-20">
          {plans.map((plan) => (
            <div key={plan}>
              <h3 className={`text-2xl font-bold divider ${sponsorVariants[plan].divider}`}>
                {plan} Sponsors
              </h3>
              <div className={`grid my-8 px-4 sm:px-6 lg:px-8 mt-8 mb-12 grid-cols-1 ${sponsorVariants[plan].boxSize}`}>
                {sponsorList[plan].map((sponsor) => (
                  <Link 
                    href={sponsor.links[0].href}
                    rel="noopener noreferrer"
                    target="_blank"
                    className=""
                  >
                    <div
                      key={sponsor.name}
                      className={`text-sm my-auto rounded-md md:rounded-lg bg-white mb-4 hover:opacity-80 hover:shadow-md transition duration-300 ease-in-out`}
                    >
                      <img
                        className="px-4 text-nowrap overflow-hidden"
                        src={sponsor.imageUrl}
                        alt={sponsor.name}
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
