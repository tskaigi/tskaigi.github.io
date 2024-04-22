import Link from "next/link";
import { NavigateAnchorOnFirstRender } from "../functional/navigate-anchor-on-first-render";
import { sponsorList } from "../lib/data";
import { SponsorList } from "../lib/definitions";
import Container from "../ui/container";

const pageAnchors = {
  news: "news",
  ticketInfo: "ticket-info",
  sponsor: "sponsor",
  corporateSponsors: "corporate-sponsors",
};

type SponsorPageProps = {
  showDraft: boolean;
};

export default function SponsorPage({ showDraft }: SponsorPageProps) {
  const plans: (keyof SponsorList)[] = Object.keys(sponsorList) as (keyof SponsorList)[];
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
    "Event Platform": {
      divider: `text-gray-500 divider-gray-500`,
    },
  };
  return (
    <div className="">
      <NavigateAnchorOnFirstRender />
      <h1
        id={pageAnchors.sponsor}
        className="mx-auto my-10 scroll-mt-20 px-4 text-2xl sm:px-6 lg:px-8 lg:text-4xl"
      >
        <a href="#sponsor">TSKaigi 2024のスポンサー</a>
      </h1>
      {plans
        .filter((plan) => plan !== "Bronze")
        .map((plan) => {
          const list = sponsorList[plan].filter((sponsor) => showDraft || !sponsor.draft);
          if (list.length === 0) {
            return null;
          }
          return (
            <div key={plan}>
              <h3 className={`divider mb-8 text-2xl font-bold ${sponsorVariants[plan].divider} `}>
                {plan} Sponsors
              </h3>
              {list.map((sponsor, index) => (
                <div
                  key={sponsor.name}
                  className={`p-6 sm:p-6 lg:p-8 ${index % 2 === 0 ? "bg-base-100" : "bg-base-200"}`}
                >
                  <div className="grid gap-4 sm:grid-cols-3">
                    <Link href={sponsor.logoLink} rel="noopener" target="_blank">
                      <div
                        className={`flex h-[200px] w-full items-center rounded-sm bg-white sm:col-span-1 ${
                          sponsor.addPadding ? "p-[20%]" : "p-8"
                        }`}
                      >
                        <img
                          src={sponsor.subLogoImage ?? sponsor.logoImage}
                          alt={sponsor.name + `logo`}
                          className="mx-auto max-h-44"
                        />
                      </div>
                    </Link>
                    <div className="sm:col-span-2">
                      <h4 className="mb-4 border-l-4 pl-2 text-xl lg:text-3xl ">{sponsor.name}</h4>
                      <p className="mb-2 whitespace-pre-wrap">{sponsor.description}</p>
                      <ul className="mb-2">
                        {sponsor.links.map((link, index) => (
                          <li key={index} className="mb-1">
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noopener"
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
          );
        })}
      {
        <div>
          <h3 className={`divider mb-8 text-2xl font-bold ${sponsorVariants["Bronze"].divider} `}>
            Bronze Sponsors
          </h3>
          <div
            className={`my-8 mb-12 grid grid-cols-2 gap-4 px-4 sm:grid-cols-3 sm:px-6 md:grid-cols-4 lg:px-8`}
          >
            {sponsorList.Bronze.filter((sponsor) => showDraft || !sponsor.draft).map((sponsor) => (
              <Link key={sponsor.name} href={sponsor.logoLink} rel="noopener" target="_blank">
                <div
                  key={sponsor.name}
                  className={`my-auto mb-4 h-36 overflow-hidden rounded-md bg-white text-sm transition duration-300 ease-in-out hover:opacity-80 hover:shadow-md md:rounded-lg ${sponsor.addPadding ? "p-8" : "p-2"}`}
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
      }
      <Container>
        <div className="hero min-h-[10vh] lg:min-h-[20vh]">
          <div className="hero-content max-w-full p-0 text-center">
            <h1 className="text-4xl font-bold lg:text-4xl lg:leading-relaxed">
              <span className=" pr-4 text-accent lg:text-6xl">
                TSKaigi 2024 <br />
              </span>
              スポンサーの募集は終了しました。
            </h1>
          </div>
        </div>
        <div className="mb-20">
          <div className="text-info-contents mx-auto my-6 max-w-5xl text-left lg:text-xl">
            <div className="mockup-browser border border-base-300">
              <div className="mockup-browser-toolbar">
                <div className="input border border-base-300 lg:text-xl">https://tskaigi.org</div>
              </div>
              <iframe
                src="https://docs.google.com/presentation/d/e/2PACX-1vTfoOlP1rvCDd0YI_3RAt-ocQ4Q_4ylC9hAyBirJ8u65drn7NISquC__v3lGhnnKcYFmrfjU_dDTQJ_/embed?start=false&loop=false&delayms=30000"
                className="aspect-[16/9] w-full"
              ></iframe>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <a
              href="https://forms.gle/aZnQSAz8UEwdiitj7"
              rel="noopener noreferrer"
              target="_blank"
              className="link link-primary"
            >
              <div className="btn lg:btn-md ">お問い合わせ</div>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
