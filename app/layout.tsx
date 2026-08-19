import type { Metadata, Viewport } from "next";
import { Poppins, Lora } from "next/font/google";
import "./globals.css";
import MetaPixel from "../components/MetaPixel";

const poppins = Poppins({ 
  subsets: ["latin", "latin-ext"], 
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins" 
});

const lora = Lora({ 
  subsets: ["latin", "latin-ext"], 
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora" 
});

export const viewport: Viewport = {
  themeColor: "#E89D4F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://quizz.ohiszpanski.pl"),
  title: {
    default: "Test Diagnostyczny Hiszpańskiego – Sprawdź swój poziom | Ada",
    template: "%s | Ada - Hiszpański",
  },
  description: "Rozwiąż 6-minutowy test diagnostyczny i dowiedz się, na którym z 5 etapów nauki hiszpańskiego jesteś. Przestań stać w miejscu i zacznij mówić płynnie.",
  keywords: ["nauka hiszpańskiego", "test z hiszpańskiego", "etapy nauki języka", "hiszpański dla początkujących", "płynność językowa"],
  authors: [{ name: "Ada", url: "https://quizz.ohiszpanski.pl" }],
  creator: "Ada",
  publisher: "Ada",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/rss.xml",
    },
  },
  icons: {
    icon: [
      { url: "/images/ikona-strony.jpg", type: "image/jpeg" },
    ],
    shortcut: "/images/ikona-strony.jpg",
    apple: [
      { url: "/images/ikona-strony.jpg", sizes: "180x180", type: "image/jpeg" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://quizz.ohiszpanski.pl",
    siteName: "Ada - Hiszpański",
    title: "Test Diagnostyczny Hiszpańskiego – Sprawdź swój poziom | Ada",
    description: "Rozwiąż 6-minutowy test diagnostyczny i dowiedz się, na którym z 5 etapów nauki hiszpańskiego jesteś.",
    images: [
      {
        url: "/images/main-photo.png",
        width: 1200,
        height: 630,
        alt: "Ada - Test Diagnostyczny Hiszpańskiego",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Test Diagnostyczny Hiszpańskiego – Sprawdź swój poziom | Ada",
    description: "Dowiedz się, na jakim etapie nauki hiszpańskiego jesteś. 6 pytań, które zmienią Twoje podejście.",
    images: ["/images/main-photo.png"],
    creator: "@hiszpanski_ada",
  },
  verification: {
    google: "GSC_VERIFICATION_CODE_PLACEHOLDER",
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
        className={`${poppins.variable} ${lora.variable} font-sans bg-background text-slate-900 overflow-x-hidden min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
