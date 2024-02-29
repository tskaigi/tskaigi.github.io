import type { PageInfo, QandA, CardData, SponsorList, AcountLink } from "./definitions";
import { HiHome } from "react-icons/hi";
import { HiLightBulb } from "react-icons/hi2";
import { FaHandshake, FaBook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoTicket } from "react-icons/io5";

export const ticketURL = "https://client.eventhub.jp/ticket/VjqcjZK60";

export const pageInfos: PageInfo[] = [
  {
    index: 1,
    showNavbar: true,
    showFooter: true,
    title: "Home",
    description: "",
    icon: HiHome,
    href: "/",
  },
  {
    index: 2,
    title: "スポンサー",
    showNavbar: true,
    showFooter: true,
    description:
      "TSKaigiは日本のTypeScriptコミュニティを盛り上げるカンファレンスを開催します。TSKaigiに協賛いただいた企業をご紹介します。",
    icon: FaHandshake,
    href: "/sponsor",
  },
  {
    index: 3,
    showNavbar: false,
    showFooter: true,
    title: "プロポーザル募集",
    description:
      "TSKaigiは日本のTypeScriptコミュニティを盛り上げるカンファレンスを開催します。あなたの発表・登壇をお待ちしております。ぜひ一緒に日本のTypeScriptコミュニティを盛り上げましょう！",
    icon: HiLightBulb,
    href: "/call-for-proposals",
  },
];

export const acountLink: AcountLink[] = [
  {
    index: 1,
    showNavbar: true,
    showFooter: true,
    emphasis: false,
    title: "公式X",
    description: "TSKaigiの公式X",
    icon: FaXTwitter,
    href: "https://twitter.com/tskaigi",
  },
  {
    index: 2,
    title: "Blog",
    showNavbar: true,
    showFooter: true,
    emphasis: false,
    description: "TSKaigi運営のブログ",
    icon: FaBook,
    href: "https://tskaigi.hatenablog.com/",
  },
  {
    index: 3,
    title: "チケット販売",
    showNavbar: true,
    showFooter: true,
    emphasis: true,
    description: "TSKaigiのチケット販売ページ",
    icon: IoTicket,
    href: ticketURL,
  },
]

export const qaList: QandA = {
  categories: [
    {
      id: 1,
      name: "sponsor-recruitment",
      questions: [
        {
          id: 1,
          question:
            "一般社団法人TSKaigi Association はインボイス制度の適格請求書発行事業者登録ですか？",
          answer:
            "いいえ、免税事業者のため、インボイス制度の適格請求書発行事業者登録は行っておりません。",
        },
      ],
    },
    {
      id: 2,
      name: "CfP",
      questions: [
        {
          id: 101,
          question: "トークの時間はどのくらいですか？",
          answer:
            "トークはセッション30分LT5分のいずれかの枠での提案をお待ちしています。ご自身のアイデアに合った形式での提案をお願いいたします。",
        },
        {
          id: 102,
          question: "名前は本名である必要がありますか？",
          answer: "本名でもハンドルネームでも、どちらでも構いません。",
        },
        {
          id: 103,
          question: <span>トークの内容はどのようなものが望ましいですか？</span>,
          answer:
            "TypeScriptに関係する話題であること、以外に条件はありません。言語自体、ツール、ライブラリ、コミュニティ、TypeScriptで開発するシステム、開発プロセス周りの話題など、広く求めています。",
        },
        {
          id: 104,
          question: "トークの内容は高度で専門的な話である必要がありますか？",
          answer:
            "決して高度な話でなくて構いません。あなたの体験したこと、経験したことからくる提案を期待しています。",
        },
        {
          id: 105,
          question:
            "トーク時間が30分未満の場合でも、セッションへの応募は可能ですか？",
          answer: "はい、可能です。トーク時間は20分以上を目安としてください。",
        },
        {
          id: 106,
          question: "応募後にプロポーザルを編集できますか？",
          answer:
            "応募締切まで編集可能です。回答のコピーが応募フォームにご入力いただいたメールアドレスに送信され、メール内のリンクから編集できます。",
        },
      ],
    },
  ],
};

