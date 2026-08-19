"use client"

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Co się stanie z moimi odpowiedziami? Czy będziesz mi potem wysyłać spam?',
      a: 'Twoje odpowiedzi służą tylko do wygenerowania diagnozy. Nikt ich nie zobaczy. Dostajesz wynik i jeśli chcesz się do mnie odezwać, robisz to i wtedy działamy dalej. Jeśli nie Twoje odpowiedzi i wynik zostają tylko dla Ciebie.'
    },
    {
      q: 'Ile czasu zajmuje ten test?',
      a: '6 pytań, każde to jedno kliknięcie. Maksymalnie 3 minuty. Wynik dostajesz od razu.'
    },
    {
      q: 'A co jeśli wyjdzie mi, że jestem na początku? Będę się czuła źle?',
      a: 'Przeciwnie — poczujesz ulgę. Będziesz wiedziała gdzie jesteś i na czym się teraz najlepiej skupić. Diagnoza to nie wyrok, to mapa wyjścia z labiryntu.'
    },
    {
      q: 'Czy to jeden z tych testów, gdzie każdy dostaje ten sam wynik?',
      a: 'Mam 5 różnych diagnoz opartych na pracy z 200+ osobami. Każda to konkretne wskazówki dla Twojego etapu, nie ogólnikowe "ucz się więcej".'
    }
  ];

  return (
    <section className="bg-slate-50 py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-12">
            <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full bg-white border-4 md:border-[6px] border-white shadow-2xl flex items-center justify-center overflow-hidden relative mx-auto mb-8">
               {/* Avatar - wycięta twarz z uśmiechem */}
               <Image 
                 src="/images/avatar.jpg" 
                 alt="Ada - Portret autorki testu" 
                 width={192}
                 height={192}
                 className="w-full h-full object-cover object-top" 
               />
            </div>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-slate-900 mb-6 leading-tight">
            FAQ
          </h2>
          <p className="text-xl text-slate-600 mb-10 italic">
            Już odpowiadam
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === idx ? 'border-primary shadow-md' : 'border-slate-200'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-bold text-lg text-slate-900 pr-4">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-primary' : ''}`} />
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
