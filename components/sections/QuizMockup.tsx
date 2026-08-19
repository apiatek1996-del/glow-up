"use client";

import React from "react";
import Image from "next/image";

export default function QuizMockup() {
  return (
    <section className="bg-slate-50 py-12 md:py-20 relative overflow-hidden border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex justify-center">
        
        {/* Mockup Canvas with Gold Border */}
        <div className="relative w-full max-w-4xl p-6 sm:p-12 rounded-[2.5rem] border-4 border-primary/40 bg-white/40 backdrop-blur-sm shadow-xl flex items-center justify-center overflow-hidden min-h-[320px] sm:min-h-[480px]">
          
          {/* Worksheet (Left) */}
          <div className="absolute left-6 top-16 w-52 h-72 bg-white border border-slate-200 shadow-lg rounded-2xl -rotate-6 z-10 p-5 hidden lg:flex flex-col justify-between select-none">
            {/* Decorative Spanish flag colors line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl overflow-hidden flex">
              <div className="w-1/3 bg-[#C82A2A]" />
              <div className="w-1/3 bg-[#FFC510]" />
              <div className="w-1/3 bg-[#C82A2A]" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-primary tracking-wider uppercase mb-1.5">PLAN DZIAŁANIA</div>
              <h4 className="font-heading font-bold text-base text-slate-800 leading-tight">RTG Twojego Hiszpańskiego</h4>
              <p className="text-[10px] text-slate-500 mt-2 leading-relaxed">
                Spersonalizowana mapa drogowa i wskazówki do nauki dopasowane do Twojego poziomu.
              </p>
            </div>
            <div className="border-t border-slate-100 pt-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary">
                  A
                </div>
                <div>
                  <div className="text-[9px] font-bold text-slate-700 leading-none">Agata Piątek</div>
                  <div className="text-[8px] text-slate-400 mt-0.5">Nauczycielka</div>
                </div>
              </div>
            </div>
          </div>

          {/* Laptop Mockup (Center/Left) - Clean Quiz Start */}
          <div className="relative w-full max-w-[420px] mr-0 md:mr-16 z-20 shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
            {/* Screen bezel */}
            <div className="bg-slate-800 p-2.5 pb-0 rounded-t-2xl border-t border-x border-slate-700">
              <div className="relative w-full aspect-[16/10] bg-white overflow-hidden rounded-t-lg shadow-inner">
                <Image 
                  src="/images/quiz_screenshots.png" 
                  alt="Zrzut ekranu z quizem w ramce laptopa" 
                  fill 
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain object-top" 
                />
              </div>
            </div>
            {/* Laptop Keyboard Base */}
            <div className="h-3.5 bg-slate-700 rounded-b-xl border-b-2 border-slate-800 shadow-lg relative flex justify-center">
              <div className="w-14 h-1 bg-slate-800 rounded-b-md absolute top-0"></div>
            </div>
          </div>

          {/* Tablet Mockup (Right/Overlapping) - Clean Timeline Stages */}
          <div className="absolute right-6 bottom-12 w-64 aspect-[4/3] bg-slate-900 p-2.5 rounded-2xl border border-slate-800 shadow-2xl z-30 hidden md:block transform rotate-3 transition-transform duration-300 hover:scale-[1.02] hover:rotate-0">
            <div className="relative w-full h-full bg-white overflow-hidden rounded-lg">
              <Image 
                src="/images/quiz_screenshots.png" 
                alt="Zrzut ekranu z etapami w ramce tabletu" 
                fill 
                sizes="(max-width: 768px) 100vw, 30vw"
                className="object-contain object-bottom" 
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
