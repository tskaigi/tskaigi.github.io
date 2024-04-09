import { CardInfo, SessionInfo } from "@/typs";

export const TRACK_HEADER_NAMES: string[] = ["TrackA", "TrackB", "TrackC"];

export const LABEL_BG_COLOR: { [key: string]: string } = {
  TrackA: "bg-[#65E0B8]",
  TrackB: "bg-[#FFE999]",
  TrackC: "bg-[#93E7FB]",
};

export const SESSION_LIST: { [key: string]: SessionInfo } = {
  s_001: {
    type: "session",
    title: "フロントエンドもバックエンドもインフラも… 全てをTypeScriptで統一したらこうなった！",
    presenter: "君田 祥一",
  },
  s_002: {
    type: "session",
    title: "Prisma ORMを2年運用して培ったノウハウを共有する",
    presenter: "tockn",
  },
  s_003: {
    type: "session",
    title: "TypeScript ASTを利用したコードジェネレーターの実装入門",
    presenter: "Himenon",
  },
  s_004: {
    type: "session",
    title: "TypeScript 関数型バックエンド開発のリアル",
    presenter: "伊藤直也",
  },
  s_005: { type: "session", title: "部分型の代数的模型", presenter: "PADAone" },
  s_006: { type: "session", title: "TypeScriptと型のパフォーマンス", presenter: "ypresto" },
  s_007: {
    type: "session",
    title: "TypeScript の抽象構文木を用いた、数百を超える API の大規模リファクタリング戦略",
    presenter: "白栁 広樹",
  },
  s_008: {
    type: "session",
    title: "複雑なビジネスルールに挑む：正確性と効率性を両立するfp-tsのチーム活用術",
    presenter: "kosui",
  },
  s_009: {
    type: "session",
    title: "Step by Stepで学ぶ、ADT(代数的データ型)、モナドからEffect-TSまで",
    presenter: "竹下義晃(takezoux2)",
  },
  s_010: {
    type: "session",
    title: "Type-safety in Angular",
    presenter: "lacolaco",
  },
  s_011: {
    type: "session",
    title: "tRPCを実務に導入して分かった旨味と苦味",
    presenter: "海老原 圭吾",
  },
  s_012: {
    type: "session",
    title: "ハードウェアを動かすTypeScrptの世界",
    presenter: "9wick",
  },
  s_013: {
    type: "session",
    title: "サービス開発におけるVue3とTypeScriptの親和性について",
    presenter: "からころ",
  },
  s_014: {
    type: "session",
    title: "TypeScriptとGraphQLで実現する型安全なAPI実装",
    presenter: "hokaccha",
  },
  s_015: {
    type: "session",
    title: "Denoで作る快適な “as Code” プラットフォーム",
    presenter: "pizzacat83",
  },
  s_016: {
    type: "session",
    title: "Exploring type-informed lint rules in Rust based Linters",
    presenter: "unvalley",
  },
  s_017: {
    type: "session",
    title: "Prettierの未来を考える",
    presenter: "Sosuke Suzuki",
  },
  s_018: {
    type: "session",
    title: "ｽﾀｯｸﾁｬﾝ -TypeScriptで動くオープンソースロボット-",
    presenter: "ししかわ",
  },
};

