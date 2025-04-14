import React from 'react';
import { logout } from '../utils/auth';

function Dashboard() {
  const handleLogout = () =>{
    logout();
    window.location.href = '/login';
  };
  return (
    <div>
      <h2>Welcome to Your Birthday Event Dashboard</h2>;
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
