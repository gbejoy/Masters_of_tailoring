import Header from "./Header";

function LandingPage()
{
    return (
        <div className="w-full h-full">
            <Header />
            <div className="h-svh w-full bg=[#17383E]">
                <img src="/Landing_Page.png" alt="landing page" className="h-full w-full object-cover lg:object-fill" />
            </div>
        </div>
    )
}

export default LandingPage;