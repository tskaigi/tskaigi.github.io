export default function SponsorRecruitment() {
  return(
    <>
      <div className="hero min-h-[70vh]">
        <div className="hero-content flex-col max-w-full lg:gap-24 lg:flex-row-reverse">
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
        <h2 className="text-2xl lg:text-4xl my-10 text-center">スポンサー登録の流れ</h2>
        <div className="flex justify-center">
          <ul className="timeline timeline-vertical lg:timeline-horizontal lg:text-xl w-full">
            <li className="flex-grow">
              <div className="timeline-start timeline-box my-6">SlackまたはMailで申請</div>
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
              </div>
              <hr className="bg-primary"/>
            </li>
            <li className="flex-grow">
              <hr/>
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
              </div>
              <div className="timeline-end timeline-box my-6">抽選</div>
              <hr/>
            </li>
            <li className="flex-grow">
              <hr/>
              <div className="timeline-start timeline-box my-6">スポンサー正式発表開</div>
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
              </div>
              <hr/>
            </li>
            <li className="flex-grow">
              <hr/>
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
              </div>
              <div className="timeline-end timeline-box my-6 text-accent border-accent">イベント当日</div>
            </li>
          </ul>
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