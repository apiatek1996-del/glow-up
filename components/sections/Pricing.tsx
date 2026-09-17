import { Check, Sparkles, Plus } from "lucide-react";

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

        {/* Karty cennikowe */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">

          {/* Pakiet 1: GLOW UP - wyróżniony */}
          <div className="bg-white border-2 border-primary rounded-2xl p-8 sm:p-10 shadow-lg flex flex-col justify-between hover:shadow-xl transition-shadow">
            <div>
              <div className="mb-6">
                <h3 className="font-heading font-extrabold text-2xl text-slate-900 mb-1">GLOW UP</h3>
                <p className="text-xs text-primary font-bold uppercase tracking-wider">Diagnoza + plan działania + materiały na pierwszy miesiąc pracy</p>
              </div>

              {/* Cena */}
              <div className="mb-2 border-t border-orange-100 pt-4 font-mono">
                <span className="text-sm text-slate-400 line-through mr-2 font-medium">350 zł</span>
                <span className="text-3xl font-extrabold text-primary">280 zł</span>
              </div>
              <p className="text-[11px] text-slate-400 font-semibold mb-6 border-b border-orange-100 pb-4">
                Cena startowa — docelowa 350 zł od 2025.
              </p>

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
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Add-on: miesięczne wsparcie */}
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Plus className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-xs font-extrabold text-primary uppercase tracking-wider">Opcjonalnie: Miesięczne wsparcie</span>
                </div>
                <p className="text-xs text-slate-600 font-semibold leading-relaxed mb-2">
                  Możesz dokupić stałe wsparcie po sesji — piszesz kiedy chcesz, odpowiedź w 24h.
                </p>
                <div className="font-mono">
                  <span className="text-slate-400 line-through text-xs mr-2">400 zł/mies</span>
                  <span className="font-extrabold text-primary text-base">320 zł / miesiąc</span>
                </div>
              </div>
            </div>

            <div>
              <a
                href="mailto:a.piatek1996@gmail.com?subject=Chcę zrobić GLOW UP"
                className="inline-flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary-hover text-white font-heading font-bold py-4 px-6 rounded-xl transition-all shadow-md shadow-primary/20 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 shrink-0 animate-pulse" />
                Chcę zrobić GLOW UP
              </a>
            </div>
          </div>

          {/* Pakiet 2: GLOW UP PREMIUM */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="mb-6">
                <h3 className="font-heading font-extrabold text-2xl text-slate-900 mb-1">GLOW UP PREMIUM</h3>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Diagnoza + 3 miesiące wsparcia + materiały na 4 miesiące</p>
              </div>

              {/* Cena */}
              <div className="mb-2 border-t border-slate-100 pt-4 font-mono">
                <span className="text-sm text-slate-400 line-through mr-2 font-medium">1 500 zł</span>
                <span className="text-3xl font-extrabold text-slate-900">1 200 zł</span>
              </div>
              <p className="text-[11px] text-slate-400 font-semibold mb-6 border-b border-slate-100 pb-4">
                ok. 400 zł / miesiąc przez 3 miesiące wsparcia. Docelowa: 1 500 zł.
              </p>

              {/* Lista korzyści */}
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3 items-start text-slate-700 font-bold text-sm">
                  <Sparkles className="w-5 h-5 shrink-0 mt-0.5 text-slate-400" />
                  <span>Wszystko z GLOW UP, a dodatkowo:</span>
                </li>
                {[
                  "3 miesiące stałego wsparcia we wdrażaniu planu",
                  "Materiały na kolejne 3 miesiące nauki (razem 4 mies.)",
                  "Brak limitu pytań — piszesz kiedy chcesz",
                  "Odpowiedź gwarantowana w ciągu 24h",
                  "Szybki kontakt przez dedykowaną aplikację",
                  "Pełny dostęp do platformy Strefa Hiszpański",
                  "Dostęp do Klubu Hiszpański Todos Los Días"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start text-slate-700 font-semibold text-sm">
                    <Check className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <a
                href="mailto:a.piatek1996@gmail.com?subject=Chcę GLOW UP PREMIUM"
                className="inline-flex items-center justify-center gap-2 w-full bg-slate-800 hover:bg-slate-900 text-white font-heading font-bold py-4 px-6 rounded-xl transition-all shadow-md cursor-pointer"
              >
                Chcę GLOW UP PREMIUM
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}