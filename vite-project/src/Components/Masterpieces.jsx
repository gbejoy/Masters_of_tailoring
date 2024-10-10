import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import ProductCard from './ProductCard';

export default function Masterpieces()
{   
    return (
        <section id="products" className="bg-stone-100 h-svh w-full">
            <div className="h-[6rem] flex flex-row items-center justify-between px-[1.25rem]">
                <img src="./decoration.png" />
                <h1 className="font-serif font-medium text-2xl md:text-3xl lg:text-4xl text-[#262626]">Our <span className="text-[#F28928]">Masterpieces</span></h1>
                <img src="./decoration.png" />
            </div>

            <div className="bg-[#221D1D] w-[98%] h-[85%] mx-auto rounded-[20px]">
                <div className="h-full w-full flex flex-col lg:flex-row items-center justify-evenly">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    
                </div>
            </div>
        </section>
    )
}