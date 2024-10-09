import "./globals.css";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";

const syne = Syne({
    subsets: ["latin"],
    display: "block",
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://www.usamarashid.com/"),
    title: "Usama Rashid's portfolio",
    description:
        "Software Engineer, currently working at Devsinc. Focused on immersive experiences and building scalable solutions.",
    generator: "Next.js",
    applicationName: "Usama Rashid's portfolio",
    keywords: [
        "Usama Rashid's portfolio",
        "Usama Rashid",
        "Software Engineer",
        "Blockchain",
        "freelance",
        "developer",
        "freelance developer",
        "frontend",
        "nextjs",
        "react",
        "frontend developer",
        "frontend engineer",
        "creative",
        "creative developer",
        "creative engineer",
        "tech",
        "germany",
        "united states",
        "united states of america",
        "dubai",
        "hamburg",
        "software engineer",
        "software",
        "software developer",
        "portfolio",
        "frontend developer portfolio",
        "creative developer portfolio",
        "creative engineer portfolio",
        "software developer portfolio",
        "frontend engineer portfolio",
    ],
    colorScheme: "dark",
    openGraph: {
        title: "Usama Rashid - Software Engineer",
        description:
            "Software Engineer, currently working at Devsinc. Focused on immersive experiences and building scalable solutions.",
        url: "https://usamarashid.vercel.app/",
        siteName: "https://usamarashid.vercel.app/",
        images: [
            {
                url: "./public/metadata.jpg",
                width: 1200,
                height: 630,
                alt: "Usana Rashid - Software Engineer and Developer",
            },
        ],
        locale: "en-US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Usama Rashid - Software Engineer",
        description:
            "Software Engineer, currently working at Devsinc. Focused on immersive experiences and building scalable solutions.",
        creator: "Usama Rashid Butt",
        creatorId: "0000000000",
        images: ["./public/metadata.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    category: "technology",
};

type RootLayoutProps = {
    children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body
                className={`${syne.className} scroll-smooth scrollbar-none scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
            >
                {children}
            </body>
        </html>
    );
}
