import { HiExternalLink } from "react-icons/hi";
import { PersonalSponsorSection } from "./components/PersonalSponsorSection";
import { SponsorLogosSection } from "./components/SponsorLogosSection";
import { StaffMemberSection } from "./components/StaffMemberSection";
import { NavigateAnchorOnFirstRender } from "./functional/navigate-anchor-on-first-render";
import { ticketURL, loginURL, onlineTicketURL, selectionCommittee } from "./lib/data";
import Container from "./ui/container";
import Cta from "./ui/cta";
import { MapDialog } from "./components/MapDialog";
import Card from "./ui/card";

const pageAnchors = {
  map: "map",
  programInfo: "program-info",
  sponsor: "sponsor",
};

export default function Home() {
  return (
    <>
      <NavigateAnchorOnFirstRender />
      <div className="bg-white">
        <img
          src="/banner.jpg"
          className="mx-auto h-full max-h-[30vh] object-cover md:max-h-[55vh] lg:max-h-[60vh]"
          alt="banner image"
        />
      </div>
      <Container>
        <div className="my-20">
          <h2 className="mb-10 scroll-mt-20 text-center text-2xl font-bold text-accent lg:text-3xl">
            当日のお知らせ
          </h2>
          <div className="grid sm:grid-cols-2 mx-auto max-w-4xl gap-2">
            <div className="bg-info-content text-base-300 rounded-md">
              <p className="text-2xl text-center m-4">現地参加の方</p>
              <p className="text-lg px-4">
                会場到着後、受付で入場用QRコードの提示が必要になります。
                <br />
                EventHubへのログイン後、入場用QRコードを表示して列に待機してください。
                <br />
              </p>
              <div className="px-4">
                <Cta mainLink={loginURL} mainLinkText="参加QRを表示する" />
              </div>
            </div>
            <div className="border border-info-content rounded-md">
              <p className="text-2xl text-center m-4">オンライン視聴の方</p>
              <p className="text-lg px-4">
                オンライン視聴には無料の参加登録が必要です。下記リンクからお進みください。
                <br />
                オンラインは<span className="text-accent text-2xl">当日参加</span>
                も受け付けていますので、お気軽にご参加ください。
              </p>
              <div className="px-4">
                <Cta
                  mainLink={loginURL}
                  mainLinkText="視聴する"
                  subLink={onlineTicketURL}
                  subLinkText="参加登録する"
                />
              </div>
            </div>
          </div>
          <div className="my-10 mx-auto max-w-4xl">
            <p className="text-xl text-accent my-4">諸注意事項</p>
            <p className="pl-2">
              ・会場にはwifi(id,passはお手持ちのリーフレット参照)がありますのでご自由にお使いください。ただし、遅延を避けるためdocker
              pull等、<span className="text-accent">負荷が懸念される操作</span>はご遠慮ください。
              <br />
              <br />
              ・各トラックルーム、最前列のカバー付きの椅子は
              <span className="text-accent">個人スポンサーの優先席</span>
              です。個人スポンサーの優先入場時にTシャツの確認をさせていただいております。
              <br />
              <br />
              ・本日は記録のために、カメラマンが撮影を行っています。個別対応はできかねますので、
              <span className="text-accent">あらかじめご了承ください。</span>
              <br />
              <br />
              ・地下一階のホワイエ(エスカレーターを降りた場所)は、
              <span className="text-accent">飲食禁止エリア</span>
              となっています。各トラックのルーム内や、休憩室でお済ませください。
            </p>
          </div>
        </div>
        <div className="relative isolate overflow-hidden">
          <div className="mx-auto max-w-7xl ">
            <div className="mx-auto max-w-4xl lg:pt-8">
              <h1 className="mt-4 text-2xl font-bold tracking-tight text-accent">
                日本最大級の
                <br />
                TypeScriptをテーマとした技術カンファレンスへようこそ
              </h1>
              <p className="mt-6 text-lg leading-7">
                TSKaigiは、日本最大級のTypeScriptをテーマとした技術カンファレンスです。
                <br />
                コロナ禍で様々なオフラインイベントが打撃を受ける中、TypeScriptを扱うエンジニアが会場で集まる機会は失われていきました。
                <br />
                新型コロナウイルスが落ち着いた今、各所で蓄積されたノウハウが日の目を浴び、より生き生きとTSエンジニアが働ける世界を目指して、TSKaigiを開催します。
              </p>
              <div className="sm:flex">
                <Cta mainLink={ticketURL} mainLinkText="チケットを購入 →" />
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto my-8 max-w-4xl pb-20">
          <div className="mb-10 lg:mt-20">
            <div className="mb-5 text-center text-2xl font-bold">開催: 2024年5月11日</div>
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
          <div>
            <iframe
              className="h-96 w-full rounded-md sm:h-96 md:h-96 lg:h-96 xl:h-96 2xl:h-96"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12959.124108748665!2d139.6616947!3d35.7070058!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f34668e0bc27%3A0x7d66caba722762c5!2z5Lit6YeO44K744Oz44OI44Op44Or44OR44O844Kv44Kr44Oz44OV44Kh44Os44Oz44K5!5e0!3m2!1sja!2sjp!4v1709223607334!5m2!1sja!2sjp"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="mt-40">
            <div className="mx-auto max-w-4xl">
              <h2 className="m-20 scroll-mt-20 text-center text-2xl font-bold text-accent lg:text-3xl">
                会場マップ
              </h2>
            </div>
            <div className="mx-auto my-6 max-w-5xl text-left sm:px-4 lg:text-xl flex flex-col items-center">
              <div className="hidden md:block bg-white rounded-xl shadow overflow-hidden">
                <img src="/tskaigi_map_h.png" alt="PC用会場図" />
              </div>
              <div className="md:hidden rounded-xl overflow-hidden bg-white shadow flex flex-col gap-8">
                <img src="/tskaigi_map_v.png" alt="PC用会場図" />
              </div>
              <div className="mt-10">
                <MapDialog />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <SponsorLogosSection anchor={pageAnchors.sponsor} showDraft={false} />
      <div className="mx-auto max-w-5xl mb-40">
        <h2 className=" scroll-mt-20 text-center text-2xl font-bold text-accent lg:text-3xl">
          トーク&LT審査員
        </h2>
        <div className="px-4 mb-20">
          <Card cardData={selectionCommittee} />
        </div>
      </div>
      <PersonalSponsorSection />
      <StaffMemberSection />
    </>
  );
}
