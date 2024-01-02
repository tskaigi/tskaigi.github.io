type QandA = {
  question: string
  answer: string
}
const QandAs: QandA[] = [
  {
    question: "トークの時間はどのくらいですか？",
    answer: "トークはセッション30分LT5分のいずれかの枠での提案をお待ちしています。ご自身のアイデアに合った形式での提案をお願いいたします。"
  },
  {
    question: "CfPの選考方法や基準はどのようになりますか？",
    answer: "選考は複数のステップを経て行われ、選考委員やプログラムチームがトークの内容や提案者の経験を評価します。公正かつ多様性を考慮した選考プロセスを構築し、興味深いプログラムを作り上げることを目指しています。"
  },
  {
    question: "申請をする際に注意すべきポイントはありますか？",
    answer: "提案をする際には、トークのタイトルなどの必須事項や、任意項目をしっかりと記入してください。また、トークの内容が聴衆にどのような価値を提供するか、どのレベルの聴衆に適しているかなども考慮して提案してください。"
  }
]
export default function Page() {
  return (
    <>
      <h1 className="text-2xl lg:text-4xl my-10">【登壇者募集】TSKaigi 2024のCfPについて</h1>
      <div>
        <h2 className="text-xl lg:text-3xl my-10 border-l-4 pl-2">TSKaigi カンファレンス概要</h2>
        <div className="grid md:grid-cols-2 gap-8 my-12">
          <div className="m-auto">
            <img src="favicon.ico" alt="tskaigi logo" />
          </div>
          <div>
            <p>日程：　2024年5月11日（土）</p>
            <div className="divider divider-neutral my-0"></div>
            <p>会場：　中野セントラルパーク カンファレンス</p>
            <div className="divider divider-neutral my-0"></div>
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
            <img src="favicon.ico" alt="tskaigi logo" />
          </div>
          <div>
            <p>応募締切：　2024年2月29日（木）</p>
            <div className="divider divider-neutral my-0"></div>
            <p>結果通知：　2024年3月中旬</p>
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
            <p>応募方法：　<a className=" link-primary" href="https://docs.google.com/forms/d/e/1FAIpQLScYM2r5EKCY7rK45-fPSo0IQpoHKc5dgLg82y1PAr12QIFPYQ/viewform">こちらのフォーム</a>から応募</p>
            <div className="divider divider-neutral my-0"></div>
          </div>
        </div>
      </div>
      <h2 className="text-xl lg:text-3xl my-10 border-l-4 pl-2">Q&A よくある質問</h2>
      <div className="my-8 md:px-10">
        {QandAs.map((qanda, index) => (
          <div key={index}>
            <h3 className="text-md lg:text-2xl my-4  border-primary text-accent"><span className="text-xl lg:text-3xl">Q: </span>{qanda.question}</h3>
            <p><span className="text-primary text-lg lg:text-3xl">A: </span>{qanda.answer}</p>
            <div className="divider divider-neutral"></div>
          </div>
        ))}
      </div>
    </>
  )
}