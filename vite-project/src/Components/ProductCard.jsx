import Suit1 from "../assets/Dragon-suit.png"

export default function ProductCard()
{
    const cardStyles = "h-[30%] w-[90%] lg:h-[90%] lg:w-[25%] bg-[#B7B7B7] rounded-[10px] lg:rounded-[20px] relative";
    return (
        <div className={cardStyles}>
            <img src={Suit1} className='lg:w-full h-full w-[40%] object-contain rounded-[20px]' />
            <div className='flex flex-col justify-between absolute top-[0] left-[40%] lg:left-0 lg:top-[65%] bg-[#131313c7] text-stone-100 lg:w-full lg:h-[35%] h-full w-[60%] rounded-r-[10px] lg:rounded-b-[20px] lg:rounded-t-[10px] p-4'>
                <div>
                    <h1 className='text-2xl text-[#F28928]'>Dragon Suit</h1>
                    <p className='text-[0.5rem] pb-4'>~Year of the Dragon Collection </p>
                    <p className='text-[0.5rem] lg:text-[10px] pb-2'>The Red Dragon Suit for men exudes bold elegance, featuring intricate dragon motifs and a rich crimson hue, perfect for making a powerful statement at any formal event.</p>                    
                </div>
                <div className='flex justify-between'>
                    <h2 className='text-[0.75rem]'>Price: $1200</h2>
                    <button className='text-[#F28928] backdrop-blur-[6px] hover:text-stone-100 text-[0.75rem]'>View</button>
                </div>           
            </div>
        </div>
    )
}