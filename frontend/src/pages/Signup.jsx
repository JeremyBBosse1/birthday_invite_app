import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };
  
  const handleSubmit = async e => {
    e.preventDefault();
    const { email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      await axios.post('http://localhost:8000/api/register/', { email, password });
      alert('Sign up successful! You can now log in.');
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.detail || 'Signup failed');
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <input name="confirmPassword" type="password" placeholder="Confirm Password" onChange={handleChange} required />
      <button type="submit">Register</button>
    </form>
  );
}

export default Signup;
