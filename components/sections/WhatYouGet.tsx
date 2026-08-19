import { Target, Zap, CheckCircle2, Compass, Sliders, FileText, Ban, AlertCircle } from "lucide-react";

export default function WhatYouGet() {
  const benefits = [
    {
      icon: <Target className="w-6 h-6 text-orange-600" />,
      title: "Wiesz, co Cię blokuje",
      desc: "Będziesz dokładnie wiedzieć, co tak naprawdę hamuje Twój hiszpański w swobodnej rozmowie."
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-600" />,
      title: "Priorytet na TERAZ",
      desc: "Ustalisz konkretne zagadnienia i umiejętności, nad którymi warto pracować w tym momencie."
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-green-600" />,
      title: "Jak ćwiczyć trudności",
      desc: "Dowiesz się, w jaki sposób technicznie podejść do swoich najczęstszych błędów i blokad."
    },
    {
      icon: <FileText className="w-6 h-6 text-purple-600" />,
      title: "Wykorzystanie własnych materiałów",
      desc: "Zaczniesz lepiej i bardziej celowo wykorzystywać materiały, które już masz na półkach czy w plikach."
    },
    {
      icon: <Compass className="w-6 h-6 text-blue-600" />,
      title: "Świadome używanie struktur",
      desc: "Zaczniesz świadomiej stosować w codziennych rozmowach gramatykę, którą już znasz teoretycznie."
    },
    {
      icon: <Sliders className="w-6 h-6 text-rose-600" />,
      title: "Metoda dopasowana do życia",
      desc: "Stworzysz sobie sposób nauki idealnie dopasowany do Twojego celu, wolnego czasu i stylu życia."
    },
    {
      icon: <Ban className="w-6 h-6 text-red-600" />,
      title: "Koniec z przypadkowymi zadaniami",
      desc: "Przestaniesz dokładać sobie kolejne, przypadkowe ćwiczenia i subskrypcje, które dają tylko złudzenie nauki."
    },
    {
      icon: <Zap className="w-6 h-6 text-primary shrink-0" />,
      title: "Konkretny plan działania",
      desc: "Będziesz dokładnie wiedzieć, co robić przez najbliższy miesiąc, zamiast codziennie zastanawiać się „czego mam się dziś pouczyć?”."
    }
  ];

  return (
    <section className="bg-white py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-primary font-bold text-sm mb-6">
            <Zap className="w-4 h-4" />
            <span>Rezultaty konsultacji</span>
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-slate-900 mb-6 leading-tight max-w-3xl mx-auto">
            Może wcale nie potrzebujesz kolejnych 50 ćwiczeń.
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Po konsultacji **GLOW UP** zyskasz pełną kontrolę i spokój w głowie:
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {benefits.map((benefit, idx) => (
            <div 
              key={idx} 
              className="flex flex-col p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-lg hover:bg-white hover:border-slate-200/60 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center border border-slate-100 mb-5 group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">{benefit.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium mt-auto">{benefit.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center max-w-lg mx-auto">
          <a 
            href="#cennik" 
            className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-xl w-full sm:w-auto"
          >
            Chcę uporządkować mój hiszpański
          </a>
        </div>

      </div>
    </section>
  );
}
