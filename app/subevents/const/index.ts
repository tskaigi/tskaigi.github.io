import type { StaticImageData } from "next/image";

import eventImage517 from "../image/subevent_5_17.png";
import eventImage64 from "../image/subevent_6_4.png";
import eventImage86 from "../image/subevent_8_6.png";

type EventTag = "公募枠あり" | "オンラインあり" | "学生向け";

type SubEvent = {
  title: string;
  description: string[];
  sponsorList: string[];
  tags: EventTag[] | string[]; // 補完を表示しつつ任意入力を許可
  date: Date;
  link: `https://${string}` | `http://${string}`;
  thumbnail: StaticImageData;
};

export const SUB_EVENTS = [
  {
    title: "TSKaigiサブイベント #1 フロントエンド",
    description: [
      "TSKaigiサブイベントは、TypeScriptコミュニティの活性化のために、TSKaigi運営チームが開催する定期イベントです！",
      "オンライン・オフライン合わせて2000名以上にご参加いただいたTSKaigi2024では、フロントエンドからハードウェアまで、様々な分野のセッションを展開しました。",
      "一方、定期開催するTSKaigiサブイベントでは、特定の「テーマ」を設定し、そのテーマに関したセッションやLTを募集いたします！皆さんの興味のある領域やテーマの回で、ぜひご参加ください！",
      "初回となる今回は、王道「フロントエンド」をテーマとし、TypeScriptとフロントエンドに関するトークを行います！ゲストセッションとして、TSKaigi2024の選考委員も務めてくださったうひょさんさんにもトークを行っていただく予定です。（イベント後は懇親会も予定しています。）",
    ],
    sponsorList: ["TBD"],
    tags: ["公募枠あり", "オンラインあり"],
    date: new Date("2024-08-06"),
    link: "https://typescript-jpc.connpass.com/event/325001/",
    thumbnail: eventImage86,
  },
  {
    title: "【学生向け】来年は TSKaigi に登壇するぞ！LT会&交流会で学生エンジニアと繋がろう！",
    description: [
      "初LT大歓迎！TS好きな学生も触ったことない学生も集まってワイワイ盛り上がろう！",
      "カンファレンスに登壇してるエンジニアってかっこいいですよね！",
      "でも、登壇するにはハードルが高い...そんなあなたに向けて、今回は学生限定のTSKaigiサブイベントとしてLT会を企画しました。この機会をきっかけにし、ぜひ来年のTSKaigiではプロポーザルを出しましょう！",
    ],
    sponsorList: ["株式会社Progate", "エムスリー株式会社"],
    tags: ["学生向け", "公募枠あり", "オンラインあり"],
    date: new Date("2024-05-17"),
    link: "https://progate.connpass.com/event/318009/",
    thumbnail: eventImage517,
  },
  {
    title: "TSKaigi 2024 After Talk",
    description: [
      "TSKaigi本編に引き続き、TypeScriptに関する発表の場を提供するとともに、TSKaigiコミュニティの活性化を図ることを目的としています。",
      "TSKaigi 2024にご参加された方はもちろん、参加できなかった方、プロポーザルが惜しくも採択されなかった方も、ぜひこの機会にご参加ください。",
      "本編の熱気に続き、セッションやLTを通してTypeScriptの知見を共有し、そして懇親会では横のつながりを深めましょう！",
      "オフライン・オンライン問わず、皆様のご参加をスタッフ一同心よりお待ちしております。",
    ],
    sponsorList: ["株式会社LayerX", "株式会社Helpfeel", "アセンド株式会社"],
    tags: ["公募枠あり", "オンラインあり"],
    date: new Date("2024-06-04"),
    link: "https://layerx.connpass.com/event/318123/",
    thumbnail: eventImage64,
  },
] as const satisfies SubEvent[];
