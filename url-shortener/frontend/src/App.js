import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UrlForm from './components/UrlForm';
import AdminPage from './components/AdminPage';
import './App.css'; // Add some basic styling

function App() {
  return (
    <Router>
      <div className="container">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/admin">Admin</Link>
        </nav>
        <Routes>
          <Route path="/" element={<UrlForm />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;