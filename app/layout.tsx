import type { Metadata } from "next";
import { Roboto_Slab } from 'next/font/google'
import "./globals.css";

const robotoSlab = Roboto_Slab({ 
  weight: "400",
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "Cross Stitch Pattern Maker",
  description: "This is a cross stitch pattern maker built with Next and Typescript and deployed using Vercel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoSlab.className}>{children}</body>
    </html>
  );
}
