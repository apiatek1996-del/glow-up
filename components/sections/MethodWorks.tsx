import { TrendingDown, Target, Zap } from "lucide-react";

export default function MethodWorks() {
  return (
    <section className="bg-white py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-400/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-400/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-slate-50 border border-slate-200 rounded-[3rem] p-10 md:p-16 lg:p-20 text-center shadow-xl relative overflow-hidden">
          
          <TrendingDown className="absolute -top-10 -left-10 w-48 h-48 text-slate-200 -rotate-12 pointer-events-none" />

          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-10 leading-tight mx-auto max-w-4xl relative z-10">
            Pracując już z grubo ponad 200+ osobami zauważyłam wzorzec: <br />
            <span className="text-purple-700 italic">85% utyka, bo nie wie, na jakim etapie realnie jest.</span>
          </h2>
          
          <div className="space-y-8 text-lg md:text-xl text-slate-700 font-medium leading-relaxed max-w-3xl mx-auto relative z-10">
            <p>
              Korzysta z materiałów B1, będąc mentalnie na A2, albo odwrotnie.
            </p>
            
            <p>
              W szkole mówili Ci "poziom B1". Ale co to znaczy, skoro zamiast czuć się coraz pewniej wciąż czujesz "jeszcze tyle mi brakuje"?
            </p>
            
            <div className="p-8 bg-green-50 rounded-2xl border border-green-100 shadow-sm relative z-10 mt-8">
              <p className="text-green-900 font-bold">
                Hiszpański to nie loteria - to 5 konkretnych etapów. Kiedy zrobisz sobie ich RTG, przestaniesz zgadywać i zobaczysz dokładnie, gdzie stoisz na tej mapie.
              </p>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
