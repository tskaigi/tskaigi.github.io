import React from "react";
import { IconType } from "react-icons";

export type PageInfo = {
  index: number;
  showNavbar: boolean;
  showFooter: boolean;
  title: string;
  description?: string;
  metaImage?: string;
  icon: IconType;
  href: string;
};

type Question = {
  id: number;
  question: React.ReactNode;
  answer: React.ReactNode;
};

type QACategory = {
  id: number;
  name: string;
  questions: Question[];
};

export type QandA = {
  categories: QACategory[];
};

export type CardData = {
  title: string;
  imageUrl?: string;
  subtitle?: string;
  description?: string;
  links: { icon?: IconType; href: string }[];
};

export type SponsorData = {
  name: string;
  description: React.ReactNode;
  logoImage: string;
  logoLink: string;
  subLogoImage?: string;
  links: {
    href: string;
    text: string;
  }[];
  addPadding: boolean;
  draft?: true;
};

export type SponsorList = {
  Platinum: SponsorData[];
  Gold: SponsorData[];
  Silver: SponsorData[];
  Bronze: SponsorData[];
  Refreshment: SponsorData[];
  Coffee: SponsorData[];
  Beer: SponsorData[];
  "Event Platform": SponsorData[];
};

export type AccountLink = {
  index: number;
  showNavbar: boolean;
  showFooter: boolean;
  emphasis: boolean;
  title: string;
  description?: string;
  icon: IconType;
  href: string;
};
