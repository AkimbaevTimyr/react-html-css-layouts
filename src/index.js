import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ConfirmationVerification from './components/ConfirmationVerification/ConfirmationVerification';
import VerificationPhone from './components/VerificationPhone/VerificationPhone';


const router = createBrowserRouter([
  {
    path: "/confirmationVerification",
    element: <ConfirmationVerification />,
  },
  {
    path: "/verificationPhone",
    element: <VerificationPhone />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
