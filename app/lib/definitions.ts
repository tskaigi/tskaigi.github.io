import { IconType } from "react-icons";

export type PageInfo = {
  index: number;
  title: string;
  description?: string;
  metaImage?: string;
  icon: IconType;
  href: string;
};

type Question = {
  id: number;
  question: string;
  answer: string;
};

type QACategory = {
  id: number;
  name: string;
  questions: Question[];
};

export type QandA = {
  categories: QACategory[];
};

export type CardComponentProps = {
  headding: string;
  subheading?: string;
  dataList: CardData[];
};


export type CardData = {
  title: string;
  imageUrl?: string;
  subtitle?: string;
  description?: string;
  links: { icon?: IconType; href: string;}[]
};