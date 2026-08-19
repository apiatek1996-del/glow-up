import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-extrabold text-xl shadow-md group-hover:bg-primary-hover transition-all">
            A
          </div>
          <span className="font-heading font-extrabold text-xl text-slate-900 tracking-tight group-hover:text-primary transition-colors">
            Ada
          </span>
        </Link>
        
        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { href: "#about", label: "O mnie" },
            { href: "#jak-to-dziala", label: "Jak to działa" },
            { href: "#faq", label: "FAQ" }
          ].map((link, idx) => (
            <Link 
              key={idx} 
              href={link.href} 
              className="text-sm text-slate-600 hover:text-primary font-bold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Primary CTA button */}
        <div>
          <Link 
            href="#cennik" 
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-extrabold rounded-xl text-white bg-primary hover:bg-primary-hover shadow-sm transition-all duration-300 hover:scale-105"
          >
            Zrób GLOW UP
          </Link>
        </div>

      </div>
    </header>
  );
}
