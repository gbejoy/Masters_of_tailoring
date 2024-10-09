import TailorShop from "../assets/tailor_shop.jpg"
import TailorEquip from "../assets/tools_tailor.jpg"

export default function About()
{
    return (
        <section id="about" className="w-full h-svh bg-[#F2E7DC] flex flex-col md:flex-row items-center justify-center">
            <div className="w-full md:w-1/3 h-full flex justify-center items-center">
                <div className="w-full h-full">
                    <div className="relative w-full h-full flex flex-row items-center justify-center">
                        <div className="relative w-full h-full">

                            <div className="min-h-[10rem] w-[50%] h-[35%] md:w-[50%] md:h-[25%] lg:h-[35%] xl:h-1/2 object-fill absolute top-[15%] md:top-[20%] lg:top-[10%] left-[40%]">
                                <img src={TailorShop} alt="Tailor shop" className="w-full h-full rounded-[20px] object-cover"/>
                            </div> 

                            <div className="min-h-[10rem] w-[50%] h-[35%] md:w-[50%] md:h-[25%] lg:h-[35%] xl:h-1/2 object-fill absolute top-[40%] left-[10%]">
                                <img src={TailorEquip} alt="Tailor tools" className="w-full h-full rounded-[20px] object-cover"/>
                            </div> 
                        </div>
                    </div>
                     
                </div>

                </div>
                <div className="w-full md:w-2/3 h-full">
                    {/* Add content here */}
                </div>
        </section>

    )
}