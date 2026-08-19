import type { Metadata } from "next";
import Hero from "../../components/sections/Hero";
import PainPoints from "../../components/sections/PainPoints";
import WhatYouGet from "../../components/sections/WhatYouGet";
import About from "../../components/sections/About";
import Solution from "../../components/sections/Solution";
import MethodWorks from "../../components/sections/MethodWorks";
import Pricing from "../../components/sections/Pricing";
import FAQ from "../../components/sections/FAQ";
import FinalCTA from "../../components/sections/FinalCTA";
import Footer from "../../components/sections/Footer";

export const metadata: Metadata = {
  title: "Glow Up Twojego Hiszpańskiego – Indywidualna Diagnoza i Plan działania | Ada",
  description: "RTG Twojego hiszpańskiego 1:1 z Adą. Dowiedz się, co blokuje Twoje mówienie i otrzymaj spersonalizowany plan oraz materiały na pierwszy miesiąc.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Ada - Glow Up Twojego Hiszpańskiego",
  "url": "https://quizz.ohiszpanski.pl",
  "logo": "https://quizz.ohiszpanski.pl/images/ikona-strony.jpg",
  "description": "Indywidualna diagnoza i spersonalizowany plan nauki języka hiszpańskiego.",
  "founder": {
    "@type": "Person",
    "name": "Ada"
  },
  "offers": {
    "@type": "Offer",
    "name": "Konsultacja Glow Up Twojego Hiszpańskiego",
    "price": "250",
    "priceCurrency": "PLN"
  }
};

export default function MarketingPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <PainPoints />
      <WhatYouGet />
      <About />
      <Solution />
      <MethodWorks />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}

