import { CardInfo, SessionInfo } from "@/typs";

export const TRACK_HEADER_NAMES: string[] = ["Track1", "Track2", "Track3"];

export const LABEL_BG_COLOR: { [key: string]: string } = {
  Track1: "bg-[#65E0B8]",
  Track2: "bg-[#FFE999]",
  Track3: "bg-[#93E7FB]",
};

export const SESSION_SPEAKERS: string[] = [
  "kimi_koma1111",
  "Himenon",
  "tockn",
  "naoya_ito",
  "ypresto",
  "pd1xx",
  "yanaemon169",
  "kosui_me",
  "takezoux2",
  "misoton665",
  "lacolaco",
  "9wick",
  "karan_corons",
  "hokaccha",
  "unvalley",
  "pizzacat83",
  "__sosukeSuzuki",
  "meganetaaan",
];

export const SESSION_LIST: { [key: string]: SessionInfo } = {
  s_001: {
    type: "session",
    title: "フロントエンドもバックエンドもインフラも… 全てをTypeScriptで統一したらこうなった！",
    displayName: "君田 祥一",
    username: "kimi_koma1111",
  },
  s_002: {
    type: "session",
    title: "Prisma ORMを2年運用して培ったノウハウを共有する",
    displayName: "tockn",
    username: "tockn",
  },
  s_003: {
    type: "session",
    title: "TypeScript ASTを利用したコードジェネレーターの実装入門",
    displayName: "Himenon",
    username: "Himenon",
  },
  s_004: {
    type: "session",
    title: "TypeScript 関数型バックエンド開発のリアル",
    displayName: "伊藤直也",
    username: "naoya_ito",
  },
  s_005: {
    type: "session",
    title: "部分型の代数的模型",
    displayName: "PADAone",
    username: "pd1xx",
  },
  s_006: {
    type: "session",
    title: "TypeScriptと型のパフォーマンス",
    displayName: "ypresto",
    username: "ypresto",
  },
  s_007: {
    type: "session",
    title: "TypeScript の抽象構文木を用いた、数百を超える API の大規模リファクタリング戦略",
    displayName: "白栁 広樹",
    username: "yanaemon169",
  },
  s_008: {
    type: "session",
    title: "複雑なビジネスルールに挑む：正確性と効率性を両立するfp-tsのチーム活用術",
    displayName: "kosui",
    username: "kosui_me",
  },
  s_009: {
    type: "session",
    title: "Step by Stepで学ぶ、ADT(代数的データ型)、モナドからEffect-TSまで",
    displayName: "竹下義晃(takezoux2)",
    username: "takezoux2",
  },
  s_010: {
    type: "session",
    title: "Type-safety in Angular",
    displayName: "lacolaco",
    username: "lacolaco",
  },
  s_011: {
    type: "session",
    title: "tRPCを実務に導入して分かった旨味と苦味",
    displayName: "海老原 圭吾",
    username: "misoton665",
  },
  s_012: {
    type: "session",
    title: "ハードウェアを動かすTypeScrptの世界",
    displayName: "9wick",
    username: "9wick",
  },
  s_013: {
    type: "session",
    title: "サービス開発におけるVue3とTypeScriptの親和性について",
    displayName: "からころ",
    username: "karan_corons",
  },
  s_014: {
    type: "session",
    title: "TypeScriptとGraphQLで実現する型安全なAPI実装",
    displayName: "hokaccha",
    username: "hokaccha",
  },
  s_015: {
    type: "session",
    title: "Denoで作る快適な “as Code” プラットフォーム",
    displayName: "pizzacat83",
    username: "pizzacat83",
  },
  s_016: {
    type: "session",
    title: "Exploring type-informed lint rules in Rust based Linters",
    displayName: "unvalley",
    username: "unvalley",
  },
  s_017: {
    type: "session",
    title: "Prettierの未来を考える",
    displayName: "Sosuke Suzuki",
    username: "__sosukeSuzuki",
  },
  s_018: {
    type: "session",
    title: "ｽﾀｯｸﾁｬﾝ -TypeScriptで動くオープンソースロボット-",
    displayName: "ししかわ",
    username: "meganetaaan"
  },
};

