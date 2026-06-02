import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dhaka Founders — Bangladesh's Premier Startup Directory",
    template: "%s | Dhaka Founders",
  },
  description:
    "Discover the minds building Bangladesh's future. Connect, collaborate, and scale with Dhaka's top founders and startups.",
  keywords: [
    "Bangladesh startups",
    "Dhaka founders",
    "startup directory",
    "Bengali entrepreneurs",
    "startup ecosystem",
  ],
  authors: [{ name: "Dhaka Founders" }],
  creator: "Dhaka Founders",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dhakafounders.com",
    siteName: "Dhaka Founders",
    title: "Dhaka Founders — Bangladesh's Premier Startup Directory",
    description:
      "Your gateway to the Bangladeshi startup ecosystem. Connect with 500+ founders building the future.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhaka Founders",
    description: "Your gateway to the Bangladeshi startup ecosystem.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakartaSans.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
