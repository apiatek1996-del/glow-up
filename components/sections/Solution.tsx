import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function Solution() {
  const benefits = [
    {
      title: "Będziesz wiedzieć, co tak naprawdę Cię blokuje",
      desc: "Zamiast zgadywać, precyzyjnie zlokalizujemy co sprawia że wątpisz w swoje umiejętności i będziemy nad tym pracować."
    },
    {
      title: "Ustalisz, nad czym warto pracować TERAZ",
      desc: "Skupisz się wyłącznie na tym, co przyniesie najszybsze rezultaty w Twoim swobodnym mówieniu."
    },
    {
      title: "Zaczniesz lepiej wykorzystywać materiały, które już masz",
      desc: "Koniec z kupowaniem kolejnych książek. Dowiesz się jak uczyć się efektywnie za pomocą posiadanych zasobów."
    },
    {
      title: "Stworzysz sposób nauki dopasowany do Twojego celu i życia",
      desc: "Plan ułożymy tak, aby pasował do Twojego codziennego harmonogramu."
    }
  ];

  return (
    <section id="rozwiazanie" className="bg-primary-light py-16 md:py-32 relative overflow-hidden">
      {/* Elementy dekoracyjne */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-warm-orange/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl px-4 sm:px-6 mx-auto relative z-10">
        
        {/* Nagłówek i Wprowadzenie */}
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">// TWOJE ROZWIĄZANIE</span>
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-slate-900 mb-6 leading-tight">
            Może wcale nie potrzebujesz kolejnych 50 ćwiczeń.
          </h2>
          <p className="text-slate-500 font-semibold text-base md:text-lg">
            Glow Up to program, dzięki któremu uporządkujesz swoją naukę i zaczniesz mówić.
          </p>
        </div>

        {/* Layout: Split screen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-center max-w-5xl mx-auto">
          
          {/* Lewa strona - 5 z 12 - Zdjęcia, Krótki opis i CTA */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            {/* ZDJĘCIA - Ciasny, dynamiczny kolaż */}
            <div className="relative w-full max-w-[315px] sm:max-w-[335px] mx-auto lg:mx-0 mb-8 h-[275px]">
              {/* Zdjęcie Agaty */}
              <div className="absolute top-0 left-0 w-44 h-52 sm:w-48 sm:h-56 rounded-2xl overflow-hidden shadow-lg border-4 border-white rotate-[-3deg] z-10">
                <Image 
                  src="/images/Ogarnij Hiszpański.jpg" 
                  alt="Agata Piatek" 
                  fill 
                  sizes="(max-width: 768px) 176px, 192px"
                  className="object-cover object-top" 
                />
              </div>
              {/* Opinia Malaga z zakreśleniem - przybliżona do środka, tuż przy twarzy */}
              <div className="absolute bottom-1 right-0 w-[205px] sm:w-[220px] h-auto rounded-xl overflow-hidden shadow-2xl border-4 border-white rotate-[2deg] z-20 transition-transform hover:scale-105 hover:rotate-0 duration-300">
                <Image 
                  src="/images/opinia-malaga.jpg" 
                  alt="Opinia o Maladze" 
                  width={220} 
                  height={220} 
                  className="object-contain bg-white" 
                />
              </div>
            </div>

            <h3 className="font-heading font-extrabold text-2xl text-slate-900 mb-4 leading-tight text-center lg:text-left">
              Poczujesz pełną kontrolę nad językiem.
            </h3>
            
            {/* PRZERZEDZONY TEKST */}
            <p className="text-slate-600 font-semibold text-sm leading-relaxed mb-8 text-center lg:text-left">
              Pokażę Ci, co musisz przećwiczyć na swoim etapie, żeby poczuć się pewnie. Przygotuję dla Ciebie konkretną mapę drogową na najbliższe miesiące – Ty będziesz musiała ją tylko wdrożyć. 😎
            </p>
            
            <div className="text-center lg:text-left">
              <a 
                href="#cennik" 
                className="inline-flex items-center justify-center gap-2 bg-warm-orange hover:bg-warm-orange/90 text-white font-heading font-bold py-3.5 px-8 rounded-xl transition-all shadow-md cursor-pointer w-full sm:w-auto"
              >
                Zobacz pakiety i ceny
              </a>
            </div>
          </div>

          {/* Prawa strona - 7 z 12 - Białe karty korzyści z pomarańczowymi checkmarkami */}
          <div className="lg:col-span-7 grid gap-3 md:gap-4 mt-4 lg:mt-0">
            {benefits.map((benefit, idx) => (
              <div 
                key={idx} 
                className="flex gap-4 p-4 md:p-5 rounded-2xl bg-white border border-orange-100 hover:border-primary/30 transition-colors shadow-sm"
              >
                <div className="w-9 h-9 rounded-lg bg-warm-orange/15 flex items-center justify-center text-warm-orange shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-slate-900 text-sm md:text-base mb-1">{benefit.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed font-semibold">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}