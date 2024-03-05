import React from "react";
import { sponsorList } from "../lib/data";
import Link from "next/link";
import { SponsorData, SponsorList } from "../lib/definitions";

const sponsorVariants = {
  Platinum: {
    divider: `text-secondary divider-secondary`,
    gridSize: `gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3`,
    height: `h-48`,
  },
  Gold: {
    divider: `text-accent divider-accent`,
    gridSize: `gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4`,
    height: `h-36`,
  },
  Silver: {
    divider: `text-primary divider-primary`,
    gridSize: `gap-2 grid-cols-3 sm:grid-cols-4 md:grid-cols-5`,
    height: `h-28`,
  },
  Bronze: {
    divider: `text-error divider-error`,
    gridSize: `gap-1 grid-cols-4 sm:grid-cols-5 md:grid-cols-6`,
    height: `h-24`,
  },
  Refreshment: {
    divider: `text-gray-500 divider-gray-500`,
    gridSize: `gap-4 grid-cols-1`,
    height: `h-28`,
  },
  Coffee: {
    divider: `text-gray-500 divider-gray-500`,
    gridSize: `gap-4 grid-cols-1`,
    height: `h-28`,
  },
  Beer: {
    divider: `text-gray-500 divider-gray-500`,
    gridSize: `gap-4 grid-cols-1`,
    height: `h-28`,
  },
  "Event Platform": {
    divider: `text-gray-500 divider-gray-500`,
    gridSize: `gap-4 grid-cols-1`,
    height: `h-28`,
  },
} as const;

type SponsorLogosSectionProps = {
  showDraft: boolean;
  anchor: string;
};

export const SponsorLogosSection = ({ showDraft, anchor }: SponsorLogosSectionProps) => {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2
          id={anchor}
          className="text-2xl font-bold text-center text-accent lg:text-3xl mb-20 scroll-mt-20"
        >
          <a href="#sponsor">TSKaigi 2024 スポンサー各社</a>
        </h2>
      </div>
      <div className="mx-auto pb-20">
        {(["Platinum", "Gold", "Silver"] as const).map((plan) => {
          const list = sponsorList[plan].filter((sponsor) => showDraft || !sponsor.draft);
          if (list.length === 0) {
            return null;
          }
          return <PlanSponsors key={plan} plan={plan} sponsors={list} />;
        })}
        <div className="grid grid-cols-2 gap-4">
          {(["Event Platform", "Refreshment", "Coffee", "Beer"] as const).map((plan) => {
            const list = sponsorList[plan].filter((sponsor) => showDraft || !sponsor.draft);
            if (list.length === 0) {
              return null;
            }
            return <PlanSponsors key={plan} plan={plan} sponsors={list} isOptionalPlan />;
          })}
        </div>
        <PlanSponsors
          plan="Bronze"
          sponsors={sponsorList.Bronze.filter((sponsor) => showDraft || !sponsor.draft)}
        />
      </div>
    </div>
  );
};

const PlanSponsors = ({
  plan,
  sponsors,
  isOptionalPlan,
}: {
  plan: keyof SponsorList;
  sponsors: SponsorData[];
  isOptionalPlan?: boolean;
}) => {
  return (
    <div>
      <h3 className={`text-2xl font-bold divider ${sponsorVariants[plan].divider}`}>
        {`${plan}${!isOptionalPlan ? " Sponsors" : ""}`}
      </h3>
      <div
        className={`grid my-8 px-4 sm:px-6 lg:px-8 mt-8 mb-12 grid-cols-1 ${sponsorVariants[plan].gridSize}`}
      >
        {sponsors.map((sponsor) => (
          <Link
            key={sponsor.name}
            href={sponsor.logoLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            <div
              key={sponsor.name}
              className={`text-sm my-auto rounded-md md:rounded-lg bg-white mb-4 hover:opacity-80 hover:shadow-md transition duration-300 ease-in-out overflow-hidden ${sponsorVariants[plan].height} ${["Platinum", "Gold"].includes(plan) ? (sponsor.addPadding ? "p-8" : "p-2") : sponsor.addPadding ? "p-2" : "p-1"}`}
            >
              <img
                className="p-4 h-full w-full object-contain"
                src={sponsor.logoImage}
                alt={sponsor.name}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
