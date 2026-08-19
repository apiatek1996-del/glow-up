import { CheckCircle2 } from "lucide-react";

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
    <section id="rozwiazanie" className="bg-primary-light py-20 md:py-32 relative overflow-hidden">
      {/* Elementy dekoracyjne */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-warm-orange/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl px-6 mx-auto relative z-10">
        
        {/* Nagłówek i Wprowadzenie */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">// TWOJE ROZWIĄZANIE</span>
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-slate-900 mb-6 leading-tight">
            Może wcale nie potrzebujesz kolejnych 50 ćwiczeń.
          </h2>
          <p className="text-slate-500 font-semibold text-base md:text-lg">
            Glow Up to program diagnostyczno-mentoringowy, dzięki któremu uporządkujesz swoją naukę i zaczniesz mówić.
          </p>
        </div>

        {/* Layout: Split screen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
          
          {/* Lewa strona - 5 z 12 - Krótki opis i CTA */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h3 className="font-heading font-extrabold text-2xl text-slate-900 mb-6 leading-tight">
              Po programie GLOW UP poczujesz kontrolę nad językiem.
            </h3>
            <p className="text-slate-600 font-semibold text-sm leading-relaxed mb-8">
              Pokażę Ci jakie elementy musisz powtórzyć, przećwiczyć albo co jeszcze potrzebujesz opanować na swoim etapie, żeby poczuć się pewnie mówiąc. I przygotuję dla Ciebie mapę ze wskazówkami na najbliższe miesiące - ale pamiętaj, to ty będziesz musiała je wdrożyć 😎
            </p>
            <div>
              <a 
                href="#cennik" 
                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-heading font-bold py-3.5 px-6 rounded-xl transition-all shadow-md cursor-pointer"
              >
                Zobacz pakiety i ceny
              </a>
            </div>
          </div>

          {/* Prawa strona - 7 z 12 - Białe karty korzyści z pomarańczowymi checkmarkami */}
          <div className="lg:col-span-7 grid gap-4">
            {benefits.map((benefit, idx) => (
              <div 
                key={idx} 
                className="flex gap-4 p-5 rounded-2xl bg-white border border-orange-100 hover:border-primary/30 transition-colors shadow-sm"
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
