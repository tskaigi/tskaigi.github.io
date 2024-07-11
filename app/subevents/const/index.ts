import type { StaticImageData } from "next/image";

import eventImage517 from "../image/subevent_5_17.png";
import eventImage64 from "../image/subevent_6_4.png";

type SubEvent = {
  title: string;
  description: string[];
  sponsorList: string[];
  tags: string[];
  date: Date;
  link: string;
  thumbnail: StaticImageData;
};

export const SUB_EVENTS = [
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