export const LT_LIST: {[key: string]: SessionInfo} = {
  lt_0001: {
    type: "LT",
    title: "Documetation testsの恩恵",
    presenter: "ssssota",
  },
  lt_001: {
    type: "LT",
    title: "TypeScriptから始めるVR生活",
    presenter: "TamaG",
  },
  lt_002: {
    type: "LT",
    title: "TypeScript をパワフルに使って開発したい！",
    presenter: "ユーン",
  },
  lt_003: {
    type: "LT",
    title: "TypeScriptでもLLMアプリケーション開発！LangChain.js入門",
    presenter: "r-kagaya",
  },
  lt_004: {
    type: "LT",
    title: "TanStack Routerで型安全かつ効率的なルーティングを実現",
    presenter: "安井大晟",
  },
  lt_005: {
    type: "LT",
    title: "TypeScriptから始めるVR生活",
    presenter: "TamaG",
  },
  lt_006: {
    type: "LT",
    title: "TypeScript をパワフルに使って開発したい！",
    presenter: "ユーン",
  },
  lt_007: {
    type: "LT",
    title: "TypeScriptでもLLMアプリケーション開発！LangChain.js入門",
    presenter: "r-kagaya",
  },
  lt_008: {
    type: "LT",
    title: "TanStack Routerで型安全かつ効率的なルーティングを実現",
    presenter: "安井大晟",
  },
  lt_009: {
    type: "LT",
    title: "TypeScriptできると思ったのは勘違いだった件",
    presenter: "Daishi Kato",
  },
  lt_010: {
    type: "LT",
    title: "Effectで作る堅牢でスケーラブルなAPIゲートウェイ",
    presenter: "yasaichi",
  },
  lt_011: {
    type: "LT",
    title:
      "Introduction to Database Connection Management Patterns in TypeScript！LangChain.js入門",
    presenter: "Sugar",
  },
  lt_012: {
    type: "LT",
    title: "Prismaでスキーマ変更を行う際のベストプラクティス",
    presenter: "ryusaka",
  },
  lt_013: {
    type: "LT",
    title: "TypeScriptのパフォーマンス改善",
    presenter: "やじはむ",
  },
  lt_014: {
    type: "LT",
    title: "ts-morphを使ってコードリプレイスとASTへのハードルを下げる！",
    presenter: "ひめ",
  },
  lt_015: {
    type: "LT",
    title: "SWC Transformerから見るTypeScript関数記述ベストプラクティス",
    presenter: "fujiyamaorange",
  },
  lt_016: {
    type: "LT",
    title: "TypeScriptのコード生成をつらくしないために",
    presenter: "nkowne63rt",
  },
  lt_017: {
    type: "LT",
    title: "TypeScriptが学生のエンジニアコミュニティ参加を促進する",
    presenter: "かがみもち",
  },
  lt_018: {
    type: "LT",
    title: "Reactでハードウェア制御できるEdison.jsを作っている",
    presenter: "新谷アレン",
  },
  lt_019: {
    type: "LT",
    title: "多言語化対応における TypeScript の型定義を通して開発のしやすさについて考えた",
    presenter: "nabeliwo",
  },
  lt_020: {
    type: "LT",
    title: "Full TypeScriptだから実現できる世界線",
    presenter: "k-ichirof",
  },
  lt_021: {
    type: "LT",
    title: "Real World Type Puzzle and Code Generation",
    presenter: "小谷優空",
  },
};

