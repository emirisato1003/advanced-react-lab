import React, { Profiler } from 'react';
import Button from "./components/lab-1/Button";
import Avatar from './components/lab-1/Avatar';
import Profile from './components/lab-1/profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/search Param/HomePage';

function App() {
  return (
    // <Profile />
    <BrowserRouter>
      <Routes>
        <Route path='/characters' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
