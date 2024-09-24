import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Form from './Form';
import StudentList from './StudentList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/list" element={<StudentList/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;