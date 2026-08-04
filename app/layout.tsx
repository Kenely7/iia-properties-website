import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
    <html lang="en" className={`${poppins.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col font-body antialiased bg-white text-slate-800">
        {children}
      </body>
    </html>
  );
}
