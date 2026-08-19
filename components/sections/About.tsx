"use client";

import { useState } from "react";
import Image from "next/image";
import { Award, GraduationCap, Calendar, Languages, Users, MapPin, Heart, ChevronLeft, ChevronRight } from "lucide-react";

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "/images/1.png",
    "/images/2.png",
    "/images/4.png",
    "/images/5.png",
    "/images/6.png",
    "/images/7.png",
    "/images/8.png",
    "/images/9.png",
    "/images/10.png",
    "/images/11.png"
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const credentials = [
    { icon: <GraduationCap className="w-5 h-5 text-warm-orange" />, text: "Magister filologii hiszpańskiej" },
    { icon: <Languages className="w-5 h-5 text-warm-orange" />, text: "Ponad 13 lat z hiszpańskim" },
    { icon: <Calendar className="w-5 h-5 text-warm-orange" />, text: "Ponad 7 lat nauczania innych" },
    { icon: <MapPin className="w-5 h-5 text-warm-orange" />, text: "Prawie 5 lat życia w Hiszpanii" }
  ];

  return (
    <section id="about" className="bg-warm-sun py-20 md:py-32 relative overflow-hidden">
      {/* Słoneczny rozbłysk w tle */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-warm-orange/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl px-6 mx-auto relative z-10">
        
        {/* Górna część - O mnie & Dowody (Zdjęcie po lewej 6/12, Tekst po prawej 6/12) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Lewa strona - Zdjęcie (6 z 12) */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-start">
            <div className="absolute top-4 left-4 w-72 h-72 bg-pink-100 rounded-full blur-3xl opacity-50 -z-10"></div>
            
            <div className="relative w-full max-w-[480px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-slate-100">
              <Image 
                src="/images/hola-tu-agata.png" 
                alt="Agata Piątek – Hola! Tu Agata" 
                fill
                className="object-cover object-center" 
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Prawa strona - Teksty i Dowody (6 z 12) */}
          <div className="lg:col-span-6 flex flex-col justify-start text-left">
            
            {/* Siatka osiągnięć - białe karty na kremowym tle */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {credentials.map((cred, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-orange-100 hover:border-warm-orange/20 transition-all shadow-sm"
                >
                  <div className="w-8 h-8 rounded-lg bg-warm-orange/10 flex items-center justify-center text-warm-orange shrink-0">
                    {cred.icon}
                  </div>
                  <span className="text-slate-800 font-bold text-xs leading-snug">{cred.text}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4 text-slate-600 font-semibold text-sm leading-relaxed">
              <p>
                Dziś mieszkam w Hiszpanii i czuję się tu jak w domu. Pomagam Polakom, którzy już tu są lub planują przeprowadzkę, poczuć dokładnie to samo i swobodnie rozmawiać na co dzień bez stresu.
              </p>
              
              <p className="font-bold text-slate-900 text-sm pt-2">
                Ale moja własna droga to nie była miłość od pierwszego wejrzenia:
              </p>
              
              <ul className="space-y-2.5 pl-1">
                <li className="flex gap-2 items-start">
                  <span className="shrink-0 mt-0.5">💔</span>
                  <p className="text-xs"><strong className="text-slate-900">Nienawiść po licencjacie:</strong> Nudne podręczniki i wkuwanie gramatycznych tabelek prawie zabiły moją pasję do języka.</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="shrink-0 mt-0.5">🗣️</span>
                  <p className="text-xs"><strong className="text-slate-900">8 lat do pierwszej rozmowy:</strong> W szkole i na studiach nie uczą żywego języka. Sama zaczęłam swobodnie mówić dopiero po 8 latach!</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="shrink-0 mt-0.5">🙈</span>
                  <p className="text-xs"><strong className="text-slate-900">Erasmusowy wstyd:</strong> Chciałam powiedzieć kilka miłych słów, ale ze stresu nie wykrztusiłam ani słowa przed całą salą. Musiałam dokończyć po angielsku.</p>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Karuzela ze screenami opinii na środku pod sekcją O mnie */}
        <div className="mt-16 flex justify-center relative z-20">
          <div className="bg-white border border-orange-100 rounded-2xl p-5 shadow-lg flex flex-col items-center w-full max-w-lg">
            <div className="flex items-center gap-2 mb-4 self-start">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                {"// a teraz dostaję takie wiadomości"}
                <span className="block mt-0.5">{"od moich kursantów i kursantek <3"}</span>
              </span>
            </div>

            {/* Zdjęcie opinii */}
            <div className="relative w-full aspect-[16/10] bg-slate-50 rounded-xl overflow-hidden border border-slate-100 flex items-center justify-center">
              <Image 
                src={images[activeIndex]} 
                alt={`Wiadomość od kursantki ${activeIndex + 1}`} 
                fill 
                className="object-contain p-2"
                sizes="(max-width: 768px) 100vw, 480px"
              />
            </div>

            {/* Nawigacja w karuzeli */}
            <div className="flex items-center justify-between w-full mt-4 px-1 text-slate-500">
              <button 
                onClick={handlePrev}
                className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition cursor-pointer"
                aria-label="Poprzednia opinia"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-[10px] font-mono font-bold text-slate-400">
                {activeIndex + 1} / {images.length}
              </span>
              <button 
                onClick={handleNext}
                className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition cursor-pointer"
                aria-label="Następna opinia"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <hr className="border-orange-200 my-16" />

        {/* Dolna część - Filozofia uczenia */}
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-heading font-extrabold text-2xl md:text-4xl text-slate-900 mb-6 leading-tight">
            Uczę naturalnego hiszpańskiego, żeby życie w Hiszpanii było po prostu prostsze. ☀️
          </h3>

          <div className="space-y-6 text-slate-600 font-semibold text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
            <p>
              Samo mieszkanie w Hiszpanii nie uczy automatycznie języka (łatwo zamknąć się w polskiej bańce), a wkuwanie list słówek to strata czasu.
            </p>
            <p className="text-slate-950 font-extrabold text-lg">
              Wierzę w hiszpański, którego naprawdę używasz — podczas rozmowy z sąsiadem, w urzędzie, przy kawie czy w sklepie.
            </p>
            <p>
              W programie GLOW UP bez owijania w bawełnę diagnozuję Twoje blokady i pokazuję Ci, jak zacząć uczyć się sprytniej, by w końcu zacząć swobodnie rozmawiać.
            </p>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            <span className="font-heading italic text-2xl font-extrabold text-warm-orange">Agata</span>
            <Heart className="w-5 h-5 text-warm-orange fill-warm-orange" />
          </div>
        </div>

      </div>
    </section>
  );
}
