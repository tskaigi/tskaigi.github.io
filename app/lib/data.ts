import type { PageInfo, QandA, CardData, } from "./definitions";
import { HiHome } from "react-icons/hi";
import { HiLightBulb } from "react-icons/hi2";
import { FaHandshake } from "react-icons/fa";
import { FaXTwitter, FaInstagram, FaFacebookF } from "react-icons/fa6";

export const pageInfos: PageInfo[] = [
	{
		index: 1,
		title: "Home",
		description: "",
		icon: HiHome,
		href: "/",
	},
	{
		index: 2,
		title: "スポンサー募集",
		description:
			"TSKaigiは日本最大級のtypescriptカンファレンスを開催します。スポンサーになって、typescriptコミュニティを一緒に盛り上げませんか？業界でのエキスパートとして日本のTypeScriptユーザーの支援をお願いします。",
		icon: FaHandshake,
		href: "/sponsor-recruitment",
	},
	{
		index: 3,
		title: "プロポーザル募集",
		description:
			"TSKaigiは日本のTypeScriptコミュニティを盛り上げるカンファレンスを開催します。あなたの発表・登壇をお待ちしております。ぜひ一緒に日本のTypeScriptコミュニティを盛り上げましょう！",
		icon: HiLightBulb,
		href: "/call-for-proposals",
	},
];

export const qaList: QandA = {
	categories: [
		{
			id: 1,
			name: "sponsor-recruitment",
			questions: [
				{
					id: 1,
					question: "一般社団法人TSKaigi Association はインボイス制度の適格請求書発行事業者登録ですか？",
					answer: "",
				},
			]
		},
		{
			id: 2,
			name: "CfP",
			questions: [
				{
					id: 101,
					question: "トークの時間はどのくらいですか？",
					answer: "トークはセッション30分LT5分のいずれかの枠での提案をお待ちしています。ご自身のアイデアに合った形式での提案をお願いいたします。",
				},
				{
					id: 102,
					question: "名前は本名である必要がありますか？",
					answer: "本名でもハンドルネームでも、どちらでも構いません。",
				},
			]
		},
	]
};

export const selectionCommittee: CardData[] = [
	// {
	// 	title: "一般社団法人TSKaigi Association",
	// 	subtitle: "",
	// 	description: "サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト",
	// 	imageUrl: "/logo.svg",
	// 	links: [
	// 		{ icon: FaXTwitter, href: "https://twitter.com/iam_oku" },
	// 		{ icon: FaInstagram, href: "" },
	// 		{ icon: FaFacebookF, href: "" },
	// 	]
	// },
	{
		title: "hiroppy",
		imageUrl: "/hiroppy_icon.png",
		links: [
			{ icon: FaXTwitter, href: "https://twitter.com/about_hiroppy" },
		]
	},
	{
		title: "mizchi",
		imageUrl: "https://pbs.twimg.com/profile_images/2507664307/viccruw2m1zb0xkkisil_400x400.jpeg",
		links: [
			{ icon: FaXTwitter, href: "https://twitter.com/mizchi" },
		]
	},
	{
		title: "うひょ",
		imageUrl: "https://pbs.twimg.com/profile_images/1341186424423378944/gYTKIbFl_400x400.jpg",
		links: [
			{ icon: FaXTwitter, href: "https://twitter.com/uhyo_" },
		]
	},
]