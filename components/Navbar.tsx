import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold font-heading text-xl shadow-md group-hover:bg-indigo-700 transition-colors">
            M
          </div>
          <span className="font-heading font-bold text-xl text-slate-900 tracking-tight group-hover:text-primary transition-colors">
            MojaStrona
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#about" className="text-slate-600 hover:text-primary font-medium transition-colors">
            O mnie
          </Link>
          <Link href="#zapis" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-semibold rounded-full text-white bg-primary hover:bg-primary-hover shadow-sm transition-all duration-300">
            Sprawdź swój poziom
          </Link>
        </nav>

        <div className="md:hidden flex items-center">
          <button aria-label="Menu" className="p-2 text-slate-600 hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
