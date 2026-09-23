import type { Metadata } from "next";
import { Sorts_Mill_Goudy } from "next/font/google";
import "./globals.css";

const sortsMillGoudy = Sorts_Mill_Goudy({
  variable: "--font-sorts-mill-goudy",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "IIA Properties | Iwuba Ifediora & Associates — Estate Surveyors and Valuers",
  description:
    "Iwuba Ifediora & Associates (IIA) is a registered firm of Estate Surveyors & Valuers offering property sales, rentals, valuations, property management, and business development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sortsMillGoudy.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-body antialiased bg-white text-slate-800">
        {children}
      </body>
    </html>
  );
}
