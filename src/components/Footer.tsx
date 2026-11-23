import { WHATSAPP_CONTACT } from '../data/agencyData';

export function Footer() {
  return (
    <footer className="bg-[#242424] text-white py-12">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-white/15 items-start">
          <div className="md:col-span-5">
            <a
              href="#inicio"
              className="font-display text-2xl font-extrabold tracking-tight text-white"
            >
              Orbidelta<span className="text-[#E53935]">.</span>
            </a>
            <p className="mt-3 text-sm font-medium text-white/85 leading-relaxed max-w-sm">
              Estratégia, marketing e performance para restaurantes.
            </p>
          </div>

          <div className="md:col-span-4">
            <p className="font-display text-xs font-bold text-white/60 mb-3">
              Navegação
            </p>
            <nav
              aria-label="Links institucionais"
              className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-sm text-white/80"
            >
              <a
                href="#inicio"
                className="hover:text-white transition-colors whitespace-nowrap"
              >
                Início
              </a>
              <a
                href="#problema"
                className="hover:text-white transition-colors whitespace-nowrap"
              >
                O problema
              </a>
              <a
                href="#metodologia"
                className="hover:text-white transition-colors whitespace-nowrap"
              >
                Metodologia
              </a>
              <a
                href="#primeiros-30-dias"
                className="hover:text-white transition-colors whitespace-nowrap"
              >
                30 dias
              </a>
              <a
                href="#resultados"
                className="hover:text-white transition-colors whitespace-nowrap"
              >
                Projetos
              </a>
              <a
                href="#faq"
                className="hover:text-white transition-colors whitespace-nowrap"
              >
                FAQ
              </a>
            </nav>
          </div>

          <div className="md:col-span-3">
            <p className="font-display text-xs font-bold text-white/60 mb-3">
              WhatsApp
            </p>
            <a
              href={WHATSAPP_CONTACT.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-bold text-white hover:text-[#E6AE45] transition-colors tabular-nums"
            >
              {WHATSAPP_CONTACT.display}
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-white/70">
          <p className="font-semibold text-white/90">
            Chega de somente curtidas. Seu restaurante precisa de vendas.
          </p>
          <p>© 2026 Orbidelta. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
