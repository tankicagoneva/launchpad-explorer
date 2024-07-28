import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from './error-page.tsx';
import Launches from './launches/page.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
    {
    path: "/launches",
    element: <Launches />,
    }
  
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
