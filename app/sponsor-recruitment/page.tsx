import type { Metadata } from 'next'
import Container from '../ui/container';
import { getTitleByIndex, getDescriptionByIndex } from '../lib/utils'
const targetIndex = 2;

export const metadata: Metadata = {
  title: getTitleByIndex(targetIndex),
  description: getDescriptionByIndex(targetIndex)
}

export default function SponsorRecruitment() {
  return (
    <>
      <Container>
        <div className="hero min-h-[20vh] lg:min-h-[30vh]">
          <div className="hero-content p-0 max-w-full text-center">
            <h1 className="text-2xl lg:leading-relaxed lg:text-4xl font-bold"><span className=" lg:text-6xl text-accent pr-4">TSKaigi 2024 <br /></span>はスポンサーを募集しています</h1>
          </div>
        </div>
        <div className="mb-10 lg:my-20 lg:mb-32">
          <h2 className="text-xl lg:text-3xl my-10 border-l-4 pl-2">TSKaigiからのメッセージ</h2>
          <div className="mx-auto my-6 text-left lg:text-xl max-w-5xl text-info-contents">
            <p>国内最大規模の TypeScript カンファレンスの開催に向けて、協賛いただけるスポンサー様を募集いたします。</p>
            <p>近年、コロナ禍により多くのオフラインイベントの中止され、TypeScript を扱うエンジニアが集う機会も減少しました。その一方で技術の進展や活用は進み、この分野の知見を共有する場の必要性は高まり続けています。</p>
            <p>そこで新たに有志が集まり、コミュニティの活性と学びが共有される場を作ることを目的として TypeScript の一大カンファレンスを企画いたしました。</p>
            <p>オフライン400名、オンライン1,500名規模の参加者を見込んでおり、貴社の TypeScript を使用するエンジニアに対するブランディングとリクルーティングの絶好の機会となります。</p>
            <p>ぜひ貴社のご支援・ご協力を賜りますようお願い申し上げます。</p>
          </div>
          <div className="flex flex-col items-center justify-center lg:flex-row h-32 gap-4 lg:gap-8 my-8">
            <a rel="noopener noreferrer" target="_blank" href="https://forms.gle/aZnQSAz8UEwdiitj7" className="link link-primary w-full  max-w-xs">
              <button className="btn lg:btn-lg w-full">お問い合わせ</button>
            </a>
            <a rel="noopener noreferrer" target="_blank" href="https://forms.gle/ERgp32CP8q7ZTc8h8" className="w-full  max-w-xs">
              <button className="btn lg:btn-lg btn-accent block w-full bg-gradient-to-r to-[#FFCDA8] from-accent hover:opacity-90">応募する</button>
            </a>
          </div>
        </div>
        <div className="my-20 lg:mb-32">
          <h2 className="text-xl lg:text-3xl my-10 border-l-4 pl-2">協賛のご案内(法人向け)</h2>
          <div className="mx-auto my-6 text-left lg:text-xl max-w-5xl text-info-contents">
            <div className="mockup-browser border border-base-300">
              <div className="mockup-browser-toolbar">
                <div className="input border border-base-300 lg:text-xl">https://tskaigi.org</div>
              </div>
              <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTfoOlP1rvCDd0YI_3RAt-ocQ4Q_4ylC9hAyBirJ8u65drn7NISquC__v3lGhnnKcYFmrfjU_dDTQJ_/embed?start=false&loop=false&delayms=30000" className="w-full aspect-[16/9]"></iframe>
            </div>
          </div>
        </div>
        <div className="my-10 lg:mb-32">
          <h2 className="text-xl lg:text-3xl my-10 border-l-4 pl-2">協賛のご案内(個人向け)</h2>
          <div className="mx-auto my-6 text-left lg:text-xl max-w-5xl text-info-contents">
            <p>一般チケット販売と同時に個人スポンサーを募集します。情報公開までしばらくお待ちください。</p>
            <div className="flex flex-col items-center justify-center lg:flex-row h-32 gap-4 lg:gap-8 my-8">
              <a rel="noopener noreferrer" target="_blank" href="" className="link link-primary w-full  max-w-xs  pointer-events-none cursor-not-allowed opacity-50">
                <button className="btn lg:btn-lg w-full">お問い合わせ</button>
              </a>
              <a rel="noopener noreferrer" target="_blank" href="" className="w-full  max-w-xs  pointer-events-none cursor-not-allowed opacity-50">
                <button className="btn lg:btn-lg btn-accent block w-full  bg-gradient-to-r to-[#FFCDA8] from-accent hover:opacity-90">応募する</button>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}