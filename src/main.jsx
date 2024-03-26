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
import Read from './components/Read';
// import WishList from './components/WishList';
import List from './components/List';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
        loader: () => fetch('HomeCard.json')
      },
      {
        path:'/listed',
        element: <Listed></Listed>,
        children:[
          {
            index: true,
            element: <Read></Read>,
          },
          {
            path: 'wish',
            element: <List></List>
          }
        ]
      },
      {
        path:'/page',
        element: <PageToRead></PageToRead>
      },
      {
        path: '/blog/:bookid',
        element: <NewContainer></NewContainer>,
        loader: () => fetch("../public/HomeCard.json")
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
