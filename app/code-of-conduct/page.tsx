import type { Metadata } from "next";
import { NavigateAnchorOnFirstRender } from "../functional/navigate-anchor-on-first-render";
import { getDescriptionByIndex, getTitleByIndex } from "../lib/utils";
import Container from "../ui/container";

const targetIndex = 5;
export const metadata: Metadata = {
  title: getTitleByIndex(targetIndex),
  description: getDescriptionByIndex(targetIndex),
};

export default function Page() {
  return (
    <>
      <NavigateAnchorOnFirstRender />
      <Container>
        <h1 className="my-10 text-2xl lg:text-4xl">TSKaigi行動規範</h1>
        <div className="text-lg">
          TSKaigiに参加するすべての人は下記の行動規範を守ることを求められます。主催者はこの行動規範をカンファレンス、パーティ、交流会に適用します。すべての人にとって安全な場所を提供するため、聴講者、登壇者、スポンサー、主催スタッフ含めたすべての参加者にご協力をお願いします。
          <br />
          <br />
          私たちは、性別、性的指向、障害、人種、民族、宗教、年齢に関係なく、全ての参加者を受け入れる環境作りに努めています。私たちは、考え方や経験の多様性を尊重します。
          <br />
          <br />
          参加者は、敬意を持って建設的に意見を交換することが奨励されます。私たちは、オープンな対話と、異なる視点を尊重した交流を大切にします。
          <br />
          <br />
          いかなる種類のハラスメントも容認されません。これには、
          <li>
            攻撃的な暴言
          </li>
          <li>
            意図的な脅迫
          </li>
          <li>
            ストーカー行為
          </li>
          <li>
            嫌がらせのような写真撮影や録音
          </li>
          <li>
            継続的な話の妨害
          </li>
          <li>
            不適切な身体的接触
          </li>
          <li>
            好ましくない性的嫌がらせ
          </li>
          <li>
            以上のような行為を推奨したり、擁護したりすること
          </li>
          などが含まれます。
          <br />
          <br />
          当カンファレンスの参加者、講演者、スポンサー、ボランティアはすべて、この行動規範を守ることに同意しなければなりません。主催者は大会期間中、この規範を徹底します。
          <br />
          <br />
          参加者が本規範に違反する行為を行った場合、私たちは、違反者への警告、または払い戻しなしのカンファレンスからの除名など、適切と思われる措置を取ることができます。
          <br />
          <br />
          ハラスメントを受けている場合、または他の誰かがハラスメントを受けていることに気づいた場合、あるいはその他の懸念事項がある場合は、直ちにカンファレンススタッフまたは<a href="mailto:coc@tskaigi.org?subject=お問い合わせ" className="link link-primary">coc@tskaigi.org</a> までご連絡ください。
          <br />
          <br />
          トラブルを最小限に抑えるため<span className="text-accent font-bold">絶対に個人で対応しないでください。</span>警備員や警察への連絡などを含め、安心してカンファレンスに参加できるようにお手伝いさせていただきます。
          <br />
          <br />
          TSKaigi は、すべての人に安全で快適な、そして利用しやすい経験を提供することに専心しています。すべての参加者にとって前向きで充実したカンファレンスとなるよう、共に取り組んでいきましょう。
        </div>

      </Container>
    </>
  );
}
