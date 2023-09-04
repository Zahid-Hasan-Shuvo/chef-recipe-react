import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './components/Home.jsx';
import Header from './components/Header.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import AuthProviders from './providers/AuthProviders.jsx';
import Recepi from './Cards/Recepi.jsx';
import Blog from './components/Blog.jsx';
import PrivateRoutes from './routes/PrivateRoutes.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
        path: "/",
        element:<Home></Home>,
      },
    
      {
        path: "/login",
        element:<Login></Login>,
      },
      {
        path: "/register",
        element:<Register></Register>,
      },
      {
        path:"/chef-recepi",
        element:<PrivateRoutes><Recepi></Recepi></PrivateRoutes>
      },
      {
        path:"/blog",
        element:<Blog></Blog>
      }
   
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthProviders> 
  <RouterProvider router={router} />
</AuthProviders>
  </React.StrictMode>,
)
