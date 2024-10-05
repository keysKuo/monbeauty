import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Social from "@/components/Social";

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
    title: "Mon Beauty Nail",
    description: "Làm nail, gồi đầu & chăm sóc da",
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
                <Social />
                <main className="desktop:w-[70%] w-[90%] mx-auto">
                    <Header />
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
