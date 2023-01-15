import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import About from './About';
import App from './App';
import Acknowledgement from './Acknowledgement';
import Navbar from './Navbar';
import Preface from './Preface';
import 'bootstrap/dist/css/bootstrap.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';


const router = createHashRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/preface',
    element: <Preface />
  },
  {
    path: '/acknowledgement',
    element: <Acknowledgement />
  },
  {
    path: '/about',
    element: <About />
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
