import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import CreateEvent from './pages/CreateEvent.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';


function App(){
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route 
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/create"
          element={
            <PrivateRoute>
              <CreateEvent />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
