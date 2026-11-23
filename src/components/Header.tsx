import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onCtaClick: () => void;
}

const NAV_LINKS = [
  { href: '#problema', label: 'O problema' },
  { href: '#metodologia', label: 'Metodologia' },
  { href: '#primeiros-30-dias', label: '30 dias' },
  { href: '#resultados', label: 'Projetos' },
  { href: '#faq', label: 'FAQ' },
];

export function Header({ onCtaClick }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMobileNavClick = () => {
    setMobileOpen(false);
  };

  const handleMobileCta = () => {
    setMobileOpen(false);
    onCtaClick();
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#F1E6DF]">
      <div className="max-w-[1200px] mx-auto px-6 h-[68px] flex items-center justify-between gap-8">
        <a
          href="#inicio"
          className="font-display text-xl font-extrabold tracking-tight text-[#242424] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E53935]"
        >
          Orbidelta<span className="text-[#E53935]">.</span>
        </a>

        <nav
          aria-label="Navegação principal"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#242424]/80"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#E53935] hover:underline underline-offset-4 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E53935]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onCtaClick}
            className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-[#E53935] hover:bg-[#B91F24] rounded-xl transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#242424]"
          >
            Quero vender mais
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border border-[#F1E6DF] text-[#242424] hover:bg-[#FFF8F3] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#E53935]"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden bg-white border-b border-[#F1E6DF] px-6 py-4 space-y-3"
        >
          <nav aria-label="Menu mobile" className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleMobileNavClick}
                className="py-2.5 text-base font-medium text-[#242424] hover:text-[#E53935] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            onClick={handleMobileCta}
            className="w-full py-3 px-5 text-sm font-semibold text-white bg-[#E53935] hover:bg-[#B91F24] rounded-xl transition-colors cursor-pointer"
          >
            Quero vender mais
          </button>
        </div>
      )}
    </header>
  );
}
