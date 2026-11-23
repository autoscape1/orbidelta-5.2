import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import {
  PORTFOLIO_CASES,
  PORTFOLIO_DISCLAIMER,
  PortfolioCategory,
  RestaurantSegment,
} from '../data/agencyData';
import { filterPortfolioCases } from '../utils/diagnostic';
import { AnimatedMetric, RevealBlock } from './MotionPrimitives';
import { ResilientImage } from './ResilientImage';

const CATEGORIES: PortfolioCategory[] = [
  'Todos',
  'Pizzaria',
  'Culinária japonesa',
];

interface PortfolioSectionProps {
  onApplyForSegment: (segment: RestaurantSegment) => void;
  onPortfolioCtaClick: () => void;
}

export function PortfolioSection({
  onApplyForSegment,
  onPortfolioCtaClick,
}: PortfolioSectionProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<PortfolioCategory>('Todos');

  const visibleCases = filterPortfolioCases(PORTFOLIO_CASES, selectedCategory);

  return (
    <section
      id="resultados"
      className="bg-white text-[#242424] py-16 lg:py-22"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <RevealBlock className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div className="max-w-xl">
            <p className="text-sm font-semibold text-[#E53935] mb-3">
              05. Projetos e Resultados
            </p>
            <h2
              className="font-display text-3xl md:text-4xl font-bold text-[#242424] tracking-tight leading-[1.15] mb-3"
              style={{ textWrap: 'balance' }}
            >
              Estratégia que sai do planejamento e chega aos números.
            </h2>
            <p className="text-base md:text-lg text-[#242424]/80 leading-relaxed">
              Conheça alguns projetos e indicadores de evolução da operação.
            </p>
          </div>

          <div
            role="group"
            aria-label="Filtrar projetos por segmento"
            className="flex flex-wrap lg:flex-nowrap items-center gap-1 p-1 bg-[#FFF8F3] rounded-xl border border-[#F1E6DF] self-start lg:self-auto shrink-0"
          >
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#E53935] ${
                    isActive
                      ? 'bg-[#E53935] text-white'
                      : 'text-[#242424]/75 hover:text-[#242424]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </RevealBlock>

        {/* Nota de transparência das simulações */}
        <RevealBlock delay={0.06} y={20}>
          <div className="rounded-xl bg-[#FFF8F3] border border-[#F1E6DF] px-4 py-3 mb-10 text-xs text-[#242424]/75 leading-relaxed">
            {PORTFOLIO_DISCLAIMER}
          </div>
        </RevealBlock>

        {/* Layout zigue-zague horizontal amplo */}
        <div data-testid="portfolio-zigzag" className="space-y-8">
          {visibleCases.map((item, index) => {
            const isImageRight = index % 2 === 1;

            return (
              <RevealBlock
                key={`${selectedCategory}-${item.id}`}
                delay={index === 0 ? 0.04 : 0.08}
                y={32}
              >
                <article
                  className={`group rounded-[24px] border border-[#F1E6DF] overflow-hidden shadow-[0_8px_28px_rgba(36,36,36,0.04)] ${
                    isImageRight ? 'bg-[#FFF8F3]' : 'bg-white'
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                    {/* Fotografia em destaque (mobile sempre vem primeiro com order-1) */}
                    <div
                      className={`lg:col-span-5 relative min-h-[260px] sm:min-h-[320px] lg:min-h-[380px] overflow-hidden bg-[#242424] order-1 ${
                        isImageRight ? 'lg:order-2' : 'lg:order-1'
                      }`}
                    >
                      <ResilientImage
                        src={item.image}
                        alt={item.imageAlt}
                        fallbackTitle={`${item.clientName} — ${item.category}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent"
                      />
                      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3 text-white">
                        <div>
                          <p className="text-xs font-semibold text-[#E6AE45] mb-1">
                            {item.code} · {item.category}
                          </p>
                          <h3 className="font-display text-2xl font-extrabold text-white leading-tight">
                            {item.clientName}
                          </h3>
                        </div>
                        <span className="text-xs font-semibold text-white/90 whitespace-nowrap tabular-nums">
                          {item.period}
                        </span>
                      </div>
                    </div>

                    {/* Bloco de identificação e indicadores comparativos */}
                    <div
                      className={`lg:col-span-7 p-6 md:p-8 flex flex-col justify-between order-2 ${
                        isImageRight ? 'lg:order-1' : 'lg:order-2'
                      }`}
                    >
                      <div>
                        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-[#F1E6DF]">
                          <div className="text-xs font-semibold text-[#242424]/70">
                            <span className="text-[#E53935]">{item.code}</span>
                            <span aria-hidden="true"> · </span>
                            <span>{item.clientName}</span>
                            <span aria-hidden="true"> · </span>
                            <span>Segmento: {item.category}</span>
                          </div>
                          <span className="text-xs font-medium text-[#242424]/65 tabular-nums">
                            Período ilustrativo: {item.period}
                          </span>
                        </div>

                        {/* Destaque visual: Compras, Custo por compra e ROAS */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-5">
                          {item.featuredKpis.map((kpi) => (
                            <div
                              key={kpi.label}
                              className={`rounded-xl border border-[#F1E6DF] p-4 ${
                                isImageRight ? 'bg-white' : 'bg-[#FFF8F3]'
                              }`}
                            >
                              <p className="text-xs font-semibold text-[#242424]/70 mb-2">
                                {kpi.label}
                              </p>
                              <div className="flex items-baseline gap-2 flex-wrap">
                                <span className="text-xs font-medium text-[#242424]/55 line-through tabular-nums">
                                  {kpi.initialValue}
                                </span>
                                <span
                                  aria-hidden="true"
                                  className="text-xs text-[#242424]/40"
                                >
                                  →
                                </span>
                                <span className="font-display text-xl md:text-2xl font-extrabold text-[#299B65] tabular-nums leading-none">
                                  <AnimatedMetric
                                    value={kpi.finalNumeric}
                                    decimals={kpi.finalDecimals}
                                    prefix={kpi.finalPrefix}
                                    suffix={kpi.finalSuffix}
                                    fallbackText={kpi.finalText}
                                  />
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Demais indicadores comparativos */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                          {item.secondaryMetrics.map((metric) => (
                            <div
                              key={metric.label}
                              className="rounded-xl border border-[#F1E6DF]/80 px-3 py-2.5 bg-transparent"
                            >
                              <p className="text-[11px] font-medium text-[#242424]/65 mb-1">
                                {metric.label}
                              </p>
                              <p className="text-xs sm:text-[13px] font-bold text-[#242424] tabular-nums leading-snug">
                                <span className="text-[#242424]/55 font-medium whitespace-nowrap">
                                  {metric.initialValue}
                                </span>{' '}
                                <span className="whitespace-nowrap">
                                  → {metric.finalValue}
                                </span>
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Destaques + ação */}
                      <div className="pt-4 border-t border-[#F1E6DF] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <p className="text-xs font-semibold text-[#299B65] tabular-nums">
                          {item.highlights.join('  |  ')}
                        </p>

                        <button
                          type="button"
                          onClick={() => onApplyForSegment(item.category)}
                          className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-[#242424] bg-white hover:bg-[#E53935] hover:text-white border border-[#F1E6DF] rounded-xl transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#E53935]"
                        >
                          <span>Aplicar no meu segmento</span>
                          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              </RevealBlock>
            );
          })}
        </div>

        <RevealBlock className="mt-10 pt-8 border-t border-[#F1E6DF] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <p className="text-sm font-medium text-[#242424]/80 max-w-2xl">
            Quer entender como essa metodologia pode ser aplicada à realidade do
            seu restaurante?
          </p>

          <button
            type="button"
            onClick={onPortfolioCtaClick}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#E53935] hover:bg-[#B91F24] rounded-xl transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#242424]"
          >
            <span>Quero conhecer a Orbidelta</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </RevealBlock>
      </div>
    </section>
  );
}
