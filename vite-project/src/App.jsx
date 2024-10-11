import React, { useState } from "react";
import LandingPage from "./Components/LandingPage";
import About from "./Components/About.jsx";
import Masterpieces from "./Components/Masterpieces.jsx";
import Collections from "./Components/Collections.jsx";

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
}

export default App;