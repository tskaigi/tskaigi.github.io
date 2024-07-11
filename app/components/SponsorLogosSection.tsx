import Link from "next/link";
import { sponsorList } from "../lib/data";
import { SponsorData, SponsorList } from "../lib/definitions";

const sponsorVariants = {
  Platinum: {
    divider: `text-secondary divider-secondary`,
    gridSize: `gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3`,
    height: `h-48`,
    style: ``,
  },
  Gold: {
    divider: `text-accent divider-accent`,
    gridSize: `gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4`,
    height: `h-36`,
    style: ``,
  },
  Silver: {
    divider: `text-primary divider-primary`,
    gridSize: `gap-2 grid-cols-3 sm:grid-cols-4 md:grid-cols-5`,
    height: `h-28`,
    style: ``,
  },
  Bronze: {
    divider: `text-error divider-error`,
    gridSize: `gap-1 grid-cols-4 sm:grid-cols-5 md:grid-cols-6`,
    height: `h-24`,
    style: ``,
  },
  Refreshment: {
    divider: `text-gray-500 divider-gray-500`,
    gridSize: `gap-4 grid-cols-1`,
    height: `h-28`,
    style: `text-sm`,
  },
  Coffee: {
    divider: `text-gray-500 divider-gray-500`,
    gridSize: `gap-4 grid-cols-1`,
    height: `h-28`,
    style: ``,
  },
  Beer: {
    divider: `text-gray-500 divider-gray-500`,
    gridSize: `gap-4 grid-cols-1`,
    height: `h-28`,
    style: ``,
  },
  "Event Platform": {
    divider: `text-gray-500 divider-gray-500`,
    gridSize: `gap-4 grid-cols-1`,
    height: `h-28`,
    style: `text-sm`,
  },
} as const;

type SponsorLogosSectionProps = {
  showDraft: boolean;
  anchor: string;
};

export const SponsorLogosSection = ({ showDraft, anchor }: SponsorLogosSectionProps) => {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-4xl">
        <h2
          id={anchor}
          className="mb-20 scroll-mt-20 text-center text-2xl font-bold text-accent lg:text-3xl"
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
      <h3
        className={`divider sm:text-2xl font-bold ${sponsorVariants[plan].divider} ${sponsorVariants[plan].style}`}
      >
        {`${plan}${!isOptionalPlan ? " Sponsors" : ""}`}
      </h3>
      <div
        className={`my-8 mb-12 grid grid-cols-1 px-4 sm:px-6 lg:px-8 ${sponsorVariants[plan].gridSize}`}
      >
        {sponsors.map((sponsor) => (
          <Link key={sponsor.name} href={sponsor.logoLink} rel="noopener" target="_blank">
            <div
              key={sponsor.name}
              className={`my-auto mb-4 overflow-hidden rounded-md bg-white text-sm transition duration-300 ease-in-out hover:opacity-80 hover:shadow-md md:rounded-lg ${sponsorVariants[plan].height} ${["Platinum", "Gold"].includes(plan) ? (sponsor.addPadding ? "p-8" : "p-2") : sponsor.addPadding ? "p-2" : "p-1"}`}
            >
              <img
                className="size-full object-contain p-4"
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
