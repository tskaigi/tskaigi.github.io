import { SessionDetail } from "@/typs";

export const SESSSION_DETAILS: { [key: string]: SessionDetail } = {
  kimi_koma1111: {
    title: "フロントエンドもバックエンドもインフラも… 全てをTypeScriptで統一したらこうなった！",
    displayName: "君田 祥一",
    sessionAbstract: `【概要】
    近年、フロントエンド開発における主要な言語として認知されているTypeScriptですが、その活躍の場はフロントエンドだけではありません。フロントエンドだけでなく、バックエンドやインフラも含めた全社開発環境をTypeScriptで統一している現場のリアルをお伝えします。
    
    【トークの主題】
    ・TypeScriptをフル活用した開発現場のリアル
    ・フロントエンド以外でのTypeScriptの活用
    ・全方位TypeScript開発のメリット
    ・導入している技術スタックについて
    
    【題材を選んだ理由】
    ・TypeScriptにおけるフルスタック開発は、まだ多くの企業で実践されていない新しい開発手法だと思います。ですので、その実態や効果について知りたいというニーズが高いと思ったからです。
    ・フロントエンド開発以外でのTypeScriptの活用事例を紹介することで、TypeScript活用の視野を広げ、新たな開発の可能性を提案できると思ったからです。
    ・自社の開発現場での事例を共有することで、TypeScriptにおけるフルスタック開発の具体的なイメージを提供し、導入を検討するきっかけを与えることができると思ったからです。`,
    role: "エンジニア",
    org: "トグルホールディングス株式会社 プロダクトユニット",
    speakerImage: "kimi_koma1111.jpg",
    bio: `新卒で営業職についた後、エンジニアへ転身。
    不動産テックベンチャーでエンジニアとしてのキャリアをスタートし、フロントエンド領域を担当。
    会社を変え、ふるさと納税ポータルサイトのフロントエンド開発に携わる。
    現在は不動産流通プラットフォーム「sketch」の開発をフルスタックに担当`,
    labels: {
      track: "トラック１",
      type: "セッション",
      time: "11:30~12:00",
    },
    socials: {
      xAccount: "kimi_koma1111",
      github: "kimitashoichi",
    },
    additionalInfo: "https://kimitashoichi.github.io/Profile",
  },
  Himenon: {
    title: "TypeScript ASTを利用したコードジェネレーターの実装入門",
    displayName: "Himenon",
    sessionAbstract: `TypeScriptのAPIにはAbstract Syntax Tree（抽象構文木。以降ASTと省略）に関するAPIがあります。抽象構文木は静的解析やSyntax Highlight、Code Generatorなど普段我々が利用しているツールの内部で利用されています。本発表では、TypeScriptのASTに入門しつつ、その応用であるコードの自動生成をどうやって実現していくか、OpenAPI Code Generatorのライブラリを4年間維持し続けている経験から紹介していきます。`,
    role: "ソフトウェアエンジニア",
    org: "株式会社ハイヤールー",
    speakerImage: "Himenon.jpeg",
    bio: `Webフロントエンドの周辺に生息しているソフトウェアエンジニア。常に「画面からでろ」と自分言い聞かせて早数年。株式会社ハイヤールーでコードを書いています。`,
    labels: {
      track: "トラック2",
      type: "セッション",
      time: "11:30~12:00",
    },
    socials: {
      xAccount: "Himenoglyph",
      github: "Himenon",
    },
    additionalInfo: "https://himenon.github.io/",
  },
  tockn: {
    title: "Prisma ORMを2年運用して培ったノウハウを共有する",
    displayName: "tockn (Takuto Sato)",
    sessionAbstract: `PrismaはTypeScript製のORMライブラリとしてその地位を確立しつつあります。
    ネット上では入門するための記事や採用したことを共有する記事、個別のエラーへの対処法を解説した記事は増えている一方で、年単位でPrismaを運用し、その現場のリアルな知見を得られる情報はまだまだ足りていない印象を持っています。
    
    そこで本発表では筆者が所属するCloudbase株式会社において2年以上Prismaを運用する中で取り入れてきた様々な工夫や、直面した課題とその対処法について共有していきます。
    
    すでにPrismaを運用している方にとっても、これから運用を始める・検討している方にとっても学びになるような発表にしていきます。`,
    role: "Software Engineer",
    org: "Cloudbase株式会社",
    speakerImage: "tockn.jpeg",
    bio: `クラウドセキュリティプラットフォーム「Cloudbase」のエンジニアをしています。日々バックエンドからWebフロントエンドまでをTypeScriptで開発しています。PdMやデザイナーと一緒にプロダクトの仕様を練ったり、商談に同席することもあります。釣りが趣味（素人）。`,
    labels: {
      track: "トラック3",
      type: "セッション",
      time: "11:30~12:00",
    },
    socials: {
      xAccount: "tockn_s",
      github: "tockn",
    },
    additionalInfo: "",
  },
  naoya_ito: {
    title: "TypeScript 関数型バックエンド開発のリアル",
    displayName: "伊藤直也",
    sessionAbstract: `TypeScript で飲食店向け業務システムの GraphQL バックエンド開発をしています。
    Domein Modeling Made Functional という、関数型的な実装アプローチの書籍を参考に、関数型寄りのスタイルで開発を続けています。
    
    この開発の概要は以前に、他所でも発表していますが、そこでは型をどう使うかといったところに主に焦点をあてた発表でした。
    
    この発表をすると、決まって、従前のオブジェクト指向/手続き型アプローチを前提とした開発とのギャップについて質問を受けます。
    
    今回は、少し視点を変えてその辺りを中心に実際にはどんな風に設計・実装しているかをお話できればと思っています。
    
    端的に言えば、アーキテクチャやモデリング、設計自体はこれまでとあまり変わりません。一方で、実装は色々と変わる··· 関数型のアプローチを取り入れることで改善できるところがあります。オブジェクト指向のメンタルモデルが無駄になることはありません。
    
    とはいえその一方で、純粋関数型言語ではない TypeScript で関数型アプローチをやっていくときの面倒な側面も、もちろんあります。
    
    このあたりのリアリティについてお話したいと思います。`,
    role: "CTO",
    org: "株式会社 一休",
    speakerImage: "naoya_ito.jpeg",
    bio: `株式会社一休 で CTO をやっています`,
    labels: {
      track: "トラック1",
      type: "セッション",
      time: "13:20~13:50",
    },
    socials: {
      xAccount: "naoya_ito",
      github: "naoya",
    },
    additionalInfo: "",
  },
  ypresto: {
    title: "TypeScriptと型のパフォーマンス",
    displayName: "ypresto",
    sessionAbstract: `TypeScriptではそのチューリング完全な型計算能力を使って、ライブラリの利用者に高度な開発者体験を提供することができます。React、MUI、react-hook-formなどの、ジェネリクスを多用した型定義が、その最たる例です。
 
    一方で型パズルや黒魔術などと呼ばれるこの技法は、使い方によってはエディタがフリーズするほどの負荷がかかり、開発者体験を損ねることもある諸刃の剣です。過剰な計算が発生するシチュエーションの実例を、tscの動作とデバッグ方法を交えて紹介します。`,
    role: "ソフトウェアエンジニア",
    org: "株式会社LayerX",
    speakerImage: "ypresto.jpeg",
    bio: `2012年に新卒でMIXIに入社。2014年より「みてね」の立ち上げに関わり、Androidを中心に開発を担当。その後、教育・流通系のスタートアップ複数社に籍を移し、開発全般を担いつつ、フロントエンドやUIデザインをリードする役割を担う。2024年1月にLayerXに入社し、バクラク事業部 請求書受取チームにてフロントエンドを中心に開発に携わる。TypeScript自体のパフォーマンスについて調査し、改善のためのPull Requestがマージされた。型魔術師は憧れ。`,
    labels: {
      track: "トラック2",
      type: "セッション",
      time: "13:20~13:50",
    },
    socials: {
      xAccount: "yuya_presto",
      github: "ypresto",
    },
    additionalInfo: "",
  },
  pd1xx: {
    title: "部分型の代数的模型",
    displayName: "PADAone",
    sessionAbstract: `プログラミング言語の世界では、強力な静的型付け言語の重要性が高まっており、代数的データ型やパターンマッチングが注目を集めています。

    TypeScriptもこの影響を受け、代数的構造を意識したプログラミングが期待されています。しかし、TypeScriptにおける基本的な型のレベルでさえ、どのような代数的構造を持つかということが十分に理解されていません。
    
    この発表では、TypeScriptの型と部分型関係が形成する複数の代数的構造を解説し、強固かつ柔軟な型に関するメンタルモデルの構築方法を紹介します。具体的には、順序理論、集合論、束論、環論、圏論といった複数の数学理論の観点から、型の振る舞いを代数法則に基づいて予測できるようになります。
    
    このような知識を深めることで、TypeScriptのユーザー全体が型システムに対する理解を深め、TypeScriptの型についての議論やコミュニティが発展するような発表となることを目指します。`,
    role: "フロントエンドエンジニア",
    org: "",
    speakerImage: "pd1xx.jpeg",
    bio: `メモやエディタ、マークダウンの話が大好きなエンジニアです。翻訳活動やオープンソースのドキュメント執筆などをやりつつ、非同期処理や型理論など自分が気になることを調査の名目で本にしています。`,
    labels: {
      track: "トラック3",
      type: "セッション",
      time: "13:20~13:50",
    },
    socials: {
      xAccount: "pd1xx",
      github: "yo-goto",
    },
    additionalInfo: "https://publish.obsidian.md/pd1-notes/start-page",
  },
  yanaemon169: {
    title: "TypeScript の抽象構文木を用いた、数百を超える API の大規模リファクタリング戦略",
    displayName: "白栁 広樹",
    sessionAbstract: `ミツモアはサービスの提供開始から、6 年以上が経ち、サービが急速に拡大してきました。
    急成長の中で、古いコードが多くあり新しい構成への変革が求められていました。
    その中の一つに Express + TypeScriptを用いて書かれていた Backend のコードをNest.js へ移行することを決定しましたが、
    管理用の API なども数えると数百を超える API 数がありました。
    全て手作業で移行をしていては膨大な時間がかかります。
    そこで効率的に移行するため、TypeScript のコードを Abstract Syntax Tree (AST) などを用いて分析、Generative AI の力も借りつつ、
    既存ロジックへの影響を最小限にしつつ、大規模にリファクタリングをした話をできればと思います。`,
    role: "VPoE",
    org: "株式会社ミツモア",
    speakerImage: "yanaemon169.jpeg",
    bio: `ヤフー株式会社にてヤフオク!の運用・基盤開発などを経て、フロントエンドのプラットフォーム刷新のプロジェクトマネージャーを経験した後、ミツモアにジョイン。
    ミツモアでは、プロダクトのフロントエンド・バックエンドからインフラに至るまでフルスタックで開発し、現在は VPoE として、ミツモアプロダクトの開発を統括し、技術戦略とチームの成長を牽引しています。`,
    labels: {
      track: "トラック1",
      type: "セッション",
      time: "14:00~14:30",
    },
    socials: {
      xAccount: "yanaemon169",
      github: "yanaemon",
    },
    additionalInfo: "",
  },
  kosui_me: {
    title: "複雑なビジネスルールに挑む：正確性と効率性を両立するfp-tsのチーム活用術",
    displayName: "kosui",
    sessionAbstract: `課題
    特にtoBサービスを開発する皆様、こんな悩みを抱えたことはありませんか？
    
    「顧客がExcelやCSVで入稿した複雑な入力データを、正確かつ効率的に検証しなければならない…」
    
    toBサービスでは、数々のエンティティの関係性について、顧客の業界特有のビジネスルールや法令に基づいた検証を実現しなければならないことがあります。もちろん、検証結果が正確であることは必須ですが、顧客に何度も再入力させないためには複数のエラーをなるべく一度に返却しなければなりません。
    
    数多くのビジネスルールの検証結果を、正確かつ効率的に合成する良い方法はないでしょうか？
    
    解決策
    fp-tsの柔軟な関数合成・エラー合成機能
    
    この発表では、複数の医療系SaaSを展開するカケハシにて、エンタープライズな顧客の組織階層を管理・配信する基盤システム「OGAS」の事例を紹介します。「Excel入稿ファイルからツリー形式のデータ構造を組み立てる」という複雑な要件に対し、fp-tsの柔軟な関数合成・エラー合成機能で立ち向かい、検証ロジックの正確さと効率性を両立させることができました。
    
    fp-tsをチームで活用するために    
    さらに、この発表ではfp-tsをチームで活用するための工夫も紹介します。fp-tsは日本語の情報が少なく、neverthrowなどと比べて抽象度が高いため、しばしば敬遠されることがあります。しかし、OptionやEitherだけではなく、これらを柔軟に合成できるpipeやflow、Validationなどの仕組みを活用することで、複雑なビジネスロジックに立ち向かうことができます。私達は、一日二回のモブプロや、すぐに使える社内レシピ集などを通じ、幅広い背景を持つメンバーが活躍できる環境を実現しました。`,
    role: "テックリード",
    org: "株式会社カケハシ",
    speakerImage: "kosui_me.png",
    bio: `新卒でメガベンチャーに入社し、認証基盤の開発に従事。2022年8月にカケハシ入社。急激に拡大するカケハシのマルチプロダクト戦略を支えるプラットフォームサービスのテックリードとして、開発・運用を行っている。`,
    labels: {
      track: "トラック3",
      type: "セッション",
      time: "14:00~14:30",
    },
    socials: {
      xAccount: "kosui_me",
      github: "iwasa-kosui",
    },
    additionalInfo: "https://www.kosui.me/",
  },
  takezoux2: {
    title: "Step by Stepで学ぶ、ADT(代数的データ型)、モナドからEffect-TSまで",
    displayName: "竹下義晃(takezoux2)",
    sessionAbstract: `TypeScriptに、関数型、データ指向プログラミングの思想を取り入れることで、実用上でどのようなメリットが生まれるかを解説していきます。
    内容としては、ADT(代数的データ型)、Either、Task、TaskEither、モナドトランスフォーマー、Effect-TSと段階を追いながら、それぞれでどのようなメリット、デメリットがあるかを学びながら、モナドの理解を深めて行ってもらいます。
    また、Effect-TSによる副作用の分離や依存性の注入によるテストの容易化などライブラリの便利な使い方も紹介していきます。
    
    Effect-TS https://www.effect.website/
    (正式名称はEffectですが、TSをつけないとGooglabilityが低いので発表中ではEffect-TSと呼称します)`,
    role: "テクノロジー戦略室 室長",
    org: "レバレジーズ株式会社",
    speakerImage: "takezoux2.jpeg",
    bio: `レバレジーズ株式会社 テクノロジー戦略室室長、一般社団法人TSKaigi Association 代表理事、一般社団法人Japan Scala Association理事。
    2009年に東京大学大学院農学生命科学科を修了後、芸者東京を経て2020年にレバレジーズに入社。フルスタックの技術力を背景に、レバレジーズ社の技術の向上とエンジニア組織文化の構築に取り組む。また、ScalaMatsuriやTSKaigiの運営にも関わり、技術コミュニティを盛り上げる活動も行っている。`,
    labels: {
      track: "トラック1",
      type: "セッション",
      time: "14:40~15:10",
    },
    socials: {
      xAccount: "takezoux2",
      github: "takezoux2",
    },
    additionalInfo: "",
  },
  misoton665: {
    title: "tRPCを実務に導入して分かった旨味と苦味",
    displayName: "海老原 圭吾",
    sessionAbstract: `tRPCを実務で使用して見つけたメリットと実際に起きた問題、またその解消・回避方法について紹介します。

    私が所属する株式会社ゼストではアプリケーションAPIのインターフェイスとして昨年2月からtRPCを使用してWebアプリケーション開発をしています。規模の目安としては、現在約80のprocedureがありサーバーサイドの実装行数は65,000行程で、フロントエンドはNext.jsを使っていまして実装行数は118,000行程です。
    
    tRPCに限らず「話題になったが調べてもリアルな声が聞けない」というライブラリや技術はたくさんあります。何が嬉しいか、どう使うのかはすぐ調べられても、実際に設計・開発を行った際に何が起きるのかについて知るのは難しいです。弊社の事例を紹介してtRPCを検討している方や詳しく知らない方の助けになればと思っています。
    願わくばtRPC仲間を見つけて意見交換もしたいですね！`,
    role: "エンジニア",
    org: "株式会社ゼスト 開発本部",
    speakerImage: "misoton665.png",
    bio: `株式会社ゼストでWebアプリケーション開発をするエンジニア。
    既存プロダクトをフルリニューアルするプロジェクトでフロントエンドの開発をしています。`,
    labels: {
      track: "トラック2",
      type: "セッション",
      time: "14:40~15:10",
    },
    socials: {
      xAccount: "misoton665",
      github: "misoton665",
    },
    additionalInfo: "",
  },
  lacolaco: {
    title: "Type-safety in Angular",
    displayName: "lacolaco",
    sessionAbstract: `AngularというフレームワークにおいてTypeScriptの静的型付けはどのように恩恵をもたらすのでしょうか。2017年に誕生したときからTypeScriptを使って開発することをデフォルトとしてきたAngularですが、ここ2,3年のアップデートによってコードの書き方は大きく変わってきています。その中でも、型の力をより強く引き出せるようになった変化について、そしてその裏側の仕組みについて紹介し、Angularを使う開発の中でのTypeScriptとの付き合い方について話します。`,
    role: "Google Developers Expert",
    org: "Classi株式会社",
    speakerImage: "lacolaco.png",
    bio: `Google Developers Expert for Angular、Angular日本ユーザー会の代表として、Angularコミュニティへのコントリビューションや翻訳、登壇、イベント主催などの活動をしています。ポッドキャスト「リファクタリングとともに生きるラジオ」でも活動中。`,
    labels: {
      track: "トラック3",
      type: "セッション",
      time: "14:40~15:10",
    },
    socials: {
      xAccount: "laco2net",
      github: "lacolaco",
    },
    additionalInfo: "https://lacolaco.net",
  },
  "9wick": {
    title: "ハードウェアを動かすTypeScrptの世界",
    displayName: "9wick",
    sessionAbstract: `TypeScriptはIoTの領域でも使われており、様々なハードウェアと連動させて動かすことができます。
    Webブラウザ経由でBluetoothを制御したり、スマートフォンの加速度センサで動きをセンシングしたりなど、ディスプレイの外側の現実世界と連動させることもやりやすい時代になりました。
    選択肢が増えた分、「やりたいこと」に対して「どれを使うのが適切なのか」「将来的な拡張性があるのはどれか」などの選定が難しくなってきています。
    
    本発表では、みんな大好きラズベリーパイから、Microsoftが出したDeviceScriptや、組み込みマイコンをどうやってTypeScriptで制御する際の選択肢など、IoT/ハードウェアにおけるTypeScriptの選択肢とそれぞれの違い、および実際に使う際に気をつけないといけない点などについてお話いたします。`,
    role: "Co-Founder & Engineer",
    org: "株式会社obniz",
    speakerImage: "9wick.jpeg",
    bio: `ロボット工学を専門とし、ソフトウェア開発をやりつつもハードウェアの物理法則と戦うエンジニア`,
    labels: {
      track: "トラック1",
      type: "セッション",
      time: "15:20~15:50",
    },
    socials: {
      xAccount: "9wick",
      github: "9wick",
    },
    additionalInfo: "https://9wick.com/",
  },
  karan_corons: {
    title: "サービス開発におけるVue3とTypeScriptの親和性について",
    displayName: "からころ",
    sessionAbstract: `Vue3がリリースされ、早くも4年弱経とうとしています、Vue2のLTSも2023年末に終了し、新規開発ではVue3を利用することが主流となってきました。
    Vueと並ぶフレームワークとしてReactがありますが、未だにReactと比較される際、TypeScript対応が…という噂がたまに聞こえてきます。しかして、Vue3とTypeScriptの親和性は実際のところどうなのでしょうか。
    Piniaやその他ツールチェイン側などと共にVue3の機能や実際の実装例とともにVue3とTypeScriptの親和性の疑問を解消できるような発表にできればと思っています。`,
    role: "アプリケーションエキスパート",
    org: "株式会社LIXIL Marketing DevOps. System Dev. ＆ Ope. Digital",
    speakerImage: "karan_corons.jpg",
    bio: `フロントエンド技術が好きです！
    株式会社LIXILで、アプリケーションエキスパートとして認証基盤周りの開発をメインで行っています。また、個人的にはZennなどで技術記事を書くなど、外部発信もしています。`,
    labels: {
      track: "トラック2",
      type: "セッション",
      time: "15:20~15:50",
    },
    socials: {
      xAccount: "karan_corons",
      github: "tsukuha",
    },
    additionalInfo: "https://zenn.dev/karan_coron",
  },
  hokaccha: {
    title: "TypeScriptとGraphQLで実現する型安全なAPI実装",
    displayName: "Kazuhito Hokamura",
    sessionAbstract: `TypeScriptを用いたGraphQLのクライアント・サーバーの実装は、開発フローに型安全性と予測可能性をもたらしますが、その過程は必ずしも単純ではありません。本トークは、複数のプロジェクトにおいてTypeScriptとGraphQLで型安全なシステムを構築してきた経験をもとに、APIの入出力に型を付けることの重要性やそのためのベストプラクティスを解説します。

    まず初めに、なぜAPIに型をつけることが重要なのかを明らかにします。その上で、型安全にするためのツールや手法を紹介します。これらのツールや手法は、エラーを未然に防ぎ、予測可能な開発フローを実現します。
    
    さらに、クライアントとサーバーでは考慮すべき点が異なります。それぞれの視点から、どのような点を考慮すべきか、また、ベストプラクティスは何かを解説します。例えば、クライアントでは単純にGraphQLのスキーマから生成した型だけでは安全にはならず、送信するクエリから型生成する必要があります。また、GraphQLから生成したした型をコンポーネントからはどのように利用するかというのも興味深いトピックです。一方サーバーでは、Resolverが返す型とアプリケーション内部で扱うModelの型を合わせることでより安全な実装にするプラクティスや、NestJSなどのフレームワークを使ううえで考慮することなど、クライアントとサーバーでは考えることが全然違います。
    
    このトークを通じて、TypeScriptとGraphQLを用いた開発フローの質を向上させ、開発者の生産性を高めることを目指します。`,
    role: "ソフトウェアエンジニア",
    org: "ユビー株式会社",
    speakerImage: "hokaccha.jpeg",
    bio: `Webのフロントエンドを中心にキャリアを詰んだ後、バックエンドや基盤開発などの経験を経て、最近は領域を問わずプロダクト開発から基盤開発まで何でもやる便利屋としてTypeScriptやGoを書くことが多い。個人ではAdventarというサービスの開発と運用もおこなっている。福岡在住。`,
    labels: {
      track: "トラック1",
      type: "セッション",
      time: "16:00~16:30",
    },
    socials: {
      xAccount: "hokaccha",
      github: "hokaccha",
    },
    additionalInfo: "",
  },
  unvalley: {
    title: "Exploring type-informed lint rules in Rust based Linters",
    displayName: "unvalley",
    sessionAbstract: `本セッションの内容は以下となる予定です。

    - typescript-eslintにおける型情報を必要とするLint Ruleの実現方法
    - Rust製のJavaScript / TypeScript Linterが、どのように型情報を必要とするLint Rulesを実現方法の模索
    - stc / ezno といったAlternative TypeScript Compilerの動向
    
    TypeScriptを対象としたLinterとして、typescript-eslint, biome, oxcなどが挙げられます。  
    現在、最も普及しているtypescript-eslintは、tscから得られた型情報を利用して、await-thenable や no-floating-promiseなどのlint ruleを提供しています。型情報を用いるlint ruleは、バグの早期発見などの観点で有用です。
    
    一方、Rust製であるbiomeやoxcなどは、Lint速度 (パフォーマンス) を特徴の1つとしています。RustからTypeScriptの型情報を取得・利用する方法はいくつかの選択肢があります。1. stcやeznoといったRust製TypeScript Compilerの利用, 2. 部分的な型推論のためのサブセットの構築, 3. TypeScriptに追加される可能性のある '--isolatedDeclarations' option の利用（ただしリリース時期未定）
    
    これらの情報を整理し、Rust製Linterの型情報の模索過程について共有します。`,
    role: "Software Engineer",
    org: "",
    speakerImage: "unvalley.jpeg",
    bio: `A software engineer who writes Rust and TypeScript. Biome core member.
    株式会社LIXILで、アプリケーションエキスパートとして認証基盤周りの開発をメインで行っています。また、個人的にはZennなどで技術記事を書くなど、外部発信もしています。`,
    labels: {
      track: "トラック2",
      type: "セッション",
      time: "16:00~16:30",
    },
    socials: {
      xAccount: "unvalley_",
      github: "unvalley",
    },
    additionalInfo: "http://unvalley.me",
  },
  pizzacat83: {
    title: "Denoで作る快適な “as Code” プラットフォーム",
    displayName: "pizzacat83",
    sessionAbstract: `クラウドのセキュリティをプログラマブルにチェックできるPolicy as Codeプラットフォーム「Shisho Cloud」において、「クラウドの設定値検査ルールをTypeScriptで書ける」という機能を最近リリースしました。この機能の開発では「検査ルールを快適に読み書きする体験」にこだわり、コード生成器やDenoベースのランタイム・バンドラ等を開発しました。
    トークテーマ：
    ・クラウドの検査ルールを書く言語としてのTSの魅力
    ・“as TypeScript Code”プラットフォームの基盤にDenoを採用した背景
    ・コード生成器・ランタイム・バンドラの作り方、快適な“as Code”体験のための細かなこだわり、実装の苦労話
    
    トークの題材である「クラウドの設定値検査ルールをTypeScriptで書ける」機能は、次のようなものです。
    ・ユーザーはどのような設定値（例：S3バケットの公開設定）を検査したいかをGraphQLクエリとして記述する
    ・ユーザーは設定値に不備があるかどうかを判定するTypeScriptコードを書く（例：S3バケットが公開状態ならNGを出力）
    ・ユーザーがアップロードしたGraphQLクエリとTSの検査コードをもとに、Shisho Cloudは継続的にクラウドの設定値を取得して検査コードを実行し、出力がNGなら報告する
    
    この機能を実現するために、以下のものを実装しました。
    ・ユーザーのGraphQLクエリに基づきクラウドの設定値データを取得するシステム
    ・取得した設定値データを入力として、ユーザーのTSコードをサンドボックス実行するシステム（Denoベース）
    ・ユーザーのGraphQLクエリからTSの型定義を生成するツール（Rust向けの型定義生成器をフォーク）
    ・ユーザーが指定したTSファイルに対し、依存モジュールをバンドルしてShisho Cloudにアップロードするツール（Denoベース）
    バンドラについては、ユーザー体験を考えてあえてesbuild等を使わずdeno_graphをベースに内製しました。話題の例として、DenoのRustライブラリは綺麗にモジュール化されていて応用が効く一方で、モジュールのダウンロード等の処理はライブラリ化されておらず、Denoと一貫した挙動をするツールを作るのは難しい、などを話す予定です。`,
    role: "ソフトウェアエンジニア",
    org: "株式会社Flatt Security",
    speakerImage: "pizzacat83.png",
    bio: `大学在学中の2020年5月に株式会社Flatt Securityにアルバイトとして入社し、2024年4月より正社員に。セキュリティエンジニア時代はWeb・Firebase・クラウドのセキュリティ診断を担当しながら、診断を管理する社内システムの内製にも従事。現在はセキュリティSaaS「Shisho Cloud」の開発に従事し、フロントエンド、バックエンド、CLI、TypeScript・Regoコード実行基盤など幅広く手掛ける。`,
    labels: {
      track: "トラック3",
      type: "セッション",
      time: "16:00~16:30",
    },
    socials: {
      xAccount: "pizzacat83b",
      github: "pizzacat83",
    },
    additionalInfo: "https://pizzacat83.com/",
  },
  __sosukeSuzuki: {
    title: "Prettierの未来を考える",
    displayName: "Sosuke Suzuki",
    sessionAbstract: `Prettierは、2017年にJames Longとvjeuxによって開発されて以降、JavaScriptエコシステムにおけるコードフォーマッタのデファクトスタンダードとしての地位を確立してきました。James Longとvjeuxが開発から離れた後も、ボランティアのチームによって活発なメンテナンスが行われています。しかし、たくさん使われるようになって、ESLintなどの別のツールを組み合わせたときの設定の難しさや、実行速度の低さなどの問題が顕在化しています。

    最近はそういった問題を解決する後継となりうるソフトウェアがいくつか登場しています。たとえば、Romeのコミュニティフォーク版であるBiomeや、Denoの標準コードフォーマッタであるdprintなどです。
    
    このセッションでは、それらの新しいツールとPrettierを比較しながら、JavaScriptのコードフォーマッタの未来について議論します。`,
    role: "エンジニア",
    org: "ユビー株式会社",
    speakerImage: "__sosukeSuzuki.jpeg",
    bio: `筑波大学情報学群の学生で、Ubie株式会社のソフトウェアエンジニア。「テクノロジーで人々を適切な医療に案内する」ことを目指して、症状検索エンジン「ユビー」の開発に尽力している。副業としてサイボウズフロントエンドエキスパートチームに所属。また、JavaScriptのコードフォーマッタであるPrettierのメンテナや、JavaScriptのトランスパイラBabelのコミッタとしても活躍中。`,
    labels: {
      track: "トラック1",
      type: "セッション",
      time: "16:40~17:10",
    },
    socials: {
      xAccount: "__sosukeSuzuki",
      github: "sosukesuzuki",
    },
    additionalInfo: "https://sosukesuzuki.dev",
  },
  meganetaaan: {
    title: "ｽﾀｯｸﾁｬﾝ -TypeScriptで動くオープンソースロボット-",
    displayName: "ししかわ",
    sessionAbstract: `オープンソースのコミュニケーションロボット「ｽﾀｯｸﾁｬﾝ」開発におけるTypeScriptの活用について紹介します。

    ｽﾀｯｸﾁｬﾝはマイコンモジュール「M5Stack」を顔に見立てたｶﾜｲｲﾛﾎﾞｯﾄです。M5Stackの開発ではC/C++言語が広く使われますが、Webフロントエンドを生業とする私にとって、組込み機器のUIやネットワークアクセスのコードをCで書くのはとても大変でした。そこで「Moddable」という組み込み向けJavaScriptアプリケーション開発プラットフォームを全面的に採用することで、Webエンジニアにも易しく柔軟なアプリケーション開発を実現しました。
    
    本セッションではｽﾀｯｸﾁｬﾝの動作デモやコードの具体例を見せながら、ロボットや組込み開発においてTypeScript（Moddable）を使うメリットとトレードオフについて紹介します。一例として下記のトピックを扱います。
    - ECMA-419に準拠した型安全な組み込みAPIの利用
    - グラフィック、ネットワーク、サウンドなどの豊富な機能
    - Lint、テストツール、CLIなどのWebのエコシステムとの親和性
    - 速度やメモリ使用量に関するトレードオフと対策
    
    TypeScriptでロボットが動く時代。組込み開発を始めてみたいWeb開発者におすすめのトークです！`,
    role: "",
    org: "ｽﾀｯｸﾁｬﾝコミュニティ",
    speakerImage: "meganetaaan.jpeg",
    bio: `TypeScriptで動くｽｰﾊﾟｰｶﾜｲｲﾛﾎﾞｯﾄ「ｽﾀｯｸﾁｬﾝ」をオープンソースで開発しています。`,
    labels: {
      track: "トラック3",
      type: "セッション",
      time: "16:40~17:10",
    },
    socials: {
      xAccount: "stack_chan",
      github: "meganetaaan",
    },
    additionalInfo: "https://meganetaaan.jp/",
  },
  TAMAGOKAKEG: {
    title: 'TypeScriptから始めるVR生活',
    displayName:'TamaG',
    sessionAbstract: `みなさん、ResoniteというVRSNSはご存知ですか？
    Resoniteは「Flux」という独自のビジュアルプログラミング言語を使ってメタバース内で何でも作ることが出来る、何でも創りたいエンジニアにはもってこいのVRSNSです！
    
    今日はそんなResonite内で使えるアイテムを、みなさんが普段使っているであろうTypeScriptを使って、型安全に開発することができるMirageXについてお話します！
    
    こんな人に聞いて欲しい！
    ・メタバースって今どうなってんだって人
    ・Resoniteって名前だけは聞いたことあるって人
    ・TypeScriptで世界を創りたい人`,
    role: 'エンジニア',
    org: '株式会社ウィルゲート',
    speakerImage: 'TAMAGOKAKE_G_.jpeg',
    bio: `VR空間で健康体操したり、ポケモンと一緒に寝たり、インクを撒き散らしたりで非常に健康的なエンジニアです。
    普段は TypeScript を使ってフロントエンド・バックエンドの開発をしております！
    最近、E2E テストの導入を始めたので知見を無限に募集中です！！
    `,
    labels: {
      track: 'トラック2',
      type: 'LT',
      time: '14:00 ~ 14:30'
    },
    socials: {
      xAccount: 'TAMAGOKAKE_G_',
      github: 'TAMAGOKAKEG'
    },
    additionalInfo: ''
  },
  euxn23: {
    title: 'TypeScript をパワフルに使って開発したい！',
    displayName: 'ユーン',
    sessionAbstract: `TypeScript によって普通にアプリケーション開発をするだけでも大きな恩恵を受けられるようになってきている昨今ですが、zod をはじめとして TypeScript にはその機能を存分に生かしたパワフルなライブラリたちが多数存在します。
    フロントだけでなくサーバサイドまで、あるいはその橋渡しとして活用できる TypeScript のライブラリたちを紹介し、フロントエンドのみならず、バックエンドでも TypeScript を使用する魅力を伝えます。
    知っている人は知っているけど知らない人に伝えるために話します。`,
    role: 'エンジニア',
    org: '株式会社ドワンゴ教育事業本部',
    speakerImage:'euxn23.png',
    bio: 'ビルドエンジニア再開しました。ラビット小隊が好き',
    labels: {
      track: 'トラック2',
      type: 'LT',
      time: '14:00 ~ 14:30'
    },
    socials: {
      xAccount: 'euxn23',
      github: 'euxn23'
    },
    additionalInfo: 'https://blog.euxn.me'
  },
  ry0_kaga: {
    title: 'TypeScriptでもLLMアプリケーション開発！LangChain.js入門',
    displayName: 'r-kagaya',
    sessionAbstract: `シンプルにLLMを使ってみるだけなら各社のAPIを叩くだけで良いですが、より込み入ったLLMアプリケーション・機能開発をする際の選択肢としてデファクトになりつつあるのがLangChainです。
    しかし、どうしても情報がPython環境の例が多く、意外とTypeScriptでの実例などは限定的ですが、LangChainは公式でJavaScript/TypeScript版である、LangChain.jsを提供しており、実はTypeScriptはLLMアプリケーションを開発する上で便利な言語となっています。
    (JavaやGo版は非公式で存在)
    
    本LTでは、TypeScriptでも使える！LangChain.js入門と称して、フロントエンド・サーバーサイド共にTypeScriptで構築されたLLMアプリケーションを開発する上で得た経験も元に、
    TypeScriptでLangChain.jsで開発を始める上で知っておくと便利な情報をを得てもらうことを目的とします。`,
    role: 'ソフトウェアエンジニア',
    org: '株式会社ログラス',
    speakerImage: 'ry0_kaga.jpeg',
    bio: '2022年に株式会社ログラスに入社。ソフトウェアエンジニアとしてマスタ管理等の開発、イネーブルメントチームの一員として主に開発者生産性・体験の向上を中心とした横断課題の解決に取り組んだのち、現在は生成AI/LLMチームの立ち上げ',
    labels: {
      track: 'トラック2',
      type: 'LT',
      time: '14:00 ~ 14:30'
    },
    socials: {
      xAccount: 'ry0_kaga',
      github: ''
    },
    additionalInfo: ''
  },
  ytaisei_: {
    title: 'TanStack Routerで型安全かつ効率的なルーティングを実現',
    displayName: '安井大晟（ytaisei）',
    sessionAbstract: `Reactを用いたSPA開発においてフレームワークの採用は時にtoo muchになります。
    しかし、Next.jsやRemixのFiled-Basedなルーティングは開発体験が良いです。
    
    私たちはSPA開発においても型安全でFile-Basedなルーティングを求めています。
    
    今回はそのような状況においてTanStack Routerが有力な候補になることを、その特徴とメリットに触れながら解説します。
    
    次の特徴を紹介します。
    
    - 型安全でシンプルなルーティング
    - File-Basedなルート生成
    - バンドルサイズを軽減するCode Splitting
    - Search Paramsによる状態管理
    - キャッシュを備えたData Loading`,
    role: 'フロントエンドエンジニア',
    org: '株式会社CyberAgent',
    speakerImage:'ytaisei_.jpeg',
    bio: `この春から社会人1年目になったフロントエンドエンジニアです！
    普段はReactを用いた開発を主に行っております。`,
    labels: {
      track: 'トラック2',
      type: 'LT',
      time: '14:00 ~ 14:30'
    },
    socials: {
      xAccount: 'ytaisei_',
      github: 'taisei-13046'
    },
    additionalInfo: ''
  },
  dai_shi: {
    title: 'TypeScriptできると思ったのは勘違いだった件',
    displayName: 'Daishi Kato (加藤大志)',
    sessionAbstract: `OSS開発する中で知ったTypeScriptの難解な記法について紹介し、踏み込まない方が良い領域があるということを一つの実例をもとに発表します。`,
    role: '',
    org: '',
    speakerImage: 'dai_shi.png',
    bio: 'Reactライブラリの作者で、3つの状態管理ライブラリ、Zustand、Jotai、Valtio、React Server ComponentsフレームワークWakuを保守。',
    labels: {
      track: 'トラック3',
      type: 'LT',
      time: '15:20 ~ 15:50'
    },
    socials: {
      xAccount: 'dai_shi',
      github: 'dai-shi'
    },
    additionalInfo: 'https://daishikato.com'
  },
  yasaichi: {
    title: 'Effectで作る堅牢でスケーラブルなAPIゲートウェイ',
    displayName: 'yasaichi',
    sessionAbstract: `# 伝えたいこと
    - 関数型プログラミングの考え方が（その詳細に立ち入らずとも）ソフトウェア開発の実務において活用できること
    - 上記の実現にあたり、「Effect」というライブラリが利用できること
    
    # トーク内容要約
    APIゲートウェイを素直に実装すると、背後にあるマイクロサービスへのAPIリクエスト、そのレスポンスの取捨選択と合成といった主要な関心事と、ネットワークI/Oに起因する関心事が1つのコードベースに混在してしまいます。
    後者は、具体的には非同期処理、並行処理、エラーハンドリング、リトライなどです。
    このような構造は、機能要件がシンプルなうち問題になりませんが、複雑になるとアプリケーションの保守性の低下を招くことになるでしょう。
    本発表では、TypeScriptの新興ライブラリ「Effect（https://effect.website）」を使って（※）これら2つの関心事を分離することで、堅牢でスケーラブルなAPIゲートウェイの実装を試みた事例を紹介します。
    ※ ランタイムにはDeno、フレームワークにはNest.jsを使用`,
    role: 'シニアエンジニア',
    org: '株式会社EARTHBRAIN',
    speakerImage: '_yasaichi.png',
    bio: '2015年にピクスタ株式会社に新卒入社後、開発プロセスの改善や開発基盤の整備に従事。2020年より執行役員CTOを務めた後、2023年6月よりEARTHBRAINに参画。著作に「パーフェクトRuby on Rails【増補改訂版】」（共著、技術評論社）がある。',
    labels: {
      track: 'トラック3',
      type: 'LT',
      time: '15:20 ~ 15:50'
    },
    socials: {
      xAccount: '_yasaichi',
      github: 'yasaichi'
    },
    additionalInfo: ''
  },
  sugar235711: {
    title: 'Introduction to Database Connection Management Patterns in TypeScript！LangChain.js入門',
    displayName: "Sugar",
    sessionAbstract: `[主題]
    TypeScriptでのDB Connectionの管理パターンを知ること
    
    [題材を選んだ理由・背景]
    マルチテナントやアクセス数の多いアプリケーションでは安定性の担保やパフォーマンス向上のためにDBのコネクション管理を効率的に行う必要があります。
    フレームワークによってはDBのコネクション管理を隠蔽してくれるものもありますが、昨今のエッジ環境の盛り上がりから、より薄いORMの採用が増え、結果としてコネクションの管理を自分で実装する場面が増えている今、改めてDBのConnectionの効率的な管理方法を知る良い機会だと思っています。
    
    [内容]
    Transactionにusingを使用することで、効率的にコネクションのリリースをする実装及び、
    AsyncLocalStorageとTransactionを組み合わせに非同期でも必ず一意なアクセスを担保する方法も併せて紹介する予定です。`,
    role: 'バックエンドエンジニア',
    org:'株式会社サイバーエージェント/AI Shift',
    speakerImage: 'sugar235711.jpeg',
    bio: '社会に揉まれて3年目',
    labels: {
      track: 'トラック3',
      type: 'LT',
      time: '15:20 ~ 15:50'
    },
    socials: {
      xAccount: 'sugar235711',
      github: 'sugar-cat7'
    },
    additionalInfo: 'https://sugar-cat7.github.io/portfolio'
  },
  ryusaka: {
    title: 'Prismaでスキーマ変更を行う際のベストプラクティス',
    displayName: "ryusaka",
    sessionAbstract: `弊社ではPrismaを用いて開発を行っています。
    約3年間利用してきた中で、データベーススキーマに変更を加える際に実際の本番運用では気をつけなければいけないことが見えてきました。
    Prismaと組み合わせている周辺技術を紹介しつつ、スキーマ変更時に気をつけなければならない点を説明します。具体的にはblue greenデプロイを行う際にフロントエンドとの後方互換性を保ちつつリリースする方法について述べます`,
    role: 'エンジニアリングマネージャー',
    org: '株式会社ミツモア プロダクト部 プロワンチーム',
    speakerImage: 'ryusaka.jpeg',
    bio: `株式会社ミツモアでプロワンのプロダクト責任者をしています。
    創業4ヶ月後の2017年6月からミツモアに参画しています。`,
    labels: {
      track: 'トラック3',
      type: 'LT',
      time: '15:20 ~ 15:50'
    },
    socials: {
      xAccount: '',
      github: 'ryusaka'
    },
    additionalInfo: ''
  },
  yajihum: {
    title: 'TypeScriptのパフォーマンス改善',
    displayName: 'フロントエンドエンジニア',
    sessionAbstract: `◎概要
    TypeScriptはJavaScriptのスーパーセットとして、静的型付けと高度な型システムを提供し、大規模なプロジェクトの開発を助けています。しかし、これらの利点を最大限に活用するためには、コンパイルパフォーマンスの最適化が不可欠です。コンパイル速度を上げることでビルド時間やテスト実行時間の削減を行うことができます。今回の発表では、TypeScriptのコンパイルパフォーマンスを改善するための具体的な手法とその背後にある理論をいくつか紹介します。
    
    ◎内容
    1. TypeScriptのパフォーマンスとは何か、そしてなぜそれが重要なのか
    2. コンパイル速度を改善するための具体的な手法とその背後にある理論
    
    ◎このテーマを選んだ理由
    今回の発表では、コンパイル速度を改善するための方法をいくつか紹介しますが、どれも理解がしやすくすぐに実践できるような方法です。TypeScript公式が紹介しているため信憑性が高く、かつ日本語での解説が少ないことから知らない方も多いと思っています。TypeScriptの初心者から経験者まで、普段TypeScriptを使うすべての開発者によって有益な内容です。
    また他の理由として、私自身がまだまだ未熟ながらもフロントエンドのパフォーマンス改善に強くなりたいという思いがあります。今回の発表を通して自分の専門性を高めるはじめの一歩となることを目標にしています。`,
    role: 'フロントエンドエンジニア',
    org: '株式会社COMPASS',
    speakerImage: 'yajihum.jpg',
    bio: `2022年に慶應義塾大学商学部を卒業後、新卒未経験でWeb系受託開発会社に入社。2023年8月からフロントエンドエンジニアとして現職。小中学生を対象にした公教育で使われるプロダクト開発に携わっている。
    最近の関心事はWebパフォーマンスとエッジコンピューティング、アクセシビリティ。「ぬいぐるみで世界平和の会」に所属。`,
    labels: {
      track: 'トラック2',
      type: 'LT',
      time: '16:40 ~ 17:10'
    },
    socials: {
      xAccount: 'yajihum',
      github: 'yajihum'
    },
    additionalInfo: 'https://blog.yajihum.dev/'
  },
  nyawach: {
    title: "ts-morphを使ってコードリプレイスとASTへのハードルを下げる！",
    displayName: "姫野 佑介",
    sessionAbstract: `[解決したい課題]
    コンポーネントライブラリのリプレイスプロジェクトにおいて、どのコンポーネントがどの程度リプレイスが終わっているのかが可視化できていない
    
    [トークの主題]
    上記の課題について、ts-morph を用いてコンポーネントのリプレイス状況を簡単に可視化したときの話をしたいと考えています。
    ・型があるので、簡単な操作ならASTをほぼ気にしないでよく、初期導入が楽だった
    ・コード生成や機械的なリプレイスにも転用できるので、小さいところからプロジェクトやチームに浸透させると副次的なメリットがありそう
    
    [題材を選んだ理由]
    ・ASTに苦手意識があったが、型があるおかげもあってそこまでハードルを上げなくていいという気づきの共有がしたい。`,
    role: 'フロントエンドエンジニア',
    org: 'マネーフォワード Pay事業本部',
    speakerImage: '_hyme_.jpeg',
    bio: 'マネーフォワード Pay事業本部にてフロントエンドエンジニアを担当しています。',
    labels: {
      track: 'トラック2',
      type: 'LT',
      time: '16:40 ~ 17:10'
    },
    socials: {
      xAccount: '_hyme_',
      github: 'nyawach'
    },
    additionalInfo: 'https://hyme.site/'
  },
  fujiyamaorange: {
    title: 'SWC Transformerから見るTypeScript関数記述ベストプラクティス',
    displayName: "Kaito Fujimura",
    sessionAbstract: `ご存知のようにTypeScriptでは複数の方法で関数を定義できます。これまで機能、リーダビリティ、書きやすさなどの点からTypeScriptの関数記述方法について様々な意見が交わされ知見が共有されてきました。

    この発表ではRust製SWCプラグインの開発経験をもとに、新たにTransformerの視点を加えTypeScriptの関数、特にReactコンポーネント作成時にその記述方法がどういった影響を持つのかを紹介します。
    
    検証のため、複数の記述方法に対応した以下のプラグインを作成します。
    ・ 関数(コンポーネント)名を変更する
    ・ コンポーネントのトップのHTML要素にdata-testid=”コンポーネント名”を追加する
    ・ img要素のsrc属性がsvgファイルの際に、alt属性を自動的に空文字列にする
    
    そしてこれらを実行・計測し得られた興味深い結果を元にどういった条件でどの記述方法にアドバンテージがあるのかを考察します。
    
    最後に結果・考察を元にコードのTransformerレベルでの最適化手法を共有し、ベストプラクティスについて一味違った視点から提案を投げかけます。
    この発表が、TypeScriptコミュニティ拡大の一助となれば幸いです。`,
    role: 'エンジニア',
    org: '株式会社マネーフォワード Pay事業本部',
    speakerImage: 'fujiyamaorange.png',
    bio: 'ジブリと音楽とウイスキーが好きです。最近は頑張ってBiomeにコントリビュートしています。',
    labels: {
      track: 'トラック2',
      type: 'LT',
      time: '16:40 ~ 17:10'
    },
    socials: {
      xAccount: 'fujiyamaorange',
      github: 'fujiyamaorange'
    },
    additionalInfo: 'https://fujiyamaorange.vercel.app/'
  },
  nkowne63: {
    title: "TypeScriptのコード生成をつらくしないために",
    displayName: "ノーン（nkowne63）",
    sessionAbstract: `TypeScriptにおけるコード生成は、バックエンドサーバーとの通信やデータベースの読み書きなどの外部とのやりとりを型安全に行うための重要な手段の一つである。
    しかし、コード生成を自分たちで実装しようとした場合にはいくつかの罠があり、それらを考慮せずに踏み抜いてしまうとメンテナンスしにくいコードベースが生成されてしまう。
    このトークでは、コード生成について発表者がかつて遭遇したアンチパターンについて、その類型とつらさを紹介したのちに、それらを踏まえてどのような指針でコード生成を実装すればよいのかについて簡単に紹介を行う。`,
    role: 'テックリード',
    org: '株式会社ventus',
    speakerImage: 'nkowne63.jpeg',
    bio: '株式会社ventusに創業時から関わる。現在は博士課程（物理工学）に在籍しながらエンジニアをしている。',
    labels: {
      track: 'トラック2',
      type: 'LT',
      time: '16:40 ~ 17:10'
    },
    socials: {
      xAccount: 'nkowne63',
      github: 'nkowne63'
    },
    additionalInfo: ''
  },
  NoritakaIkeda: {
    title: "TypeScriptが学生のエンジニアコミュニティ参加を促進する",
    displayName: 'NoritakaIkeda',
    sessionAbstract: `## トークを通して伝えたいこと
    TypeScriptは、授業以外でプログラミングをしてこなかった学生のエンジニアコミュニティへの参加を促進します。
    
    授業以外で開発未経験の学生に対して、TypeScriptを用いた、ペアメンターがつくハッカソンを実施しました。その結果、全員自分のアイデアをデモとして動かせる成果物を作成することができました。
    その過程で、ペアメンターや企業の人、開発ができる先輩学生と触れることで、新たに開発コミュニティに参加したり、インターンに参加したりと、意欲的にエンジニアコミュニティと接することができるようになりました。
    
    このLTでは、実際の事例とTypeScriptの具体的な恩恵を紹介します。
    
    ## トークの目的・効果・期待
    
    TypeScriptによって、エンジニアのキャリアがひらけた学生の事例や、再現性のあるノウハウを共有することで、よりコミュニティを盛り上げることを目指します。
    
    
    ## 試行錯誤の結果、発見・到達したこと
    TypeScriptとそれを取り囲むエコシステムは、初心者がつまづきやすいポイントがケアされている、大学の情報教育との親和性がある、使用している技術者が多いという特徴があります。
    初学者が会得するハードルが低い一方で、成果物をデプロイが容易でで、自己の表現、アイデンティティの構築に効果的です。
    
    ## 問題の説明・解決方法の提示
    コンピュータサイエンスを専攻している学生のうち、授業以外の経験を積んでいない人にとって、プログラミングとは、一体何が作れるかわからないことが多いです。
    
    自身が習った基礎が、どうゲーム開発やアプリ開発に使われるのか、見えてきません。
    
    そんな学生に対して、技術にTypeScriptに選定した上で、 3 日のインプット勉強会と、2 日のペアメンターハッカソンを実施した結果、全員自分のアイデアをデモとして動かせる成果物を作成できました。
    
    また、そこから長期プロジェクトへの参加や、コミュニティに新たに参加する学生が増えました。
    `,
    role: 'Software Engineer',
    org: '株式会社ROUTE06',
    speakerImage: 'omotidaisukijp.jpeg',
    bio: `株式会社ROUTE06でエンジニアをしています。
    趣味でハッカソンを主催しています。`,
    labels: {
      track: 'トラック1',
      type: 'LT',
      time: '17:20 ~ 17:40'
    },
    socials: {
      xAccount: 'omotidaisukijp',
      github: 'NoritakaIkeda'
    },
    additionalInfo: ''
  },
  AllenShintani: {
    title: "Reactでハードウェア制御できるEdison.jsを作っている",
    displayName: "Allen Shintani",
    sessionAbstract: `【伝えたいこと】
    ハードウェアの制御がtsxで書くことができるようになった！
    
    【Edison.jsとは】
    TypeScript × Reactでハードウェア制御ができるOSSです。
    既存のハードウェア制御ライブラリとの決定的な違いは宣言的UIによる制御が可能であることです。
    C++やPythonなどを使用することが主流だった今までの常識を変える力があります。
    
    【1. hookがそのまま使える事】
    例えばLEDを点滅させる場合、useStateでbooleanの値を持ちon, offを切り替えられます。
    
    【2. すぐに使える】
    当たり前のように思えますが実はそうでもありません。
    edison.jsなら現在はfirmataをアップロードしてシリアルポートで繋ぐだけで使用できます。
    
    【3. チーム開発に嬉しい】
    Arduino IDEなどをメインで使用する必要もなく任意のテキストエディタが利用でき、TypeScriptのチーム開発をそのまま再現できます。
    
    【題材を選んだ理由】
    Reactで操作できるという既存ライブラリとの大きな差異を素直に伝えたかった。
    
    【将来的実装】
    ・ESP32を使用するためのfirmataを探す or 作る。
    ・firmataのアップロードなしで行う方法はないか？deviceScriptという拡張機能に目を付けて模索しています。
    ・DBとの連携を行う手順を確立してハンズオンしてみる`,
    role: '学生',
    org: 'INIAD.ts',
    speakerImage: 'AllenShintani.jpeg',
    bio: `TypeScriptを学んでいる学生です
    Edison.jsというTypeScript × Reactでハードウェアを制御する事が出来るオープンソースを開発しています！#EdisonjsでTwitterでつぶやいて、意見や感想などをお待ちしております！`,
    labels: {
      track: 'トラック1',
      type: 'LT',
      time: '17:20 ~ 17:40'
    },
    socials: {
      xAccount: 'allenganbaru',
      github: 'AllenShintani'
    },
    additionalInfo: 'https://edison-js-document.vercel.app/'
  },
  nabeliwo: {
    title: "多言語化対応における TypeScript の型定義を通して開発のしやすさについて考えた",
    displayName: "nabeliwo",
    sessionAbstract: `アプリケーションの多言語化対応をする中で起きた問題として、マークアップから日本語がなくなってしまいエンジニア以外がコードを触る際にどこをいじれば良いかがわかりづらくなってしまうということがありました。
    この問題を型定義で解決した話を通して、TypeScript を使ってバグを減らすだけでなく、チームの開発体験も向上できるということを伝えたいと思います。`,
    role: 'エンジニア',
    org: '株式会社SmartHR',
    speakerImage: 'nabeliwo.png',
    bio: 'web frontend developer',
    labels: {
      track: 'トラック1',
      type: 'LT',
      time: '17:20 ~ 17:40'
    },
    socials: {
      xAccount: 'nabeliwo',
      github: 'nabeliwo'
    },
    additionalInfo: 'https://blog.nabeliwo.com'
  },
  ssssota: {
    title: 'Documetation testsの恩恵',
    displayName:'ssssota',
    sessionAbstract: `ドキュメンテーションテストとは何者か、どのような恩恵があるのか、TypeScriptでどのように実践するのかを紹介します。
    TypeScriptのソースコードをテストする方法は数多ありますが、ドキュメンテーションテストについて言及、実践している方は非常に少ないと思います。ドキュメンテーションテストは、その名の通りドキュメントとしてもテストとしても機能します。「型チェックなどの静的テスト」と「単体テスト」では受けられない恩恵を紹介します。
    
    ドキュメンテーションテストは、名前の通りドキュメントとしてテストを記述します。これにより主に以下３点の恩恵が受けられます。
    ・ドキュメントに書かれたコードが正常に動作すること
    ・ドキュメントが管理されず動かない例を見たことがあると思います
    ・IDEでサンプルコードが閲覧しやすくなること
    ・ドキュメントを書く習慣の定着及び、ドキュメントに対する心理的障壁の緩和`,
    role: 'エンジニア',
    org: '',
    speakerImage: 'ssssota.jpeg',
    bio: '気の向くままにコードを書いている。',
    labels: {
      track: 'トラック2',
      type: 'LT',
      time: '17:20 ~ 17:40'
    },
    socials: {
      xAccount: 'ssssotaro',
      github: 'ssssota'
    },
    additionalInfo: ''
  },
  k1rof18: {
    title: "Full TypeScriptだから実現できる世界線",
    displayName: "k-ichirof",
    sessionAbstract: `TypeScriptを使ってフロントからバックエンドまで全てTypeScriptにすることで、どのようなメリットが得られるのかを紹介したいと思います。
    また、Full TypeScript にするにあたって苦労した点を紹介することで、今後Full TypeScript化を目指す方々の参考になるような内容にしたいと思います。
    
    題材を選んだ理由:
    Full TypeScript化することで、過去にTypeScript+Go で開発していた時に実現できなかったことを紹介することで、サーバーサイドでもTypeScriptを選定してもらうきっかけにしてもらいたいです。`,
    role: 'ソフトウェアエンジニア',
    org: '株式会社ユーザベース',
    speakerImage: 'k1rof18.jpeg',
    bio: `TypeScriptでフロントエンドもバックエンドもインフラも経験してきたエンジニア。型が好き。
    初LTなので優しい目で見守ってください！`,
    labels: {
      track: 'トラック2',
      type: 'LT',
      time: '17:20 ~ 17:40'
    },
    socials: {
      xAccount: 'k1rof18',
      github: 'k1rof18'
    },
    additionalInfo: ''
  },
  yukukotani: {
    title: "Real World Type Puzzle and Code Generation",
    displayName: "Yuku Kotani",
    sessionAbstract: `PrismaやGraphQL Code Generatorのようなツールは、複雑な型をコード生成することで、型安全なAPIを現実的なパフォーマンスで提供しています。
    これらのツールが生成するコードを読み解き、現実世界で型パズルがどのように活用されているかを観察します。`,
    role: 'Lead Architect',
    org: 'Ubie, Inc.',
    speakerImage: 'yukukotani.jpeg',
    bio: 'Ubie株式会社のソフトウェアエンジニア。主に開発戦略・テクノロジーマネジメントを担当しています。筑波大学の情報科学類で勉強もしています。',
    labels: {
      track: 'トラック2',
      type: 'LT',
      time: '17:20 ~ 17:40'
    },
    socials: {
      xAccount: 'yukukotani',
      github: 'yukukotani'
    },
    additionalInfo: 'https://yuku.dev'
  }
};
