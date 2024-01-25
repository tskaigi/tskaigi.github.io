import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiExternalLink } from "react-icons/hi";

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <img
          src="/banner.png"
          className="object-cover mx-auto h-screen max-h-[30vh] md:max-h-[55vh] lg:max-h-[60vh]"
          alt=""
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-2xl my-8 m-auto">
          <div className="md:block ">
            <div className="mt-10 mb-5 ">
              TSKaigiは、
              <span className="text-2xl text-accent">
                日本最大級のTypeScriptをテーマとした技術カンファレンス
              </span>
              です。
              コロナ禍で様々なオフラインイベントが打撃を受ける中、TypeScriptを扱うエンジニアが会場で集まる機会は失われていきました。
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
                    className="link link-primary inline-block items-center gap-2"
                    href="https://maps.app.goo.gl/Zwff1Z3yCu32pNHz6"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    中野セントラルパーク カンファレンス
                    <span className="inline-block ml-2">
                      <HiExternalLink />
                    </span>
                  </a>
                </span>
              </p>
            </div>
          </div>
          <div className="my-5 flex justify-center flex-col md:flex-row items-center">
            <Link href="/sponsor-recruitment">
              <button className="btn lg:btn-lg font-bold btn-accent m-1 btn-wide">
                スポンサー募集
              </button>
            </Link>
            <Link href="/call-for-proposals">
              <button className="btn lg:btn-lg font-bold btn-accent m-1 btn-wide">
                プロポーザル募集
              </button>
            </Link>
          </div>
          <div className="my-5 flex flex-col">
            <h3 className="text-2xl text-center text-accent">最新情報</h3>
            <div className="text-center p-2">
              <a
                className="pl-1 text-accent"
                href="https://twitter.com/tskaigi"
              >
                <FaXTwitter className="inline-block" />
                TSKaigi公式アカウント
              </a>
              で発信しています。ぜひフォローください。
            </div>
          </div>
          <div className="my-5 flex flex-col">
            <h3 className="text-2xl text-center text-accent">チケット</h3>
            <div className="text-center p-2">
              チケット販売は3月頃を予定しています。もうしばらくお待ち下さい。
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
