import { Check, X, AlertTriangle } from "lucide-react";

export default function WhatYouGet() {
  const isForYou = [
    "masz poczucie, że wiesz więcej, niż potrafisz wykorzystać w rozmowie",
    "robisz ćwiczenia, oglądasz seriale, słuchasz podcastów… ale mało z tego zostaje",
    "znasz gramatykę w teorii, ale podczas rozmowy nagle wszystko gdzieś znika",
    "mieszkasz w Hiszpanii, masz kontakt z językiem, a mimo to nadal nie czujesz się swobodnie",
    "uczysz się hiszpańskiego już jakiś czas, ale masz wrażenie, że utknęłaś",
    "uczysz się systematycznie, a mimo to nie czujesz, że naprawdę robisz postęp",
    "potrzebujesz kogoś, kto spojrzy na Twój hiszpański z boku i powie: „Tu jest problem. Tym zajmiemy się teraz.”"
  ];

  const isNotForYou = [
    "dopiero zaczynasz naukę hiszpańskiego (od zera)",
    "szukasz kolejnego kursu wideo, który narzuci Ci sztywny grafik tematów",
    "oczekujesz, że sama konsultacja załatwi sprawę bez Twojego późniejszego zaangażowania",
    "nie chcesz nic zmieniać w swoim dotychczasowym sposobie nauki"
  ];

  return (
    <section className="bg-white py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-6xl px-6 mx-auto relative z-10">
        
        {/* Nagłówek i Wprowadzenie */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">// KWALIFIKACJA DO PROGRAMU</span>
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-slate-900 mb-6 leading-tight">
            Czy program GLOW UP jest dla Ciebie?
          </h2>
          <p className="text-slate-500 font-semibold text-base md:text-lg">
            Sprawdź, czy Twoje wyzwania i cele odpowiadają profilowi moich uczniów:
          </p>
        </div>

        {/* Dwukolumnowy układ kart z zaokrąglonymi rogami */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Kolumna 1: Dla Ciebie - Ciepłe zielono-żółtawe tło */}
          <div className="bg-green-50/20 p-8 sm:p-10 rounded-2xl border border-green-200/50 shadow-sm flex flex-col h-full">
            <h3 className="font-heading font-extrabold text-xl md:text-2xl text-slate-900 mb-6 flex items-center gap-3 pb-4 border-b border-green-200/30">
              <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                <Check className="w-5 h-5" />
              </div>
              GLOW UP jest dla Ciebie, jeśli…
            </h3>
            
            <ul className="space-y-4 flex-grow">
              {isForYou.map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-slate-700 font-semibold text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolumna 2: Nie dla Ciebie - Czysta biała karta */}
          <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full">
            <h3 className="font-heading font-extrabold text-xl md:text-2xl text-slate-900 mb-6 flex items-center gap-3 pb-4 border-b border-slate-100">
              <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center text-red-600">
                <X className="w-5 h-5" />
              </div>
              GLOW UP NIE jest dla Ciebie, jeśli…
            </h3>
            
            <ul className="space-y-4 flex-grow">
              {isNotForYou.map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600 shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-slate-500 font-semibold text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Wyróżniona Puenta na dole - Ciepłe słoneczne żółte tło */}
        <div className="max-w-3xl mx-auto mt-16 bg-warmSun-dark/25 p-6 rounded-2xl border border-warmSun-dark/60 shadow-sm flex gap-4 items-center justify-center text-center">
          <AlertTriangle className="w-6 h-6 text-warm-orange shrink-0" />
          <p className="text-slate-800 font-bold text-sm leading-relaxed">
            <strong>Pamiętaj:</strong> GLOW UP nie jest magicczną pigułką. Otrzymujesz ode mnie precyzyjną diagnozę, plan i materiały startowe – wdrożenie planu leży po Twojej stronie.
          </p>
        </div>

      </div>
    </section>
  );
}
