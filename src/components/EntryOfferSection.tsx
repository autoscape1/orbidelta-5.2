import { useState } from 'react';
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  LineChart,
  ShieldCheck,
} from 'lucide-react';
import {
  FIRST_30_DAYS_INCLUDED,
  FIRST_30_DAYS_TIMELINE,
  OFFER_CONDITIONS,
  TRACKED_INDICATORS,
} from '../data/agencyData';
import { RevealBlock } from './MotionPrimitives';

interface EntryOfferSectionProps {
  onCtaClick: () => void;
}

export function EntryOfferSection({ onCtaClick }: EntryOfferSectionProps) {
  const [activeWeek, setActiveWeek] = useState<number>(0);

  return (
    <section
      id="primeiros-30-dias"
      className="bg-[#FFF8F3] py-16 lg:py-22 border-y border-[#F1E6DF]"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <RevealBlock className="max-w-3xl mb-10">
          <p className="text-sm font-semibold text-[#E53935] mb-3">
            04. Os Primeiros 30 Dias + Acompanhamento
          </p>
          <h2
            className="font-display text-3xl md:text-4xl font-bold text-[#242424] tracking-tight leading-[1.15] mb-4"
            style={{ textWrap: 'balance' }}
          >
            Conheça nosso trabalho na prática. Os primeiros 30 dias são por
            nossa conta.
          </h2>
          <p className="text-base md:text-lg text-[#242424]/85 leading-relaxed mb-2">
            Nos primeiros 30 dias, a Orbidelta assume a estruturação e a
            implementação inicial da estratégia digital do seu restaurante, sem
            cobrança de honorários de gestão.
          </p>
          <p className="text-sm md:text-base font-medium text-[#242424]/75">
            Não é apenas planejamento. É um período de execução, com entregas
            definidas e acompanhamento.
          </p>
        </RevealBlock>

        {/* Bloco protagonista: Calendário / Linha do tempo dos 30 dias */}
        <RevealBlock className="rounded-[22px] bg-[#242424] text-white p-6 md:p-9 mb-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#E6AE45] mb-3">
                <CalendarDays className="w-4 h-4" aria-hidden="true" />
                <span>Cronograma de execução · 30 dias iniciais</span>
              </div>

              <div className="flex items-baseline gap-3 mb-3">
                <span className="font-display text-5xl md:text-6xl font-extrabold text-white tabular-nums leading-none">
                  30
                </span>
                <div>
                  <span className="font-display text-xl md:text-2xl font-bold text-[#E6AE45] block leading-tight">
                    dias de implementação
                  </span>
                  <span className="text-sm font-semibold text-[#299B65]">
                    Sem honorários de gestão
                  </span>
                </div>
              </div>

              <p className="text-sm text-white/80 leading-relaxed mb-6">
                Um ciclo completo de 4 semanas para diagnosticar, estruturar o
                cardápio e o Instagram, ativar campanhas e analisar os primeiros
                pedidos com transparência.
              </p>

              <button
                type="button"
                onClick={onCtaClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#E53935] hover:bg-[#B91F24] rounded-xl transition-colors duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span>Quero começar pelos 30 dias</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            <div className="lg:col-span-7">
              <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-3.5"
                data-testid="thirty-days-calendar"
              >
                {FIRST_30_DAYS_TIMELINE.map((milestone, index) => {
                  const isActive = activeWeek === index;
                  return (
                    <button
                      key={milestone.days}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setActiveWeek(index)}
                      className={`text-left rounded-xl p-4 border transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-white ${
                        isActive
                          ? 'bg-white text-[#242424] border-white'
                          : 'bg-white/5 text-white border-white/15 hover:border-white/35'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span
                          className={`font-display text-xs font-bold tabular-nums ${
                            isActive ? 'text-[#E53935]' : 'text-[#E6AE45]'
                          }`}
                        >
                          {milestone.days}
                        </span>
                        <span
                          className={`text-[11px] font-semibold tabular-nums ${
                            isActive ? 'text-[#299B65]' : 'text-white/55'
                          }`}
                        >
                          Semana 0{index + 1}
                        </span>
                      </div>
                      <h3
                        className={`font-display text-sm font-bold mb-1 ${
                          isActive ? 'text-[#242424]' : 'text-white'
                        }`}
                      >
                        {milestone.title}
                      </h3>
                      <p
                        className={`text-xs leading-relaxed ${
                          isActive ? 'text-[#242424]/75' : 'text-white/75'
                        }`}
                      >
                        {milestone.summary}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </RevealBlock>

        {/* Entregas incluídas + Indicadores acompanhados */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          <RevealBlock className="lg:col-span-6 bg-white rounded-[20px] border border-[#F1E6DF] p-6 md:p-7 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-xl font-bold text-[#242424] mb-4">
                O que está incluído:
              </h3>
              <ul className="space-y-3">
                {FIRST_30_DAYS_INCLUDED.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-[#242424]/85 leading-relaxed"
                  >
                    <CheckCircle2
                      className="w-4 h-4 text-[#299B65] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealBlock>

          <RevealBlock
            delay={0.05}
            className="lg:col-span-6 bg-white rounded-[20px] border border-[#F1E6DF] p-6 md:p-7 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-2">
                <h3 className="font-display text-xl font-bold text-[#242424]">
                  Como acompanhamos a evolução?
                </h3>
                <LineChart
                  className="w-5 h-5 text-[#E53935] shrink-0"
                  aria-hidden="true"
                />
              </div>
              <p className="text-xs sm:text-sm text-[#242424]/70 mb-4">
                Acompanhamos os indicadores relevantes da operação, incluindo:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-5">
                {TRACKED_INDICATORS.map((indicator, idx) => (
                  <div
                    key={indicator}
                    className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-[#FFF8F3] border border-[#F1E6DF] text-xs sm:text-sm font-medium text-[#242424] ${
                      idx === TRACKED_INDICATORS.length - 1
                        ? 'sm:col-span-2'
                        : ''
                    }`}
                  >
                    <span className="font-display text-xs font-bold text-[#E53935] tabular-nums">
                      0{idx + 1}
                    </span>
                    <span>{indicator}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#F1E6DF] space-y-2 text-xs sm:text-sm text-[#242424]/80 leading-relaxed">
              <p>
                <strong className="text-[#242424]">
                  Cadência diária e análise a cada 15 dias:
                </strong>{' '}
                definimos uma cadência diária de acompanhamento e, a cada 15
                dias, apresentamos uma análise da evolução, do que está
                funcionando, dos pontos de melhoria e dos próximos passos — com
                flexibilidade para realizar uma reunião desse acompanhamento.
              </p>
              <p>
                <strong className="text-[#242424]">
                  Ao final dos primeiros 30 dias
                </strong>
                , avaliamos os resultados iniciais e apresentamos uma proposta
                de continuidade, considerando as oportunidades identificadas.
              </p>
            </div>
          </RevealBlock>
        </div>

        {/* Condições da oferta */}
        <RevealBlock className="bg-white rounded-[20px] border border-[#F1E6DF] p-6 md:p-7">
          <div className="flex items-center gap-2.5 mb-4">
            <ShieldCheck
              className="w-5 h-5 text-[#299B65] shrink-0"
              aria-hidden="true"
            />
            <h3 className="font-display text-base md:text-lg font-bold text-[#242424]">
              Condições da oferta
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {OFFER_CONDITIONS.map((condition, idx) => (
              <div
                key={condition}
                className="rounded-xl bg-[#FFF8F3] border border-[#F1E6DF] p-4"
              >
                <span className="font-display text-xs font-bold text-[#E53935] tabular-nums block mb-1.5">
                  0{idx + 1}.
                </span>
                <p className="text-xs sm:text-sm text-[#242424]/80 leading-relaxed">
                  {condition}
                </p>
              </div>
            ))}
          </div>
        </RevealBlock>
      </div>
    </section>
  );
}
