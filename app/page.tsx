import Link from "next/link";
import Container from "./ui/container";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiExternalLink } from "react-icons/hi";

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <img src="/banner.jpg" className="object-cover mx-auto h-screen max-h-[30vh] md:max-h-[55vh] lg:max-h-[60vh]" alt="" />
      </div>
      <Container>
        <div className="max-w-4xl my-8 m-auto">
          <div className="mb-10 lg:my-20 lg:mb-32">
            <div className="mx-auto my-6 text-left lg:text-xl max-w-5xl text-info-contents">
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
              <a
                target="_blank"
                href="https://maps.app.goo.gl/KbKTnBPywSn6i4GB6"
                className="px-2"
              >
                <span className="align-middle">場所: 中野セントラルパーク</span>
                <FaMapMarkerAlt className="inline-block" />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center lg:flex-row h-32 gap-4 lg:gap-8 my-8">
            <Link href="/sponsor-recruitment" className="w-full   max-w-xs">
              <button className="btn lg:btn-lg btn-accent block w-full  bg-gradient-to-r to-[#FFCDA8] from-accent hover:opacity-90">スポンサー募集</button>
            </Link>
            <Link href="/call-for-proposals" className="w-full   max-w-xs">
              <button className="btn lg:btn-lg btn-accent block w-full  bg-gradient-to-r to-[#FFCDA8] from-accent hover:opacity-90">プロポーザル募集</button>
            </Link>
          </div>
          <div className="my-5 flex flex-col">
            <h2 className="text-xl lg:text-3xl my-10 border-l-4 pl-2">最新情報</h2>
            {/* <h3 className="text-2xl text-center text-accent">最新情報</h3> */}
            <div className="mx-auto my-6 text-left lg:text-xl max-w-5xl text-info-contents">
              <a className="pl-1 text-primary" rel="noopener noreferrer" target="_blank" href="https://twitter.com/tskaigi">
                TSKaigi公式アカウント
                <HiExternalLink className="inline-block" />
              </a>
              で最新の情報を発信しています。<br />
              フォローやリツイートでの参加表明・応援をお願いします。
            </div>
          </div>
          <div className="my-5 flex flex-col">
            <h2 className="text-xl lg:text-3xl my-10 border-l-4 pl-2">チケット情報</h2>
            <div className="mx-auto my-6 text-left lg:text-xl max-w-5xl text-info-contents">
              チケット販売は3月頃を予定しています。<br />
              また、開始時には公式SNSでも告知を予定しています。もうしばらくお待ち下さい。
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
