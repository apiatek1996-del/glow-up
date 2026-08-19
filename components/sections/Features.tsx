import { Heart, Sparkles } from "lucide-react";

export default function Features() {
  return (
    <section className="bg-background py-20 md:py-32 relative overflow-hidden">
      
      {/* Dekoracyjne tło */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-400/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-400/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Lewa strona - Tekst */}
          <div className="w-full lg:w-3/5">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-600 font-medium text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Twórczyni diagnozy</span>
            </div>
            
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-5xl text-slate-900 mb-8 leading-tight">
              Cześć, jestem Ada i pomogę Ci przejść przez te <span className="text-primary italic">5 etapów.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-medium">
              <p>
                Z hiszpańskim żyję od 17 lat. Przeszłam całą tę drogę – od studiów filologicznych po 7 lat uczenia innych. 
                Widziałam setki osób, które utykały dokładnie w tych samych miejscach: tam, gdzie gramatyka przestaje wystarczać, a zaczyna się prawdziwe życie.
              </p>
              
              <div className="py-4 pl-6 border-l-4 border-red-500 bg-white/50 rounded-r-2xl italic shadow-sm">
                <p>
                  To RTG nie powstało z przypadku. To esencja moich obserwacji z zajęć i mentoringu. Stworzyłam je, bo mam dość patrzenia, jak zdolni ludzie rzucają hiszpański tylko dlatego, że nikt im nie pokazał, gdzie na tej mapie się znajdują.
                </p>
              </div>
              
              <p className="font-bold text-slate-900">
                Wiem, co działa na etapie 2, a co jest stratą czasu na etapie 4. I tymi wnioskami dzielę się z Tobą w wyniku testu.
              </p>
            </div>
            
            {/* Signature / Podpis */}
            <div className="mt-10 flex items-center gap-4">
              <span className="font-heading italic text-3xl font-bold text-primary">Ada</span>
              <Heart className="w-6 h-6 text-red-500 fill-red-100" />
            </div>
          </div>
          
          {/* Prawa strona - Zdjęcie / Grafika */}
          <div className="w-full lg:w-2/5">
            <div className="relative">
              {/* Dekoracyjna ramka w tle */}
              <div className="absolute inset-0 bg-yellow-300 rounded-[2.5rem] translate-x-4 translate-y-4 -z-10 shadow-lg"></div>
              
              {/* Miejsce na zdjęcie / Placeholder */}
              <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-slate-200 border-4 border-white shadow-2xl relative flex items-center justify-center group">
                {/* Zdjęcie (do podmienienia potem src) */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent z-10"></div>
                
                <div className="relative z-20 text-center px-4">
                  <p className="text-slate-500 font-medium mb-2">Miejsce na zdjęcie Ady</p>
                  <p className="text-sm text-slate-400">(Wymień zawartość tego diva na tag &lt;img&gt; z Twoim uśmiechniętym zdjęciem!)</p>
                </div>
              </div>
              
              {/* Pływająca plakietka */}
              <div className="absolute -left-8 top-1/2 bg-white px-6 py-4 rounded-2xl shadow-xl flex items-center gap-4 z-20">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                  7
                </div>
                <div>
                  <p className="text-sm text-slate-500">Lat doświadczenia</p>
                  <p className="font-bold text-slate-900">w nauczaniu</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
