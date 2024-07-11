import React from "react";
import Container from "../ui/container";
import { FaExternalLinkAlt } from "react-icons/fa";
import { SUB_EVENTS } from "./const";

const Tag = ({ children }: { children: string }) => {
  return (
    <div className="w-max rounded-full bg-[#345DA7] px-3 py-2 text-sm leading-none text-white">
      # {children}
    </div>
  );
};

const SubEventPage = () => {
  return (
    <Container>
      <div className="flex flex-col">
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-accent">
          TSKaigiのサブイベントに参加しよう！
        </h1>
        <p className="mt-6 text-lg leading-7">
          TSKaigiのスポンサー企業によって実施される、TSKaigiのサブイベントをご紹介します。ご参加お待ちしております！
        </p>
        <p className="mt-1 text-sm">※ 正確な情報は各イベントページをご確認ください。</p>
      </div>
      <div className="mt-10 flex flex-col gap-8">
        {SUB_EVENTS.map(({ title, link, description, tags, date, day, thumbnail, sponsorList }) => (
          <div
            key={title}
            className="flex flex-col rounded-xl bg-white p-4 text-slate-800 md:flex-row"
          >
            <div className="w-full shrink-0 border-b border-b-slate-200 border-r-slate-200 p-2 pb-4 pr-8 text-3xl md:w-[112px] md:border-b-0 md:border-r md:p-4">
              {date}
              <br />
              <span className="text-xl">({day})</span>
            </div>
            <div className="p-2 pt-4 md:p-4">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <h2 className="text-xl font-bold underline hover:no-underline">
                  {title}
                  <FaExternalLinkAlt className="ml-2 inline" size={14} />
                </h2>
              </a>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={thumbnail} alt={title} className="mt-4 max-h-[200px]" />
              </a>
              <p className="mt-4 whitespace-pre-line">{description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
              <div className="mt-4 w-full text-end text-sm">実施: {sponsorList.join("、")}</div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default SubEventPage;
