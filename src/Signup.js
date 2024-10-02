import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
    email: '',
    phone_number: '',
    user_type: 'CUSTOMER', // or 'RESTAURANT'
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://test-api.achilov.in/v1/rest-auth/register',
        userData
      );
      console.log(response.data);
      alert('Signup successful');
    } catch (error) {
      console.error('Error during signup', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="phone_number"
        placeholder="Phone Number"
        onChange={handleChange}
        required
      />
      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;
