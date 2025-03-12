'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const Faqs = [
  {
    question: 'HOW MANY SERVINGS IS ONE MEAL?',
    answer:
      'All our meals are designed to serve one average-sized adult. You can click on any meal to view the calorie counts and nutritional facts. Feedy meals are all less than 600 calories and work great for dinner or lunch. And with a variety of add-ons available for purchase, we can cover your breakfast and snacks, too!',
  },
  {
    question: 'DO YOU OFFER MEALS FOR SPECIFIC DIETARY NEEDS?',
    answer:
      'All our meals are designed to serve one average-sized adult. You can click on any meal to view the calorie counts and nutritional facts. Feedy meals are all less than 600 calories and work great for dinner or lunch. And with a variety of add-ons available for purchase, we can cover your breakfast and snacks, too!',
  },
  {
    question: 'WHICH DELIVERY CARRIER/S DO YOU USE?',
    answer: 'We use trusted carriers such as FedEx, UPS, and USPS for all our deliveries.',
  },
  {
    question: 'HOW DO THE MEALS STAY FRESH DURING TRANSIT?',
    answer: 'Our meals are packed with insulated liners and ice packs to maintain freshness during delivery.',
  },
];

export default function Faqsection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto p-6">
      <h2 className="text-center text-3xl font-bold mb-6 relative inline-block">
        FREQUENTLY ASKED QUESTIONS
        <span className="block text-red-500 text-xl absolute -top-5 left-1/2 transform -translate-x-1/2 italic">Ask Us</span>
      </h2>
      <div className="space-y-4">
        {Faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-4 shadow-md bg-white"
          >
            <button
              className="flex justify-between items-center w-full text-left font-semibold text-lg"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <a href="#" className="text-green-500 font-semibold hover:underline">
          Head over to FAQ’s
        </a>
      </div>
    </section>
  );
}
