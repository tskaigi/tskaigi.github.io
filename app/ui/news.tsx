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
		link: {href: "https://google.com", label: "応募はこちら"}
	},
	{
		text: "スポンサー募集を開始しました。",
		link: {href: "https://google.com", label: "応募はこちら"}
	},
]

export default function News() {
	return (
		<div className="">
			<div className=" bg-base-content rounded-md p-4 text-primary-content">
				{newsData.map((data) => (
					<div key={data.text} className="flex gap-4">
						<p>{data.text}</p>
						{data.link && <a href={data.link.href} className="link link-primary-content">{data.link.label}</a>}
					</div>
				))}
			</div>
		</div>
	)
}