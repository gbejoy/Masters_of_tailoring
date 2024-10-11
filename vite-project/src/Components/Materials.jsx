import Mat from '../assets/Leonardo_cloth-material.jpg';
function Materials(){
    return (
        <section id="materialspage" className="bg-[#221D1D] h-svh w-full">
            <div className='flex flex-col'>

                <div className="flex flex-row h-1/2 w-full items-center justify-between py-[1.25rem] ">
                    <div className=' w-1/3 h-[12rem] flex items-center justify-center'>
                        <img className='w-full h-full object-contain'src={ Mat }/>
                        
                    </div>


                    <div className='flex flex-col items-center w-2/3 gap-12'>
                        <h3 className="font-serif font-medium text-2xl md:text-3xl lg:text-4xl text-stone-100"><span className="text-[#F28928]">Materials</span>We Trust </h3>
                        <p className='text-stone-100'>
                            At <span className="text-[#F28928]">Mastros</span> we believe that the foundation of exceptional clothing lies in the quality of the
                             materials .From fine cottons and silks to rich wool blends we choose only the best to give you 
                             comfort,style and longevity in every garmnent Our commitment to quality means that your
                             custom tailored clothing not only looks impeccable but feels exquisite,wear after wear.
                        </p>
                    </div>
                </div>
                <div className='w-[83%] h-[3px] bg-[#F28928] mx-auto'>

                </div>


                <div className="flex flex-row h-1/2 w-full items-center justify-between py-[1.25rem] ">

                    <div className='flex flex-col items-center w-2/3 gap-12'>
                        <h3 className="font-serif font-medium text-2xl md:text-3xl lg:text-4xl text-stone-100"><span className="text-[#F28928]">Materials</span>We Trust </h3>
                        <p className='text-stone-100'>
                            At <span className="text-[#F28928]">Mastros</span> we believe that the foundation of exceptional clothing lies in the quality of the
                             materials .From fine cottons and silks to rich wool blends we choose only the best to give you 
                             comfort,style and longevity in every garmnent Our commitment to quality means that your
                             custom tailored clothing not only looks impeccable but feels exquisite,wear after wear.
                        </p>
                    </div>
                    <div className=' w-1/3 h-[12rem] flex items-center justify-center'>
                        <img className='w-full h-full object-contain'src={ Mat }/>
                        
                    </div>

                </div>



                <div className=''>



                </div>






            </div>
            
        </section>
    )
}


export default Materials;