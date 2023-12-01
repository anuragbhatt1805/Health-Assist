// FAQ.js

import React, { useState } from 'react';
import './QACss.css'
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
      question: 'How does patient registration work in Health Assist?',
      answer: "Patient registration in Health Assist is a simple process where individuals provide their essential information, including personal details and medical history. If the patient's profile already exists, they need only provide their symptoms for the system to suggest an appropriate doctor. Once registered or updated, the system creates or revises the patient profile, ensuring an organized record for healthcare professionals to reference. This streamlined approach expedites the registration process for returning patients.",
    },
    {
      question: "Can multiple doctors access the same patient's data in Health Assist?",
      answer: "Yes, Health Assist promotes collaboration by allowing multiple doctors to access and share a patient's data when necessary. This ensures that healthcare professionals can collectively contribute to the assessment and treatment plan, facilitating well-rounded medical care.",
    },
    {
      question: "How is progress tracked in Health Assist appointments?",
      answer: " Progress in Health Assist appointments is tracked through regular updates made by both patients and doctors. Any developments or changes in symptoms, prescribed treatments, or recommended procedures are recorded in real-time, providing an accurate and dynamic overview of the patient's health journey.",
    },
    {
      question: "What happens when a patient is completely cured in Health Assist?",
      answer: " When a patient is completely cured, Health Assist archives the comprehensive information related to the case for future reference. This historical data contributes to a repository of medical cases, facilitating research, and ensuring a thorough understanding of successful treatment methodologies.",
    },
    {
      question: " How does the AI analysis in Health Assist suggest the type of doctor needed?",
      answer: " The AI analysis in Health Assist utilizes the stored database of patient information to identify patterns and correlations. Based on this analysis, the system suggests the type of doctor needed, such as a physician, orthopedic specialist, dermatologist, etc. This intelligent recommendation system enhances the efficiency of the healthcare process by providing targeted and personalized suggestions based on individual patient profiles.",
    },
    
    // Add more FAQ items as needed
  ]);

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='faqtextbox'>
      <h1>Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div key={index} style={{ marginBottom: '20px', padding:'10px' }}>
          <div
            style={{
              cursor: 'pointer',
              borderBottom: '1px solid #ccc',
              padding: '10px',
              fontSize: 'Large',
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
