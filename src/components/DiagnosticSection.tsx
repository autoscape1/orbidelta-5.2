import { FormEvent, useState } from 'react';
import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { RestaurantSegment, WHATSAPP_CONTACT } from '../data/agencyData';
import {
  buildWhatsAppMessageUrl,
  QuickContactErrors,
  validateQuickContact,
} from '../utils/diagnostic';
import { ResilientImage } from './ResilientImage';

const SEGMENTS: RestaurantSegment[] = [
  'Pizzaria',
  'Restaurante',
  'Culinária japonesa',
  'Hamburgueria',
  'Gastronomia',
  'Delivery',
];

interface DiagnosticSectionProps {
  segment: RestaurantSegment;
  onSegmentChange: (segment: RestaurantSegment) => void;
}

export function DiagnosticSection({
  segment,
  onSegmentChange,
}: DiagnosticSectionProps) {
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState<QuickContactErrors>({});
  const [whatsAppUrl, setWhatsAppUrl] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      name,
      businessName,
      segment,
      phone,
    };

    const validationErrors = validateQuickContact(payload);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setWhatsAppUrl(buildWhatsAppMessageUrl(payload));
  };

  return (
    <section id="contato" className="bg-[#E53935] text-white py-16 lg:py-22">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <p className="text-sm font-semibold text-white/90 mb-3">
              07. Diagnóstico · Orbidelta
            </p>
            <h2
              className="font-display text-3xl md:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-[1.12] mb-5"
              style={{ textWrap: 'balance' }}
            >
              Seu restaurante merece mais do que curtidas.
            </h2>
            <p className="text-base md:text-lg text-white/95 leading-relaxed mb-4">
              Vamos estruturar uma estratégia para transformar sua presença
              digital em uma operação mais preparada para atrair clientes e
              gerar pedidos.
            </p>
            <p className="text-sm md:text-base text-white/90 leading-relaxed mb-7">
              Fale com nossa equipe e descubra o que podemos melhorar no
              marketing do seu restaurante.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
              <a
                href={WHATSAPP_CONTACT.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm md:text-base font-bold text-[#E53935] bg-white hover:bg-[#FFF8F3] rounded-xl transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>Quero conhecer a Orbidelta</span>
              </a>
            </div>

            <p className="text-sm font-semibold text-white tabular-nums">
              WhatsApp: {WHATSAPP_CONTACT.display}
            </p>
          </div>

          <div className="lg:col-span-6 bg-white text-[#242424] rounded-[20px] overflow-hidden border border-[#F1E6DF]">
            <div className="h-44 sm:h-48 w-full overflow-hidden border-b border-[#F1E6DF] bg-[#FFF8F3]">
              <ResilientImage
                src="/src/assets/images/portfolio_pizza_1794880718942.jpg"
                alt="Pizza artesanal saindo do forno a lenha com queijo derretido"
                fallbackTitle="Orbidelta Marketing para Restaurantes"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 md:p-8">
              {whatsAppUrl ? (
                <div data-testid="diagnostic-confirmation" className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-6 h-6 text-[#299B65] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="font-display text-xl font-bold text-[#242424]">
                        Solicitação pronta para {businessName}
                      </h3>
                      <p className="mt-1 text-sm text-[#242424]/75 leading-relaxed">
                        Preparamos sua mensagem com os dados do restaurante para
                        iniciar o atendimento no WhatsApp com nossa equipe.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <a
                      href={whatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#299B65] hover:bg-[#228254] rounded-xl transition-colors whitespace-nowrap"
                    >
                      <MessageCircle className="w-4 h-4" aria-hidden="true" />
                      <span>Abrir conversa no WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setWhatsAppUrl(null)}
                      className="px-5 py-3.5 text-sm font-semibold text-[#242424] border border-[#F1E6DF] hover:border-[#242424] rounded-xl transition-colors cursor-pointer"
                    >
                      Alterar dados
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div>
                    <h3 className="font-display text-lg font-bold text-[#242424]">
                      Converse com a nossa equipe pelo WhatsApp
                    </h3>
                    <p className="text-xs sm:text-sm text-[#242424]/70 mt-0.5">
                      Fale com nossa equipe e descubra o que podemos melhorar no
                      marketing do seu restaurante.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label
                        htmlFor="lead-name"
                        className="block text-xs font-semibold text-[#242424] mb-1"
                      >
                        Seu nome
                      </label>
                      <input
                        id="lead-name"
                        name="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ex: Lucas Andrade"
                        aria-invalid={Boolean(errors.name)}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#E6D9D0] bg-white text-[#242424] focus:outline-none focus:border-[#E53935]"
                      />
                      {errors.name && (
                        <p role="alert" className="mt-1 text-xs text-[#E53935]">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="lead-restaurant"
                        className="block text-xs font-semibold text-[#242424] mb-1"
                      >
                        Nome do restaurante
                      </label>
                      <input
                        id="lead-restaurant"
                        name="businessName"
                        type="text"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        placeholder="Ex: Pizzaria 1"
                        aria-invalid={Boolean(errors.businessName)}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#E6D9D0] bg-white text-[#242424] focus:outline-none focus:border-[#E53935]"
                      />
                      {errors.businessName && (
                        <p role="alert" className="mt-1 text-xs text-[#E53935]">
                          {errors.businessName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label
                        htmlFor="lead-segment"
                        className="block text-xs font-semibold text-[#242424] mb-1"
                      >
                        Segmento
                      </label>
                      <select
                        id="lead-segment"
                        name="segment"
                        value={segment}
                        onChange={(e) =>
                          onSegmentChange(e.target.value as RestaurantSegment)
                        }
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#E6D9D0] bg-white text-[#242424] focus:outline-none focus:border-[#E53935]"
                      >
                        {SEGMENTS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="lead-phone"
                        className="block text-xs font-semibold text-[#242424] mb-1"
                      >
                        WhatsApp
                      </label>
                      <input
                        id="lead-phone"
                        name="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(11) 91788-2507"
                        aria-invalid={Boolean(errors.phone)}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#E6D9D0] bg-white text-[#242424] focus:outline-none focus:border-[#E53935]"
                      />
                      {errors.phone && (
                        <p role="alert" className="mt-1 text-xs text-[#E53935]">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#E53935] hover:bg-[#B91F24] rounded-xl transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#242424]"
                  >
                    <span>Quero conhecer a Orbidelta</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
