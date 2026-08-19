import type { Metadata, Viewport } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import MetaPixel from "../components/MetaPixel";

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const viewport: Viewport = {
  themeColor: "#D584C8",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://quizz.ohiszpanski.pl"),
  title: {
    default: "Glow Up Twojego Hiszpańskiego – Indywidualna Diagnoza i Plan działania | Ada",
    template: "%s | Ada - Hiszpański",
  },
  description: "RTG Twojego hiszpańskiego 1:1 z Adą. Dowiedz się, co blokuje Twoje mówienie i otrzymaj spersonalizowany plan oraz materiały na pierwszy miesiąc.",
  keywords: ["nauka hiszpańskiego", "konsultacje hiszpański", "plan nauki hiszpańskiego", "mówienie po hiszpańsku"],
  authors: [{ name: "Ada", url: "https://quizz.ohiszpanski.pl" }],
  creator: "Ada",
  publisher: "Ada",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/images/ikona-strony.jpg", type: "image/jpeg" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body 
        className={`${playfair.variable} ${montserrat.variable} font-sans bg-background text-slate-900 overflow-x-hidden min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
