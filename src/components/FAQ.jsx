import React, { useState } from "react";
import Footer from "./Footer";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Can I compare quotes from different vendors on Workwise?",
      answer:
        "Yes, Workwise provides AI-driven automated rate comparison charts for each product, allowing contractors to easily compare quotes from different vendors and select the best option.",
    },
    {
      question: "How secure is my data on Workwise?",
      answer:
        "At Workwise, we prioritize the security of your data. Our platform uses advanced security measures to protect your information and ensure confidentiality in all your procurement activities.",
    },
    {
      question: "How can I send multiple RFQs quickly on Workwise?",
      answer: "With Workwise, you can send multiple RFQs with just a few clicks.",
    },
    {
      question: "How can Workwise help my business grow?",
      answer: "Workwise connects you with verified vendors to boost efficiency and profitability.",
    },
    {
      question: "How do I get started with Workwise?",
      answer: "Sign up on our platform, explore vendors, and start sending RFQs.",
    },
    {
      question: "How does Workwise automate follow-ups with vendors?",
      answer: "Workwise uses AI-powered tools to streamline follow-ups and ensure prompt responses.",
    },
    {
      question: "How does Workwise benefit me as a buyer?",
      answer: "It saves time, reduces costs, and provides valuable insights for informed decisions.",
    },
    {
      question: "Is Workwise suitable for small buyers?",
      answer: "Yes, Workwise is designed to cater to businesses of all sizes.",
    },
    {
      question: "What is Workwise?",
      answer: "Workwise is an AI-powered procurement solution for buyers and vendors.",
    },
    {
      question: "What kind of support does Workwise offer to buyers?",
      answer: "Our platform offers 24/7 customer support and tailored solutions for your needs.",
    },
    {
      question: "What types of products can I procure through Workwise?",
      answer: "Workwise supports procurement of a wide range of industrial and commercial products.",
    },
    {
      question: "Who are the key stakeholders in Workwise ecosystem?",
      answer: "Buyers, vendors, and industry leaders are the primary stakeholders.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Main Content */}
      <section className="flex-grow py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`border ${
                  activeIndex === index
                    ? "border-orange-500 bg-white shadow-lg"
                    : "border-gray-300 bg-gray-50"
                } rounded-lg p-6 transition-all`}
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3
                    className={`text-lg font-medium ${
                      activeIndex === index ? "text-orange-500" : "text-gray-800"
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <span
                    className={`text-2xl font-bold ${
                      activeIndex === index ? "text-orange-500" : "text-gray-800"
                    }`}
                  >
                    {activeIndex === index ? "-" : "+"}
                  </span>
                </div>
                {activeIndex === index && (
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FAQ;
