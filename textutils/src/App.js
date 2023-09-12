import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar'
import TextAnalyzer from './components/TextAnalyzer';
import TextUtils from './components/TextUtils';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path='/' element={<TextAnalyzer />} />
          <Route path='/navbar' element={<Navbar />}  />
          <Route path='/header' element={<Header />} />
          <Route path='/textutil' element={<TextUtils />} />
          </Routes>
          <Navbar></Navbar>
  
    </div>
  );
}

export default App;
