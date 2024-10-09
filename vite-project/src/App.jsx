import React, { useState } from "react";
import LandingPage from "./Components/LandingPage";
import About from "./Components/About";

function App()
{
  const [ isSignedIn, setIsSignedIn ] = useState(false);
    return (
      <>
        <LandingPage isLogged={isSignedIn} />
        <About />
      </>
    )
}

export default App;