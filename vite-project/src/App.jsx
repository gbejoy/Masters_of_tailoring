import React, { useState } from "react";
import LandingPage from "./Components/LandingPage";

function App()
{
  const [ isSignedIn, setIsSignedIn ] = useState(false);
    return (
      <>
        <LandingPage isLogged={isSignedIn} />
      </>
    )
}

export default App;