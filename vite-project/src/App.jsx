<<<<<<< HEAD
import React, { useState } from "react";
import LandingPage from "./Components/LandingPage";
import About from "./Components/About.jsx";
import Masterpieces from "./Components/Masterpieces.jsx";
import Collections from "./Components/Collections.jsx";
import Contact from "./Components/Contact.jsx";
function App()
{
  const [ isSignedIn, setIsSignedIn ] = useState(true);
    return (
      <>
        <LandingPage isLogged={isSignedIn} />
        <About />
        <Masterpieces />
        <Collections />
        <Contact/>
      </>
    );
=======
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Site from "./Components/Site";
import Register from "./Components/Register";
import Login from "./Components/Login";
import MainProductPage from "./Components/MainProductPage";
import { useState } from 'react';


function App()
{
  const [ isSignedIn, setIsSignedIn ] = useState(false);
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Site isSignedIn={ isSignedIn } />
    },

    {
      path: '/register',
      element: <Register />
    },

    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/product',
      element: <>
                  <MainProductPage />
              </>
  }

  ])
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  )


>>>>>>> ff0b110b0121b9faaff84b7d11a2f2ab209a7d0e
}

export default App;