export type NavLink = {
	label: string;
	url: string;
};

export const navlinks: NavLink[] = [
	{
		label: "Trang chủ",
		url: "/",
	},
	{
		label: "Giới thiệu",
		url: "/gioi-thieu",
	},
	{
		label: "Dịch vụ",
		url: "/dich-vu",
	},
	{
		label: "Đào tạo",
		url: "/dao-tao",
	},
	{
		label: "Sự kiện",
		url: "/su-kien",
	},
	{
		label: "Feedback",
		url: "/feedback",
	},
	{
		label: "Liên hệ",
		url: "/lien-he",
	},
];

export const API_URL = 'https://admin.monbeauty.org'