export const TIME_TABLE_DATA: CardInfo[][] = [
  // 10:25 ~ 10:30
  [
    { type: "time", content: "10:25 ~ 10:30", size: "md:col-span-1" },
    {
      type: "info",
      content: "オープニング",
      size: "md:col-span-3",
      track: "TrackA",
      labels: ["トラックA"],
    },
    {
      type: "info",
      content: "サテライト",
      size: "md:col-span-6",
      track: ["TrackB", "TrackC"],
      labels: ["トラックB", "トラックC"],
    },
  ],

  // 10:30 ~ 11:15
  [
    { type: "time", content: "10:30 ~ 11:15", size: "md:col-span-1" },
    {
      type: "info",
      content: "基調講演",
      size: "md:col-span-3",
      track: "TrackA",
      labels: ["トラックA"],
      keynoteSpeaker: "Daniel Rosenwasser",
    },
    {
      type: "info",
      content: "サテライト",
      size: "md:col-span-6",
      track: ["TrackB", "TrackC"],
      labels: ["トラックB", "トラックC"],
    },
  ],

  // 11:15 ~ 11:40
  [
    { type: "time", content: "11:15 ~ 11:40", size: "" },
    {
      type: "close",
      content: "休憩",
      size: "md:col-span-9",
    },
  ],

  // 11:40 ~ 12:10
  [
    { type: "time", content: "11:40 ~ 12:10", size: "md:col-span-1" },
    {
      type: "session",
      content: [SESSION_LIST.s_001],
      size: "md:col-span-3",
      track: "TrackA",
      labels: ["トラックA", "セッション"],
    },
    {
      type: "session",
      content: [SESSION_LIST.s_002],
      size: "md:col-span-3",
      track: "TrackB",
      labels: ["トラックB", "セッション"],
    },
    {
      type: "session",
      content: [SESSION_LIST.s_003],
      size: "md:col-span-3",
      track: "TrackC",
      labels: ["トラックC", "セッション"],
    },
  ],

  // 12:10 ~ 13:20
  [
    { type: "time", content: "12:10 ~ 13:20", size: "md:col-span-1" },
    {
      type: "session",
      content: [LT_LIST.lt_001, LT_LIST.lt_002, LT_LIST.lt_003, LT_LIST.lt_004],
      size: "md:col-span-3",
      track: "TrackA",
      labels: ["トラックA", "ランチタイムスポンサーLT"],
    },
    {
      type: "session",
      content: [LT_LIST.lt_001, LT_LIST.lt_002, LT_LIST.lt_003, LT_LIST.lt_004],
      size: "md:col-span-3",
      track: "TrackB",
      labels: ["トラックB", "ランチタイムスポンサーLT"],
    },
    {
      type: "session",
      content: [LT_LIST.lt_001, LT_LIST.lt_002, LT_LIST.lt_003, LT_LIST.lt_004],
      size: "md:col-span-3",
      track: "TrackC",
      labels: ["トラックC", "ランチタイムスポンサーLT"],
    },
  ],

  // 13:20 ~ 13:30
  [
    { type: "time", content: "13:20 ~ 13:30", size: "" },
    {
      type: "close",
      content: "休憩",
      size: "md:col-span-9",
    },
  ],

  // 13:30 ~ 14:00
  [
    { type: "time", content: "13:30 ~ 14:00", size: "md:col-span-1" },
    {
      type: "session",
      content: [SESSION_LIST.s_004],
      size: "md:col-span-3",
      track: "TrackA",
      labels: ["トラックA", "セッション"],
    },
    {
      type: "session",
      content: [SESSION_LIST.s_005],
      size: "md:col-span-3",
      track: "TrackB",
      labels: ["トラックB", "セッション"],
    },
    {
      type: "session",
      content: [SESSION_LIST.s_006],
      size: "md:col-span-3",
      track: "TrackC",
      labels: ["トラックC", "セッション"],
    },
  ],

  // 14:00 ~ 14:10
  [
    { type: "time", content: "14:00 ~ 14:10", size: "" },
    {
      type: "close",
      content: "休憩",
      size: "md:col-span-9",
    },
  ],

  // 14:10 ~ 14:40
  [
    { type: "time", content: "14:10 ~ 14:40", size: "md:col-span-1" },
    {
      type: "session",
      content: [SESSION_LIST.s_007],
      size: "md:col-span-3",
      track: "TrackA",
      labels: ["トラックA", "セッション"],
    },
    {
      type: "session",
      content: [SESSION_LIST.s_008],
      size: "md:col-span-3",
      track: "TrackB",
      labels: ["トラックB", "セッション"],
    },
    {
      type: "session",
      content: [LT_LIST.lt_005, LT_LIST.lt_006, LT_LIST.lt_007, LT_LIST.lt_008],
      size: "md:col-span-3",
      track: "TrackC",
      labels: ["トラックC", "LT"],
    },
  ],

  // 14:40 ~ 14:50
  [
    { type: "time", content: "14:40 ~ 14:50", size: "" },
    {
      type: "close",
      content: "休憩",
      size: "md:col-span-9",
    },
  ],

  // 14:50 ~ 15:20
  [
    { type: "time", content: "14:50 ~ 15:20", size: "md:col-span-1" },
    {
      type: "session",
      content: [SESSION_LIST.s_009],
      size: "md:col-span-3",
      track: "TrackA",
      labels: ["トラックA", "セッション"],
    },
    {
      type: "session",
      content: [SESSION_LIST.s_010],
      size: "md:col-span-3",
      track: "TrackB",
      labels: ["トラックB", "セッション"],
    },
    {
      type: "session",
      content: [SESSION_LIST.s_011],
      size: "md:col-span-3",
      track: "TrackC",
      labels: ["トラックC", "セッション"],
    },
  ],

  // 15:20 ~ 15:30
  [
    { type: "time", content: "15:20 ~ 15:30", size: "" },
    {
      type: "close",
      content: "休憩",
      size: "md:col-span-9",
    },
  ],

  // 15:30 ~ 16:00
  [
    { type: "time", content: "15:30 ~ 16:00", size: "md:col-span-1" },
    {
      type: "session",
      content: [SESSION_LIST.s_012],
      size: "md:col-span-3",
      track: "TrackA",
      labels: ["トラックA", "セッション"],
    },
    {
      type: "session",
      content: [LT_LIST.lt_009, LT_LIST.lt_010, LT_LIST.lt_011, LT_LIST.lt_012],
      size: "md:col-span-3",
      track: "TrackB",
      labels: ["トラックB", "LT"],
    },
    {
      type: "session",
      content: [SESSION_LIST.s_013],
      size: "md:col-span-3",
      track: "TrackC",
      labels: ["トラックC", "セッション"],
    },
  ],

  // 16:00 ~ 16:10
  [
    { type: "time", content: "16:00 ~ 16:10", size: "" },
    {
      type: "close",
      content: "休憩",
      size: "md:col-span-9",
    },
  ],

  // 16:10 ~ 16:40
  [
    { type: "time", content: "16:10 ~ 16:40", size: "md:col-span-1" },
    {
      type: "session",
      content: [SESSION_LIST.s_014],
      size: "md:col-span-3",
      track: "TrackA",
      labels: ["トラックA", "セッション"],
    },
    {
      type: "session",
      content: [SESSION_LIST.s_015],
      size: "md:col-span-3",
      track: "TrackB",
      labels: ["トラックB", "セッション"],
    },
    {
      type: "session",
      content: [SESSION_LIST.s_016],
      size: "md:col-span-3",
      track: "TrackC",
      labels: ["トラックC", "セッション"],
    },
  ],

  // 16:40 ~ 16:50
  [
    { type: "time", content: "16:40 ~ 16:50", size: "" },
    {
      type: "close",
      content: "休憩",
      size: "md:col-span-9",
    },
  ],

  // 16:50 ~ 17:20
  [
    { type: "time", content: "16:50 ~ 17:20", size: "md:col-span-1" },
    {
      type: "session",
      content: [SESSION_LIST.s_017],
      size: "md:col-span-3",
      track: "TrackA",
      labels: ["トラックA", "セッション"],
    },
    {
      type: "session",
      content: [SESSION_LIST.s_018],
      size: "md:col-span-3",
      track: "TrackB",
      labels: ["トラックB", "セッション"],
    },
    {
      type: "session",
      content: [LT_LIST.lt_013, LT_LIST.lt_014, LT_LIST.lt_015, LT_LIST.lt_016],
      size: "md:col-span-3",
      track: "TrackC",
      labels: ["トラックC", "LT"],
    },
  ],

  // 17:20 ~ 17:30
  [
    { type: "time", content: "17:20 ~ 17:30", size: "" },
    {
      type: "close",
      content: "休憩",
      size: "md:col-span-9",
    },
  ],

  // 17:30 ~ 17:50
  [
    { type: "time", content: "17:30 ~ 17:50", size: "md:col-span-1" },
    {
      type: "session",
      content: [LT_LIST.lt_017, LT_LIST.lt_018, LT_LIST.lt_019],
      size: "md:col-span-3",
      track: "TrackA",
      labels: ["トラックA", "LT"],
    },
    {
      type: "close",
      content: "会場転換",
      size: "md:col-span-3",
    },
    {
      type: "session",
      content: [LT_LIST.lt_020, LT_LIST.lt_021],
      size: "md:col-span-3",
      track: "TrackC",
      labels: ["トラックC", "LT"],
    },
  ],

  // 17:50 ~ 18:00
  [
    { type: "time", content: "17:50 ~ 18:00", size: "" },
    {
      type: "close",
      content: "クロージング",
      size: "md:col-span-6",
    },
    {
      type: "close",
      content: "クローズ",
      size: "md:col-span-3 hidden",
    },
  ],

  // 18:00 ~ 19:30
  [
    { type: "time", content: "18:00 ~ 19:30", size: "" },
    {
      type: "close",
      content: "懇親会",
      size: "md:col-span-6 md:h-72",
    },
    {
      type: "close",
      content: "クローズ",
      size: "md:col-span-3 hidden",
    },
  ],
];
