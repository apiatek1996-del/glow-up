import { Check, Sparkles } from "lucide-react";

export default function Pricing() {
  return (
    <section id="cennik" className="bg-slate-50 py-20 md:py-32 relative overflow-hidden">
      {/* Dekoracje tła */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-400/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-400/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Nagłówek sekcji */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-primary font-bold text-sm mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Pakiety i Cennik</span>
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-slate-900 mb-6 leading-tight max-w-3xl mx-auto">
            Nie kupujesz kolejnego kursu. <br className="hidden md:inline" />
            <span className="text-primary italic">Kupujesz jasność, co robić dalej.</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Wybierz wariant dopasowany do Twoich potrzeb i zrób krok w stronę swobody mówienia:
          </p>
        </div>

        {/* Karty cennikowe */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
          
          {/* Opcja 1: GLOW UP */}
          <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 sm:p-10 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="mb-6">
                <h3 className="font-heading font-bold text-2xl text-slate-900 mb-2">GLOW UP</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">Indywidualna diagnoza Twojego języka + precyzyjny plan startowy.</p>
              </div>

              {/* Cena */}
              <div className="mb-8 border-y border-slate-50 py-4">
                <span className="text-sm text-slate-400 line-through font-medium mr-2">347 zł</span>
                <span className="text-4xl font-extrabold text-slate-950">250 zł</span>
                <span className="text-sm text-slate-500 font-semibold block mt-1">Jednorazowa płatność</span>
              </div>

              {/* Korzyści */}
              <ul className="space-y-4 mb-8">
                {[
                  "60-minutowa konsultacja 1:1 — prześwietlenie Twojego hiszpańskiego",
                  "Indywidualna diagnoza — wiesz, co realnie wymaga Twojej uwagi",
                  "Indywidualne zalecenia — konkretny kierunek zamiast ogólników",
                  "Plan działania — wiesz dokładnie, co robić po konsultacji",
                  "Pełne podsumowanie PDF — zalecenia zawsze pod ręką",
                  "Materiały na pierwszy miesiąc — dobrane do Twojej sytuacji",
                  "BONUS: Zniżka na dostęp do platformy szkoleniowej"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start text-slate-700 font-medium text-sm">
                    <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto">
              <a 
                href="mailto:a.piatek1996@gmail.com?subject=Zgłoszenie na program Glow Up" 
                className="block w-full text-center bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Chcę zrobić GLOW UP mojego hiszpańskiego
              </a>
              <p className="text-center text-slate-400 text-xs mt-3 italic font-medium">Brak ukrytych kosztów</p>
            </div>
          </div>

          {/* Opcja 2: GLOW UP PREMIUM */}
          <div className="bg-white border-2 border-primary rounded-[2.5rem] p-8 sm:p-10 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            {/* Plakietka POLECAMY */}
            <div className="absolute top-0 right-0 bg-primary text-white font-bold text-xs uppercase tracking-wider px-6 py-2 rounded-bl-3xl">
              Polecamy
            </div>

            <div>
              <div className="mb-6">
                <span className="inline-block text-xs font-bold text-brand-pink uppercase tracking-widest mb-1.5">Maksymalne wsparcie</span>
                <h3 className="font-heading font-bold text-2xl text-slate-900 mb-2">GLOW UP PREMIUM</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">Pełna diagnoza oraz 3 miesiące stałej asysty we wdrażaniu zmian.</p>
              </div>

              {/* Cena */}
              <div className="mb-8 border-y border-slate-50 py-4">
                <span className="text-sm text-slate-400 line-through font-medium mr-2">697 zł</span>
                <span className="text-4xl font-extrabold text-slate-950">547 zł</span>
                <span className="text-sm text-slate-500 font-semibold block mt-1">Jednorazowa płatność</span>
              </div>

              {/* Korzyści */}
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3 items-start text-primary font-bold text-sm">
                  <Sparkles className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>Wszystko z pakietu GLOW UP +</span>
                </li>
                {[
                  "3 miesiące wsparcia we wdrażaniu — nie zostajesz sama ze zmianami",
                  "Brak limitu pytań — pytasz o wszystko, kiedy napotkasz trudności",
                  "Szybki kontakt przez aplikację — wsparcie na wyciągnięcie ręki",
                  "Gwarantowane odpowiedzi do 24 godzin",
                  "Pełny dostęp do platformy Strefa Hiszpański",
                  "Dostęp do elitarnego Klubu Hiszpański Todos Los Días"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start text-slate-700 font-medium text-sm">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto">
              <a 
                href="mailto:a.piatek1996@gmail.com?subject=Zgłoszenie na program Glow Up Premium" 
                className="block w-full text-center bg-primary hover:bg-primary-hover text-white font-bold py-4 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg shadow-primary/20"
              >
                Chcę GLOW UP PREMIUM
              </a>
              <p className="text-center text-slate-400 text-xs mt-3 italic font-medium">Najlepszy stosunek wartości do ceny</p>
            </div>
          </div>

        </div>

        {/* Krótkie podsumowanie pod cennikiem */}
        <div className="max-w-lg mx-auto text-center mt-16 text-slate-500 text-sm font-semibold">
          <p className="mb-1">💡 Szybka powtórka:</p>
          <p className="italic">
            GLOW UP: diagnoza + kierunek + materiały. <br />
            GLOW UP PREMIUM: diagnoza + kierunek + materiały + 3 miesiące wsparcia.
          </p>
        </div>

      </div>
    </section>
  );
}
