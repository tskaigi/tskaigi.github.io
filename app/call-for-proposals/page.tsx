import type { Metadata } from 'next'
import { selectionCommittee } from '@/app/lib/data';
import { getTitleByIndex, getDescriptionByIndex } from '../lib/utils'
import { HiExternalLink } from "react-icons/hi";
import Qa from '@/app/ui/qa';
import Card from '../ui/card';
import Cta from '../ui/cta';
import Container from '../ui/container';
import { NavigateAnchorOnFirstRender } from '../functional/navigate-anchor-on-first-render';

const targetIndex = 3;
const pageAnchors = {
  overview: 'overview',
  proposalOverview: 'proposal-overview',
  judges: 'judges',
  qAndA: 'questions-and-answers'
}

export const metadata: Metadata = {
  title: getTitleByIndex(targetIndex),
  description: getDescriptionByIndex(targetIndex)
}

export default function Page() {
  return (
    <>
      <NavigateAnchorOnFirstRender />
      <Container>
        <h1 className="text-2xl lg:text-4xl my-10">TSKaigi 2024のプロポーザル募集について</h1>
        <div>
          <h2 id={pageAnchors.overview} className="text-xl lg:text-3xl my-10 border-l-4 pl-2 scroll-mt-20">
            <a href={`#${pageAnchors.overview}`}>
              TSKaigi 2024概要
            </a>
          </h2>
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
                    <HiExternalLink className="inline-block ml-2" />
                  </a>
                </span>
              </p>
              <div className="divider divider-neutral my-0"></div>
              <Cta mainLink="https://docs.google.com/forms/d/e/1FAIpQLScYM2r5EKCY7rK45-fPSo0IQpoHKc5dgLg82y1PAr12QIFPYQ/viewform?pli=1" mainLinkText="応募する" subLink="mailto:cfp@tskaigi.org" subLinkText="お問い合わせ" />
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
          <h2 id={pageAnchors.proposalOverview} className="text-xl lg:text-3xl my-10 border-l-4 pl-2 scroll-mt-20">
            <a href={`#${pageAnchors.proposalOverview}`}>
              プロポーザル募集概要
            </a>
          </h2>
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
              <p>応募方法：　
                <a className="link link-primary" href="https://docs.google.com/forms/d/e/1FAIpQLScYM2r5EKCY7rK45-fPSo0IQpoHKc5dgLg82y1PAr12QIFPYQ/viewform" rel="noopener noreferrer" target="_blank" >こちらのフォーム
                <HiExternalLink className="inline-block ml-2" />
              </a>から応募
              </p>
              <div className="divider divider-neutral my-0"></div>
            </div>
          </div>
        </div>
        <Cta mainLink="https://docs.google.com/forms/d/e/1FAIpQLScYM2r5EKCY7rK45-fPSo0IQpoHKc5dgLg82y1PAr12QIFPYQ/viewform?pli=1" mainLinkText="応募する" subLink="mailto:cfp@tskaigi.org" subLinkText="お問い合わせ" />
        <h2 id={pageAnchors.judges} className="text-xl lg:text-3xl my-10 border-l-4 pl-2 scroll-mt-20">
          <a href={`#${pageAnchors.judges}`}>
            審査員紹介
          </a>
        </h2>
        <p className="md:px-10 text-xl leading-relaxed">
          以下のTypeScriptコミュニティの方々に審査員として参加していただいています。
        </p>
        <div className="md:px-10">
          <Card cardData={selectionCommittee} />
        </div>
          <h2 id={pageAnchors.qAndA} className="text-xl lg:text-3xl mt-24 lg:mt-28 mb-10 border-l-4 pl-2 scroll-mt-20">
            <a href={`#${pageAnchors.qAndA}`}>
              Q&A よくある質問
            </a>
          </h2>
        <Qa categoryName="CfP" />
      </Container>
    </>
  )
}