import LandingPage from "./LandingPage";
import About from "./About.jsx";
import Masterpieces from "./Masterpieces.jsx";
import Collections from "./Collections.jsx";


function Site({ isSignedIn })
{
    return (
        <>
          <LandingPage isLogged={isSignedIn} />
          <About />
          <Masterpieces />
          <Collections />
        </>
      )
}

export default Site;