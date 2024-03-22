import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Jobs from './components/Jobs/Jobs';
import AppliedJobs from './components/Applied-jobs/AppliedJobs';
import Blogs from './components/Blogs/Blogs';
import Statistics from './components/Statistics/Statistics';
import ErrorElement from './components/Error/ErrorElement';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorElement></ErrorElement>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/Jos',
        element:<Jobs></Jobs>
      },
      {
        path:'/AppliedJobs',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path:'/Blogs',
        element:<Blogs></Blogs>
      },
      {
        path:'/Statistics',
        element:<Statistics></Statistics>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