export const selectionCommittee: CardData[] = [
  // {
  // title: "一般社団法人TSKaigi Association",
  // subtitle: "/favicon.ico",
  // description: "サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト",
  // logoImage: "/sponsors//logo.svg",
  // links: [
  // { icon: FaXTwitter, href: "https://twitter.com/iam_oku" },
  // { icon: FaInstagram, href: "" },
  // { icon: FaFacebookF, href: "" },
  // ]
  // },
  {
    title: "hiroppy",
    imageUrl: "/hiroppy_icon.png",
    links: [{ icon: FaXTwitter, href: "https://twitter.com/about_hiroppy" }],
  },
  {
    title: "mizchi",
    imageUrl:
      "https://pbs.twimg.com/profile_images/2507664307/viccruw2m1zb0xkkisil_400x400.jpeg",
    links: [{ icon: FaXTwitter, href: "https://twitter.com/mizchi" }],
  },
  {
    title: "うひょ",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1341186424423378944/gYTKIbFl_400x400.jpg",
    links: [{ icon: FaXTwitter, href: "https://twitter.com/uhyo_" }],
  },
];


export const sponsorList: SponsorList = {
  Platinum: [
    {
      name: "レバレジーズ株式会社",
      description: `準備中`,
      logoImage: "/sponsors/leverages.jpg",
      logoLink: "https://recruit.leverages.jp/recruit/engineer",
      links: [
        { href: "https://leverages.jp/", text: "公式サイト" },
        {
          href: "https://recruit.leverages.jp/recruit/engineer/",
          text: "エンジニア採用",
        },
        { href: "", text: "" },
      ],
      addPadding: false,
      draft: true,
    },
    {
      name: "アセンド株式会社",
      description: `■「日本で最もデジタル化の遅れた物流産業で、最高の業務体験を創る」
アセンド株式会社は日本の物流DXを目指すスタートアップです。
物流業界は20兆円の巨大市場でありながら、クラウド利用率は全産業で最低でありデジタル化の遅れ故に2024年問題をはじめとして社会課題を抱える業界です。アセンドはVertical SaaS「ロジックス」を全国の運送会社へ開発提供し、現場業務のデジタル化と経営の高度化を同時に図り、物流業界の変革を推進しています。

■ アセンドとTypeScript
アセンドは社会課題を解決するプロダクトエンジニア組織を目指して、Frontend/Backend/IaC/DataPipelineの全てをTypeScriptで統一しました。TSでの言語統一により、全エンジニアがフルスタックに開発し、顧客業務やドメインに深く寄り添いプロダクト価値に拘った開発を進めています。開発生産性は6deploys/dayと高い環境であり、少数チームでありながらサービスは案件管理や労務・車両管理といった多岐にわたる複数プロダクトを展開し、運送会社の全ての業務のデジタル化を推進しています。2023年12月にはシリーズAの資金調達を実施し、より多くの運送会社に更なる機能・価値を届けるため、仲間を募集しています。
TypeScriptを駆使して社会課題解決に挑むプロダクトエンジニアを積極募集中です。お気軽にご連絡ください！`,
      logoImage: "/sponsors/ascend.png",
      logoLink: "https://www.ascendlogi.co.jp/",
      links: [
        { href: "https://www.ascendlogi.co.jp/", text: "アセンド株式会社" },
        {
          href: "https://product.career.ascendlogi.co.jp/",
          text: "エンジニア採用サイト",
        },
        {
          href: "https://note.com/niwa_takeru/n/n0ae4acf2964d",
          text: "プロダクトエンジニアに関して",
        },
      ],
      addPadding: false,
    },
    {
      name: "株式会社ドワンゴ",
      description: `準備中`,
      logoImage: "/sponsors/dwango_horizontal.png",
      logoLink: "https://dwango.co.jp/",
      links: [
        { href: "", text: "" },
        { href: "", text: "" },
        { href: "", text: "" },
      ],
      addPadding: true,
    },
    {
      name: "Progate",
      description: `Progate は、初心者から始められるプログラミングのオンライン学習サービスである Progate や、自分の環境をつかって実務に近い開発経験を積める Progate Path といったサービスを提供しています。
Progate では、 TypeScript を自社の学習サービスの実装のために利用するだけではなく、 Progate Path の教材としても取り上げています。TypeScript は、型があるというだけではなく、型推論、タグ付き共用体とType Narrowingなどトレンドである便利なポイントをきちんと抑えており、その他にもWebサービス開発において１つのプログラミング言語でカバーができる点、学習のための資料が豊富な点などさまざまな点において教育にも良い言語だなと感じています。（もちろんその次には別の言語をつかってメモリについて教えたい気持ちはありますが！）
Progate では「Empowering everyone to open new doors through programming.」というビジョンを掲げ、プロダクトで世に価値を届けられるエンジニアを増やせるようなプロダクトを開発しています。採用も積極的におこなっていますので、お気軽にお声掛けください！
コンテンツやそれを支える技術などのお話をさせていただければと思っています。
`,
      logoImage: "/sponsors/progate_horizontal.png",
      logoLink: "https://prog-8.com/about",
      links: [
        { href: "https://www.recruit.prog-8.com/", text: "Progate採用サイト" },
        { href: "https://path.progate.com/", text: "Progate Path" },
        { href: "", text: "" },
      ],
      addPadding: true,
    },
    {
      name: "株式会社Helpfeel",
      description: `準備中`,
      logoImage: "/sponsors/helpfeel_horizontal.png",
      logoLink:
        "https://scrapbox.io/helpfeel-dev-careers/%E9%96%8B%E7%99%BA%E9%83%A8_%E6%8E%A1%E7%94%A8%E6%83%85%E5%A0%B1",
      links: [
        { href: "https://twitter.com/Helpfeeltech", text: "@Helpfeel_tech" },
        {
          href: "https://blog.notainc.com/",
          text: "Helpfeel Developers' Blog",
        },
        { href: "", text: "" },
      ],
      addPadding: true,
    },
  ],
  Gold: [
    {
      name: "Ubie株式会社",
      description: `「テクノロジーで人々を適切な医療に案内する」をミッションに掲げ、医師とエンジニアが2017年5月に創業したヘルステックスタートアップです。AIをコア技術とし、症状から適切な医療へと案内する「ユビー」と、診療の質向上を支援する医療機関向けサービスパッケージ「ユビ―メディカルナビ」等を開発・提供。誰もが自分にあった医療にアクセスできる社会づくりを進めています。
症状検索エンジン「ユビ―」は生活者の適切な医療へのかかり方をサポートする受診支援サービスです。気になる症状から関連する病名と適切な受診先を調べることができ、月間700万人以上の方々に利用いただいています。
「ユビーメディカルナビ」は問診業務効率化を図る「ユビーAI問診」や、認知向上をサポートする「ユビーリンク」などを提供しています。「ユビーAI問診」は全国47都道府県・1,700以上の医療機関で導入されております。(2024年2月現在)`,
      logoImage: "/sponsors/ubie_horizontal.png",
      logoLink: "https://ubie.life/",
      links: [
        { href: "https://ubie.life/", text: "Ubie株式会社" },
        { href: "https://ubie.app/", text: "症状検索エンジン「ユビ―」" },
        {
          href: "https://intro.dr-ubie.com/",
          text: "「ユビーメディカルナビ」",
        },
      ],
      addPadding: false,
      draft: true,
    },
    {
      name: "株式会社メドレー",
      description: `メドレーは、「医療ヘルスケアの未来をつくる」ミッションのもと、テクノロジーを活用した事業やプロジェクトを通じて、医療ヘルスケア分野の課題を解決していきます。それにより、病院や行政による「持続可能な医療」の実現と、患者さんやそのご家族にとって「納得できる医療」の実現を目指しています。
医療ヘルスケア領域の成果報酬型人材採用システム「ジョブメドレー」、オンライン動画研修サービス「ジョブメドレーアカデミー」、オンライン診療・服薬指導アプリ「CLINICS」、かかりつけ薬局支援システム「Pharms」、クラウド歯科業務支援システム「Dentis」などを運営しています。
各プロダクトでフロントエンド開発にTypeScriptを採用しており、生産性向上に寄与しています。エンジニアは得意な技術領域をベースとしつつも、チームでの開発効率を高めるために領域を越えて開発していく体制になっています。`,
      logoImage: "/sponsors/medley.png",
      logoLink: "https://www.medley.jp/",
      links: [
        { href: "https://www.medley.jp/", text: "株式会社メドレー" },
        {
          href: "https://developer.medley.jp/",
          text: "MEDLEY Developer Portal",
        },
        {
          href: "https://twitter.com/medley_dev",
          text: "メドレー ディベロッパー公式 (@medley_dev) on X",
        },
      ],
      addPadding: true,
    },
    {
      name: "株式会社タイミー",
      description: `株式会社タイミーは「『はたらく』を通じて人生の可能性を広げるインフラをつくる」をミッションに掲げ、スキマバイトアプリ「タイミー」などの事業を展開しております。
サービスリリースから約5年経過した現在、

・ユーザー数：600万人
・導入店舗数：170,000店舗
・利用企業数：66,000企業 を突破しました。

今後は、スポットワークをさらに世の中に広げることで国内の労働市場における課題を解決することを主軸としつつ、「はたらく」に留まらない多様なアプローチで、「一人ひとりの時間を豊かに」する挑戦を続けていきます。
現在のタイミーは、信頼性の高い社会インフラを目指していくという次の飛躍にむけ、システム・プロダクト・プロセス・組織を変化させていくフェーズです。
持続可能な状態でのスケールを目指しているため、変化と適応の両面を意識しエンジニアリングで課題を解決していける仲間を探しています。`,
      logoImage: "/sponsors/timee_horizontal.png",
      logoLink:
        "https://timee.notion.site/timee/Timee-Product-Org-Entrance-Book-b7380eb4f6954e29b2664fe6f5e775f9",
      links: [
        {
          href: "https://timee.notion.site/timee/Timee-Product-Org-Entrance-Book-b7380eb4f6954e29b2664fe6f5e775f9",
          text: "プロダクトエントランスブック",
        },
        {
          href: "https://productpr.timee.co.jp/m/m080509565c68/hashtag/4945140",
          text: "エンジニア向け成長支援制度の紹介",
        },
        {
          href: "https://product-recruit.timee.co.jp/",
          text: "エンジニア採用ページ",
        },
      ],
      addPadding: false,
    },
    {
      name: "トグルホールディングス株式会社",
      description: `トグルホールディングスは、「すべてのまちと、まちをつくる人たちのために」というミッションを基に、「不動産」「建築」「金融」の3つの業界をひとつの産業インフラへと統合することを目指しています。

日本の不動産業界はIT資本投資で米国の1/10に留まり、テクノロジーの活用が遅れています。 このギャップは「新しい仕組みで業界変革できる余地が多い」ということでもあり、エンジニアにとって大きなチャンスがあります。

弊社ではプロダクトのコア技術の実装にはフロントエンドからバックエンド、さらにはインフラストラクチャの定義までTypeScriptを用いています。 TypeScriptの厳密な型チェック機能をフル活用することで複雑なドメインの実装を柔軟、かつ安全に行うことを実現しています。`,
      logoImage: "/sponsors/toggle.png",
      logoLink: "https://toggle.co.jp/",
      links: [
        { href: "https://toggle.co.jp/", text: "コーポレートサイト" },
        {
          href: "https://engineer.toggle.co.jp/",
          text: "エンジニア向け ハンドブック",
        },
        { href: "https://note.com/toggle/m/md6005990812a", text: "note" },
      ],
      addPadding: false,
    },
    {
      name: "株式会社EARTHBRAIN",
      description: `EARTHBRAINは土木業界をDXするスタートアップ企業です。 土木業界は日本だけでも24兆円/年、世界では200兆円超/年の巨大な市場です。ただ、デジタル技術を用いた施工は普及しておらず”黎明期”と言えるフェーズです。 創業2年目ですが、日本だけではなく既に世界20カ国以上で使われているプロダクトを提供しているグローバルな企業です。日本から世界を変える挑戦を一緒に行いましょう！`,
      logoImage: "/sponsors/earthbrain_horizontal.png",
      logoLink: "https://www.earthbrain.com/",
      links: [
        { href: "https://www.earthbrain.com/", text: "公式企業サイト" },
        {
          href: "https://earthbrain.notion.site/EARTHBRAIN-Tech-3775fb71b41342aebf0aee6848d722bd",
          text: "エンジニア採用特設サイト",
        },
        { href: "", text: "" },
      ],
      addPadding: false,
    },
    {
      name: "グーグル・クラウド・ジャパン合同会社",
      description: `Google Cloud は、最高クラスのインフラストラクチャ、プラットフォーム、インダストリーソリューションと専門知識により、企業のデジタルトランスフォーメーション（DX）を加速します。Google の最先端技術を活用したエンタープライズグレードのソリューションを、業界で最もクリーンなクラウド上で提供しています。200 以上の国と地域のお客様が、成長を実現し、重要なビジネス上の課題を解決するための信頼できるパートナーとして、Google Cloud を利用しています。

Google Cloud Innovators は、デベロッパーや学生向けのプログラムです。イベントへの優先招待や最新情報提供などの特典があります。

Innovators Live Japan は、Googsle Cloud やデベロッパー界隈の注目トピックについて、Google社員や Innovators メンバーなどがトークするライブ配信型ウェビナーです。`,
      logoImage: "/sponsors/googlecloudjapan.png",
      logoLink: "https://cloud.google.com/innovators?hl=ja",
      links: [
        {
          href: "https://cloud.google.com/innovators?hl=ja",
          text: "Innovators プログラム",
        },
        {
          href: "https://cloudonair.withgoogle.com/events/innovators-live-jp",
          text: "Innovators Live Japan",
        },
        { href: "", text: "" },
      ],
      addPadding: true,
    },
    {
      name: "株式会社LayerX",
      description: `LayerXは「すべての経済活動を、デジタル化する。」をミッションに掲げるSaaS+FinTechスタートアップです。 法人支出管理サービス「バクラク」を中心に、デジタルネイティブなアセットマネジメント会社を目指す合弁会社「三井物産デジタル・アセットマネジメント」、大規模言語モデル（LLM）関連技術を活用し企業や行政における業務効率化・データ活用を支援する「AI・LLM事業」などを開発・運営しています。

LayerXは、今後のプロダクト戦略で重要なテーマとして「AI-UX（AIを前提とした利用体験）」を掲げています。そして、最高のAI-UXを作り上げるにはAI以外のソフトウェア体験の磨き込み、改善基盤の構築も重要です。
昨年策定したバクラクフロントエンドVisionでは「お客様に最高の体験を届けたい」「Webフロントエンドを楽しくしたい」という渾身の想いを込めました。ぜひ一度ご覧ください！`,
      logoImage: "/sponsors/layerx_horizontal.png",
      logoLink: "https://layerx.co.jp/",
      links: [
        {
          href: "https://comemo.nikkei.com/n/n72374ef7b2d9",
          text: "AI-UXとAX(AI Transformation)というLayerXの挑戦",
        },
        {
          href: "https://tech.layerx.co.jp/entry/2023/08/02/180000",
          text: "バクラクフロントエンド Visionの策定と願い - LayerX エンジニアブログ",
        },
        { href: "https://layerx.co.jp/jobs", text: "LayerX 採用情報" },
      ],
      addPadding: false,
      draft: true,
    },
    {
      name: "",
      description: ``,
      logoImage: "/sponsors/xxx.png",
      logoLink: "",
      links: [
        { href: "", text: "" },
        { href: "", text: "" },
        { href: "", text: "" },
      ],
      addPadding: true,
      draft: true,
    },
  ],
  Silver: [
    {
      name: "株式会社アイデミー",
      description: `「先端技術を、経済実装する。」をミッションに活動している株式会社アイデミーでは、オンラインAI/DXラーニングサービス「Aidemy」などの自社プロダクトの開発において、フロントエンドからバックエンドまで統一した言語として TypeScript を採用している「TypeScript Company」です。
Cloudflare Workers や Hono, Astro など、新しい技術を積極的に取り入れており、社内外での技術共有を行うことでエンジニアのスキルアップを支援しています。`,
      logoImage: "/sponsors/aidemy_horizontal.png",
      logoLink: "https://aidemy.co.jp/",
      links: [
        { href: "https://aidemy.co.jp/recruit/", text: "採用サイト" },
        { href: "https://zenn.dev/p/aidemy", text: "Zenn" },
        { href: "https://twitter.com/aidemytech", text: "X" },
      ],
      addPadding: true,
    },
    {
      name: "株式会社LabBase",
      description: ``,
      logoImage: "/sponsors/xxx.png",
      logoLink: "",
      links: [
        { href: "", text: "" },
        { href: "", text: "" },
        { href: "", text: "" },
      ],
      addPadding: true,
      draft: true,
    },
    {
      name: "AMDlab Inc.",
      description: `3D、CAD、BIMの技術を強みとして、建築業界のDXを推進してきたスタートアップです。
建築オンライン学習プラットフォーム「AMDhaus」、株式会社LIXILとの共同開発である、パブリックトイレ自動設計サービス「A-SPEC」の提供も行っています。
現在、建築設計クラウドサービス「DDDDbox」の開発に注力し、プロジェクトの管理、申請、建物の3Dモデリング、作図に至るまで、建築設計の全工程をウェブブラウザ上で行えるようにすることを目指して開発を進めています。開発メンバーを絶賛募集中です。`,
      logoImage: "/sponsors/amdlab.png",
      logoLink: "https://amd-lab.com/",
      links: [
        { href: "https://amd-lab.com/", text: "コーポレートサイト" },
        {
          href: "https://ddddbox.app/",
          text: "建築設計クラウドサービス DDDDbox",
        },
        {
          href: "https://a-spec.lixil.com/",
          text: "パブリックトイレ自動設計サービス A-SPEC",
        },
      ],
      addPadding: true,
    },
    {
      name: "レバテック株式会社",
      description: ``,
      logoImage: "/sponsors/xxx.png",
      logoLink: "",
      links: [
        { href: "", text: "" },
        { href: "", text: "" },
        { href: "", text: "" },
      ],
      addPadding: true,
      draft: true,
    },
    {
      name: "株式会社Linc'well",
      description: `Linc'wellは「テクノロジーを通じて、医療を一歩前へ」をミッションに掲げ、医療を効率化し患者の利便性と医療の質の向上を目指した事業展開を行っています。
オンライン・オフラインで医療従事者・患者をつなぐヘルスケアプラットフォーム事業を主力としており、「オンライン診療システム提供サービス」「クリニックDX支援サービス」「ヘルスケアECサービス」の3つのサービスを提供しています。`,
      logoImage: "/sponsors/lincwell.png",
      logoLink: "https://linc-well.com/",
      links: [
        { href: "https://linc-well.com/", text: "株式会社Linc'well" },
        {
          href: "https://engineer.linc-well.com/",
          text: "エンジニア採用サイト",
        },
        { href: "", text: "" },
      ],
      addPadding: true,
    },
    {
      name: "株式会社ビットキー",
      description: `ビットキーは、独自開発のデジタルコネクトプラットフォームを通して、人と「暮らし」や「仕事」の間にある分断を解消するアプリ/SaaSを開発しています。 あらゆるサービスやモノを柔軟につなげることで、体験のアップデートを進めています。
この「暮らし」のサービスである「homehub」、「仕事」のサービスである「workhub」における各種WEBシステムの多くはフロントエンド、バックエンド双方TypeScriptで構築されております。
現在TypeScriptエンジニアは絶賛採用中のため、是非下記1番上のリンクからビットキーを知っていただき、ご興味あれば下記2番目のカジュアル面談をしていただければと思います！`,
      logoImage: "/sponsors/bitkey_horizontal.png",
      logoLink: "",
      links: [
        { href: "https://speakerdeck.com/bitkey/bitkey-recruiting-book", text: "企業説明資料" },
        { href: "https://wk87qzuwsh2.typeform.com/to/IhG1fHSj?typeform-source=qrcode-button", text: "カジュアル面談フォーム" },
        { href: "", text: "" },
      ],
      addPadding: false,
      draft: true,
    },
    {
      name: "Micoworks株式会社",
      description: `Micoworks株式会社は、企業と顧客のコミュニケーションを最適化するマーケティングプラットフォーム「MicoCloud（ミコクラウド）」、飲食店向けLINEミニアプリサービス「ミコミー」を開発、提供しています。最適なコミュニケーションによって、ブランド価値を最大化し、あらゆるビジネスの可能性を広げます。`,
      logoImage: "/sponsors/micoworks.png",
      logoLink: "https://micoworks.jp/",
      links: [
        { href: "https://micoworks.jp/", text: "会社HP" },
        { href: "https://speakerdeck.com/micoworks/enziniaxiang-ke-micoworkszhu-shi-hui-she-hui-she-shuo-ming-zi-liao", text: "採用Deck" },
        { href: "https://herp.careers/v1/micoworksinc/requisition-groups/1102ea37-e879-4e43-88d3-0c4facf51dec", text: "採用ページ（求人一覧）" },
      ],
      addPadding: false,
    },
    {
      name: "株式会社オプティム",
      description: `OPTiMは「ネットを空気に変える」というコンセプトをもとに、AI・IoT・Cloud・Mobile・Robotics技術を土台とし、あらゆる業界のDXを実現させていく企業です。

日本No1シェアのデバイス管理サービスや、農業分野ではドローン農薬散布サービス、建設分野ではスマートフォンで簡単に測量できるサービス、AIによる契約書・電子帳簿管理サービスなどを自社開発しています。

より良いサービス提供のために、TypeScript等のさまざまな言語・ライブラリ・アルゴリズムを駆使しています。`,
      logoImage: "/sponsors/optim.png",
      logoLink:
        "https://www.optim.co.jp/?utm_source=event&utm_medium=referral&utm_campaign=TS-Kaigi",
      links: [
        {
          href: "https://www.optim.co.jp/corporate/outline",
          text: "OPTiMの事業紹介",
        },
        { href: "https://tech-blog.optim.co.jp", text: "OPTiM TECH BLOG" },
        { href: "https://www.optim.co.jp/recruit/", text: "採用情報" },
      ],
      addPadding: false,
    },
    {
      name: "合同会社DMM.com",
      description: `DMMでは、会員数4,101万人（2023年2月時点）を誇る総合サービスサイト「DMM .com」を運営しています。現在、動画配信・電子書籍・3Dプリント・web3・AIなど60以上の事業を幅広く展開し、コーポレートメッセージ「誰もが見たくなる未来。」とともに、新しい技術・サービスを追及しながら、領域を問わず挑戦を続けています。`,
      logoImage: "/sponsors/dmm_horizontal.png",
      logoLink: "https://dmm-corp.com/",
      links: [
        {
          href: "https://dmm-corp.com/recruit/engineer/1859/",
          text: "フロントエンドエンジニア（オープンポジション）",
        },
        {
          href: "https://dmm-corp.com/recruit/engineer/1860/",
          text: "フロントエンドエンジニア_テックリード（オープンポジション）",
        },
        { href: "https://twitter.com/DMMcom_tech", text: "X DMM.com Tech (@DMMcom_tech)" },
      ],
      addPadding: true,
    },
    {
      name: "チームラボ株式会社",
      description: ``,
      logoImage: "/sponsors/xxx.png",
      logoLink: "",
      links: [
        { href: "", text: "" },
        { href: "", text: "" },
        { href: "", text: "" },
      ],
      addPadding: true,
      draft: true,
    },
  ],

  "Event Platform": [
    {
      name: "株式会社EventHub",
      description: `💁‍♀️ EventHubについて
EventHubは、マーケティング、営業のためのウェビナー・カンファレンスを主軸に、展示会、学会や商談会を含む幅広いニーズで利用されているシェアNo.1イベントマーケティングプラットフォームです。

＼フルサイクルエンジニア募集中／

🧑‍💻 開発環境
サーバーサイド：Node.js, NestJS, TypeScript
フロントエンド: React.js,TypeScript,styled-components
データベース　：MySQL, Redis`,
      logoImage: "/sponsors/eventhub_horizontal.png",
      logoLink: "https://jobs.eventhub.co.jp/",
      links: [
        { href: "https://jobs.eventhub.co.jp/", text: "💁‍♀️ EventHub 採用情報" },
        { href: "https://eventhub.jp/", text: "💁‍♂️ EventHub サービスページ" },
        {
          href: "https://jobs.eventhub.co.jp/engineer",
          text: "🧑‍💻 EventHub エンジニアチーム",
        },
      ],
      addPadding: true,
    },
  ],

  Refreshment: [
    {
      name: "エムスリー株式会社",
      description: ``,
      logoImage: "/sponsors/xxx.png",
      logoLink: "",
      links: [
        { href: "", text: "" },
        { href: "", text: "" },
        { href: "", text: "" },
      ],
      addPadding: true,
      draft: true,
    },
  ],

  Coffee: [
    {
      name: "KAKEHASHI Inc.",
      description: `日本の医療システムの再構築を目指すヘルステックスタートアップ。現在、主要サービスの一つ薬局SaaS「Musubi」のユーザーは全国7000店以上（シェア10％超）に。そのほか薬局関連サービスを複数展開。Dev/Bizの垣根なく一貫してアジャイルな組織を志向。「プロダクトを介して蓄積される医療現場の膨大なリアルデータを、医療価値の向上にどう活かしていくか」という観点で、既存プロダクトの改善から新規事業まで、一人ひとりの自律的な行動によりプロジェクトを推進。ミッションは「日本の医療体験を、しなやかに」。`,
      logoImage: "/sponsors/kakehashi.png",
      logoLink: "https://www.kakehashi.life/",
      links: [
        {
          href: "https://kakehashi-dev.hatenablog.com/",
          text: "KAKEHASHI Tech Blog",
        },
        {
          href: "https://recruit.kakehashi.life/engineer",
          text: "KAKEHASHI RECRUTHING SITE",
        },
        {
          href: "https://twitter.com/kakehashi_dev",
          text: "X カケハシ技術広報(@kakehashi_dev)",
        },
      ],
      addPadding: false,
    },
  ],
  Beer: [
    {
      name: "Cloudbase株式会社",
      description: `「日本企業が世界を変える時代をつくる」というミッションのもと、日本企業からイノベーションを起こすべくクラウドセキュリティの SaaS を提供しております。
具体的にはAWS・Google Cloudなどのクラウドにおけるリスクを統合的に監視・管理するセキュリティプラットフォームです。
弊社では検出されたリスクをお客様に提供するSaaS部分では、バックエンドもフロントエンドもTypeScriptで実装されています。フルスタックにTypeScriptで開発していきたい人はぜひお話しさせてください。`,
      logoImage: "/sponsors/cloudbase.png",
      logoLink: "https://cloudbase.ink",
      links: [
        { href: "https://cloudbase.co.jp/", text: "Cloudbase株式会社" },
        {
          href: "https://levetty.notion.site/Cloudbase-Engineer-Entrance-Book-1f51dcaf9edd490e934780f526f833a3?pvs=74",
          text: "Cloudbase Engineer Entrance Book",
        },
        { href: "", text: "" },
      ],
      addPadding: true,
    },
  ],
  Bronze: [
    {
      name: "株式会社プレイド",
      description: ``,
      logoImage: "/sponsors/plaid.png",
      logoLink: "https://plaid.co.jp/",
      links: [
        { href: "", text: "" },
        { href: "", text: "" },
        { href: "", text: "" },
      ],
      addPadding: true,
    },
    {
      name: "株式会社TOKIUM",
      description: ``,
      logoImage: "/sponsors/tokium.png",
      logoLink: "https://www.keihi.com/company/",
      links: [
        { href: "", text: "" },
        { href: "", text: "" },
        { href: "", text: "" },
      ],
      addPadding: true,
    },
    {
      name: "株式会社ROUTE06",
      description: ``,
      logoImage: "/sponsors/route06.png",
      logoLink: "https://route06.co.jp/",
      links: [
        { href: "", text: "" },
        { href: "", text: "" },
        { href: "", text: "" },
      ],
      addPadding: true,
    },
    {
      name: "",
      description: ``,
      logoImage: "/sponsors/xxx.png",
      logoLink: "",
      links: [
        { href: "", text: "" },
        { href: "", text: "" },
        { href: "", text: "" },
      ],
      addPadding: true,
      draft: true,
    },
    {
      name: "",
      description: ``,
      logoImage: "/sponsors/xxx.png",
      logoLink: "",
      links: [
        { href: "", text: "" },
        { href: "", text: "" },
        { href: "", text: "" },
      ],
      addPadding: true,
      draft: true,
    },
    {
      name: "株式会社AppBrew",
      description: ``,
      logoImage: "/sponsors/appbrew.png",
      logoLink: "https://appbrew.io",
      links: [
        { href: "", text: "" },
        { href: "", text: "" },
        { href: "", text: "" },
      ],
      addPadding: true,
    },
    {
      name: "",
      description: ``,
      logoImage: "/sponsors/xxx.png",
      logoLink: "",
      links: [
        { href: "", text: "" },
        { href: "", text: "" },
        { href: "", text: "" },
      ],
      addPadding: true,
      draft: true,
    },
  ],
};
