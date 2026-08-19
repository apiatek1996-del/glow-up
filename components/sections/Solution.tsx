import { CheckCircle2, HelpCircle, Target, Map } from "lucide-react";

export default function Solution() {
  return (
    <section className="bg-white py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
          
          {/* Prawa strona - Grafika/Wizualizacja (tu jest po lewej wizualnie przez row-reverse) */}
          <div className="w-full lg:w-1/2 relative flex justify-center h-full">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-200 rounded-full blur-[80px]"></div>
            
            <div className="relative z-10 w-full max-w-lg">
              {/* Abstrakcyjny interfejs testu */}
              <div className="bg-background/50 rounded-3xl border border-orange-200/50 backdrop-blur-md shadow-2xl p-6 sm:p-8 flex flex-col gap-4 sm:gap-6 relative">
                
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                    <HelpCircle />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">6 precyzyjnych pytań</p>
                    <p className="text-sm text-slate-500">Zajmie Ci to tylko 2 minuty</p>
                  </div>
                  <div className="ml-auto text-purple-500"><CheckCircle2 className="w-6 h-6" /></div>
                </div>

                <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-brand-pink/20 flex items-center justify-center text-brand-pink">
                    <Target />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Opisowa diagnoza</p>
                    <p className="text-sm text-slate-500">Koniec ze zgadywaniem cyferek</p>
                  </div>
                  <div className="ml-auto text-brand-pink"><CheckCircle2 className="w-6 h-6" /></div>
                </div>

                <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100 opacity-80">
                  <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                    <Map />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Mapa Twojej drogi</p>
                    <p className="text-sm text-slate-500">Wiesz, co robić na kolejnym etapie</p>
                  </div>
                </div>

                {/* Naklejka / Badge */}
                <div className="absolute -bottom-6 -right-6 bg-slate-900 border-4 border-white text-white font-bold py-6 px-4 rounded-full shadow-2xl rotate-12 flex flex-col items-center justify-center w-32 h-32">
                  <span className="text-3xl font-heading mb-1 text-brand-pink">100%</span>
                  <span className="text-xs text-center leading-tight">Darmowy</span>
                </div>
              </div>
            </div>
          </div>

          {/* Lewa strona - Tekst (tu jest po prawej wizualnie przez row-reverse) */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 h-full justify-center">
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-slate-900 leading-tight">
               Ten test jest <span className="italic font-light text-primary">dla Ciebie</span>, jeśli:
            </h2>
            
            <ul className="grid gap-4 mt-2">
              {[
                'Uczysz się od miesięcy (albo lat) i myślisz: „Okej, ale gdzie ja właściwie jestem?"',
                'Kolejny raz powtarzasz materał i zastanawiasz się: „Czy robię postępy, czy kręcę się w kółko?"',
                'Chcesz konkretnej odpowiedzi: „Co mnie czeka w kolejnych etapach?"',
                'Masz dość ćwiczeń za łatwych (nuuuda) albo za trudnych (frustracja) — chcesz trafić w swój poziom',
                'Widzisz „jestem na B1" i myślisz: „Co to w ogóle znaczy? Jak to się ma do mojego życia?"',
                'Chcesz wiedzieć, czy to co robisz teraz MA SENS — czy może powinnaś ćwiczyć zupełnie coś innego',
                'Ciekawi Cię cała mapa hiszpańskiego — żeby mieć kontrolę i wiedzieć, na co się przygotować'
              ].map((item, id) => (
                <li key={id} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 bg-yellow-50 border border-yellow-200 p-5 rounded-xl">
              <p className="text-lg text-slate-800 leading-relaxed font-semibold italic">
                Ten test da Ci jasność — zobaczysz swoją dokładną pozycję i ile Ci jeszcze zostało.
              </p>
            </div>

            <div className="mt-4">
              <a href="#zapis" className="inline-block bg-slate-900 hover:bg-slate-800 text-white text-center font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/20 w-full sm:w-auto">
                Sprawdź, na którym etapie jesteś
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
