import Image from "next/image";
import { Heart, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-32 relative overflow-hidden">
      
      {/* Dekoracyjne tło */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-pink/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-400/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Lewa strona - Tekst */}
          <div className="w-full lg:w-3/5">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-pink/20 text-brand-pink font-medium text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              <span>O mnie</span>
            </div>
            
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-5xl text-purple-700 mb-8 leading-tight">
              Widziałam setki osób, które utykały w różnych momentach nauki. <span className="text-primary italic">Teraz świetnie wiem jak ruszyć i przejść przez wszystkie 5 etapów.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-medium">
              <p>
                Z hiszpańskim żyję od 17 lat. Przeszłam całą tę drogę – od studiów filologicznych po 7 lat uczenia innych, życie w Hiszpanii i związek z Kolumbijczykiem.
              </p>
              
              <p>
                To RTG nie powstało z przypadku. To esencja moich obserwacji z zajęć i życia. Stworzyłam je, bo mam dość patrzenia, jak zdolni ludzie tracą motywację dlatego, że nikt im nie pokazał, że różne etapy wymagają różnego podejścia. Wiem, co działa na etapie 2, i co jest stratą czasu na etapie 4. I tymi wnioskami dzielę się z Tobą w wyniku testu.
              </p>
            </div>
            
            {/* Signature / Podpis */}
            <div className="mt-10 flex items-center gap-4">
              <span className="font-heading italic text-3xl font-bold text-primary">Agata</span>
              <Heart className="w-6 h-6 text-brand-pink fill-brand-pink/20" />
            </div>
          </div>
          
          {/* Prawa strona - Zdjęcie / Grafika */}
          <div className="w-full lg:w-2/5">
            <div className="relative">
              {/* Dekoracyjna ramka w tle */}
              <div className="absolute inset-0 bg-yellow-300 rounded-[2.5rem] translate-x-4 translate-y-4 -z-10 shadow-lg"></div>
              
              {/* Miejsce na zdjęcie / Placeholder */}
              <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-slate-200 border-4 border-white shadow-2xl relative flex items-center justify-center group">
                {/* Zdjęcie About - frontowe uśmiechnięte */}
                <Image 
                  src="/images/about-photo.jpg" 
                  alt="Agata Piątek - nauczycielka języka hiszpańskiego z 17-letnim doświadczeniem" 
                  width={400}
                  height={533}
                  className="w-full h-full object-cover object-top relative z-0" 
                />
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
