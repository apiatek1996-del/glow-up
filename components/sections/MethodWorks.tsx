import { Calendar, Search, FileText, Play, Sparkles } from "lucide-react";

export default function MethodWorks() {
  const steps = [
    {
      num: "01",
      icon: <Calendar className="w-5 h-5 text-warm-orange" />,
      title: "Kupujesz GLOW UP",
      desc: "Po zakupie otrzymasz maila z formularzem. Wybierasz dogodny dla Ciebie termin konsultacji na Google Meet."
    },
    {
      num: "02",
      icon: <Search className="w-5 h-5 text-warm-orange" />,
      title: "Robimy RTG języka",
      desc: "Opowiadasz mi o swojej historii nauki i celach a później na luzie przechodzimy do rozmowy po hiszpańsku. Sprawdzę, jak faktycznie używasz struktur językowych żeby pod koniec móc dać ci jak najlepszy feedback."
    },
    {
      num: "03",
      icon: <FileText className="w-5 h-5 text-warm-orange" />,
      title: "Otrzymujesz zalecenia",
      desc: "Pierwsze wnioski znasz od razu. Pełny plan działania w PDF oraz spersonalizowane materiały na 1. miesiąc wysyłam do 7 dni."
    },
    {
      num: "04",
      icon: <Play className="w-5 h-5 text-warm-orange" />,
      title: "Zaczynasz działać",
      desc: "Wiesz dokładnie co ćwiczyć i jak pracować każdego dnia. Dostajesz spersonalizowane materiały i ruszasz."
    }
  ];

  return (
    <section id="jak-to-dziala" className="bg-warm-orange text-white py-24 md:py-32 relative overflow-hidden">
      {/* Słoneczne rozbłyski tła */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-white/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl px-6 mx-auto relative z-10">
        
        {/* Nagłówek */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-mono font-bold tracking-widest text-white/80 uppercase block mb-3">// KROKI WSPÓŁPRACY</span>
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-white mb-6 leading-tight">
            Jak wygląda nasza współpraca?
          </h2>
          <p className="text-orange-100 font-semibold text-base md:text-lg">
            Prosty i efektywny proces, który w 4 krokach poukłada Twoją naukę:
          </p>
        </div>

        {/* Siatka 4 kroków - białe, kontrastowe karty na pomarańczowym tle */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto mb-16">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="bg-white p-6 rounded-2xl border border-white/20 shadow-lg flex flex-col justify-between relative group hover:-translate-y-1 transition-transform"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="w-10 h-10 rounded-xl bg-warm-orange-light flex items-center justify-center border border-orange-100 shadow-sm">
                    {step.icon}
                  </div>
                  <span className="font-mono text-lg font-extrabold text-warm-orange/50 group-hover:text-warm-orange transition-colors">
                    {step.num}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-lg text-slate-900 mb-3 leading-snug">{step.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed font-semibold">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
