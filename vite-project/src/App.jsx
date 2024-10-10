import React, { useState } from "react";
import LandingPage from "./Components/LandingPage";
import About from "./Components/About.jsx";
import Masterpieces from "./Components/Masterpieces.jsx";
import Collections from "./Components/Collections.jsx";

function App()
{
  const [ isSignedIn, setIsSignedIn ] = useState(true);
    return (
      <>
        <LandingPage isLogged={isSignedIn} />
        <About />
        <Masterpieces />
        <Collections />
      </>
    )
}

export default App;