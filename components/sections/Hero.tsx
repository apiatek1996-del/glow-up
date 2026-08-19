import { CheckCircle2, Sparkles } from "lucide-react";
import MailerLiteForm from "../ui/MailerLiteForm";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-x-16 items-start">
          
          {/* Lewa strona (Nagłówek i Tekst) */}
          <div className="relative flex flex-col text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 w-fit mx-auto lg:mx-0">
              <CheckCircle2 className="w-4 h-4" />
              <span>Bezpłatny test diagnostyczny (6 pytań)</span>
            </div>
            
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-tight mb-6 mt-2">
              5 etapów hiszpańskiego – sprawdź, gdzie jesteś i ile Ci jeszcze zostało
              <span className="block text-primary italic text-3xl sm:text-4xl mt-3 font-normal">(większość utyka na etapie 3)</span>
            </h1>
            
            <p className="text-lg text-slate-700 mb-4 max-w-xl mx-auto lg:mx-0">
              Większość osób nie wie, na którym etapie nauki rzeczywiście jest. Myślą, że są na B1, a w rozmowie zachowują się jak A2. Albo odwrotnie – robią podręcznik na A2, ale intuicyjnie czują język dużo lepiej.
            </p>

            <p className="text-base text-slate-600 mb-6 max-w-xl mx-auto lg:mx-0 border-l-4 border-yellow-400 pl-4 py-1 italic">
              Bezpłatny test diagnostyczny (6 pytań) dla każdego, kto uczy się hiszpańskiego i chce zrozumieć, na jakim jest etapie, co go czeka i jak logicznie przez to przejść.
            </p>

            <div className="flex items-start gap-3 mb-8 text-sm text-slate-600 max-w-xl mx-auto lg:mx-0 bg-slate-50 p-4 rounded-xl border border-slate-100">
              <Sparkles className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <p>
                <strong>17 lat z hiszpańskim + studia filologiczne + 8 lat nauczania</strong> <br/>
                (przeszłam przez każdy etap – wiem, co działa)
              </p>
            </div>

          </div>

          {/* Prawa strona (Formularz) */}
          <div className="w-full max-w-lg mx-auto relative z-20">
            <MailerLiteForm />
          </div>

        </div>
      </div>
    </section>
  );
}
