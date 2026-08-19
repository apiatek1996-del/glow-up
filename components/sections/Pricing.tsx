import { Map } from "lucide-react";

export default function Pricing() {
  return (
    <section className="bg-slate-50 py-20 md:py-32 relative overflow-hidden">
      {/* Dekoracje tła */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-400/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-400/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-white border border-slate-200 rounded-[3rem] p-10 md:p-16 lg:p-20 text-center shadow-xl relative overflow-hidden">
          
          <Map className="absolute -top-10 -right-10 w-48 h-48 text-slate-100 -rotate-12 pointer-events-none" />

          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-10 leading-tight mx-auto max-w-4xl">
            Prawda jest taka: <br />
            <span className="text-primary italic">większość osób nie wie, na jakim etapie realnie jest.</span>
          </h2>
          
          <div className="space-y-8 text-xl md:text-2xl text-slate-700 font-medium leading-relaxed max-w-3xl mx-auto">
            <p>
              Nie widzą, co przeszły. Nie wiedzą, co ich czeka. I przez to gubią się w chaosie materiałów i tracą motywację.
            </p>
            
            <p className="text-slate-900 font-bold p-8 bg-orange-50 rounded-2xl border border-orange-100 shadow-sm relative z-10">
              Ale nauka hiszpańskiego to nie loteria. To logiczny proces z konkretnymi etapami. Kiedy zobaczysz całą mapę – zrozumiesz, gdzie jesteś i co Cię czeka. I nagle poczujesz kontrolę.
            </p>
          </div>
          
        </div>

      </div>
    </section>
  );
}
