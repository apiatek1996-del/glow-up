import { Target, Map, MessagesSquare } from "lucide-react";

export default function PainPoints() {
  return (
    <section className="bg-gradient-to-b from-green-800 to-green-400 py-20 md:py-32 relative overflow-hidden">
      {/* Tło i dekoracje */}
      <div className="absolute min-w-[800px] w-full h-[500px] -top-64 -right-64 bg-green-600/20 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-green-200 backdrop-blur-sm border border-green-300 rounded-3xl p-8 md:p-14 shadow-2xl relative">
          
          {/* Dekoracyjna ikona w tle */}
          <Target className="absolute -top-8 -left-8 w-24 h-24 text-green-300 opacity-50 -rotate-12 pointer-events-none" />

          <h2 className="font-heading font-bold text-3xl md:text-5xl text-green-950 mb-8 leading-tight relative z-10">
            Uczysz się już jakiś czas ale nie wiesz, gdzie dokładnie jesteś ani ile przed Tobą?
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-green-900 leading-relaxed font-medium relative z-10">
            <p>
              Nauka języka to proces, nie błądzenie w ciemności. 
            </p>

            <p>
              Być może masz poczucie, że nauka nigdy się nie kończy. Że ciągle są jakieś luki w wiedzy, które trzeba uzupełnić. A te wszystkie poziomy A2, B1, B2... to brzmi abstrakcyjnie i nie przekłada się na rzeczywistość.
            </p>
            
            <p className="text-green-950 font-bold italic pt-4">
              Właśnie dlatego stworzyłam RTG Twojego Hiszpańskiego.
            </p>



          </div>
        </div>
      </div>
    </section>
  );
}
