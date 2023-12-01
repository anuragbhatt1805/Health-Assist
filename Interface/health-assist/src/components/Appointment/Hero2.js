import React from 'react';

function Hero2() {
  const doctorsDetails = [
    {
      name: 'Dr. John Doe',
      specialization: 'Cardiologist',
    },
    {
      name: 'Dr. Jane Smith',
      specialization: 'Dermatologist',
    },
    {
      name: 'Dr. Alex Johnson',
      specialization: 'Pediatrician',
    },
    // Add more doctors if needed
  ];

  const handleScheduleAppointment = (doctorName) => {
    // Logic for scheduling an appointment with the selected doctor
    console.log(`Schedule Appointment with ${doctorName}`);
  };

  const handleChat = (doctorName) => {
    // Logic for initiating a chat with the selected doctor
    console.log(`Chat with ${doctorName}`);
  };

  return (
    <div className="container mt-4 ">
      <div className="p-4">
        <h2 className="mb-3">Recommended Doctors</h2>
        {doctorsDetails.map((doctor, index) => (
          <div key={index} className="row mb-3 mt-4 p-2 rounded" style={{ backgroundColor: '#D3D3D3' }}>
            <div className="col-md-8 ">
              <h3>{doctor.name}</h3>
              <p>{doctor.specialization}</p>
            </div>
            <div className="col-md-4 d-flex align-items-center justify-content-end">
              <button
                className="btn btn-primary me-3"
                onClick={() => handleScheduleAppointment(doctor.name)}
                style={{ backgroundColor: '#4fa3a3' }}
              >
                Schedule Appointment
              </button>
              <button
                className="btn btn-primary"
                onClick={() => handleChat(doctor.name)}
                style={{ backgroundColor: '#4fa3a3' }}
              >
                Chat
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero2;
