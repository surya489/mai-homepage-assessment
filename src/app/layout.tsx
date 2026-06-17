import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Header } from "@/components/layout/Header";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Find Trusted Stones & Masons in UK | Myproject.ai",
  description:
    "Your project reaches 1,000+ Fabricators, Suppliers, Stones & Masons in UK. Post your job free and get fast quotes from verified trades.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full`}>
      <body className="min-h-full flex flex-col font-montserrat antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
