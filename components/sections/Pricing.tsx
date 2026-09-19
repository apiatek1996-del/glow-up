import { Check, Sparkles, Plus, X } from "lucide-react";

export default function Pricing() {
  return (
    <section id="cennik" className="bg-warm-sun py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl px-4 sm:px-6 mx-auto relative z-10">

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

        {/* Karty cennikowe - układ 3-kolumnowy */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">

          {/* Pakiet 1: GLOW UP */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="mb-6">
                <h3 className="font-heading font-extrabold text-2xl text-slate-900 mb-1">GLOW UP</h3>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">1 miesiąc współpracy</p>
                <p className="text-sm text-slate-600 mt-3 font-medium">Diagnoza + plan działania + materiały na start</p>
              </div>

              {/* Cena */}
              <div className="mb-2 border-t border-slate-100 pt-4 font-mono">
                <span className="text-3xl font-extrabold text-slate-900">280 zł</span>
              </div>
              <p className="text-[11px] text-orange-600 font-bold mb-6 border-b border-slate-100 pb-4">
                Tylko do końca roku, potem cena rośnie!
              </p>

              {/* Lista korzyści */}
              <ul className="space-y-4 mb-8">
                {[
                  "60-minutowa konsultacja 1:1 na Google Meet",
                  "Indywidualna diagnoza Twoich blokad",
                  "Konkretny, spersonalizowany plan działania",
                  "Materiały dedykowane na pierwszy miesiąc",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start text-slate-700 font-semibold text-sm">
                    <Check className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
                <li className="flex gap-3 items-start text-red-500 font-semibold text-sm pt-2">
                  <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span>Brak wsparcia we wdrażaniu planu</span>
                </li>
              </ul>
            </div>

            <div>
              <a
                href="https://tidycal.com/ogarnijhiszpanski/glow-up-twojego-hiszpanskiego"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-heading font-bold py-4 px-6 rounded-xl transition-all shadow-sm cursor-pointer"
              >
                Chcę zrobić GLOW UP
              </a>
            </div>
          </div>

          {/* Pakiet 2: GLOW UP PLUS - NOWY WARIANT */}
          <div className="bg-white border-2 border-pink-500 rounded-2xl p-8 shadow-xl shadow-pink-500/10 flex flex-col justify-between hover:shadow-2xl hover:shadow-pink-500/20 transition-all relative transform lg:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-pink-500 text-white text-[10px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md whitespace-nowrap">
              Najczęściej wybierany
            </div>
            
            <div>
              <div className="mb-6">
                <h3 className="font-heading font-extrabold text-2xl text-slate-900 mb-1">GLOW UP PLUS</h3>
                <p className="text-xs text-pink-600 font-bold uppercase tracking-wider">1 miesiąc współpracy</p>
                <p className="text-sm text-slate-600 mt-3 font-medium">Diagnoza + plan + wsparcie we wdrażaniu 1:1</p>
              </div>

              {/* Cena */}
              <div className="mb-2 border-t border-pink-100 pt-4 font-mono">
                <span className="text-3xl font-extrabold text-pink-600">400 zł</span>
              </div>
              <p className="text-[11px] text-orange-600 font-bold mb-6 border-b border-pink-100 pb-4">
                Tylko do końca roku, potem cena rośnie!
              </p>

              {/* Lista korzyści */}
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3 items-start text-pink-600 font-bold text-sm">
                  <Sparkles className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>Wszystko to co w GLOW UP, oraz:</span>
                </li>
                {[
                  "Pomoc we wdrażaniu zaleceń (przez miesiąc)",
                  "Możliwość wysyłania zadań do sprawdzenia",
                  "Szczegółowy feedback",
                  "Zadawanie pytań na bieżąco",
                  "Udział w 1 zajęciach konwersacyjnych"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start text-slate-800 font-semibold text-sm">
                    <Check className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <a
                href="mailto:a.piatek1996@gmail.com?subject=Chcę zrobić GLOW UP PLUS"
                className="inline-flex items-center justify-center gap-2 w-full bg-pink-500 hover:bg-pink-600 text-white font-heading font-bold py-4 px-6 rounded-xl transition-all shadow-md shadow-pink-500/25 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 shrink-0 animate-pulse" />
                Chcę GLOW UP PLUS
              </a>
            </div>
          </div>

          {/* Pakiet 3: GLOW UP PREMIUM */}
          <div className="bg-white border-2 border-primary rounded-2xl p-8 shadow-lg flex flex-col justify-between hover:shadow-xl transition-shadow">
            <div>
              <div className="mb-6">
                <h3 className="font-heading font-extrabold text-2xl text-slate-900 mb-1">GLOW UP PREMIUM</h3>
                <p className="text-xs text-primary font-bold uppercase tracking-wider">3 miesiące współpracy</p>
                <p className="text-sm text-slate-600 mt-3 font-medium">Diagnoza + 3 miesiące opieki + materiały na 4 mies.</p>
              </div>

              {/* Cena */}
              <div className="mb-2 border-t border-orange-100 pt-4 font-mono">
                <span className="text-sm text-slate-400 line-through mr-2 font-medium">1 200 zł</span>
                <span className="text-3xl font-extrabold text-primary">980 zł</span>
              </div>
              <p className="text-[11px] text-green-600 font-bold mb-6 border-b border-orange-100 pb-4">
                Oszczędzasz 220 zł! (względem 3 mies. Plus). Tylko do końca roku.
              </p>

              {/* Lista korzyści */}
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3 items-start text-primary font-bold text-sm">
                  <Sparkles className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>Wszystko to co w PLUS, a dodatkowo:</span>
                </li>
                {[
                  "Stałe wsparcie przez pełne 3 miesiące",
                  "Materiały na kolejne 3 miesiące nauki",
                  "Pełny dostęp do platformy Strefa Hiszpański",
                  "Dostęp do Klubu Hiszpański Todos Los Días"
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
                Chcę GLOW UP PREMIUM
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}