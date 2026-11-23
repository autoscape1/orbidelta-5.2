import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { FAQ_ITEMS } from '../data/agencyData';
import { RevealBlock } from './MotionPrimitives';

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);
  const prefersReducedMotion = useReducedMotion();

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="bg-[#FFF8F3] py-16 lg:py-22 border-t border-[#F1E6DF]"
    >
      <div className="max-w-[900px] mx-auto px-6">
        <RevealBlock className="mb-10">
          <p className="text-sm font-semibold text-[#E53935] mb-3">06. FAQ</p>
          <h2
            className="font-display text-3xl md:text-4xl font-bold text-[#242424] tracking-tight leading-[1.15]"
            style={{ textWrap: 'balance' }}
          >
            Perguntas frequentes
          </h2>
        </RevealBlock>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openId === item.id;
            const panelId = `faq-panel-${item.id}`;
            return (
              <RevealBlock key={item.id} delay={index * 0.06} y={22}>
                <div className="bg-white border border-[#F1E6DF] rounded-2xl overflow-hidden">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(item.id)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FFF8F3]/60 transition-colors focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#E53935]"
                  >
                    <span className="font-display text-base font-bold text-[#242424]">
                      <span className="text-[#E53935] tabular-nums mr-2">
                        {index + 1}.
                      </span>
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#E53935] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      initial={prefersReducedMotion ? false : { opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="px-6 pb-5 pt-1 text-sm md:text-base text-[#242424]/80 leading-relaxed border-t border-[#F1E6DF]/70"
                    >
                      {item.answer}
                    </motion.div>
                  )}
                </div>
              </RevealBlock>
            );
          })}
        </div>
      </div>
    </section>
  );
}
