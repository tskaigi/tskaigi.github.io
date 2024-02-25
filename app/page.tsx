'use client'
import Link from "next/link";
import Container from "./ui/container";
import { HiExternalLink } from "react-icons/hi";
import { NavigateAnchorOnFirstRender } from "./functional/navigate-anchor-on-first-render";
import { SponsorList } from "./lib/definitions";
import { sponsorList, gridCols, divider } from "./lib/data";
import { useEffect } from "react";

const pageAnchors = {
  news: 'news',
  ticketInfo: 'ticket-info',
  sponsor: 'sponsor',
}

export default function Home() {
  const plans: (keyof SponsorList)[] = Object.keys(sponsorList) as (keyof SponsorList)[];
  // useEffect(() => {
  //   console.log(plans);
  //   console.log(gridCols);
  // } , []);
  return (
    <>
      <NavigateAnchorOnFirstRender />
      <div className="bg-white">
        <img src="/banner.png" className="object-cover mx-auto h-screen max-h-[30vh] md:max-h-[55vh] lg:max-h-[60vh]" alt="banner image" />
      </div>
      <Container>
        <div className="max-w-4xl my-8 m-auto">
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
          <div className="my-5 flex flex-col">
            <h2 id={pageAnchors.news} className="text-xl lg:text-3xl my-10 border-l-4 pl-2 scroll-mt-20">
              <a href={`#${pageAnchors.news}`}>
                最新情報
              </a>
            </h2>
            {/* <h3 className="text-2xl text-center text-accent">最新情報</h3> */}
            <div className="mx-auto my-6 text-left lg:text-xl max-w-5xl text-info-contents">
              <a className="pl-1 link link-primary" rel="noopener noreferrer" target="_blank" href="https://twitter.com/tskaigi">
                TSKaigi公式アカウント
                <HiExternalLink className="inline-block ml-1" />
              </a>
              で最新の情報を発信しています。<br />
              フォローやリツイートでの参加表明・応援をお願いします。
            </div>
          </div>
          <div className="my-5 flex flex-col">
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
          <div className="my-5 flex flex-col">
            <h2 id={pageAnchors.sponsor} className="text-xl lg:text-3xl my-10 border-l-4 pl-2 scroll-mt-20">
              <a href="#sponsor">スポンサー</a>
            </h2>
            {plans.map((plan, index) => {
              console.log(`Plan: ${plan}, GridCols: ${gridCols[plan]}`);
              return (
              <>
                <h3 className={`text-2xl text-${divider[plan]} divider divider-${divider[plan]}`} key={index}>{plan}</h3>
                <div className={`grid grid-cols-${gridCols[plan]} gap-4 mx-4`}>
                  {sponsorList[plan].map((sponsor, index) => (
                    <div key={index}>
                      <img
                        className="rounded-sm"
                        src={sponsor.imageUrl}
                        alt={sponsor.name}
                      />
                    </div>
                  ))}
                </div>
              </>
            )})}
          </div>
        </div>
      </Container>
    </>
  );
}