export const LT_LIST: { [key: string]: SessionInfo } = {
  lt_0001: {
    type: "LT",
    title: "Documetation testsの恩恵",
    displayName: "ssssota",
  },
  lt_001: {
    type: "LT",
    title: "TypeScriptから始めるVR生活",
    displayName: "TamaG",
  },
  lt_002: {
    type: "LT",
    title: "TypeScript をパワフルに使って開発したい！",
    displayName: "ユーン",
  },
  lt_003: {
    type: "LT",
    title: "TypeScriptでもLLMアプリケーション開発！LangChain.js入門",
    displayName: "r-kagaya",
  },
  lt_004: {
    type: "LT",
    title: "TanStack Routerで型安全かつ効率的なルーティングを実現",
    displayName: "安井大晟",
  },
  lt_005: {
    type: "LT",
    title: "TypeScriptから始めるVR生活",
    displayName: "TamaG",
  },
  lt_006: {
    type: "LT",
    title: "TypeScript をパワフルに使って開発したい！",
    displayName: "ユーン",
  },
  lt_007: {
    type: "LT",
    title: "TypeScriptでもLLMアプリケーション開発！LangChain.js入門",
    displayName: "r-kagaya",
  },
  lt_008: {
    type: "LT",
    title: "TanStack Routerで型安全かつ効率的なルーティングを実現",
    displayName: "安井大晟",
  },
  lt_009: {
    type: "LT",
    title: "TypeScriptできると思ったのは勘違いだった件",
    displayName: "Daishi Kato",
  },
  lt_010: {
    type: "LT",
    title: "Effectで作る堅牢でスケーラブルなAPIゲートウェイ",
    displayName: "yasaichi",
  },
  lt_011: {
    type: "LT",
    title:
      "Introduction to Database Connection Management Patterns in TypeScript！LangChain.js入門",
    displayName: "Sugar",
  },
  lt_012: {
    type: "LT",
    title: "Prismaでスキーマ変更を行う際のベストプラクティス",
    displayName: "ryusaka",
  },
  lt_013: {
    type: "LT",
    title: "TypeScriptのパフォーマンス改善",
    displayName: "やじはむ",
  },
  lt_014: {
    type: "LT",
    title: "ts-morphを使ってコードリプレイスとASTへのハードルを下げる！",
    displayName: "ひめ",
  },
  lt_015: {
    type: "LT",
    title: "SWC Transformerから見るTypeScript関数記述ベストプラクティス",
    displayName: "fujiyamaorange",
  },
  lt_016: {
    type: "LT",
    title: "TypeScriptのコード生成をつらくしないために",
    displayName: "nkowne63rt",
  },
  lt_017: {
    type: "LT",
    title: "TypeScriptが学生のエンジニアコミュニティ参加を促進する",
    displayName: "かがみもち",
  },
  lt_018: {
    type: "LT",
    title: "Reactでハードウェア制御できるEdison.jsを作っている",
    displayName: "新谷アレン",
  },
  lt_019: {
    type: "LT",
    title: "多言語化対応における TypeScript の型定義を通して開発のしやすさについて考えた",
    displayName: "nabeliwo",
  },
  lt_020: {
    type: "LT",
    title: "Full TypeScriptだから実現できる世界線",
    displayName: "k-ichirof",
  },
  lt_021: {
    type: "LT",
    title: "Real World Type Puzzle and Code Generation",
    displayName: "小谷優空",
  },
};

