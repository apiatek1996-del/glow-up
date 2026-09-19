import { HelpCircle } from "lucide-react";

const problems = [
  { num: "01", text: "Uczysz się gramatyki z książek, ale w rozmowie słówka wciąż nie chcą same ułożyć się w zdania.", emoji: "📚", align: "left" as const },
  { num: "02", text: "Oglądasz seriale i rozumiesz co mówią, ale sama czujesz paraliż przed odezwaniem się.", emoji: "📺", align: "right" as const },
  { num: "03", text: "Mieszkasz w Hiszpanii i masz kontakt z językiem, a mimo to nadal czujesz ogromny stres.", emoji: "🏠", align: "left" as const },
  { num: "04", text: "Zamiast swobodnie mówić — analizujesz każdą końcówkę i tracisz pewność siebie.", emoji: "😬", align: "right" as const },
];

export default function PainPoints() {
  return (
    <section className="bg-brand-indigo text-white py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-pink-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="max-w-5xl px-6 mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-3">// REALNE WYZWANIA</span>
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-white mb-5 leading-tight">
            Uczysz się już od jakiegoś czasu.<br />
            <span className="text-primary">I nadal masz wrażenie, że coś nie gra?</span>
          </h2>
          <p className="text-slate-300 font-semibold text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Robisz ćwiczenia, chodzisz na zajęcia, oglądasz hiszpańskie seriale... A jednak kiedy przychodzi do rozmowy z nativem — w głowie pustka.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <p className="text-sm font-bold italic text-primary flex gap-2 items-center justify-center">
              <HelpCircle className="w-4 h-4 shrink-0" />
              „Dlaczego ciągle popełniam te same błędy?"
            </p>
            <p className="text-sm font-bold italic text-primary flex gap-2 items-center justify-center">
              <HelpCircle className="w-4 h-4 shrink-0" />
              „Dlaczego prosta rozmowa tak bardzo mnie męczy?"
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/10"></div>
          <div className="flex flex-col gap-10 md:gap-2">
            {problems.map((pt, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-0 py-6 ${pt.align === "right" ? "md:flex-row-reverse" : ""}`}>
                <div className={`w-full md:w-[44%] ${pt.align === "left" ? "md:pr-10" : "md:pl-10"}`}>
                  <div className="relative bg-white/8 hover:bg-white/14 transition-all duration-300 p-6 rounded-2xl border border-white/10 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 cursor-default overflow-hidden">
                    <span className="absolute -bottom-3 -right-1 opacity-[0.07] font-heading font-extrabold text-[7rem] text-white select-none pointer-events-none leading-none">{pt.num}</span>
                    <div className="flex items-start gap-3 relative z-10">
                      <span className="text-2xl shrink-0 mt-0.5">{pt.emoji}</span>
                      <p className="text-slate-100 font-semibold text-sm md:text-base leading-relaxed">{pt.text}</p>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex w-[12%] justify-center items-center shrink-0 z-10">
                  <div className="w-10 h-10 rounded-full bg-brand-indigo border-2 border-primary flex items-center justify-center font-mono font-extrabold text-xs text-primary shadow-lg shadow-primary/20">{pt.num}</div>
                </div>
                <div className="hidden md:block w-[44%]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}