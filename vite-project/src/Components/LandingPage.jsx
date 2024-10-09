import Header from "./Header";

function LandingPage()
{
    return (
        <div className="w-full h-full">
            <Header />
            <div className="h-svh w-full bg=[#17383E]">
                <img src="/Landing_Page.png" alt="landing page" className="h-full w-full object-cover lg:object-fill " />
            </div>
            <div className=" w-[20rem] flex flex-col gap-2 text-center items-center md:w-[35rem] absolute top-1/2 left-1/2 text-stone-100 -translate-x-1/2 -translate-y-1/2 backdrop-blur-[2px] p-2">
                <h1 className="text-3xl md:text-5xl font-bold shadow-text">Masters of <span className="text-[#F28928]">Tailoring</span></h1>
                <p className="text-[#66E7E1] font-bold shadow-text-light">Crafting Excellence, One Stitch at a Time</p>
                <button className="backdrop-blur-lg rounded-[0.5rem] w-[8rem] py-2 bg-[#13131334] hover:text-[#F28928] ">Explore Now</button>
            </div>
        </div>
    )
}

export default LandingPage;