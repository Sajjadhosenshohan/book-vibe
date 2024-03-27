import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout';
import Home from './Pages/Home';
import NewContainer from './components/NewContainer';
import Listed from './Pages/Listed';
import PageToRead from './Pages/PageToRead';

import { Toaster } from 'react-hot-toast';

import Faq from './Pages/Faq';
import Support from './Pages/Support';
import ShowError from './Pages/ShowError';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ShowError></ShowError>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
        loader: () => fetch('https://shohan15020.github.io/book-jso/HomeCard.json')
      },
      {
        path:'/listed',
        element: <Listed></Listed>,
        
      },
      {
        path:'/page',
        element: <PageToRead></PageToRead>
      },
      
      {
        path:'/contact',
        element: <Support></Support>
      },
      {
        path:'/faq',
        element: <Faq></Faq>
      },
      {
        path: '/blog/:bookid',
        element: <NewContainer></NewContainer>,
        loader: () => fetch("https://shohan15020.github.io/book-jso/HomeCard.json")
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster position="top-right"
  reverseOrder={false} />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
