"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Czy to jest zwykła lekcja hiszpańskiego?',
      a: 'Nie. To diagnostyka Twojej aktualnej sytuacji językowej + przygotowanie indywidualnych zaleceń i planu działania do samodzielnej lub kierowanej pracy.'
    },
    {
      q: 'Czy muszę jakoś specjalnie przygotować się do konsultacji?',
      a: 'Nie musisz nic powtarzać ani robić testów wcześniej. Przed naszym spotkaniem otrzymasz formularz, który pomoże mi poznać Twoją historię nauki, cele oraz trudności.'
    },
    {
      q: 'Czy program GLOW UP jest dla mnie, jeśli nie mieszkam w Hiszpanii?',
      a: 'Tak. Choć wiele moich uczennic mieszka na stałe w Hiszpanii, program jest w 100% efektywny dla każdego, kto ma problem z barierą językową niezależnie od lokalizacji.'
    },
    {
      q: 'Co jeśli mam już na półce mnóstwo materiałów do nauki?',
      a: 'To świetnie. Nie będziemy kupować nowych książek. Podczas konsultacji nauczę Cię, jak prawidłowo i efektywnie korzystać z materiałów, które już zgromadziłaś.'
    },
    {
      q: 'Co jeśli nie potrafię dokładnie określić, co mnie blokuje?',
      a: 'Właśnie po to jest to spotkanie. Za pomocą dedykowanych pytań i swobodnej rozmowy sama namierzę blokadę i pokażę Ci ją w podsumowaniu.'
    },
    {
      q: 'Kiedy otrzymam zalecenia i plan w PDF?',
      a: 'Wstępne kierunki działania nakreślę Ci pod koniec rozmowy. Pełną pisemną diagnozę, spersonalizowany plan i materiały otrzymasz na maila w ciągu 7 dni od konsultacji.'
    },
    {
      q: 'Co w przypadku, gdy żaden termin w kalendarzu mi nie pasuje?',
      a: 'Napisz do mnie bezpośrednio – wspólnie znajdziemy dogodny termin. Jeżeli w ciągu 2 tygodni nie uda nam się dogadać terminu i zrezygnujesz, zwracam 100% kwoty.'
    },
    {
      q: 'Czy po konsultacji zostaję sama z materiałami?',
      a: 'W pakiecie standardowym otrzymujesz kompletny plan do samodzielnej realizacji. Jeśli zależy Ci na wsparciu i możliwości zadawania pytań na bieżąco, wybierz wersję Premium.'
    },
    {
      q: 'Co dokładnie wchodzi w zakres wsparcia w pakiecie Premium?',
      a: 'Dostajesz wszystko z pakietu podstawowego oraz 3 miesiące asysty przez dedykowaną aplikację. Odpowiadam na Twoje pytania i koryguję błędy w ciągu 24 godzin.'
    },
    {
      q: 'A co jeśli nie znajdę czasu na wdrożenie planu?',
      a: 'Podczas konsultacji nie tworzymy idealnego planu z bajki, ale plan skrojony pod Twoje realne życie. Ustalimy jak wpleść regularne 15 minut hiszpańskiego w Twój plan dnia.'
    }
  ];

  return (
    <section id="faq" className="bg-warmSun py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        
        {/* Nagłówek */}
        <div className="text-center mb-16">
          <div className="w-24 h-24 rounded-full border-4 border-white shadow-xl overflow-hidden relative mx-auto mb-6">
             <Image 
               src="/images/avatar.jpg" 
               alt="Ada – Autorka programu Glow Up" 
               width={96}
               height={96}
               className="w-full h-full object-cover object-top" 
             />
          </div>
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-slate-900 mb-4 leading-tight">
            Częste pytania (FAQ)
          </h2>
          <p className="text-slate-500 font-semibold text-base md:text-lg">
            Wszystko, co warto wiedzieć przed startem programu:
          </p>
        </div>

        {/* Akordeon - białe elementy na kremowym tle z pomarańczowymi ramkami */}
        <div className="space-y-4 max-w-2xl mx-auto">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            
            return (
              <div 
                key={idx} 
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-primary shadow-sm' : 'border-orange-100'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                >
                  <span className="font-bold text-slate-800 text-sm md:text-base pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-455 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`} />
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-semibold">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
