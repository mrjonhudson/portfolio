import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Jon Hudson",
    description: "Jon Hudson - Fullstack React Native developer based in Shropshire. Currently building something new at Entrepreneur First.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {children}
                <Analytics />
            </body>
            <GoogleAnalytics gaId="G-0V4CQ20TFF" />
        </html>
    );
}
