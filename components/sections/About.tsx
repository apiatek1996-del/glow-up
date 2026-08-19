import Image from "next/image";
import { Award, GraduationCap, Heart, Calendar, Languages, Users, Compass } from "lucide-react";

export default function About() {
  const credentials = [
    {
      icon: <GraduationCap className="w-5 h-5 text-primary" />,
      text: "Magister filologii hiszpańskiej"
    },
    {
      icon: <Languages className="w-5 h-5 text-primary" />,
      text: "Ponad 13 lat z hiszpańskim"
    },
    {
      icon: <Calendar className="w-5 h-5 text-primary" />,
      text: "Ponad 7 lat doświadczenia w nauczaniu"
    },
    {
      icon: <Users className="w-5 h-5 text-primary" />,
      text: "Dziesiątki osób, z którymi pracowałam"
    },
    {
      icon: <Compass className="w-5 h-5 text-primary" />,
      text: "Prawie 5 lat życia w Hiszpanii"
    }
  ];

  return (
    <section id="about" className="bg-white py-20 md:py-32 relative overflow-hidden">
      {/* Tła dekoracyjne */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-pink/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-400/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Górna część - Zaufanie to dowody */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-24">
          
          {/* Lewa strona - Zdjęcie Ady */}
          <div className="w-full lg:w-2/5 order-2 lg:order-1">
            <div className="relative">
              {/* Dekoracyjna żółta ramka */}
              <div className="absolute inset-0 bg-yellow-300 rounded-[2.5rem] translate-x-4 translate-y-4 -z-10 shadow-lg"></div>
              
              <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-slate-200 border-4 border-white shadow-2xl relative">
                <Image 
                  src="/images/about-photo.jpg" 
                  alt="Agata Piątek – założycielka i mentorka języka hiszpańskiego" 
                  width={400}
                  height={533}
                  className="w-full h-full object-cover object-top" 
                  priority
                />
              </div>

              {/* Pływająca plakietka */}
              <div className="absolute -left-6 top-1/3 bg-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 z-20 border border-slate-100">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-primary font-bold text-lg">
                  7
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Lat doświadczenia</p>
                  <p className="font-bold text-slate-900 text-sm">w nauczaniu</p>
                </div>
              </div>
            </div>
          </div>

          {/* Prawa strona - Dowody zaufania & Tekst */}
          <div className="w-full lg:w-3/5 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-pink/15 text-brand-pink font-semibold text-sm mb-6">
              <Award className="w-4 h-4" />
              <span>O mnie</span>
            </div>
            
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-slate-900 mb-8 leading-tight">
              Zaufanie to dowody.
            </h2>

            {/* Lista dowodów */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {credentials.map((cred, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center shadow-sm shrink-0 border border-slate-100/50">
                    {cred.icon}
                  </div>
                  <span className="text-slate-800 font-bold text-sm leading-snug">{cred.text}</span>
                </div>
              ))}
            </div>
            
            <div className="space-y-6 text-base md:text-lg text-slate-700 leading-relaxed font-medium">
              <p>
                Ale najważniejsze jest to, czego nauczyła mnie własna droga z hiszpańskim.
              </p>
              <p>
                Wiem, jak to jest uczyć się latami, a potem odkryć, że w prawdziwej rozmowie nie potrafisz wykorzystać tego, co przecież znasz.
              </p>
              <p>
                Dlatego dziś nie chcę dawać Ci kolejnej porcji materiałów. Chcę najpierw znaleźć miejsce, w którym utknęłaś — i powiedzieć Ci, co możesz zrobić inaczej.
              </p>

              {/* Cytat od uczniów */}
              <div className="py-4 pl-6 border-l-4 border-brand-pink bg-purple-50/30 rounded-r-2xl italic font-bold text-slate-900 shadow-sm mt-6">
                „Bez Ciebie nigdy nie zaczęłabym mówić.”
                <span className="block text-xs font-semibold text-slate-500 mt-1 not-italic">— wiadomość od jednej z moich kursantek</span>
              </div>
            </div>
          </div>
          
        </div>

        <hr className="border-slate-100 my-16" />

        {/* Dolna część - Filozofia / Sekcja O Tobie */}
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-heading font-bold text-2xl md:text-4xl text-slate-900 mb-8 leading-tight max-w-2xl mx-auto">
            Uczę naturalnego hiszpańskiego, żeby życie w Hiszpanii było po prostu prostsze. ☀️
          </h3>

          <div className="space-y-6 text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium">
            <p>
              Nie wierzę w naukę języka polegającą na bezmyślnym przerabianiu kolejnych stron podręcznika.
            </p>
            <p className="text-slate-900 font-bold">
              Wierzę w hiszpański, którego naprawdę używasz — podczas rozmowy z sąsiadem, w sklepie, w urzędzie, przy kawie.
            </p>
            <p>
              I wierzę, że każdy potrzebuje trochę innej drogi. Dlatego w **GLOW UP** nie dostajesz gotowego programu dla „każdego na poziomie B1”. 
            </p>
            <p className="text-primary-hover font-bold">
              Najpierw poznaję Ciebie i Twój hiszpański. Potem mówię Ci, co warto zrobić dalej.
            </p>
            <p>
              To właśnie takie podejście stosuję w pracy z moimi uczniami od ponad 9 lat.
            </p>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            <span className="font-heading italic text-3xl font-bold text-primary">Agata</span>
            <Heart className="w-6 h-6 text-brand-pink fill-brand-pink/20" />
          </div>
        </div>

      </div>
    </section>
  );
}
