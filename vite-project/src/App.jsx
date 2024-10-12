import React, { useState } from "react";
import LandingPage from "./Components/LandingPage";
import About from "./Components/About.jsx";
import Masterpieces from "./Components/Masterpieces.jsx";
import Collections from "./Components/Collections.jsx";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDpDHRqZKsXAENAL4Zh3Imb5Th_F7vndU",
  authDomain: "masteroftailoring-53370.firebaseapp.com",
  projectId: "masteroftailoring-53370",
  storageBucket: "masteroftailoring-53370.appspot.com",
  messagingSenderId: "720844154178",
  appId: "1:720844154178:web:dd1c98aa19d50e603994db",
  measurementId: "G-XFV5FKP3XE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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