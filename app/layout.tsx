import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotoSans = localFont({
	src: "./fonts/NotoSans-Medium.ttf",
	variable: "--font-noto",
	weight: "100 900",
});

const Marcellus = localFont({
	src: "./fonts/MarcellusSC-Regular.ttf",
	variable: "--font-marcellus",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${NotoSans.variable} ${Marcellus.variable} antialiased bg-fourth text-zinc-700`}
			>
				<main className="xl:w-[70%] w-[90%] mx-auto">
					<Header />
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
