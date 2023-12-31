import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const signup = (abhaId, phoneNo,username,dob,email, password) => {
  return axios.post(API_URL + "signup", {
    abhaId, phoneNo,username,dob,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
    localStorage.removeItem("user");
  };
  
  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };
  
  const AuthService = {
    signup,
    login,
    logout,
    getCurrentUser,
  };
  
  export default AuthService;
  