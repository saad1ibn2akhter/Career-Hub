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
import JobDetails from './components/JobDetails/JobDetails';

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
        path:'/Jobs',
        element:<Jobs></Jobs>
      },
      {
        path:'/AppliedJobs',
        element: <AppliedJobs></AppliedJobs>,
        loader:() => fetch('https://raw.githubusercontent.com/saad1ibn2akhter/fake-data-react-career-hub-1/main/fake-data')
      },
      {
        path:'/Blogs',
        element:<Blogs></Blogs>
      },
      {
        path:'/Statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/Job/:id',
        element:<JobDetails></JobDetails>,
        loader:() => fetch('https://raw.githubusercontent.com/saad1ibn2akhter/fake-data-react-career-hub-1/main/fake-data')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
