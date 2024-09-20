import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


// Woodgrove pages
//import App from './App';
import Layout from "./pages/Layout.jsx";
import Token from "./pages/Token.jsx";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import NoPage from "./pages/NoPage.jsx";
import ErrorPage from "./pages/Error.jsx";
// End of Woodgrove pages

import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "token",
        element: <Token />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "*",
        element: <NoPage />,
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
