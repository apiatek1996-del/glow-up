import { Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 md:py-24 border-t border-slate-800 relative overflow-hidden">
      {/* Dekoracyjne tło */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-16">
          
          <div className="max-w-lg">
            <h3 className="text-white font-heading text-2xl font-bold mb-6">
              Agata Piątek — Ekspertka od Hiszpańskiego dla Polaków w Hiszpanii
            </h3>
            <p className="leading-relaxed text-lg mb-8 text-slate-300">
              Mieszkam w Hiszpanii i pomagam Polakom przejść od <span className="text-primary italic">"Hola, buenos días"</span> do swobodnych rozmów przy kawie bez stresu.
            </p>
            <p className="text-sm text-slate-500">
              Magistra filologii hiszpańskiej, 8 lat doświadczenia w nauczaniu.
            </p>
          </div>

          <div className="md:justify-self-end">
            <h4 className="text-white font-bold mb-6 text-lg">Skontaktuj się</h4>
            <div className="inline-flex flex-col gap-4">
              <a href="mailto:kontakt@ohiszpanski.pl" className="group flex items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-primary/50 transition-colors w-full sm:w-auto">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-slate-200 font-medium group-hover:text-white transition-colors">
                    kontakt@ohiszpanski.pl
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
          
        </div>

        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium">
          <p>© {new Date().getFullYear()} Agata Piątek. RTG Twojego Hiszpańskiego.</p>
          <div className="flex gap-6">
            <a href="https://ohiszpanski.pl/polityka-prywatnosci/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Polityka prywatności</a>
            <a href="https://docs.google.com/document/d/1fZxywdbv-IiaTApd_8Tdx3gE68b_QNFjMV_pbQj9y64/edit?tab=t.0" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Regulamin</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
