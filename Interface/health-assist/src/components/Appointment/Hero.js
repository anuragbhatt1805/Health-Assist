import React, { useState } from 'react';

function Hero() {
  const [symptoms, setSymptoms] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSymptomsSubmit = (e) => {
    e.preventDefault();
    // Your logic when the "Enter" button next to Symptoms is clicked
    console.log('Symptoms submitted:', symptoms);
    // You can perform any action here related to Symptoms
  };

  const handleAppointmentSubmit = (e) => {
    e.preventDefault();
    // Your appointment submission logic goes here
    console.log('Appointment submitted:', { symptoms, date, time, name, email, phone });
    // You can send this data to your backend or handle it accordingly
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Appointment</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum minima est perspiciatis?
        Numquam nemo porro mollitia eligendi error excepturi fugit.
      </p>
      <div className="border p-4">
        <h2 className="mb-3">Schedule Your Appointment</h2>
        <form onSubmit={handleAppointmentSubmit}>
          <div className="mb-3 d-flex align-items-start">
            <label htmlFor="symptoms" className="form-label me-3">Symptoms:</label>
            <input
              type="text"
              className="form-control flex-grow-1"
              id="symptoms"
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              required
            />
            <button type="button" className="btn btn-primary ms-3" onClick={handleSymptomsSubmit}>
              Enter
            </button>
          </div>
          {/* Other form fields */}
          <button type="submit" className="btn btn-primary">Schedule Appointment</button>
        </form>
      </div>
    </div>
  );
}

export default Hero;
