import type { CardComponentProps, CardData } from "../lib/definitions"

export default function Card({ cardData }: { cardData: CardComponentProps }) {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{cardData.headding}</h2>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            {cardData.subheading}
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
        >
          {cardData.dataList.map((data) => (
            <li key={data.title} className="rounded-2xl bg-base-200 px-8 py-10">
              <a href={data.links[0].href} rel="noopener noreferrer" target="_blank" >
                <img className="object-cover mx-auto h-48 w-48 rounded-full md:h-56 md:w-56" src={data.imageUrl} alt="" />
                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">{data.title}</h3>
              </a>
              <p className="text-sm leading-6 text-gray-400">{data.subtitle}</p>
              <p>{data.description}</p>
              <ul className="flex justify-center gap-2">
                {data.links.map((link, index) => {
                  const LinkIcon = link.icon;
                  return (
                    <li key={index}>
                      <a href={link.href} className="mt-6 flex justify-center text-gray-400 hover:text-gray-300 gap-2" rel="noopener noreferrer" target="_blank">
                        <span className="sr-only"></span>
                        {LinkIcon && <LinkIcon className="w-6 h-6" />}
                      </a>
                    </li>
                  )
                }
                )}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}