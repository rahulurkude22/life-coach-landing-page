import { ChevronDown } from "lucide-react";
import { useState } from "react";

function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does life coaching differ from therapy?",
      answer:
        "Therapy often looks back to heal; coaching looks forward to create. Coaching supports you in designing and executing the life you want to live.",
    },
    {
      question: "Who benefits from coaching?",
      answer:
        "It depends on your goals. Many clients start with a 3- or 6-month package; some also enroll in continuous long-term support.",
    },
    {
      question: "Is this spiritual or secular?",
      answer:
        "My approach is inclusive. While I draw from spiritual traditions and inner work, I ground everything in practical action, clarity, and support.",
    },
    {
      question: "Are You Ready?",
      answer:
        "If you’re done with superficial motivation and ready for real change — your journey starts now.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-linear-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto mb-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-200 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none ${
                  openIndex === index ? "" : "border-b border-gray-100"
                }`}
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-indigo-600 transition-transform duration-200 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? "max-h-48" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5 text-gray-600">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:w-3xl flex justify-center bg-linear-to-t from-teal-900  to-teal-700 text-white rounded-full py-4 px-8 my-3 mx-auto shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
        <a
          href="https://topmate.io/unfoldwith_alisha"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-lg md:text-6xl font-semibold text-nowrap"
        >
          <span>Book 1:1 session</span>
        </a>
      </div>
    </div>
  );
}

export default FaqSection;
