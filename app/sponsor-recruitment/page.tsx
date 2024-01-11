import type { Metadata } from 'next'
import { getTitleByIndex, getDescriptionByIndex } from '../lib/utils'
const targetIndex = 2;

export const metadata: Metadata = {
  title: getTitleByIndex(targetIndex),
  description: getDescriptionByIndex(targetIndex)
}

export default function SponsorRecruitment() {
  return(
    <>
      <div className="hero min-h-[70vh]">
        <div className="hero-content p-0 flex-col max-w-full lg:gap-24 lg:flex-row-reverse">
          <div className="basis-1/3 card card-compact  max-w-full bg-base-100 shadow-xl">
            <figure><img src="favicon.ico" alt="tskaigi logo" /></figure>
            <div className="card-body">
            </div>
          </div>
          <div className="basis-2/3">
            <h1 className="text-2xl lg:leading-relaxed lg:text-5xl font-bold"><span className="text-accent">TSKaigi 2024</span><br />のスポンサー募集中</h1>
            <p className="py-6">
            TSKaigiは日本最大級のtypescriptカンファレンスを開催します。スポンサーになって、typescriptコミュニティを一緒に盛り上げませんか？<br />
            業界でのエキスパートとして日本のTypeScriptユーザーの支援をお願いします。
            </p>
            <div className="flex flex-col justify-end lg:flex-row">
              <button className="btn btn-link lg:btn-lg m-1">詳細を見る</button>
              <button className="btn lg:btn-lg btn-accent m-1">スポンサーになる</button>
            </div>
          </div>
        </div>
      </div>
      <div className="my-20 lg:mb-32">
        <h2 className="text-2xl lg:text-4xl my-10 text-center">詳細情報</h2>
        <div className="mockup-browser border border-base-300">
          <div className="mockup-browser-toolbar">
            <div className="input border border-base-300 lg:text-xl">https://tskaigi.org</div>
          </div>
          <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTfoOlP1rvCDd0YI_3RAt-ocQ4Q_4ylC9hAyBirJ8u65drn7NISquC__v3lGhnnKcYFmrfjU_dDTQJ_/embed?start=false&loop=false&delayms=30000"  className="w-full aspect-[16/9]"></iframe>
        </div>
      </div>
      <div className="my-20 lg:mb-32">
        <div className="">
          <h2 className="text-2xl text-center lg:leading-relaxed lg:text-5xl font-bold">
            <span className="text-accent">TSKaigi 2024</span><br />
            スポンサーとしてコミュニティを盛り上げましょう
          </h2>
          <p className="mx-auto my-6 text-left lg:text-xl max-w-2xl text-info-contents">
          TSKaigiへのスポンサーシップは、国内外の開発者コミュニティの成長を後押しします。<br />
          あなたのサポートが、次世代のエンジニアたちの力強いバックボーンとなります。
          </p>
          <div className="flex flex-col justify-end lg:flex-row lg:justify-center">
            <button className="btn btn-link lg:btn-lg m-1">Mailで申請</button>
            <button className="btn lg:btn-lg btn-accent m-1">Slackで参加</button>
          </div>
        </div>
      </div>
    </>
  )
}