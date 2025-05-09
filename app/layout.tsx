import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import ClientToaster from "@/components/ui/ClientToaster";


const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "prep-interview",
  description: "An AI-powered interview preparation application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={` ${monaSans.className} antialiased pattern`}>
        {children}
        <ClientToaster />
      </body>
    </html>
  );
}
