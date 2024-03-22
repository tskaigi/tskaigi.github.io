import Link from "next/link";

const coreMemberInfos = [
  {
    name: "takezoux2",
    image: "takezoux2.jpg",
    href: "https://twitter.com/takezoux2",
  },
  {
    name: "meso",
    image: "meso.jpg",
    href: "https://twitter.com/meso",
  },
  {
    name: "berlysia",
    image: "berlysia.jpg",
    href: "https://twitter.com/berlysia",
  },
  {
    name: "niwa-takeru",
    image: "niwa-takeru.jpg",
    href: "https://twitter.com/niwa_takeru",
  },
];

const memberInfos = [
  {
    name: "oku_4",
    image: "oku_4.jpg",
    href: "https://twitter.com/iam_oku",
  },
  {
    name: "riya-amemiya",
    image: "riya-amemiya.jpg",
    href: "https://twitter.com/Riya31377928",
  },
  {
    name: "yuta-ike",
    image: "yuta-ike.jpg",
    href: "https://twitter.com/Selria1",
  },
  {
    name: "YutaUra",
    image: "yutaura.jpg",
    href: "https://twitter.com/3594914",
  },

  {
    name: "MisakiSoeda",
    image: "MisakiSoeda.jpg",
    href: "https://twitter.com/msksed_1129",
  },

  {
    name: "t-yng",
    image: "t-yng.jpg",
    href: "https://twitter.com/_t_yng",
  },
  {
    name: "Keisuke Taniai",
    image: "noimage.png",
    href: "https://twitter.com/posterkeisuke",
  },
  {
    name: "yuto nagai",
    image: "noimage.png",
    href: "https://twitter.com/yut0naga1",
  },
  {
    name: "いわまさ",
    image: "iwamasa.jpg",
    href: "https://twitter.com/iwakuradev",
  },
  {
    name: "kemuridama",
    image: "kemuridama.jpg",
    href: "https://x.com/_kemuridama",
  },
  {
    name: "bukkan",
    image: "bukkan.jpg",
    href: "https://x.com/bukkan817",
  },
  {
    name: "まっさん",
    image: "masaki_wkb.jpg",
    href: "https://twitter.com/masaki_wkb",
  },
  {
    name: "seito2",
    image: "seito2.jpg",
    href: "https://github.com/seito2",
  },
  {
    name: "shioyang",
    image: "shioyang.jpg",
    href: "https://twitter.com/shioyang",
  },
  {
    name: "#7",
    image: "nyagihime.jpg",
    href: "https://github.com/nyagihime",
  },
  {
    name: "suke",
    image: "suke.jpg",
    href: "https://twitter.com/suke083",
  },
  {
    name: "Yuma-Satake",
    image: "yumasatake.jpg",
    href: "https://twitter.com/yuma_satake22",
  },
  {
    name: "hoshico",
    image: "hoshico.jpg",
    href: "https://twitter.com/hoshihoshi_yasu",
  },
  {
    name: "susiyaki",
    image: "susiyaki.jpg",
    href: "https://twitter.com/susiyaki_dev",
  },
  {
    name: "komura-c",
    image: "komura-c.jpg",
    href: "https://twitter.com/komura_c",
  },
  {
    name: "yodaka",
    image: "yodaka.jpg",
    href: "https://twitter.com/engineerYodaka",
  },
  {
    name: "magcho",
    image: "magcho.jpg",
    href: "https://twitter.com/magcho0527",
  },
  {
    name: "JI23",
    image: "ji23.jpg",
    href: "https://twitter.com/JJ_1123_I",
  },
  {
    name: "ひがき",
    image: "higaki.jpg",
    href: "https://twitter.com/higaki_program",
  },
  {
    name: "OJI",
    image: "OJI.jpg",
    href: "https://x.com/OldBigBuddha",
  },
  {
    name: "m0m0i",
    image: "m0m0i.jpg",
    href: "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFG5sK74hHZ6gAAAY5kdTY4H5AHGGu-aNgDc7xOJFn_ApVvkO24dFpxvZFdrTLo85AyqeZiA6l7pRlKDATyO3LdIivlk9dHSGyFDDlh0Z5ZiqQCPE_63qMgaeJMzWoEXU6kWAU=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fhiroyuki-momoi%2F",
  },
  {
    name: "midori",
    image: "midori.jpg",
    href: "https://x.com/midori697810050?t=-4nMNVetCm2Sw7ehIZCvwg&s=09",
  },
];

const StaffCard = (props: (typeof memberInfos)[number]) => {
  const { name, image, href } = props;

  return (
    <div className="w-32 pb-8 mx-auto">
      <Link href={href} rel="noopener noreferrer" target="_blank">
        <div className="flex-col">
          <div className="avatar">
            <div className="rounded-full">
              <img src={`/staffMemebers/${image}`} alt={name} />
            </div>
          </div>
          <p className="text-center">{name}</p>
        </div>
      </Link>
    </div>
  );
};

export const StaffMemberSection = () => {
  return (
    <div className="pb-20 md:pb-40">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-accent lg:text-3xl mb-20 scroll-mt-20">
          コアスタッフ
        </h2>
      </div>
      <div className="mx-auto pb-20 px-2 w-5/6 md:px-20 md:w-4/6">
        <div className="grid grid-cols-2 gap-4 mx-auto md:grid-cols-3 lg:grid-cols-4">
          {coreMemberInfos.map((coreMemberInfo) => (
            <StaffCard key={coreMemberInfo.name} {...coreMemberInfo} />
          ))}
        </div>
      </div>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-accent lg:text-3xl mb-20 scroll-mt-20">
          スタッフ一覧
        </h2>
      </div>
      <div className="mx-auto px-2 w-5/6 md:px-20">
        <div className="grid grid-cols-2 gap-4 mx-auto md:grid-cols-3 lg:grid-cols-5">
          {memberInfos.map((memberInfo) => (
            <StaffCard key={memberInfo.name} {...memberInfo} />
          ))}
        </div>
      </div>
    </div>
  );
};
