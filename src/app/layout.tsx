import type { Metadata } from "next";
import { Inconsolata, Josefin_Sans } from "next/font/google";
import styles from "../styles/styles.module.css";
import Providers from "@/lib/providers";
import TopNav from "@/components/nav/topnav";
import GoUp from "@/components/display/goUp";
import Footer from "@/components/nav/footer";
import '@fontsource/oxanium';
import React from "react";





const josef = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--josef",
});

const inconsolata = Inconsolata({
  subsets: ["latin"],
  display: "swap",
  variable: "--inconsolata",
});

export const metadata: Metadata = {
  title: "Nnam tochukwu",
  description: "Full stack web developer portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${josef.variable} ${inconsolata.variable} ${styles.background} relative`}
      >
        <Providers>
          <TopNav />
          {children}
          <GoUp />
          <Footer />
        </Providers>

      </body>
    </html>
  );

}