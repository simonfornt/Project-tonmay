import React, { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How can I make a donation?",
      answer: "You can donate through our secure online portal, bank transfer, or mobile payment services like Bkash. All donation options are available on our donation page."
    },
    {
      question: "Is my donation tax-deductible?",
      answer: "Yes, all donations to our organization are tax-deductible. You'll receive a receipt immediately after your donation is processed."
    },
    {
      question: "How do you use my donations?",
      answer: "We allocate 85% of donations directly to program services, 10% to administrative costs, and 5% to fundraising efforts. Detailed financial reports are available annually."
    },
    {
      question: "Can I donate monthly?",
      answer: "Absolutely! We offer recurring donation options. You can set up monthly contributions through our website or by contacting our support team."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Frequently Asked Questions
        </h2>

            {/* FAQ Function */}

        <div className="space-y-6">{faqs.map((faq, index) => (
            <div key={index}className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200">

     <button  onClick={() => toggleFAQ(index)} className="w-full flex justify-between items-center p-6 md:p-8 focus:outline-none"
                aria-expanded={activeIndex === index} aria-controls={`faq-content-${index}`}>

                <h3 className="text-lg md:text-xl font-semibold text-gray-800 text-left"> {faq.question} </h3>

          <i className={`fas fa-chevron-${ activeIndex === index ? 'up' : 'down' } text-teal-600 text-xl ml-4 transition-transform duration-300`} />
    </button>

    {/*  */}

          <div id={`faq-content-${index}`}  className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-96' : 'max-h-0'  }`} >

                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Still have questions?{' '}
            <a href="/contact" className="text-teal-600 hover:text-teal-700 font-semibold">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;