import { ReactNode } from "react";
import { IconType } from "react-icons";
import { HiHome } from "react-icons/hi";
import { HiLightBulb } from "react-icons/hi2";
import { FaHandshake } from "react-icons/fa";
export type PageInfo = {
  index: number;
  title: string;
  description?: string;
  metaImage?: string;
  icon: IconType;
  href: string;
};

export const PageInfos: PageInfo[] = [
  {
    index: 1,
    title: "Home",
    description: "",
    icon: HiHome,
    href: "/",
  },
  {
    index: 2,
    title: "スポンサー募集",
    description:
      "TSKaigiは日本最大級のtypescriptカンファレンスを開催します。スポンサーになって、typescriptコミュニティを一緒に盛り上げませんか？業界でのエキスパートとして日本のTypeScriptユーザーの支援をお願いします。",
    icon: FaHandshake,
    href: "/sponsor-recruitment",
  },
  {
    index: 3,
    title: "プロポーザル募集",
    description:
      "TSKaigiは日本のTypeScriptコミュニティを盛り上げるカンファレンスを開催します。あなたの発表・登壇をお待ちしております。ぜひ一緒に日本のTypeScriptコミュニティを盛り上げましょう！",
    icon: HiLightBulb,
    href: "/call-for-proposals",
  },
];
