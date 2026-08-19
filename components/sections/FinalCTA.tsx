import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import MailerLiteForm from "../ui/MailerLiteForm";

export default function FinalCTA() {
  return (
    <section className="bg-primary py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <Sparkles className="w-12 h-12 text-yellow-200 mx-auto mb-6" />
        
        <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight">
          Więc czy możemy wreszcie pożegnać zgadywanie, nad czym pracować?
        </h2>
        
        <p className="text-xl text-white/90 md:text-2xl mb-10 font-light max-w-2xl mx-auto">
          Twój hiszpański nie idzie do przodu, bo nie wiesz, na którym etapie jesteś.
          <br/><br/>
          <strong className="text-white bg-slate-900/20 px-4 py-1 rounded-full italic font-semibold">6 pytań da Ci tą jasność.</strong>
        </p>

        <div id="zapis" className="mt-8 max-w-lg mx-auto relative z-20 text-left">
          <MailerLiteForm />
        </div>
      </div>

      {/* Dekoracyjny Avatar z dymkiem - prawy dolny róg */}
      <div className="hidden lg:flex absolute bottom-0 right-0 xl:right-[5%] flex-col items-end z-20 pointer-events-none">
        
        {/* Dymek */}
        <div className="relative z-30 bg-white text-slate-900 px-5 py-3 rounded-[1.5rem] rounded-br-sm shadow-xl -mb-6 max-w-[200px] rotate-[-3deg] translate-x-2 translate-y-4">
          <p className="font-bold text-base font-heading text-primary leading-tight mb-0.5">Mam plan!</p>
          <p className="text-xs font-medium leading-snug">Chodź, zobaczymy się po drugiej stronie testu. 😊</p>
        </div>
        
        {/* Avatar - wycięte zdjęcie */}
        <div className="w-56 h-[260px] overflow-visible flex items-end justify-end pointer-events-auto origin-bottom hover:scale-105 transition-transform duration-500">
          <Image 
            src="/images/cta-photo.svg" 
            alt="Agata - autorka kursu hiszpańskiego" 
            width={224}
            height={260}
            className="w-full h-full object-contain object-bottom drop-shadow-[0_20px_20px_rgba(0,0,0,0.25)]" 
          />
        </div>
      </div>
    </section>
  );
}
