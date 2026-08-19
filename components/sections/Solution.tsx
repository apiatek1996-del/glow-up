import { CheckCircle2, XCircle, Sparkles } from "lucide-react";

export default function Solution() {
  const isForYou = [
    "uczysz się hiszpańskiego już jakiś czas, ale masz wrażenie, że utknęłaś",
    "uczysz się systematycznie, a mimo to nie czujesz, że naprawdę robisz postęp",
    "masz poczucie, że wiesz więcej, niż potrafisz wykorzystać w rozmowie",
    "masz mnóstwo materiałów, ale nie wiesz, z czego właściwie powinnaś korzystać",
    "robisz ćwiczenia, oglądasz seriale, słuchasz podcastów… ale masz wrażenie, że dużo robisz, a mało z tego zostaje",
    "znasz gramatykę w teorii, ale podczas rozmowy nagle wszystko gdzieś znika",
    "mieszkasz w Hiszpanii, masz kontakt z językiem, a mimo to nadal nie czujesz się swobodnie",
    "nie wiesz, co konkretnie powinnaś teraz ćwiczyć",
    "masz dość dokładania sobie kolejnych materiałów i chcesz wreszcie uporządkować swoją naukę",
    "potrzebujesz kogoś, kto spojrzy na Twój hiszpański z boku i powie: „Tu jest problem. Tym zajmiemy się teraz.”"
  ];

  const isNotForYou = [
    "dopiero zaczynasz naukę hiszpańskiego",
    "szukasz kolejnego kursu, w którym ktoś krok po kroku powie Ci, czego masz się nauczyć",
    "oczekujesz, że sama konsultacja zrobi za Ciebie całą pracę",
    "nie chcesz nic zmieniać w swoim sposobie nauki"
  ];

  return (
    <section className="bg-slate-50 py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-semibold text-sm mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Dla kogo to jest?</span>
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-slate-900 mb-6 leading-tight">
            Czy to propozycja dla Ciebie?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Sprawdź, czy Twoja sytuacja pasuje do założeń programu **GLOW UP**:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Kolumna: DLA KOGO JEST */}
          <div className="bg-white p-8 sm:p-10 rounded-[2.5rem] border border-slate-200 shadow-xl relative h-full">
            <h3 className="font-heading font-bold text-2xl text-slate-900 mb-6 flex items-center gap-2 pb-4 border-b border-slate-100">
              <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0" />
              GLOW UP jest dla Ciebie, jeśli…
            </h3>
            <ul className="space-y-4">
              {isForYou.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium text-sm md:text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolumna: DLA KOGO NIE JEST */}
          <div className="bg-white p-8 sm:p-10 rounded-[2.5rem] border border-slate-200 shadow-lg relative h-full">
            <h3 className="font-heading font-bold text-2xl text-slate-900 mb-6 flex items-center gap-2 pb-4 border-b border-slate-100">
              <XCircle className="w-6 h-6 text-slate-400 shrink-0" />
              GLOW UP nie jest dla Ciebie, jeśli…
            </h3>
            <ul className="space-y-4">
              {isNotForYou.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <span className="text-slate-500 font-medium text-sm md:text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Puenta na dole */}
        <div className="max-w-3xl mx-auto mt-16 bg-orange-50 rounded-2xl border border-orange-100 p-8 shadow-sm text-center">
          <p className="font-heading font-bold text-xl md:text-2xl text-slate-900 mb-3">
            GLOW UP nie jest magiczną pigułką.
          </p>
          <p className="text-slate-700 font-medium text-base md:text-lg leading-relaxed">
            Dostajesz diagnozę, kierunek i konkretne zalecenia. <br className="hidden md:inline" />
            A potem trzeba je wdrożyć.
          </p>
        </div>

      </div>
    </section>
  );
}
