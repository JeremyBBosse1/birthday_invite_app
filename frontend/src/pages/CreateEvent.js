import React, { useState } from 'react';
import axios from 'axios';

function CreateEvent() {
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

const handleSubmit = async e =>{
  e.preventDefault();
  const payload = {
    ...formData,
    invitees: formData.invitees.split(',').map(email => email.trim()),
  };
  await axios.post('/api/events/', payload);
  alert('Event created and invitations sent!');
};

return (
  <form onSubmit={handleSubmit}>
      <h2>Create a Birthday Event</h2>
      <input name="title" placeholder="Event Title" onChange={handleChange} required />
      <textarea name="description" placeholder="Description" onChange={handleChange} />
      <input name="start_time" type="datetime-local" onChange={handleChange} required />
      <input name="end_time" type="datetime-local" onChange={handleChange} required />
      <input name="location" placeholder="Location" onChange={handleChange} required />
      <input name="invitees" placeholder="Emails (comma-separated)" onChange={handleChange} required />
      <input name="email_subject" placeholder="Email Subject" onChange={handleChange} required />
      <textarea name="email_body" placeholder="Email Body (max 500 characters)" maxLength="500" onChange={handleChange} required />
      <input name="from_email" placeholder="From Email" type="email" onChange={handleChange} required />
      <button type="submit">Send Invitations</button>
    </form>
  );
}
