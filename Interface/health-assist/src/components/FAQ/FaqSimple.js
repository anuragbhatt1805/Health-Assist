// FAQ.js

import React, { useState } from 'react';

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      question: 'What is Health Assist?',
      answer: 'Health Assist is a web application designed for seamless collaboration among healthcare professionals within a hospital setting. It serves as a platform for doctors to collaboratively assess patient cases, offering insights on whether additional consultations are necessary. This collaborative approach ensures a patient-centric focus, streamlining the decision-making process for accurate and comprehensive medical advice. Through Health Assist, doctors can work together to arrive at a conclusive diagnosis, enabling the issuance of a final prescription or accurate medical results. This web app enhances communication and cooperation among healthcare professionals, ultimately optimizing patient care and outcomes.',
    },
    {
      question: 'What is the need of Health Assist?',
      answer: 'Health Assist meets the vital need for improved collaboration among healthcare professionals in hospitals. This sophisticated web application streamlines communication, enabling doctors to collectively assess patient cases and decide on the necessity of additional consultations. By facilitating this collaborative decision-making process, Health Assist ensures a patient-centric approach, leading to accurate medical advice and timely issuance of final prescriptions or precise results. This web app addresses the crucial requirement for enhanced communication and cooperation, ultimately optimizing overall patient care and outcomes.',
    },
    {
      question: 'What is JSX?',
      answer: 'JSX is a syntax extension for JavaScript. It looks similar to XML or HTML.',
    },
    // Add more FAQ items as needed
  ]);

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <div
            style={{
              cursor: 'pointer',
              borderBottom: '1px solid #ccc',
              padding: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
            onClick={() => handleToggle(index)}
          >
            <h3>{faq.question}</h3>
            <span>{openIndex === index ? '▲' : '▼'}</span>
          </div>
          {openIndex === index && <p>{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
