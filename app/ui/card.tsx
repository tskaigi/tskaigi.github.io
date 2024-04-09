import type { CardData } from "../lib/definitions";

export default function Card({ cardData }: { cardData: CardData[] }) {
  return (
    <ul
      role="list"
      className="mx-auto mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
    >
      {cardData.map((data) => (
        <li
          key={data.title}
          className="rounded-2xl bg-base-200 py-8 duration-150 ease-in-out hover:bg-base-content/5"
        >
          <a href={data.links[0].href} rel="noopener noreferrer" target="_blank">
            <img
              className="object-fit mx-auto size-48 rounded-full md:size-56"
              src={data.imageUrl}
              alt={data.title + "icon"}
            />
            <h3 className="link-hover pt-2 text-center text-xl font-semibold leading-7 tracking-tight hover:text-primary">
              {data.title}
            </h3>
            <p className="px-8 pb-2 text-right text-sm leading-6 text-base-content/50">
              {data.subtitle}
            </p>
          </a>
          <p className="px-8 pb-2 text-left">{data.description}</p>
          <ul className="flex justify-center">
            {data.links.map((link, index) => {
              const LinkIcon = link.icon;
              return (
                <li
                  key={index}
                  className="mx-4 rounded-xl p-2 transition duration-150 ease-in-out hover:bg-base-content/20 hover:text-primary"
                >
                  <a href={link.href} rel="noopener noreferrer" target="_blank">
                    <span className="sr-only"></span>
                    {LinkIcon && <LinkIcon className="size-8" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </li>
      ))}
    </ul>
  );
}
