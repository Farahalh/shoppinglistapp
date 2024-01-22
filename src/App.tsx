import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import WelcomeScreen from './components/WelcomeScreen';
import ItemListPage from './components/ItemListPage';
import ItemPage from './components/ItemPage';
import ItemDetailsPage from './components/ItemDetailsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="ListPage" element={<ItemListPage />} />
        <Route path="Items" element={<ItemPage items={[]} />} />
        <Route path="Details" element={<ItemDetailsPage items={[]} />} />
      </Routes>
    </Router>
  );
}

export default App;