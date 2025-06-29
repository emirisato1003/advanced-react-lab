import React from 'react';
import Button from "./components/lab-1/Button";
import Avatar from './components/lab-1/Avatar';
import Profile from './components/lab-1/profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/search Param/HomePage';
import Layout from './Layout';
import AuthRequired from './AuthRequired';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<h1>Home Page</h1>} />

          <Route element={<AuthRequired />}>
            <Route path='protected' element={<h1>Super secret info here</h1>} />
          </Route>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
