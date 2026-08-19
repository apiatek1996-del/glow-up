import { CheckCircle2, Gift, Map, Target, Zap, MailWarning } from "lucide-react";

export default function WhatYouGet() {
  const benefits = [
    {
      icon: <Target className="w-6 h-6 text-green-600" />,
      title: "Diagnozę na którym z 5 PRAWDZIWYCH etapów jesteś",
      desc: "nie według podręcznikowych literek, ale według tego, co naprawdzie blokuje Ci swobodne mówienie"
    },
    {
      icon: <Map className="w-6 h-6 text-orange-600" />,
      title: "Mapę wszystkich etapów",
      desc: "zobaczysz DOKŁADNIE ile Ci zostało do etapu, kiedy w końcu przestaniesz milknąć przy żartach"
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-600" />,
      title: "Jeden konkretny krok do przodu",
      desc: 'zamiast chaosu "wszystko na raz" dostaniesz JEDEN priorytet na najbliższe tygodnie'
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-green-600" />,
      title: 'Dowiesz się, dlaczego "znam słówka, ale nie mogę ich użyć"',
      desc: "i co z tym zrobić na Twoim konkretnym etapie"
    },
    {
      icon: <MailWarning className="w-6 h-6 text-brand-pink" />,
      title: "Ostrzeżenia przed typowymi pułapkami",
      desc: "a na moim newsletterze dodatkowo otrzymasz ostrzeżenia przed typowymi pułapkami Twojego etapu – tymi, w które wpadają wszyscy i przez które marnują miesiące"
    }
  ];

  return (
    <section className="bg-slate-50 py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 font-medium text-sm mb-6">
            <Gift className="w-4 h-4" />
            <span>Co dostajesz</span>
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-6 leading-tight">
            Niech zgadnę: sama nie wiesz, czy jesteś na A2 czy może już na B1. <br/>
            <span className="text-primary italic text-3xl md:text-3xl">Albo co lepiej teraz ćwiczyć - jeszcze gramatykę czy już powinnam zacząć mówić bez problemu?</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Teraz zapomnij o literach A2, B1, C1. Oto co naprawdę dostaniesz w RTG Twojego Hiszpańskiego:
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 max-w-3xl mx-auto">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 shrink-0 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
