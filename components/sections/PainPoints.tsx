import { HelpCircle, AlertCircle } from "lucide-react";

export default function PainPoints() {
  const problems = [
    { num: "01", text: "Uczysz się gramatyki z książek, ale w rozmowie słówka wciąż nie chcą same ułożyć się w zdania." },
    { num: "02", text: "Oglądasz seriale i rozumiesz co mówią, ale sama czujesz paraliż przed odezwaniem się." },
    { num: "03", text: "Mieszkasz w Hiszpanii i masz kontakt z językiem, a mimo to nadal czujesz ogromny stres." },
    { num: "04", text: "Zamiast swobodnie mówić — analizujesz każdą końcówkę i tracisz pewność siebie." }
  ];

  return (
    <section className="bg-brand-indigo text-white py-24 md:py-32 relative overflow-hidden">
      {/* Ozdobne kręgi świetlne dla efektu głębi */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-pink-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl px-6 mx-auto relative z-10">
        
        {/* Układ dwukolumnowy (Split screen) dla przełamania monotonii */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Lewa strona - Wyrazisty Nagłówek i Pytania */}
          <div className="lg:col-span-6 flex flex-col text-left">
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-3">// REALNE WYZWANIA</span>
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-white mb-6 leading-tight">
              Uczysz się już od jakiegoś czasu. <br />
              <span className="text-primary">I nadal masz wrażenie, że coś nie gra?</span>
            </h2>
            
            <p className="text-slate-200 font-semibold text-base md:text-lg mb-8 leading-relaxed">
              Robisz ćwiczenia, chodzisz na zajęcia, oglądasz hiszpańskie seriale... A jednak kiedy przychodzi do rozmowy z nativem – w głowie pustka.
            </p>

            <div className="space-y-4 bg-white/5 p-6 rounded-2xl border border-white/10">
              <p className="text-sm font-bold italic text-primary-light flex gap-2 items-center">
                <HelpCircle className="w-4 h-4 shrink-0 text-primary" />
                „Dlaczego ciągle popełniam te same błędy?”
              </p>
              <p className="text-sm font-bold italic text-primary-light flex gap-2 items-center">
                <HelpCircle className="w-4 h-4 shrink-0 text-primary" />
                „Dlaczego prosta rozmowa tak bardzo mnie męczy?”
              </p>
            </div>
          </div>

          {/* Prawa strona - Lista 4 problemów jako brutalistyczne boksy */}
          <div className="lg:col-span-6 grid gap-4">
            {problems.map((pt, idx) => (
              <div 
                key={idx} 
                className="bg-white/10 hover:bg-white/15 transition-all p-5 rounded-2xl border border-white/10 flex gap-4 items-start"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary shrink-0 font-mono text-xs font-extrabold">
                  {pt.num}
                </div>
                <p className="text-slate-100 font-semibold text-xs md:text-sm leading-relaxed">{pt.text}</p>
              </div>
            ))}
          </div>

        </div>

        {/* Duże podsumowanie z puentą w formie kontrastowej, jasnej karty */}
        <div className="max-w-4xl mx-auto mt-20 bg-white text-slate-900 p-8 sm:p-10 rounded-2xl shadow-2xl relative overflow-hidden transition-all hover:scale-[1.01]">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
          <div className="flex gap-4 items-start relative z-10">
            <AlertCircle className="w-8 h-8 text-primary shrink-0 mt-0.5" />
            <div>
              <h3 className="font-heading font-extrabold text-xl md:text-2xl text-slate-900 mb-2 leading-tight">
                To nie wina Twojego braku talentu.
              </h3>
              <p className="text-slate-500 font-semibold text-xs md:text-sm leading-relaxed">
                Po prostu nie potrzebujesz WIĘCEJ tego samego rodzaju nauki. Potrzebujesz precyzyjnie <strong className="text-primary">dopasowanej diagnostyki</strong> i spersonalizowanego planu na Twoim aktualnym etapie.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
