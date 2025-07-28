import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Bitcount from "next/font/local";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const bitcount = Bitcount({
	src: "/fonts/BitcountPropDouble-Regular.ttf",
	variable: "--font-bitcount",
});

export const metadata: Metadata = {
	title: "Tuben",
	description: "Kolla nästa avgång",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${bitcount.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
