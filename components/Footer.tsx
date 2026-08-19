import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-t border-slate-200 text-slate-600 py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-medium">
            &copy; {currentYear} MojaStrona. Wszelkie prawa zastrzeżone.
          </p>
        </div>
        <div className="flex gap-6">
          <Link 
            href="https://docs.google.com/document/d/1fZxywdbv-IiaTApd_8Tdx3gE68b_QNFjMV_pbQj9y64/edit?tab=t.0" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors text-sm font-medium"
          >
            Regulamin
          </Link>
          <Link 
            href="https://ohiszpanski.pl/polityka-prywatnosci/" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors text-sm font-medium"
          >
            Polityka Prywatności
          </Link>
        </div>
      </div>
    </footer>
  );
}
