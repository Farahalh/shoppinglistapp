import React from 'react';
import './styles/App.css';
import WelcomeScreen from './components/WelcomeScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
