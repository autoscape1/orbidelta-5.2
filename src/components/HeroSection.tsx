import { ArrowRight, ShoppingBag, TrendingUp } from 'lucide-react';
import { HERO_DEMO_CARDS } from '../data/agencyData';
import { AnimatedMetric } from './MotionPrimitives';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  onPrimaryCtaClick: () => void;
  onMethodologyCtaClick: () => void;
}

export function HeroSection({
  onPrimaryCtaClick,
  onMethodologyCtaClick,
}: HeroSectionProps) {
  return (
    <section id="inicio" className="bg-white pt-8 pb-14 lg:pt-12 lg:pb-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-xs sm:text-sm font-semibold text-[#E53935] tracking-wide mb-3">
              Marketing de performance para restaurantes
            </p>

            <h1
              className="font-display font-extrabold text-[#242424] tracking-tight leading-[1.1] mb-5"
              style={{
                fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
                textWrap: 'balance',
              }}
            >
              Chega de somente curtidas. Seu restaurante precisa de vendas.
            </h1>

            <p className="text-base md:text-lg text-[#242424]/85 leading-relaxed max-w-[54ch] mb-7">
              Estruturamos o marketing digital do seu restaurante para atrair
              clientes, valorizar seus produtos e transformar interesse em
              pedidos.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3.5">
              <button
                type="button"
                onClick={onPrimaryCtaClick}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm md:text-base font-semibold text-white bg-[#E53935] hover:bg-[#B91F24] rounded-xl transition-all duration-150 hover:-translate-y-0.5 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#242424]"
              >
                <span>Quero vender mais</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={onMethodologyCtaClick}
                className="inline-flex items-center justify-center px-6 py-4 text-sm md:text-base font-semibold text-[#242424] bg-[#FFF8F3] hover:bg-[#f7ece4] border border-[#F1E6DF] rounded-xl transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E53935]"
              >
                Conheça nossa metodologia
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col">
            <div className="relative flex-1 min-h-[340px] lg:min-h-[460px]">
              <div
                aria-hidden="true"
                className="hidden sm:block absolute -bottom-3 -right-3 w-full h-full rounded-[20px] bg-[#E53935]"
              />
              <div className="relative w-full h-full overflow-hidden rounded-[20px] border border-[#F1E6DF] bg-[#FFF8F3]">
                <ResilientImage
                  src="/src/assets/images/hero_gastronomy_dish_1794880717923.jpg"
                  alt="Hambúrguer artesanal com queijo cheddar derretido servido em prato de cerâmica"
                  fallbackTitle="Fotografia gastronômica Orbidelta"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/65 via-black/30 to-transparent pointer-events-none"
                />

                {/* Pequenos elementos gráficos de pedidos e crescimento sem poluir */}
                <div className="hidden sm:flex items-center gap-2.5 absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-3.5 py-2 shadow-sm border border-[#F1E6DF]">
                  <ShoppingBag
                    className="w-4 h-4 text-[#E53935] shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-xs font-semibold text-[#242424] whitespace-nowrap">
                    Operação orientada a pedidos
                  </span>
                </div>

                <div className="hidden sm:flex items-center gap-2 absolute top-4 right-4 bg-[#242424]/90 text-white rounded-xl px-3.5 py-2 shadow-sm">
                  <TrendingUp
                    className="w-4 h-4 text-[#299B65] shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-xs font-semibold whitespace-nowrap">
                    Crescimento mensurável
                  </span>
                </div>

                <div className="absolute inset-x-3 bottom-3 grid grid-cols-3 gap-2 sm:gap-3">
                  {HERO_DEMO_CARDS.map((card) => {
                    const fallbackText = `${card.prefix ?? ''}${
                      card.decimals
                        ? card.numericValue.toFixed(card.decimals).replace('.', ',')
                        : card.numericValue
                    }${card.suffix}`;

                    return (
                      <div
                        key={card.id}
                        className="bg-white rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 shadow-sm border border-[#F1E6DF]"
                      >
                        <div className="font-display text-base sm:text-xl font-extrabold text-[#299B65] tabular-nums leading-tight">
                          <AnimatedMetric
                            value={card.numericValue}
                            decimals={card.decimals}
                            prefix={card.prefix}
                            suffix={card.suffix}
                            fallbackText={fallbackText}
                          />
                        </div>
                        <p className="text-[11px] sm:text-xs font-medium text-[#242424]/80 mt-0.5 leading-tight">
                          {card.label}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <p className="mt-4 text-[11px] text-[#242424]/60 text-right">
              Indicadores demonstrativos de apresentação visual (simulações de
              layout, não representam resultados garantidos).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
