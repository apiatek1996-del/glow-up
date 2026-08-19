import { Check, Sparkles } from "lucide-react";

export default function Pricing() {
  return (
    <section id="cennik" className="bg-warm-sun py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-6xl px-6 mx-auto relative z-10">
        
        {/* Nagłówek sekcji */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">// WYBÓR INWESTYCJI</span>
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-slate-900 mb-6 leading-tight">
            Nie kupujesz kolejnego kursu. Kupujesz jasność, co robić dalej, żeby widzieć efekty swojej pracy.
          </h2>
          <p className="text-slate-500 font-semibold text-base md:text-lg">
            Wybierz poziom wsparcia dopasowany do Twoich planów językowych:
          </p>
        </div>

        {/* Karty cennikowe - układ flex lub grid 2-kolumnowy */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          
          {/* Pakiet 1: GLOW UP */}
          <div className="bg-white border border-orange-100 rounded-2xl p-8 sm:p-10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="mb-6">
                <h3 className="font-heading font-extrabold text-2xl text-slate-900 mb-1">GLOW UP</h3>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Diagnoza + plan działania + materiały na pierwszy miesiąc pracy</p>
              </div>

              {/* Cena */}
              <div className="mb-8 border-y border-orange-100 py-4 font-mono">
                <span className="text-sm text-slate-400 line-through mr-2 font-medium">347 zł</span>
                <span className="text-3xl font-extrabold text-slate-900">250 zł</span>
              </div>

              {/* Lista korzyści */}
              <ul className="space-y-4 mb-8">
                {[
                  "60-minutowa konsultacja 1:1 na Google Meet",
                  "Indywidualna diagnoza Twoich blokad",
                  "Indywidualne zalecenia i kierunek nauki",
                  "Konkretny, spersonalizowany plan działania",
                  "Plan w czytelnym formacie PDF pod ręką",
                  "Materiały dedykowane na pierwszy miesiąc",
                  "BONUS: zniżka na dostęp do platformy szkoleniowej"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start text-slate-700 font-semibold text-sm">
                    <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <a 
                href="mailto:a.piatek1996@gmail.com?subject=Chcę zrobić GLOW UP" 
                className="inline-flex items-center justify-center gap-2 w-full bg-warm-orange hover:bg-warm-orange-hover text-white font-heading font-bold py-4 px-6 rounded-xl transition-all shadow-md cursor-pointer"
              >
                <Sparkles className="w-4 h-4 shrink-0" />
                Chcę zrobić GLOW UP
              </a>
            </div>
          </div>

          {/* Pakiet 2: GLOW UP PREMIUM */}
          <div className="bg-white border-2 border-primary rounded-2xl p-8 sm:p-10 shadow-lg flex flex-col justify-between hover:shadow-xl transition-shadow relative">
            <div className="absolute top-0 right-6 -translate-y-1/2 bg-primary text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm">
              Najpopularniejszy
            </div>

            <div>
              <div className="mb-6">
                <h3 className="font-heading font-extrabold text-2xl text-slate-900 mb-1 flex items-center gap-2">
                  GLOW UP PREMIUM
                </h3>
                <p className="text-xs text-primary font-bold uppercase tracking-wider">Diagnoza + materiały na pierwszy miesiąc pracy + 3 miesiące asysty</p>
              </div>

              {/* Cena */}
              <div className="mb-8 border-y border-orange-100 py-4 font-mono">
                <span className="text-sm text-slate-400 line-through mr-2 font-medium">697 zł</span>
                <span className="text-3xl font-extrabold text-primary">547 zł</span>
              </div>

              {/* Lista korzyści */}
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3 items-start text-primary font-bold text-sm">
                  <Sparkles className="w-5 h-5 shrink-0 mt-0.5 text-primary" />
                  <span>Wszystko z wariantu standardowego +</span>
                </li>
                {[
                  "3 miesiące stałego wsparcia we wdrażaniu planu",
                  "Brak limitu pytań — piszesz kiedy chcesz",
                  "Odpowiedź gwarantowana w ciągu 24h",
                  "Szybki i wygodny kontakt przez dedykowaną aplikację",
                  "Pełny dostęp do platformy Strefa Hiszpański",
                  "Dostęp do elitarnego Klubu Hiszpański Todos Los Días"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start text-slate-700 font-semibold text-sm">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <a 
                href="mailto:a.piatek1996@gmail.com?subject=Chcę GLOW UP PREMIUM" 
                className="inline-flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary-hover text-white font-heading font-bold py-4 px-6 rounded-xl transition-all shadow-md shadow-primary/20 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 shrink-0 animate-pulse" />
                Chcę GLOW UP PREMIUM
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
