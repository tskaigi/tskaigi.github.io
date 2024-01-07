export type PageInfo = {
	index: number
	title: string
	description?: string
	metaImage?: string
	icon: string
	href: string
}

export const PageInfos: PageInfo[] = [
	{index: 1, title: "Home", description:"", icon: "home", href: "/" },
	{index: 2, title: "Sponsor", description:"", icon: "", href: "/sponsor-recruitment" },
	{index: 3, title: "CfP", description:"", icon: "", href: "/call-for-proposals" },
]