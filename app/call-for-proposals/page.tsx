import type { Metadata } from 'next'
import { selectionCommittee } from '@/app/lib/data';
import { getTitleByIndex, getDescriptionByIndex } from '../lib/utils'
import { HiExternalLink } from "react-icons/hi";
import Qa from '@/app/ui/qa';
import Card from '../ui/card';
const targetIndex = 3;

export const metadata: Metadata = {
  title: getTitleByIndex(targetIndex),
  description: getDescriptionByIndex(targetIndex)
}

export default function Page() {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
        <h1 className="text-2xl lg:text-4xl my-10">TSKaigi 2024のプロポーザル募集について</h1>
        <div>
          <h2 className="text-xl lg:text-3xl my-10 border-l-4 pl-2">TSKaigi 2024概要</h2>
          <div className="grid md:grid-cols-2 gap-8 my-12">
            <div className="m-auto">
              <img className="rounded-lg aspect-[4/3] md:aspect-video object-cover max-h-64" src="https://www.nakano-centralpark.jp/conference/wp-content/themes/company_renewal3/images/location_img_new.png" alt="tskaigi logo" />
            </div>
            <div>
              <p>日程：　2024年5月11日（土）</p>
              <div className="divider divider-neutral my-0"></div>
              <p>
                <span className="flex">
                  会場：
                  <a
                    className="link link-primary inline-block items-center gap-2"
                    href="https://maps.app.goo.gl/Zwff1Z3yCu32pNHz6"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    中野セントラルパーク カンファレンス
                    <span className='inline-block ml-2'>
                      <HiExternalLink />
                    </span>
                  </a>
                </span>
              </p>
              <div className="divider divider-neutral my-0"></div>
              <div className="flex flex-col items-center justify-center lg:flex-row h-32 gap-4 lg:gap-8 my-8">
                <a href="mailto:cfp@tskaigi.org" className="link link-primary w-full lg:w-auto">
                  <button className="btn lg:btn-lg w-full">お問い合わせ</button>
                </a>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScYM2r5EKCY7rK45-fPSo0IQpoHKc5dgLg82y1PAr12QIFPYQ/viewform?pli=1" className="w-full lg:w-auto">
                  <button className="btn lg:btn-lg btn-accent block w-full">応募する</button>
                </a>
              </div>
            </div>
          </div>
          <p className="md:px-10">
            TSKaigiは、節目となる発表の場を通じてエンジニアのアウトプットを促進して、日本のTypeScriptコミュニティを盛り上げるTypeScriptカンファレンスです！<br />
            私たちの願いは、フロントエンドからバックエンド、インフラに至るまで、多様な分野のTypeScriptエンジニアたちが集い、普段は交流の少ないエンジニアたちが、それぞれの得意分野や最新の知見を交換し合う交流の場を創り出すことです。<br />
            <br />
            経験のある方も初めて登壇される方にとっても、このカンファレンスが人生の新たな節目になることを願っています。<br />
            あなたの発表が、誰かのキャリア、あるいはプロジェクトに新たな光をもたらすかもしれません。<br />
            ぜひ一緒に日本のTypeScriptコミュニティを盛り上げましょう！
          </p>
          <h2 className="text-xl lg:text-3xl my-10 border-l-4 pl-2">CfP概要</h2>
          <div className="grid md:grid-cols-2 gap-8 my-12">
            <div className="m-auto">
              <img src="/banner.png" className="object-cover h-48 md:h-56 lg:h-80 rounded-lg " alt="tskaigi logo" />
            </div>
            <div>
              <p>応募締切：　2024年2月29日（木）</p>
              <div className="divider divider-neutral my-0"></div>
              <p>結果通知：　2024年3月中旬（連絡は採用者のみ）</p>
              <div className="divider divider-neutral my-0"></div>
              <p>テーマ　：　TypeScriptに関する内容</p>
              <div className="divider divider-neutral my-0"></div>
              <p>発表時間：　セッション30分、LT5分</p>
              <div className="divider divider-neutral my-0"></div>
              <p>発表言語：　日本語</p>
              <div className="divider divider-neutral my-0"></div>
              <p>登壇形式：　オフラインでの現地登壇</p>
              <div className="divider divider-neutral my-0"></div>
              <p>複数応募：　可</p>
              <div className="divider divider-neutral my-0"></div>
              <p>応募方法：　<a className="link link-primary" href="https://docs.google.com/forms/d/e/1FAIpQLScYM2r5EKCY7rK45-fPSo0IQpoHKc5dgLg82y1PAr12QIFPYQ/viewform">こちらのフォーム</a>から応募</p>
              <div className="divider divider-neutral my-0"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center lg:flex-row gap-4 lg:gap-12 my-24 lg:my-28">
          <a href="mailto:cfp@tskaigi.org" className="link link-primary w-full max-w-md"><button className="btn lg:btn-lg w-full">お問い合わせ</button></a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScYM2r5EKCY7rK45-fPSo0IQpoHKc5dgLg82y1PAr12QIFPYQ/viewform?pli=1" className="w-full max-w-md"><button className="btn lg:btn-lg btn-accent block w-full">応募する</button></a>
        </div>
        <h2 className="text-xl lg:text-3xl my-10 border-l-4 pl-2">Q&A よくある質問</h2>
        <Card cardData={selectionCommittee} />
        <Qa categoryName="CfP" />
      </div>
    </>
  )
}