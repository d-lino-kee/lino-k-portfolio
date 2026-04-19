import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import ThemeProvider from "../components/ThemeProvider";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: "600",
    style: "italic",
    variable: "--font-cormorant",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Lino Kee | Portfolio",
    description:
        "Portfolio of Lino Kee - Management Engineering student focused on AI/ML, software engineering, and data science.",
    metadataBase: new URL("https://example.com"), // change later when deployed
    openGraph: {
        title: "Lino Kee | Portfolio",
        description:
            "AI/ML, software engineering, and data science projects - plus experience and ways to connect.",
        type: "website",
    },
    icons: {
        icon: "/favicon.ico", // add one in /public if you want
    },
};

export default function RootLayout({
    children,
}: Readonly <{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`scroll-smooth text-white bg-black ${playfair.variable}`}>
            <body className={`${inter.className} bg-black text-white antialiased`}>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
