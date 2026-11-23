import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { METHODOLOGY_STAGES } from '../data/agencyData';
import { RevealBlock } from './MotionPrimitives';
import { ResilientImage } from './ResilientImage';

interface MethodSectionProps {
  onCtaClick: () => void;
}

export function MethodSection({ onCtaClick }: MethodSectionProps) {
  const [selectedStage, setSelectedStage] = useState<number>(0);
  const prefersReducedMotion = useReducedMotion();
  const activeStage = METHODOLOGY_STAGES[selectedStage] || METHODOLOGY_STAGES[0];

  return (
    <section id="metodologia" className="bg-white py-16 lg:py-22">
      <div className="max-w-[1200px] mx-auto px-6">
        <RevealBlock className="max-w-3xl mb-10">
          <p className="text-sm font-semibold text-[#E53935] mb-3">
            03. Metodologia Orbidelta
          </p>
          <h2
            className="font-display text-3xl md:text-4xl font-bold text-[#242424] tracking-tight leading-[1.15] mb-4"
            style={{ textWrap: 'balance' }}
          >
            Do primeiro contato ao pedido: uma operação pensada para gerar
            crescimento.
          </h2>
          <p className="text-base md:text-lg text-[#242424]/80 leading-relaxed">
            Não trabalhamos com ações isoladas. Organizamos os elementos que
            influenciam a decisão de compra e conectamos cada um deles a uma
            estratégia de aquisição.
          </p>
        </RevealBlock>

        {/* Composição enxuta: 1 visual dinâmico à esquerda + 4 etapas conectadas e resumidas à direita */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <RevealBlock className="lg:col-span-5" y={30}>
            <div className="relative h-full min-h-[280px] sm:min-h-[340px] rounded-[20px] overflow-hidden border border-[#F1E6DF] bg-[#242424]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStage.code}
                  initial={prefersReducedMotion ? false : { opacity: 0.35, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={prefersReducedMotion ? undefined : { opacity: 0.35 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full"
                >
                  <ResilientImage
                    src={activeStage.image}
                    alt={activeStage.imageAlt}
                    fallbackTitle={`${activeStage.code} — ${activeStage.title}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"
              />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="text-xs font-semibold text-[#E6AE45] mb-1 tabular-nums">
                  {activeStage.code} · {activeStage.focusLabel}
                </p>
                <p className="font-display text-xl font-bold leading-snug">
                  {activeStage.title}
                </p>
              </div>
            </div>
          </RevealBlock>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {METHODOLOGY_STAGES.map((stage, index) => {
              const isSelected = selectedStage === index;

              return (
                <RevealBlock
                  key={stage.number}
                  delay={index * 0.08}
                  y={28}
                  className="h-full"
                >
                  <button
                    type="button"
                    aria-pressed={isSelected}
                    onMouseEnter={() => setSelectedStage(index)}
                    onClick={() => setSelectedStage(index)}
                    className={`w-full h-full text-left rounded-[18px] border p-5 md:p-6 flex flex-col justify-between transition-all duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#E53935] ${
                      isSelected
                        ? 'bg-[#242424] border-[#242424] text-white shadow-sm'
                        : 'bg-[#FFF8F3] border-[#F1E6DF] text-[#242424] hover:border-[#E53935]/45'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span
                          className={`font-display text-xs font-bold tabular-nums ${
                            isSelected ? 'text-[#E6AE45]' : 'text-[#E53935]'
                          }`}
                        >
                          {stage.code}
                        </span>
                        <span
                          className={`font-display text-2xl font-extrabold leading-none tabular-nums ${
                            isSelected ? 'text-white/25' : 'text-[#242424]/15'
                          }`}
                        >
                          {stage.number}
                        </span>
                      </div>

                      <h3
                        className={`font-display text-lg font-bold mb-2 leading-snug ${
                          isSelected ? 'text-white' : 'text-[#242424]'
                        }`}
                      >
                        {stage.title}
                      </h3>

                      <p
                        className={`text-sm leading-relaxed ${
                          isSelected ? 'text-white/85' : 'text-[#242424]/80'
                        }`}
                      >
                        {stage.description}
                      </p>
                    </div>
                  </button>
                </RevealBlock>
              );
            })}
          </div>
        </div>

        {/* Frase de fechamento */}
        <RevealBlock className="mt-10 pt-8 border-t border-[#F1E6DF] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <p className="font-display text-lg md:text-xl font-bold text-[#242424] max-w-2xl leading-snug">
            Cada etapa tem uma função. Juntas, elas constroem uma estrutura de
            marketing orientada a vendas.
          </p>
          <button
            type="button"
            onClick={onCtaClick}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#E53935] hover:bg-[#B91F24] rounded-xl transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#242424]"
          >
            <span>Quero aplicar no meu restaurante</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </RevealBlock>
      </div>
    </section>
  );
}
