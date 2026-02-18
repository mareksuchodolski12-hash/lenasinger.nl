// src/components/home/FAQAccordion.tsx
'use client';

import { useState } from 'react';
import { FAQ } from '@/types/index';

interface FAQAccordionProps {
  faqs: FAQ[];
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqs }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq) => (
        <button
          key={faq.id}
          onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
          className="w-full text-left"
        >
          <div className="card-dark hover:border-accent-500 cursor-pointer">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-primary-50 pr-4">{faq.question}</h3>
              <span
                className={`text-2xl text-accent-500 flex-shrink-0 transition-transform duration-300 ${
                  openId === faq.id ? 'rotate-45' : ''
                }`}
              >
                +
              </span>
            </div>

            {openId === faq.id && (
              <div className="mt-4 pt-4 border-t border-primary-700">
                <p className="text-primary-200 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        </button>
      ))}
    </div>
  );
};
