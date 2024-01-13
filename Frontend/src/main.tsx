import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './Layouts/RootLayout';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import HomePage from './Pages/HomePage';
import DoctorsPage from './Pages/DoctorsPage';
import ProfilePage from './Pages/ProfilePage';
import Appointment from './Pages/AppointmentPage';


const router = createBrowserRouter([
      {
        path:"/",
        element:<RootLayout/>,
        children:[
          {
            path:"home",
            element: <HomePage/>,
          },
          {
            path:"appointment",
            element: <Appointment/>,
          },
          {
            path:"doctors",
            element: <DoctorsPage/>,
          },
          {
            path:"profile",
            element: <ProfilePage/>
          }
          
        ]
      },
      {
        path:"/login",
        element: <LoginPage/>,
      },
      {
        path:"/register",
        element: <RegisterPage/>,
      },
]); 
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>,
)
