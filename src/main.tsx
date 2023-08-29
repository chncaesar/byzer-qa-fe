import React from 'react'
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Login from './login';
import QA from './QA';

import './index.css'

const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,           
    },
    {
      path: "qa",
      element: <QA />,
    },
    
  ]);
  
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );