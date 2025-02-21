import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const KnowledgeBased = () => {
    const [openItem, setOpenItem] = useState<number | null>(null);

    const faqItems = [
        {
            question: "Why should I sign up for this before launch?",
            answer: "Early subscribers get exclusive benefits and special pricing that won't be available after launch."
        },
        {
            question: "What guarantees do we have that this will work for us?",
            answer: "We offer a comprehensive satisfaction guarantee and proven track record of success with similar businesses."
        },
        {
            question: "Does this require any coding skills to set this up?",
            answer: "No coding skills required. Our platform is designed to be user-friendly and easily integrated."
        },
        {
            question: "How will this product improve our customer support?",
            answer: "Our solution automates responses, provides 24/7 coverage, and significantly reduces response times."
        },
        {
            question: "We already have a support system, why change?",
            answer: "Our system offers advanced features, better efficiency, and cost savings compared to traditional support systems."
        }
    ];

    return (
        <section className="w-full min-h-fit mt-10 bg-black py-12 px-4 md:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-white text-center mb-8 md:mb-12">
                    Knowledge base
                </h2>

                <div className="space-y-6">
                    {faqItems.map((item, index) => (
                        <div
                            key={index}
                            className={`bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 overflow-hidden transition-all duration-300 ${openItem === index ? 'rounded-3xl' : 'rounded-full'
                                }`}
                        >
                            <button
                                className="w-full p-6 flex items-center justify-between text-left text-white transition-colors"
                                onClick={() => setOpenItem(openItem === index ? null : index)}
                                aria-expanded={openItem === index}
                            >
                                <span className="text-sm md:text-base pr-4">{item.question}</span>
                                {openItem === index ? (
                                    <Minus className="w-5 h-5 flex-shrink-0" />
                                ) : (
                                    <Plus className="w-5 h-5 flex-shrink-0" />
                                )}
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${openItem === index ? 'max-h-48' : 'max-h-0'
                                    }`}
                            >
                                <p className="px-6 pb-6 text-sm md:text-base text-zinc-400">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KnowledgeBased;