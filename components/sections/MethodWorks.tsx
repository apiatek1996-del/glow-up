import { Sparkles, Calendar, Search, FileText, Play, MessageSquare, AlertCircle } from "lucide-react";

export default function MethodWorks() {
  const steps = [
    {
      num: "Krok 1",
      icon: <Calendar className="w-6 h-6 text-primary" />,
      title: "Kupujesz GLOW UP",
      desc: "Po zakupie otrzymasz maila z formularzem, w którym wybierzesz dogodny dla Ciebie termin konsultacji. Spotykamy się online na Google Meet."
    },
    {
      num: "Krok 2",
      icon: <Search className="w-6 h-6 text-primary" />,
      title: "Robimy RTG Twojego hiszpańskiego",
      desc: "Porozmawiamy o Twojej historii nauki, celach i trudnościach. Podczas rozmowy po hiszpańsku sprawdzę, jak w praktyce posługujesz się językiem. Nie będziemy zgadywać – zdiagnozuję Twoje realne blokady."
    },
    {
      num: "Krok 3",
      icon: <FileText className="w-6 h-6 text-primary" />,
      title: "Tego samego dnia dostajesz pierwsze zalecenia",
      desc: "Wstępne wskazówki otrzymasz od razu. Pełny, indywidualny plan działania w formacie PDF oraz dobrane do Ciebie materiały na pierwszy miesiąc prześlę Ci w ciągu maksymalnie 7 dni od konsultacji."
    },
    {
      num: "Krok 4",
      icon: <Play className="w-6 h-6 text-primary" />,
      title: "Zaczynasz działać",
      desc: "Zamiast ogólnej listy zadań dostajesz precyzyjny kierunek dopasowany do Twojej sytuacji życiowej i celów. Dokładnie wiesz, co robić, jak ćwiczyć i możesz natychmiast ruszyć z miejsca."
    }
  ];

  return (
    <section id="jak-to-dziala" className="bg-white py-20 md:py-32 relative overflow-hidden">
      {/* Tła dekoracyjne */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-orange-400/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Nagłówek główny */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-primary font-bold text-sm mb-6">
            <Play className="w-4 h-4" />
            <span>Przebieg procesu</span>
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-slate-900 mb-6 leading-tight max-w-3xl mx-auto">
            60 minut. <br className="md:hidden" />
            <span className="text-primary italic">Tylko Ty, ja i Twój hiszpański.</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Zobacz, jak krok po kroku przejdziemy przez prześwietlenie Twoich kompetencji językowych:
          </p>
        </div>

        {/* Kroki procesu */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 relative mb-20">
          {/* Łącząca linia pozioma dla desktopów */}
          <div className="hidden lg:block absolute top-[68px] left-[10%] right-[10%] h-0.5 bg-slate-100 -z-10"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center group">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">{step.num}</span>
              <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-300">
                {step.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug">{step.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Sekcja GLOW UP PREMIUM */}
        <div className="bg-orange-50 border border-orange-200 rounded-[2.5rem] p-8 md:p-12 shadow-md relative overflow-hidden mb-16">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10"></div>
          
          <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
            <div className="w-full lg:w-2/3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-pink/20 text-brand-pink font-bold text-xs mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Dla wymagających
              </span>
              <h3 className="font-heading font-bold text-2xl md:text-3xl text-slate-900 mb-4">
                A jeśli wybierzesz GLOW UP PREMIUM?
              </h3>
              <p className="text-slate-700 font-medium text-base leading-relaxed mb-4">
                Otrzymujesz natychmiastowy dostęp do **Strefy Hiszpański** oraz **Klubu Hiszpański Todos Los Días**. 
                Przez kolejne **3 miesiące** wdrażania zaleceń nie zostajesz sama – możesz konsultować ze mną każdą wątpliwość bezpośrednio w aplikacji.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-bold text-slate-800">
                <span className="bg-white/80 border border-orange-200/60 px-3.5 py-1.5 rounded-full">🚫 Bez limitu pytań</span>
                <span className="bg-white/80 border border-orange-200/60 px-3.5 py-1.5 rounded-full">⏱️ Odpowiedź w 24 godziny</span>
                <span className="bg-white/80 border border-orange-200/60 px-3.5 py-1.5 rounded-full">📱 Kontakt przez aplikację</span>
              </div>
            </div>
            
            <div className="w-full lg:w-1/3 shrink-0 flex flex-col gap-3 p-6 bg-white rounded-2xl border border-orange-100 shadow-sm">
              <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-2 text-center border-b border-slate-50 pb-2">
                Szybkie podsumowanie:
              </h4>
              <div className="space-y-2.5 text-xs text-slate-700 font-medium">
                <p className="flex items-start gap-2">
                  <span className="text-primary font-bold">GLOW UP</span> 
                  <span>→ diagnoza + plan i kierunek + dopasowane materiały</span>
                </p>
                <p className="flex items-start gap-2 border-t border-slate-50 pt-2.5">
                  <span className="text-brand-pink font-bold">PREMIUM</span> 
                  <span>→ diagnoza + plan i materiały + 3 miesiące wsparcia wdrażania</span>
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
