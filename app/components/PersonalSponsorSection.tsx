import Link from "next/link";

const PersonalSponsors = [
  {
    name: "おおいし (bicstone)",
    image: "https://pbs.twimg.com/profile_images/1671084783122907139/ovRsFdyJ_400x400.jpg",
    href: "https://bicstone.me/",
  },
  {
    name: "shige",
    image: "https://avatars.githubusercontent.com/u/844012?v=4",
    href: "https://github.com/shige/",
  },
  {
    name: "onk",
    image: "https://avatars.githubusercontent.com/u/203046?v=4",
    href: "https://github.com/onk",
  },
  {
    name: "yamanoku",
    image: "https://avatars.githubusercontent.com/u/1996642?v=4",
    href: "https://yamanoku.net",
  },
  {
    name: "JJ",
    image: "https://pbs.twimg.com/profile_images/1755180781599956992/PjYZLSja_400x400.png",
    href: "https://0xjj.dev",
  },
  {
    name: "cilly",
    image: "https://avatars.githubusercontent.com/u/16274232?v=4",
    href: "https://twitter.com/cilly_yllic",
  },
  {
    name: "フラクト",
    image: "https://avatars.githubusercontent.com/u/87593133?v=4",
    href: "https://twitter.com/Fract_x",
  },
  {
    name: "tacck",
    image: "https://pbs.twimg.com/profile_images/1571789838097207297/V2aYM6_A_400x400.jpg",
    href: "https://twitter.com/tacck",
  },
  {
    name: "km-tr",
    image: "https://avatars.githubusercontent.com/u/4058100?v=4",
    href: "https://github.com/km-tr",
  },

  {
    name: "yug1224",
    image: "https://avatars.githubusercontent.com/u/3946829?v=4",
    href: "https://github.com/yug1224",
  },
  {
    name: "Natsuki",
    image: "https://pbs.twimg.com/profile_images/1769222039892828160/e7oPJcnp_400x400.png",
    href: "https://twitter.com/natch_engr/",
  },
  {
    name: "たっつー",
    image: "https://avatars.githubusercontent.com/u/19267812?v=4",
    href: "https://twitter.com/tatsutakein",
  },
  {
    name: "ryu",
    image: "https://avatars.githubusercontent.com/u/114303361?v=4",
    href: "https://ryu.app/",
  },
  {
    name: "みっちー",
    image: "https://pbs.twimg.com/profile_images/1729293030228938752/4CY9EWBi_400x400.jpg",
    href: "https://twitter.com/michiya_nishida",
  },
  {
    name: "黒柳シャチ子",
    image: "https://pbs.twimg.com/profile_images/1766252367098544128/Z7tjsCWl_400x400.jpg",
    href: "https://twitter.com/shachi_daikon55",
  },
  {
    name: "河豚田(wataru_fujita)",
    image: "https://pbs.twimg.com/profile_images/1462746900902604804/2_tWSoay_400x400.jpg",
    href: "https://twitter.com/fujitagoikka",
  },
] as const;

const StaffCard = (props: (typeof PersonalSponsors)[number]) => {
  const { name, image, href } = props;

  return (
    <div className="mx-auto w-32 pb-8">
      <Link href={href} rel="noopener noreferrer" target="_blank">
        <div className="flex-col">
          <div className="avatar">
            <div className="rounded-full bg-neutral-950">
              <img src={image} alt={name} />
            </div>
          </div>
          <p className="text-center">{name}</p>
        </div>
      </Link>
    </div>
  );
};

export const PersonalSponsorSection = () => {
  return (
    <div className="pb-10 md:pb-40">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-20 scroll-mt-20 text-center text-2xl font-bold text-accent lg:text-3xl">
          個人スポンサー
        </h2>
      </div>
      <div className="mx-auto w-5/6 px-2 md:px-20">
        <div className="mx-auto grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {PersonalSponsors.map((PersonalSponsor) => (
            <StaffCard key={PersonalSponsor.name} {...PersonalSponsor} />
          ))}
        </div>
      </div>
    </div>
  );
};
