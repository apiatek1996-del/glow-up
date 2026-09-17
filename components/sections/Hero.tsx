import Image from "next/image";
import { ArrowRight, Heart, Sparkles, Check } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-20 md:pt-24 md:pb-32">
      {/* Serduszko w lewym górnym rogu w ciepłym pomarańczu */}
      <div className="absolute top-8 left-8 text-warm-orange opacity-25">
        <Heart className="w-8 h-8 fill-warm-orange" />
      </div>

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-x-16 items-center">
          
          {/* Lewa strona - 50% szerokości */}
          <div className="lg:col-span-6 flex flex-col text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-warm-orange/10 text-warm-orange font-bold text-xs mb-6 w-fit uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Indywidualna Diagnoza 1:1</span>
            </div>
            
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-tight mb-6 tracking-tight">
              W głowie umiesz więcej hiszpańskiego, niż potrafisz użyć w rozmowie?
            </h1>
            
            <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed mb-6">
              Sprawdź, co blokuje Twój hiszpański i zacznij wykorzystywać swobodnie to, czego już się nauczyłaś.
            </p>
            
            <div className="space-y-4 mb-8 text-slate-700">
              <p className="border-l-4 border-primary pl-4 py-1 italic font-semibold text-slate-900 bg-primary/5 rounded-r-xl pr-4">
                To nie będzie lekcja hiszpańskiego ani kurs – zamiast tego kupujesz:
              </p>
              <p className="font-bold text-lg text-slate-900">
                Diagnoza + indywidualne zalecenia + materiały na pierwszy miesiąc dobrane dla Ciebie
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-600 font-semibold pt-2">
                {["60 min konsultacji 1:1", "Indywidualna diagnoza", "Konkretne zalecenia", "Materiały na 1. miesiąc"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <a 
                href="#cennik" 
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white text-base font-heading font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Sparkles className="w-5 h-5 shrink-0" />
                Chcę zrobić GLOW UP mojego hiszpańskiego
                <ArrowRight className="w-5 h-5 shrink-0" />
              </a>
            </div>
          </div>

          {/* Prawa strona - Grafika */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            
            {/* Abstrakcyjne tła i koła w tonacji różowo-żółtej */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] bg-pink-100 rounded-full blur-3xl opacity-60 -z-10"></div>
            <div className="absolute bottom-4 left-4 w-72 h-72 bg-warm-orange/20 rounded-full blur-3xl opacity-50 -z-10"></div>
            
            {/* Pomarańczowe kółka jako punkty akcentu */}
            <div className="absolute top-10 left-12 w-6 h-6 rounded-full bg-warm-orange opacity-30 hidden sm:block"></div>
            <div className="absolute bottom-16 right-8 w-4 h-4 rounded-full bg-warm-orange opacity-30"></div>
            <div className="absolute top-1/2 -left-6 w-8 h-8 rounded-full bg-warm-orange opacity-20"></div>

            {/* Kontener ze zdjęciem */}
            <div className="relative w-full max-w-[400px] aspect-[3/4] rounded-2xl overflow-hidden border-[6px] border-white shadow-2xl bg-slate-100">
              <Image 
                src="/images/hero-cartoon-chat.jpg" 
                alt="Agata Piątek - Mentorka Twojego Hiszpańskiego" 
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-700" 
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
