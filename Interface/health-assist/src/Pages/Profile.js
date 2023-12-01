import React, { useState, useEffect } from 'react';

const Profile = () => {
  const fetchData = async () => {
    try {
      const response = await fetch("http://192.168.174.23:8000/core/manage/user/7c3d3a42-9ece-4bbc-bc24-1fa7c1ea7e14/", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Add any other required headers
        },
        mode: 'cors' // Ensure the mode is set to 'cors'
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };
  
  fetchData();
  
  // State to manage profile data
  const [profileData, setProfileData] = useState({
    abhaId: '123456',
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+1234567890',
    dob: '1990-01-01',
    address: '123 Main Street, City, Country',
    height: '180 cm',
    weight: '75 kg',
    bloodGroup: 'AB+',
    profession: 'Doctor',
  });

  // Load profile data from localStorage on component mount
  useEffect(() => {
    const storedProfile = localStorage.getItem('profile');
    if (storedProfile) {
      setProfileData(JSON.parse(storedProfile));
    }
  }, []);

  // Function to handle changes in profile data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  // Function to save profile data locally
  const saveProfile = () => {
    localStorage.setItem('profile', JSON.stringify(profileData));
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="profile-image">
            <img
              src="profile-photo.jpg"
              alt="Profile"
              className="img-fluid rounded-circle"
            />
          </div>
        </div>
        <div className="col-md-8">
          <div className="profile-details">
            <h2>Profile Information</h2>
            <form>
              {Object.keys(profileData).map((key) => (
                <div key={key} className="mb-3">
                  <label htmlFor={key} className="form-label">{key}</label>
                  <input
                    type="text"
                    className="form-control"
                    id={key}
                    name={key}
                    value={profileData[key]}
                    onChange={handleInputChange}
                  />
                </div>
              ))}
              <button type="button" className="btn btn-primary mt-3" onClick={saveProfile}>
                Save Profile
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
