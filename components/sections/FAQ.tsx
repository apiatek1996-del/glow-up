"use client"

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Czy to jest lekcja hiszpańskiego?',
      a: 'Nie. To diagnoza Twojej aktualnej sytuacji + indywidualne zalecenia dotyczące dalszej nauki.'
    },
    {
      q: 'Czy muszę przygotować się do konsultacji?',
      a: 'Nie musisz robić żadnych specjalnych ćwiczeń. Przed spotkaniem dostaniesz formularz, dzięki któremu poznam Twoją historię z hiszpańskim, cele i trudności.'
    },
    {
      q: 'Czy GLOW UP jest dla mnie, jeśli nie mieszkam w Hiszpanii?',
      a: 'Tak. Kluczowe jest to, na jakim jesteś etapie, czego potrzebujesz i co chcesz osiągnąć.'
    },
    {
      q: 'A jeśli mam już mnóstwo materiałów do nauki?',
      a: 'Tym lepiej. Nie zawsze potrzebujesz kolejnych. Podczas GLOW UP możesz dowiedzieć się, jak lepiej wykorzystać te, które już masz.'
    },
    {
      q: 'Co jeśli nie wiem, co właściwie mnie blokuje?',
      a: 'To właśnie jeden z powodów, dla których powstał GLOW UP. Nie musisz znać odpowiedzi przed konsultacją.'
    },
    {
      q: 'Kiedy dostanę swoje materiały i zalecenia?',
      a: 'Wstępne zalecenia otrzymasz jeszcze tego samego dnia. Pełne podsumowanie, indywidualne zalecenia i materiały na pierwszy miesiąc dostaniesz maksymalnie w ciągu 7 dni od konsultacji.'
    },
    {
      q: 'Co jeśli żaden z dostępnych terminów mi nie pasuje?',
      a: 'Spokojnie ustalimy termin, który będzie pasował nam obu. Jeśli mimo prób w ciągu 2 tygodni nie uda nam się znaleźć wspólnego terminu i zdecydujesz się zrezygnować z konsultacji, zwrócę Ci pieniądze.'
    },
    {
      q: 'Czy po GLOW UP zostanę sama z zaleceniami?',
      a: 'W wersji GLOW UP otrzymujesz wszystko, czego potrzebujesz, żeby zacząć działać samodzielnie. Jeśli chcesz dodatkowego wsparcia, wybierz GLOW UP PREMIUM, w którym przez 3 miesiące możesz konsultować swoje wątpliwości.'
    },
    {
      q: 'Co dokładnie dostaję w Premium?',
      a: 'Wszystko z GLOW UP + 3 miesiące wsparcia, kontakt przez aplikację, dostęp do Strefy Hiszpański i Klubu Hiszpański Todos Los Días, brak limitu pytań i odpowiedzi do 24 godzin.'
    },
    {
      q: 'A co jeśli nie będę miała czasu wdrożyć zaleceń?',
      a: 'Właśnie dlatego podczas konsultacji nie będziemy układać planu idealnego na papierze, ale niemożliwego do zrealizowania w Twoim życiu. Ustalimy, co możesz realnie robić i jak wpleść hiszpański w swoją codzienność, żeby nauka była możliwa do utrzymania. Bo lepsze 15 minut regularnej, dobrze dobranej pracy niż 2 godziny ambitnego planu, którego nie uda Ci się zrealizować.'
    }
  ];

  return (
    <section id="faq" className="bg-slate-50 py-20 md:py-32 relative overflow-hidden">
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
            Zanim zrobisz GLOW UP — kilka ważnych odpowiedzi.
          </h2>
          <p className="text-xl text-slate-600 mb-10 italic">
            Najczęściej zadawane pytania
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
