import type { Metadata } from "next";
import "./globals.css";
import { Urbanist, Yellowtail } from "next/font/google";
import localFont from "next/font/local";
import Lenis from "@/components/layout/Lenis";

export const metadata: Metadata = {
  title: "Simp Gifts",
  description: "Generated by create next app",
  icons: {
    icon: "/logo.svg",
  },
};

const sombra = localFont({
  src: "./fonts/Sombra-Black.woff2",
  variable: "--font-sombra",
});

const urbanist = Urbanist({
  display: "swap",
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-urbanist",
});
const yellowTail = Yellowtail({
  display: "swap",
  weight: "400",
  subsets: ["latin"],
  variable: "--font-yellowTail",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollbarWidth: "none" }}>
      <Lenis>
        <body
          className={`${yellowTail.variable} ${urbanist.variable} ${sombra.variable} antialiased overflow-x-clip relative`}
        >
          {children}
        </body>
      </Lenis>
    </html>
  );
}
