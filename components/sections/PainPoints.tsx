import { MessageSquareOff, HelpCircle, AlertCircle } from "lucide-react";

export default function PainPoints() {
  return (
    <section className="bg-slate-50 py-20 md:py-32 relative overflow-hidden">
      {/* Dekoracyjne tła */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-400/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white border border-slate-200 rounded-[3rem] p-8 md:p-16 lg:p-20 shadow-xl relative overflow-hidden">
          
          <MessageSquareOff className="absolute -top-10 -right-10 w-48 h-48 text-slate-50 -rotate-12 pointer-events-none" />

          <h2 className="font-heading font-bold text-3xl md:text-5xl text-slate-900 mb-12 leading-tight max-w-3xl">
            Uczysz się już od jakiegoś czasu. <br />
            <span className="text-primary italic">I nadal masz wrażenie, że coś nie gra?</span>
          </h2>

          <div className="space-y-8 text-lg text-slate-700 leading-relaxed font-medium">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-600 font-semibold mb-8">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">Robisz ćwiczenia.</div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">Chodzisz na zajęcia.</div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">Oglądasz seriale.</div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">Słuchasz podcastów.</div>
            </div>

            <p className="text-slate-800 font-semibold border-l-4 border-slate-400 pl-4 py-1 italic">
              Może nawet mieszkasz w Hiszpanii i masz kontakt z językiem codziennie.
            </p>

            <p className="text-xl font-bold text-slate-950 mt-8">
              A jednak kiedy przychodzi do rozmowy…
            </p>
            
            <p className="text-primary-hover font-bold text-2xl italic leading-snug">
              nagle okazuje się, że wiesz więcej, niż potrafisz użyć.
            </p>

            <div className="space-y-4 text-slate-600 bg-orange-50/20 p-6 rounded-2xl border border-orange-100/50">
              <p>Znasz tę konstrukcję. Wiesz, że kiedyś się jej uczyłaś. Ale w rozmowie nie przychodzi Ci do głowy.</p>
              <p>Brakuje Ci słowa. Zaczynasz się zastanawiać, czy na pewno dobrze odmieniłaś czasownik. Zamiast mówić — analizujesz.</p>
            </div>

            <p className="text-xl font-bold text-slate-900 pt-6">
              I zaczynasz się zastanawiać:
            </p>

            <ul className="space-y-4 pl-4 border-l-2 border-red-200">
              {[
                "„Dlaczego ja ciągle popełniam te same błędy?”",
                "„Dlaczego to, co powinno być już proste, nadal jest takie trudne?”",
                "„Dlaczego zwykła rozmowa po hiszpańsku potrafi mnie tak zmęczyć?”"
              ].map((question, idx) => (
                <li key={idx} className="flex gap-3 items-center text-slate-800 font-bold italic">
                  <HelpCircle className="w-5 h-5 text-brand-pink shrink-0" />
                  <span>{question}</span>
                </li>
              ))}
            </ul>

            <div className="p-8 bg-orange-50 rounded-2xl border border-orange-100 shadow-sm relative z-10 mt-12">
              <div className="flex gap-4 items-start">
                <AlertCircle className="w-8 h-8 text-primary shrink-0 mt-0.5" />
                <p className="text-slate-900 font-bold text-xl md:text-2xl leading-relaxed">
                  I właśnie tutaj często problemem nie jest to, że potrzebujesz <span className="underline decoration-wavy decoration-primary underline-offset-4">WIĘCEJ</span> nauki. <br />
                  <span className="text-primary">Tylko że potrzebujesz LEPIEJ DOPASOWANEJ nauki.</span>
                </p>
              </div>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}
