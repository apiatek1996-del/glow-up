import Image from "next/image";
import { Sparkles, Check } from "lucide-react";

export default function PremiumSupport() {
  return (
    <section className="bg-primary text-white py-20 md:py-28 relative overflow-hidden">
      {/* Dekoracyjne tła świetlne */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl px-6 mx-auto relative z-10 text-center lg:text-left">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-between">
          
          <div className="w-full lg:w-2/3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/20 text-white font-bold text-xs mb-4 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Wsparcie Premium
            </span>

            {/* Nagłówek z dymkiem Agaty */}
            <div className="flex items-center gap-5 mb-4">
              {/* Zdjęcie w kółku */}
              <div className="relative shrink-0 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg bg-warm-sun">
                <Image
                  src="/images/Ogarnij Hiszpański.jpg"
                  alt="Agata"
                  fill
                  className="object-cover object-top"
                />
              </div>

              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white leading-snug">
                Chcesz wdrażać zalecenia pod moim okiem?
              </h2>
            </div>
            <p className="text-white/95 font-semibold text-sm md:text-base leading-relaxed mb-6">
              Wybierając pakiet **Glow Up Premium** otrzymujesz 3 miesiące pełnego wsparcia we wdrażaniu zaleceń. 
              Nie zostajesz sama ze swoimi zmianami – możesz konsultować każdą wątpliwość bezpośrednio w aplikacji, bez limitu pytań.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-white font-bold uppercase tracking-wider font-mono">
              <div className="bg-white/10 border border-white/20 px-3.5 py-2.5 rounded-xl flex items-center justify-center gap-1.5">
                ⏱️ Odpowiedź do 24h
              </div>
              <div className="bg-white/10 border border-white/20 px-3.5 py-2.5 rounded-xl flex items-center justify-center gap-1.5">
                📱 Kontakt w aplikacji
              </div>
              <div className="bg-white/10 border border-white/20 px-3.5 py-2.5 rounded-xl flex items-center justify-center gap-1.5">
                ✅ Strefa & Klub gratis
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/3 shrink-0 flex flex-col gap-3 p-6 bg-white text-slate-900 rounded-2xl border border-white/20 shadow-xl">
            <h4 className="font-extrabold text-slate-900 text-xs uppercase tracking-wider mb-2 font-mono text-center border-b border-slate-100 pb-2">
              // SZYBKI WYBÓR
            </h4>
            <div className="space-y-3.5 text-xs text-slate-600 font-semibold leading-relaxed">
              <p className="flex items-start gap-2">
                <strong className="text-primary shrink-0">GLOW UP</strong> 
                <span>→ diagnoza + plan i kierunek + dopasowane materiały</span>
              </p>
              <div className="border-t border-slate-100 pt-3">
                <p className="flex items-start gap-2">
                  <strong className="text-primary shrink-0">PREMIUM</strong> 
                  <span>→ diagnoza + plan</span>
                </p>
                <p className="pl-16 text-[11px] text-primary font-bold mt-1">
                  + 3 miesiące asysty na żywo
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
