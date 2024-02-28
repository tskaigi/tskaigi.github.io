import Container from "../ui/container";
import { SponsorList } from "../lib/definitions";
import { sponsorList } from "../lib/data";
// const links: ["https://twitter.com/ts", "https://twitter.com/ts", "https://twitter.com/ts"],

const pageAnchors = {
  news: "news",
  ticketInfo: "ticket-info",
  sponsor: "sponsor",
};
export default function Sponsor() {
  const plans: (keyof SponsorList)[] = Object.keys(
    sponsorList
  ) as (keyof SponsorList)[];
  const sponsorVariants = {
    Platinum: {
      divider: `text-secondary divider-secondary`,
    },
    Gold: {
      divider: `text-accent divider-accent`,
    },
    Silver: {
      divider: `text-primary divider-primary`,
    },
    Bronze: {
      divider: `text-error divider-error`,
    },
    Refreshment: {
      divider: `text-gray-500 divider-gray-500`,
    },
    Coffee: {
      divider: `text-gray-500 divider-gray-500`,
    },
    Beer: {
      divider: `text-gray-500 divider-gray-500`,
    },
    EventPlatform: {
      divider: `text-gray-500 divider-gray-500`,
    },
  };
  return (
    <div className="">
      <h1
        id={pageAnchors.sponsor}
        className="text-2xl lg:text-4xl my-10 scroll-mt-20 mx-auto px-4 sm:px-6 lg:px-8"
      >
        <a href="#sponsor">TSKaigi 2024のスポンサー</a>
      </h1>
      {plans.map((plan) => (
        <div key={plan}>
          <h3
            className={`mb-8 text-2xl font-bold divider ${sponsorVariants[plan].divider} `}
          >
            {plan} Sponsors
          </h3>
          {sponsorList[plan].map((sponsor, index) => (
            <div
              key={sponsor.name}
              className={`p-6 sm:p-6 lg:p-8  ${
                index % 2 === 0 ? "bg-base-100" : "bg-base-200"
              }`}
            >
              <div className="grid sm:grid-cols-3 gap-4">
                <div
                  className={`sm:col-span-1 bg-white w-full rounded-sm flex items-center h-[300px] ${
                    sponsor.addPadding ? "p-[20%]" : "p-8"
                  }`}
                >
                  <img
                    src={sponsor.logoImage}
                    alt={sponsor.name + `logo`}
                    className="max-h-44 mx-auto"
                  />
                </div>
                <div className="sm:col-span-2">
                  <h4 className="text-xl lg:text-3xl mb-4 border-l-4 pl-2 ">
                    {sponsor.name}
                  </h4>
                  <p className="mb-2 whitespace-pre-wrap">
                    {sponsor.description}
                  </p>
                  <ul className="mb-2">
                    {sponsor.links.map((link, index) => (
                      <li key={index} className="mb-1">
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="link link-primary"
                        >
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
