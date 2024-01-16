import { IconType } from "react-icons";

export type PageInfo = {
  index: number;
  title: string;
  description?: string;
  metaImage?: string;
  icon: IconType;
  href: string;
};

export type Question = {
  id: number;
  question: string;
  answer: string;
};

export type Category = {
  id: number;
  name: string;
  questions: Question[];
};

export type QandA = {
  categories: Category[];
};