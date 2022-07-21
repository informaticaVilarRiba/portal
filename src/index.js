import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Login, App, Test, Admin, Informes, User } from './pages/pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/portal">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/main" element={<App/>}/>
        <Route path="/preguntes" element={<Test/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/informes" element={<Informes/>}/>
        <Route path="/user" element={<User/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
