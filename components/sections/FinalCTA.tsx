import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="bg-primary py-20 md:py-32 relative overflow-hidden">
      {/* Abstrakcyjne tło */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <Sparkles className="w-12 h-12 text-white/40 mx-auto mb-6" />
        
        <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-6 leading-tight">
          W głowie umiesz więcej hiszpańskiego, niż potrafisz użyć w rozmowie?
        </h2>
        
        <div className="text-white/90 text-base md:text-lg mb-8 max-w-2xl mx-auto space-y-4 font-semibold leading-relaxed">
          <p>
            Sprawdź, co blokuje Twój hiszpański i zacznij wykorzystywać to, czego już się nauczyłaś.
          </p>
          <p className="inline-block bg-white/10 px-4 py-1.5 rounded-xl text-white italic">
            To nie będzie lekcja hiszpańskiego ani kurs – zamiast tego kupujesz:
          </p>
          <p className="font-extrabold text-white text-xl">
            Diagnoza + indywidualne zalecenia + materiały na pierwszy miesiąc dobrane dla Ciebie
          </p>
        </div>

        <div className="mt-8 max-w-lg mx-auto relative z-20 text-center">
          <a 
            href="#cennik" 
            className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-850 text-white text-base font-heading font-bold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 w-full sm:w-auto cursor-pointer"
          >
            <Sparkles className="w-5 h-5 shrink-0" />
            Chcę zrobić GLOW UP mojego hiszpańskiego
            <ArrowRight className="w-5 h-5 shrink-0" />
          </a>
        </div>
      </div>

      {/* Dekoracyjny Avatar z dymkiem - prawy dolny róg */}
      <div className="hidden lg:flex absolute bottom-0 right-0 xl:right-[5%] flex-col items-end z-20 pointer-events-none">
        
        {/* Dymek */}
        <div className="relative z-30 bg-white text-slate-900 px-5 py-3 rounded-xl rounded-br-sm shadow-xl -mb-6 max-w-[200px] rotate-[-3deg] translate-x-2 translate-y-4 border border-slate-100">
          <p className="font-bold text-sm text-primary leading-tight mb-0.5">Mam plan!</p>
          <p className="text-xs font-semibold leading-snug">Chodź, popracujemy nad Twoim hiszpańskim. 😊</p>
        </div>
        
        {/* Avatar - wycięte zdjęcie */}
        <div className="w-56 h-[260px] overflow-visible flex items-end justify-end pointer-events-auto origin-bottom hover:scale-105 transition-transform duration-500">
          <Image 
            src="/images/cta-photo.svg" 
            alt="Agata - autorka kursu hiszpańskiego" 
            width={224}
            height={260}
            className="w-full h-full object-contain object-bottom" 
          />
        </div>
      </div>
    </section>
  );
}
