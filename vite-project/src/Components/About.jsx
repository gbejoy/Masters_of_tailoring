import CollectionStar from '/CollectionStart.png';

export default function About() {
    return (
        <section id="about" className="w-full h-screen bg-[#F2E7DC] flex flex-col md:flex-row items-center justify-center">
            {/* Image container */}
            <div className="w-full h-[50%] md:w-1/3 md:h-full flex flex-row justify-center items-center">
                <img 
                    src={CollectionStar} 
                    alt="group" 
                    className="max-w-[80%] h-[80%] object-contain"
                />
            </div>

            <div className="w-full md:w-2/3 h-full flex flex-col justify-center gap-[2.5rem] xl:gap-[4rem]">
                <div className='text-left'>
                    <h1 className='font-Sail text-3xl xl:text-4xl text-left'>Where Tailoring Meets Artistry</h1>
                </div>
                <div className='text-[1rem] font-Noto w-[90%] xl:w-[80%] flex flex-col gap-[2rem]'>
                    <p>
                    At <span className='text-[#F28928]'>Mastros</span>, we take pride in the timeless art of custom tailoring. Every piece of clothing is handmade with precision, ensuring a perfect fit that reflects your personal style. Our customers can provide their exact measurements, choose from a curated selection of fabrics and designs, or share their own creative vision with us.
                    </p>
                    <p>
                    With years of experience and a passion for fine craftsmanship, we are committed to delivering garments that are as unique as the individuals who wear them. At <span className='text-[#F28928]'>Mastros</span>, we don’t just tailor clothes — we create ever-lasting impressions.
                    </p>
                </div>
            </div>
        </section>
    );
}



{/* <section id="about" className="w-full h-svh bg-[#F2E7DC] flex flex-col md:flex-row items-center justify-center">
    <div className="w-full md:w-1/3 h-full flex justify-center items-center">
        <div className="relative w-full h-full">
            <div className="min-w-[6rem] min-h-[10rem] w-[50%] h-[35%] md:w-[50%] md:h-[25%] lg:h-[35%] xl:h-1/2 object-fill absolute top-[15%] md:top-[10%] left-[40%]">
                <img src={TailorShop} alt="Tailor shop" className="w-full h-full rounded-[20px] object-cover"/>
            </div> 
            <div className="min-w-[6rem] min-h-[10rem] w-[50%] h-[35%] md:w-[50%] md:h-[25%] lg:h-[35%] xl:h-1/2 object-fill absolute top-[40%] left-[10%]">
                <img src={TailorEquip} alt="Tailor tools" className="w-full h-full rounded-[20px] object-cover"/>
            </div> 
        </div>
    </div>
    <div className="w-full md:w-2/3 h-full">
    </div>
</section> */}