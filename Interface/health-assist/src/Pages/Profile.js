import React, { useState, useEffect } from 'react';
import imp1 from '../img/Profile.jpg'

const Profile = () => {
  const [profileData, setProfileData] = useState({
    abhaId: '5632091',
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+1234567890',
    dob: '2000-01-01',
    address: '123 Main Street, surat, Gujarat, India',
    height: '5.9 ft',
    weight: '85 kg',
    bloodGroup: 'AB+',
    profession: 'JavaScript Developer',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://192.168.174.23:8000/core/manage/user/7c3d3a42-9ece-4bbc-bc24-1fa7c1ea7e14/");
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        console.log(data);
        setProfileData(data); // Assuming the data structure is similar to the profileData state
      } catch (error) {
        console.error('There was a problem fetching the profile data:', error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const saveProfile = () => {
    localStorage.setItem('profile', JSON.stringify(profileData));
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="profile-image">
            <img
              src={imp1}
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
