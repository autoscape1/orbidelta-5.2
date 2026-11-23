import { ArrowRight, ChevronRight } from 'lucide-react';
import { PROBLEM_JOURNEY_STAGES } from '../data/agencyData';
import { RevealBlock } from './MotionPrimitives';
import { ResilientImage } from './ResilientImage';

interface ProblemSectionProps {
  onCtaClick: () => void;
}

export function ProblemSection({ onCtaClick }: ProblemSectionProps) {
  return (
    <section
      id="problema"
      className="bg-[#FFF8F3] py-16 lg:py-22 border-y border-[#F1E6DF]"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <RevealBlock className="max-w-3xl mb-12">
          <p className="text-sm font-semibold text-[#E53935] mb-3">
            02. O Problema
          </p>
          <h2
            className="font-display text-3xl md:text-4xl font-bold text-[#242424] tracking-tight leading-[1.15] mb-4"
            style={{ textWrap: 'balance' }}
          >
            Seu restaurante pode estar perdendo vendas antes mesmo do cliente
            fazer o pedido.
          </h2>
          <p className="text-base md:text-lg text-[#242424]/80 leading-relaxed">
            Não basta atrair pessoas. Cada etapa da experiência precisa
            trabalhar a favor da compra.
          </p>
        </RevealBlock>

        {/* Jornada horizontal ilustrada do consumidor */}
        <div className="relative" data-testid="problem-journey">
          {/* Trilho conector horizontal no desktop */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-[128px] left-14 right-14 h-[2px] bg-[#E53935]/20 z-0"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {PROBLEM_JOURNEY_STAGES.map((item, index) => {
              const isStaggered = index === 1;
              return (
                <RevealBlock
                  key={item.id}
                  delay={index * 0.06}
                  className={isStaggered ? 'lg:mt-6' : ''}
                >
                  <article className="group h-full bg-white rounded-[20px] border border-[#F1E6DF] overflow-hidden shadow-[0_6px_24px_rgba(36,36,36,0.04)] hover:border-[#E53935]/45 transition-all duration-200 flex flex-col">
                    {/* Fotografia com indicador diagnóstico */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#242424]">
                      <ResilientImage
                        src={item.image}
                        alt={item.imageAlt}
                        fallbackTitle={`${item.number} — ${item.stage}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                      />
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"
                      />

                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className="font-display text-2xl font-extrabold text-white leading-none tabular-nums drop-shadow-sm">
                          {item.number}
                        </span>
                      </div>

                      <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-2 text-white">
                        <span className="text-xs font-semibold tracking-wide text-[#E6AE45]">
                          {item.diagnosticTag}
                        </span>
                        {index < PROBLEM_JOURNEY_STAGES.length - 1 && (
                          <ChevronRight
                            className="hidden lg:block w-4 h-4 text-white/80 shrink-0"
                            aria-hidden="true"
                          />
                        )}
                      </div>
                    </div>

                    {/* Conteúdo da etapa */}
                    <div className="p-5 md:p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <p className="text-[11px] font-semibold text-[#E53935] mb-1 tabular-nums">
                          Etapa {item.number} da jornada
                        </p>
                        <h3 className="font-display text-xl font-bold text-[#242424] mb-2">
                          {item.number} — {item.stage}
                        </h3>
                        <p className="text-sm text-[#242424]/80 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="mt-5 pt-3 border-t border-[#F1E6DF] flex items-center justify-between gap-2 text-xs text-[#242424]/65">
                        <span>Sinal comum:</span>
                        <span className="font-semibold text-[#242424]">
                          {item.diagnosticSignal}
                        </span>
                      </div>
                    </div>
                  </article>
                </RevealBlock>
              );
            })}
          </div>
        </div>

        {/* Fechamento */}
        <RevealBlock className="mt-12 pt-8 border-t border-[#F1E6DF] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <p className="font-display text-lg md:text-xl font-bold text-[#242424] max-w-2xl leading-snug">
            O resultado não depende de uma única campanha. Depende de fazer
            todas as etapas funcionarem juntas.
          </p>

          <button
            type="button"
            onClick={onCtaClick}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#E53935] hover:bg-[#B91F24] rounded-xl transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#242424]"
          >
            <span>Quero corrigir minha jornada de vendas</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </RevealBlock>
      </div>
    </section>
  );
}
