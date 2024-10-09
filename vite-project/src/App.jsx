import React, { useState } from "react";
import LandingPage from "./Components/LandingPage";
import About from "./Components/About.jsx";
import Masterpieces from "./Components/Masterpieces.jsx";
import Products from "./Components/Products.jsx";

function App()
{
  const [ isSignedIn, setIsSignedIn ] = useState(false);
    return (
      <>
        <LandingPage isLogged={isSignedIn} />
        <About />
        <Masterpieces />
        <Products />
      </>
    )
}

export default App;