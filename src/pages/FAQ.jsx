import { useState } from 'react';
import './FAQ.css';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How do I know the condition of an item?',
      answer: 'Each product listing includes a detailed condition report (Excellent, Very Good, Good). We also provide measurements and photos showing any wear or imperfections.'
    },
    {
      question: 'What is your return policy?',
      answer: 'We accept returns within 14 days of delivery. Items must be in the same condition as received, with tags attached. See our Shipping & Returns page for full details.'
    },
    {
      question: 'How do I know if something will fit?',
      answer: 'We provide detailed measurements for every item (chest, length, waist, etc.). Compare these to a garment you own that fits well. If you need help, contact us!'
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes, we ship worldwide. Shipping costs and delivery times vary by location. Free shipping is available on orders over €100.'
    },
    {
      question: 'How often do you add new items?',
      answer: 'We add new vintage drops daily. Follow us on social media or subscribe to our newsletter to stay updated on the latest arrivals.'
    },
    {
      question: 'Are all items authentic?',
      answer: 'Yes, we carefully verify the authenticity of every item. We specialize in authentic vintage pieces and stand behind the authenticity of everything we sell.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <div className="container">
        <h1 className="page-title">Frequently Asked Questions</h1>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;

