import React, { useState } from "react";
<<<<<<< HEAD
import LandingPage from "./Components/LandingPage";
import About from "./Components/About.jsx";
import Masterpieces from "./Components/Masterpieces.jsx";
import Collections from "./Components/Collections.jsx";
import Materials from "./Components/materials.jsx";

function App()
{
  const [ isSignedIn, setIsSignedIn ] = useState(true);
    return (
      <>
        <LandingPage isLogged={isSignedIn} />
        <About />
        <Masterpieces />
        <Collections />
        <Materials/>
      </>
    )
=======
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Site from "./Components/Site";
import Register from "./Components/Register";
import Login from "./Components/Login";

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
    }

  ])
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  )

>>>>>>> upstream/master
}

export default App;