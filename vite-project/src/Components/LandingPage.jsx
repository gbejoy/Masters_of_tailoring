import Header from "./Header";

function LandingPage()
{
    return (
        <div className="w-full h-full">
            <Header />
            <div className="h-svh w-full bg=[#17383E]">
                <img src="/Landing_Page.png" alt="landing page" className="h-full w-full object-cover lg:object-fill" />
            </div>
            <div className="flex flex-col gap-2 text-center w-[35rem] absolute top-1/2 left-1/2 text-stone-100 -translate-x-1/2 -translate-y-1/2 bg-[#1313132c] backdrop-blur-64">
                <h1 className="text-5xl font-bold shadow-text">Masters of <span className="text-[#F28928]">Tailoring</span></h1>
                <p className="text-[#66E7E1] font-bold shadow-text-light">Crafting Excellence, One Stitch at a Time</p>
            </div>
        </div>
    )
}

export default LandingPage;