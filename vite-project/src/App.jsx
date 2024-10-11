
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Site from "./Components/Site";
import Register from "./Components/Register";
import Login from "./Components/Login";
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
    }

  ])
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  )


}

export default App;