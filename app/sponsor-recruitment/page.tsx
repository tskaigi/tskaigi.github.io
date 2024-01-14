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
      <div className="hero min-h-[30vh]">
        <div className="hero-content p-0 max-w-full">
          <h1 className="text-2xl lg:leading-relaxed lg:text-5xl font-bold"><span className="text-accent pr-4">TSKaigi 2024</span>スポンサー募集</h1>
        </div>
      </div>
      <div className="my-20 lg:mb-32">
        <h2 className="text-2xl lg:text-4xl my-10 text-center">メッセージ</h2>
        <div className="mx-auto my-6 text-left lg:text-xl max-w-5xl text-info-contents">
          <p>国内最大規模の TypeScript カンファレンスの開催に向けて、協賛いただけるスポンサー様を募集いたします。</p>
          <p>近年、コロナ禍により多くのオフラインイベントの中止され、TypeScript を扱うエンジニアが集う機会も減少しました。その一方で技術の進展や活用は進み、この分野の知見を共有する場の必要性は高まり続けています。</p>
          <p>そこで新たに有志が集まり、コミュニティの活性と学びが共有される場を作ることを目的として TypeScript の一大カンファレンスを企画いたしました。</p>
          <p>オフライン400名、オンライン1,500名規模の参加者を見込んでおり、貴社の TypeScript を使用するエンジニアに対するブランディングとリクルーティングの絶好の機会となります。</p>
          <p>ぜひ貴社のご支援・ご協力を賜りますようお願い申し上げます。</p>
        </div>
      </div>
      <div className="my-20 lg:mb-32">
        <h2 className="text-2xl lg:text-4xl my-10 text-center">協賛のご案内</h2>
        <div className="mockup-browser border border-base-300">
          <div className="mockup-browser-toolbar">
            <div className="input border border-base-300 lg:text-xl">https://tskaigi.org</div>
          </div>
          <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTfoOlP1rvCDd0YI_3RAt-ocQ4Q_4ylC9hAyBirJ8u65drn7NISquC__v3lGhnnKcYFmrfjU_dDTQJ_/embed?start=false&loop=false&delayms=30000"  className="w-full aspect-[16/9]"></iframe>
        </div>
      </div>
      <div className="my-20 lg:mb-32">
        <h2 className="text-2xl lg:text-4xl my-10 text-center">応募フォーム</h2>
        <div className="">
          <div className="flex flex-col items-center justify-center lg:flex-row gap-4 lg:gap-8 my-24 lg:my-24">
            <a href="https://forms.gle/aZnQSAz8UEwdiitj7" className="link link-primary w-full lg:w-auto"><button className="btn lg:btn-lg btn-wide">お問い合わせ</button></a>
            <a href="https://forms.gle/ERgp32CP8q7ZTc8h8" className="w-full lg:w-auto"><button className="btn lg:btn-lg btn-accent btn-wide">応募する</button></a>
          </div>
        </div>
      </div>
    </>
  )
}