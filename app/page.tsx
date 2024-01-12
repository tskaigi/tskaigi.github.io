import Link from 'next/link'
import Loading from './ui/loading'

export default function Home() {
  return (
    <div className='max-w-3xl my-8 lg:mt-20 m-auto'>
  <div className='md:block '>
    <img src="/TSKaigiLogo.png" alt="TSKaigiLogo" className='w-2/4 m-auto' />
    <div className="mt-10 mb-5 ">
      TSKaigiは、TypeScriptコミュニティを盛り上げるために、2023年に発足したカンファレンスです。
      コロナ禍様々なオフラインイベントが打撃を受ける中、TypeScriptを扱うエンジニアが会場で集まる機会は失われていきました。
      新型コロナウイルスが落ち着いた今、各所で蓄積されたノウハウが日の目を浴び、より生き生きとTSエンジニアが働ける世界を目指して、TSKaigiを開催します。
    </div>
    <div className="text-4xl  font-bold mt-10 mb-5 text-center">
      2024年5月11日
    </div>
    <div className="text-xl  font-bold m-auto text-center">
      中野セントラルパーク
    </div>
  </div>
  <div className='my-20 lg:mb-20 flex justify-center'>
    <Link href="/sponsor-recruitment">
      <button className="btn lg:btn-lg btn-accent m-1">スポンサー募集ページへ</button>
    </Link>
    <Link href="/call-for-proposals">
      <button className="btn lg:btn-lg btn-accent m-1">CfP募集ページへ</button>
    </Link>
  </div>
</div>

  )
}
