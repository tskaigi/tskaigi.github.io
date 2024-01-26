import type { CardData } from "../lib/definitions"

export default function Card({ cardData }: { cardData: CardData[] }) {
  return (
    <ul
      role="list"
      className="mx-auto mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
    >
      {cardData.map((data) => (
        <li key={data.title} className="rounded-2xl bg-base-200 hover:bg-base-content/5 duration-150 ease-in-out py-8">
          <a href={data.links[0].href} rel="noopener noreferrer" target="_blank" >
            <img className="object-cover mx-auto h-48 w-48 rounded-full md:h-56 md:w-56" src={data.imageUrl} alt="" />
            <h3 className="link-hover hover:text-primary text-center text-xl pt-2 font-semibold leading-7 tracking-tight">{data.title}</h3>
            <p className="text-sm text-right leading-6 px-8 pb-2 text-base-content/50">{data.subtitle}</p>
          </a>
          <p className="pb-2 px-8 text-left">{data.description}</p>
          <ul className="flex justify-center">
            {data.links.map((link, index) => {
              const LinkIcon = link.icon;
              return (
                <li key={index} className="p-2 rounded-xl hover:text-primary hover:bg-base-content/20 transition duration-150 ease-in-out mx-4">
                  <a href={link.href} rel="noopener noreferrer" target="_blank">
                    <span className="sr-only"></span>
                    {LinkIcon && <LinkIcon className="w-8 h-8" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </li>
      ))}
    </ul>
  )
}