export const TIME_TABLE_DATA: CardInfo[][] = [
  // 09:30 ~ 10:25
  [
    { type: "time", content: "09:30 ~ 10:25", size: "md:col-span-1" },
    {
      type: "info",
      content: "開場",
      size: "md:col-span-9",
      track: "Track1",
      labels: ["トラック1"],
    },
  ],
  // 10:25 ~ 10:30
  [
    { type: "time", content: "10:25 ~ 10:30", size: "md:col-span-1" },
    {
      type: "info",
      content: "オープニング",
      size: "md:col-span-3",
      track: "Track1",
      labels: ["トラック1"],
    },
    {
      type: "info",
      content: "サテライト",
      size: "md:col-span-6",
      track: ["Track2", "Track3"],
      labels: ["トラック2", "トラック3"],
    },
  ],

  // 10:30 ~ 11:15
  [
    { type: "time", content: "10:30 ~ 11:15", size: "md:col-span-1" },
    {
      type: "info",
      content: "基調講演",
      size: "md:col-span-3",
      track: "Track1",
      labels: ["トラック1"],
      keynoteSpeaker: "Daniel Rosenwasser",
    },
    {
      type: "info",
      content: "サテライト",
      size: "md:col-span-6",
      track: ["Track2", "Track3"],
      labels: ["トラック2", "トラック3"],
    },
  ],

  // 11:15 ~ 11:30
  [
    { type: "time", content: "11:15 ~ 11:30", size: "" },
    {
      type: "close",
      content: "休憩",
      size: "md:col-span-9",
    },
  ],

  // 11:30 ~ 12:00
  [
    { type: "time", content: "11:30 ~ 12:00", size: "md:col-span-1" },
    {
      type: "session",
      content: [SESSION_LIST.s_001],
      size: "md:col-span-3",
      track: "Track1",
      labels: ["トラック1", "セッション"],
    },
    {
      type: "session",
      content: [SESSION_LIST.s_003],
      size: "md:col-span-3",
      track: "Track2",
      labels: ["トラック2", "セッション"],
    },
    {
      type: "session",
      content: [SESSION_LIST.s_002],
      size: "md:col-span-3",
      track: "Track3",
      labels: ["トラック3", "セッション"],
    },
  ],

  // 12:10 ~ 13:10
  [
    { type: "time", content: "12:10 ~ 13:10", size: "md:col-span-1" },
    {
      type: "session",
      content: [LT_LIST.lt_001, LT_LIST.lt_002, LT_LIST.lt_003, LT_LIST.lt_004],
      size: "md:col-span-3",
      track: "Track1",
      labels: ["トラック1", "スポンサーLT"],
    },
    {
      type: "session",
      content: [LT_LIST.lt_001, LT_LIST.lt_002, LT_LIST.lt_003, LT_LIST.lt_004],
      size: "md:col-span-3",
      track: "Track2",
      labels: ["トラック2", "スポンサーLT"],
    },
    {
      type: "session",
      content: [LT_LIST.lt_001, LT_LIST.lt_002, LT_LIST.lt_003, LT_LIST.lt_004],
      size: "md:col-span-3",
      track: "Track3",
      labels: ["トラック3", "スポンサーLT"],
    },
  ],

  // 13:10 ~ 13:20
  [
    { type: "time", content: "13:10 ~ 13:20", size: "" },
    {
      type: "close",
      content: "休憩",
      size: "md:col-span-9",
    },
  ],

  // 13:20 ~ 13:50
  [
    { type: "time", content: "13:20 ~ 13:50", size: "md:col-span-1" },
    {
      type: "session",
      content: [SESSION_LIST.s_004],
      size: "md:col-span-3",
      track: "Track1",
      labels: ["トラック1", "セッション"],
    },
    {
      type: "session",
      content: [SESSION_LIST.s_006],
      size: "md:col-span-3",
      track: "Track2",
      labels: ["トラック2", "セッション"],
    },
    {
      type: "session",
      content: [SESSION_LIST.s_005],
      size: "md:col-span-3",
      track: "Track3",
      labels: ["トラック3", "セッション"],
    },
  ],

  // 13:50 ~ 14:00
  [
    { type: "time", content: "13:50 ~ 14:00", size: "" },
    {
      type: "close",
      content: "休憩",
      size: "md:col-span-9",
    },
  ],

  // 14:00 ~ 14:30
  [
    { type: "time", content: "14:00 ~ 14:30", size: "md:col-span-1" },
    {
      type: "session",
      content: [SESSION_LIST.s_007],
      size: "md:col-span-3",
      track: "Track1",
      labels: ["トラック1", "セッション"],
    },
    {
      type: "session",
      content: [LT_LIST.lt_005, LT_LIST.lt_006, LT_LIST.lt_007, LT_LIST.lt_008],
      size: "md:col-span-3",
      track: "Track2",
      labels: ["トラック2", "LT"],
    },
    {
      type: "session",
      content: [SESSION_LIST.s_008],
      size: "md:col-span-3",
      track: "Track3",
      labels: ["トラック3", "セッション"],
    },
  ],

  // 14:30 ~ 14:40
  [
    { type: "time", content: "14:30 ~ 14:40", size: "" },
    {
      type: "close",
      content: "休憩",
      size: "md:col-span-9",
    },
  ],

  // 14:40 ~ 15:10
  [
    { type: "time", content: "14:40 ~ 15:10", size: "md:col-span-1" },
    {
      type: "session",
      content: [SESSION_LIST.s_009],
      size: "md:col-span-3",
      track: "Track1",
      labels: ["トラック1", "セッション"],
    },
    {
      type: "session",
      content: [SESSION_LIST.s_011],
      size: "md:col-span-3",
      track: "Track2",
      labels: ["トラック2", "セッション"],
    },
    {
      type: "session",
      content: [SESSION_LIST.s_010],
      size: "md:col-span-3",
      track: "Track3",
      labels: ["トラック3", "セッション"],
    },
  ],

  // 15:10 ~ 15:20
  [
    { type: "time", content: "15:10 ~ 15:20", size: "" },
    {
      type: "close",
      content: "休憩",
      size: "md:col-span-9",
    },
  ],

  // 15:20 ~ 15:50
  [
    { type: "time", content: "15:20 ~ 15:50", size: "md:col-span-1" },
    {
      type: "session",
      content: [SESSION_LIST.s_012],
      size: "md:col-span-3",
      track: "Track1",
      labels: ["トラック1", "セッション"],
    },
    {
      type: "session",
      content: [SESSION_LIST.s_013],
      size: "md:col-span-3",
      track: "Track2",
      labels: ["トラック2", "セッション"],
    },
    {
      type: "session",
      content: [LT_LIST.lt_009, LT_LIST.lt_010, LT_LIST.lt_011, LT_LIST.lt_012],
      size: "md:col-span-3",
      track: "Track3",
      labels: ["トラック3", "LT"],
    },
  ],

  // 15:50 ~ 16:00
  [
    { type: "time", content: "15:50 ~ 16:00", size: "" },
    {
      type: "close",
      content: "休憩",
      size: "md:col-span-9",
    },
  ],

  // 16:00 ~ 16:30
  [
    { type: "time", content: "16:00 ~ 16:30", size: "md:col-span-1" },
    {
      type: "session",
      content: [SESSION_LIST.s_014],
      size: "md:col-span-3",
      track: "Track1",
      labels: ["トラック1", "セッション"],
    },
    {
      type: "session",
      content: [SESSION_LIST.s_016],
      size: "md:col-span-3",
      track: "Track2",
      labels: ["トラック2", "セッション"],
    },
    {
      type: "session",
      content: [SESSION_LIST.s_015],
      size: "md:col-span-3",
      track: "Track3",
      labels: ["トラック3", "セッション"],
    },
  ],

  // 16:30 ~ 16:40
  [
    { type: "time", content: "16:30 ~ 16:40", size: "" },
    {
      type: "close",
      content: "休憩",
      size: "md:col-span-9",
    },
  ],

  // 16:40 ~ 17:10
  [
    { type: "time", content: "16:40 ~ 17:10", size: "md:col-span-1" },
    {
      type: "session",
      content: [SESSION_LIST.s_017],
      size: "md:col-span-3",
      track: "Track1",
      labels: ["トラック1", "セッション"],
    },
    {
      type: "session",
      content: [LT_LIST.lt_013, LT_LIST.lt_014, LT_LIST.lt_015, LT_LIST.lt_016],
      size: "md:col-span-3",
      track: "Track2",
      labels: ["トラック2", "LT"],
    },
    {
      type: "session",
      content: [SESSION_LIST.s_018],
      size: "md:col-span-3",
      track: "Track3",
      labels: ["トラック3", "セッション"],
    },
  ],

  // 17:10 ~ 17:20
  [
    { type: "time", content: "17:10 ~ 17:20", size: "" },
    {
      type: "close",
      content: "休憩",
      size: "md:col-span-9",
    },
  ],

  // 17:20 ~ 17:40
  [
    { type: "time", content: "17:20 ~ 17:40", size: "md:col-span-1" },
    {
      type: "session",
      content: [LT_LIST.lt_017, LT_LIST.lt_018, LT_LIST.lt_019],
      size: "md:col-span-3",
      track: "Track1",
      labels: ["トラック1", "LT"],
    },
    {
      type: "session",
      content: [LT_LIST.lt_0001, LT_LIST.lt_020, LT_LIST.lt_021],
      size: "md:col-span-3",
      track: "Track2",
      labels: ["トラック2", "LT"],
    },
    {
      type: "close",
      content: "会場転換",
      size: "md:col-span-3",
    },
  ],

  // 17:40 ~ 18:10
  [
    { type: "time", content: "17:50 ~ 18:10", size: "" },
    {
      type: "close",
      content: "転換",
      size: "md:col-span-3",
    },
    {
      type: "close",
      content: "臨時休憩室",
      size: "md:col-span-6 hidden",
    },
  ],

  // 18:10 ~ 19:40
  [
    { type: "time", content: "18:10 ~ 19:40", size: "" },
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
