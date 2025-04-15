import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const authHeader = () => {
  const token = localStorage.getItem('accessToken');
  return token ? { Authorization: 'Bearer ${token}' } : {};
};

function CreateEvent() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    start_time: '',
    end_time: '',
    location: '',
    invitees: '',
    email_subject: '',
    email_body: '',
    from_email: '',
  });
  
const handleChange = e => {
  setFormData({...formData, [e.target.name]: e.target.value});
};

const handleSubmit = async (e) =>{
  e.preventDefault();
  try {
    const payload = {
      ...formData,
      invitees: formData.invitees.split(',').map(email => email.trim()),
    };
  
    await axios.post('http://localhost:8000/api/events/', payload, {
      headers: authHeader(),
    });
    
    alert('Event created and invitations sent!');
    navigate('/events');
  } catch (err) {
    console.error('Error creating event:', err);
    alert('Failed to create event. Please check your input and try again');
  }
};

return (
  <form onSubmit={handleSubmit} className="p-4 space-y-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-2">Create a Birthday Event</h2>

      <input name="title" placeholder="Event Title" onChange={handleChange} required className="w-full p-2 border rounded" />
      <textarea name="description" placeholder="Description" onChange={handleChange} className="w-full p-2 border rounded" />
      <input name="start_time" type="datetime-local" onChange={handleChange} required className="w-full p-2 border rounded" />
      <input name="end_time" type="datetime-local" onChange={handleChange} required className="w-full p-2 border rounded" />
      <input name="location" placeholder="Location" onChange={handleChange} required className="w-full p-2 border rounded" />
      <input name="invitees" placeholder="Emails (comma-separated)" onChange={handleChange} required className="w-full p-2 border rounded" />
      <input name="email_subject" placeholder="Email Subject" onChange={handleChange} required className="w-full p-2 border rounded" />
      <textarea name="email_body" placeholder="Email Body (max 500 characters)" maxLength="500" onChange={handleChange} required className="w-full p-2 border rounded" />
      <input name="from_email" placeholder="From Email" type="email" onChange={handleChange} required className="w-full p-2 border rounded" />

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Send Invitations
      </button>
    </form>
  );
}

export default CreateEvent;
