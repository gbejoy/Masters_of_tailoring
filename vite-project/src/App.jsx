import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Site from "./Components/Site";
import Register from "./Components/Register";
import Login from "./Components/Login";
import MainProductPage from "./Components/MainProductPage";
import { useState } from 'react';


function App()
{
  const [ isSignedIn, setIsSignedIn ] = useState(true);
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