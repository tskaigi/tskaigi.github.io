import Link from "next/link";

export type NewsData = {
  text: string;
  link?: {
    href?: string;
    label?: string;
  };
}

const newsData: NewsData[] = [
  {
    text: "プロポーザル募集を開始しました。LTやトークセッションの登壇に挑戦してみてください。",
    link: { href: "https://google.com", label: "応募はこちら" }
  },
  {
    text: "スポンサー募集を開始しました。",
    link: { href: "https://google.com", label: "応募はこちら" }
  },
]

export default function News() {
  return (
    <div className="">
      {/* <span className="indicator-item indicator-top indicator-start left-4 badge badge-secondary">News</span>
      <div className="bg-base-content rounded-md p-4 text-primary-content w-full shadow-inner">
        {newsData.map((data) => (
          <div key={data.text} className="flex flex-wrap justify-end sm:justify-between items-end w-full my-2">
            <p className="sm:w-2/3 inline-block">{data.text}</p>
            {data.link && <a href={data.link.href} className="link link-primary-content">{data.link.label}</a>}
          </div>
        ))}
      </div> */}
      <div className="overflow-x-auto border border-base-300">
        <table className="table table-zebra">
          <thead className=" text-base-content">
            <tr>
              <th>News</th>
            </tr>
          </thead>
          <tbody>
            {newsData.map((data) => (
              <tr>
                <th>{data.date}</th>
                <td>{data.text}</td>
                <td><Link href={`${data.link?.href}`}>{data.link?.label}</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}