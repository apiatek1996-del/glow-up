import { ArrowRight, Sparkles, Clock, ClipboardCheck, BookOpen, HeartHandshake } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Dekoracyjne tła */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-400/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-pink/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-x-16 items-center">
          
          {/* Lewa strona - Nagłówki i teksty */}
          <div className="relative flex flex-col text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 w-fit mx-auto lg:mx-0">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Indywidualna konsultacja diagnostyczna 1:1</span>
            </div>
            
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-tight mb-6">
              W głowie umiesz więcej hiszpańskiego, niż potrafisz użyć w rozmowie?
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-700 font-medium leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
              Sprawdź, co blokuje Twój hiszpański i wreszcie zacznij wykorzystywać to, czego już się nauczyłaś.
            </p>
            
            <div className="space-y-4 mb-8 text-base md:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0">
              <p className="border-l-4 border-primary pl-4 py-1 italic font-medium bg-orange-50/50 rounded-r-xl pr-2">
                Nie kolejna lekcja. Nie kolejny kurs.
              </p>
              <p className="font-bold text-slate-950">
                RTG Twojego hiszpańskiego + konkretny plan, co robić dalej.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#cennik" 
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white text-lg font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Chcę zrobić GLOW UP mojego hiszpańskiego
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Prawa strona - Wizualna karta oferty */}
          <div className="w-full max-w-lg mx-auto relative z-20">
            <div className="bg-white rounded-[2.5rem] p-8 sm:p-10 shadow-2xl border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-orange-50 rounded-full blur-3xl -z-10 -translate-y-1/2 translate-x-1/3"></div>
              
              <h3 className="font-heading font-bold text-2xl text-slate-900 mb-6 text-center border-b border-slate-100 pb-4">
                Co dokładnie otrzymujesz?
              </h3>
              
              <ul className="space-y-5">
                {[
                  {
                    icon: <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />,
                    title: "60 minut konsultacji 1:1",
                    desc: "indywidualne, intensywne prześwietlenie Twoich wyzwań na Google Meet"
                  },
                  {
                    icon: <ClipboardCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />,
                    title: "Indywidualna diagnoza",
                    desc: "konkretne namierzenie tego, co realnie blokuje Cię w rozmowie"
                  },
                  {
                    icon: <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />,
                    title: "Konkretne zalecenia",
                    desc: "czego i jak się uczyć, zamiast marnować czas na przypadkowe ćwiczenia"
                  },
                  {
                    icon: <BookOpen className="w-5 h-5 text-primary shrink-0 mt-0.5" />,
                    title: "Materiały na pierwszy miesiąc",
                    desc: "spersonalizowane materiały dopasowane dokładnie pod Twoje zalecenia"
                  },
                  {
                    icon: <HeartHandshake className="w-5 h-5 text-brand-pink shrink-0 mt-0.5" />,
                    title: "Opcjonalnie: Wsparcie Premium",
                    desc: "aż do 3 miesięcy pełnego wsparcia we wdrażaniu zaleceń"
                  }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm md:text-base leading-snug">{item.title}</p>
                      <p className="text-xs md:text-sm text-slate-500 leading-snug mt-0.5">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 text-center">
                <a 
                  href="#jak-to-dziala" 
                  className="text-sm font-semibold text-slate-500 hover:text-primary transition-colors underline underline-offset-4"
                >
                  Zobacz, jak wygląda przebieg współpracy
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
