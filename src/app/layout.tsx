import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { outfit } from "./fonts";

export const metadata: Metadata = {
  title: "8enjamin",
  description: "Creative Artist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
