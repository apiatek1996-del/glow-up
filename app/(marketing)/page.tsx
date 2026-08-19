import type { Metadata } from "next";
import Hero from "../../components/sections/Hero";
import QuizMockup from "../../components/sections/QuizMockup";
import PainPoints from "../../components/sections/PainPoints";
import Solution from "../../components/sections/Solution";
import MethodWorks from "../../components/sections/MethodWorks";
import WhatYouGet from "../../components/sections/WhatYouGet";
import About from "../../components/sections/About";
import FAQ from "../../components/sections/FAQ";
import FinalCTA from "../../components/sections/FinalCTA";
import Footer from "../../components/sections/Footer";

export const metadata: Metadata = {
  title: "Darmowy Test Poziomujący Hiszpański – Gdzie jesteś na swojej drodze?",
  description: "Zrób darmowy test diagnostyczny i sprawdź, na jakim etapie nauki hiszpańskiego jesteś. Dowiedz się, czego Ci brakuje, aby mówić płynnie.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Ada - Hiszpański od zera do płynności",
  "url": "https://quizz.ohiszpanski.pl",
  "logo": "https://quizz.ohiszpanski.pl/images/ikona-strony.jpg",
  "description": "Profesjonalne testy diagnostyczne i kursy języka hiszpańskiego skupione na płynności komunikacyjnej.",
  "founder": {
    "@type": "Person",
    "name": "Ada"
  },
  "offers": {
    "@type": "Offer",
    "name": "Bezpłatny test diagnostyczny hiszpańskiego",
    "price": "0",
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
      <QuizMockup />
      <About />
      <Solution />
      <MethodWorks />
      <WhatYouGet />
      <PainPoints />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}

