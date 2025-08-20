// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import HomePage from './pages/HomePage.jsx';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx';
import './index.css';

// Define the routes for your application
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // The main layout with Header and Footer
    children: [
      {
        index: true, // This makes HomePage the default page for "/"
        element: <HomePage />,
      },
      {
        path: 'privacy-policy', // This will be yoursite.com/privacy-policy
        element: <PrivacyPolicyPage />,
      },
      // We will add Login and SignUp pages here later
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);