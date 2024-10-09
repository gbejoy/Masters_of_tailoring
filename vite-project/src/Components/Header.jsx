import { useState } from 'react';
import Logo from "/Website-logo.png"
import styles from './Header.module.css'
import Navbar from './Navbar';

function Header({ isLogged })
{
    const [ isHamClicked, setIsHamClicked ] = useState(false);
    const btnStyles = "capitalize backdrop-blur-lg rounded-[0.5rem] w-[5rem] py-2 bg-[#13131399] hover:text-[#F28928]";
    const navItems = "capitalize text-[1rem] md:text-lg text-stone-100 shadow-text-light hover:text-[#F28928]";

    function handleClickShow()
    {
        setIsHamClicked(prevState => !prevState);
    }

    return (
        <header className={`${isHamClicked ? 'bg-[#131313b5] animated' : 'bg-[#13131334]'} w-full h-[5rem] absolute top-0 left-0 flex flex-row  backdrop-blur-[4px] border-b-[1px] border-stone-100 items-center justify-between p-[1rem] z-50`}>
            <div className="h-16 w-16 ">
                <img src={ Logo } alt="Company's logo" />
            </div>
            <div>
                <button className={`md:hidden ${styles.menuButton} ${isHamClicked ? styles.active : ''}`} onClick={handleClickShow}>
                    <div className={`${styles.menuIcon}`}></div>
                    <Navbar isClicked={isHamClicked} isLogged={isLogged} />
                </button>
            </div>
            
            

            <div className={`hidden md:flex flex-row `}>
                <dl className="flex flex-row items-center justify-center gap-[1.25rem] lg:gap-[2rem]">
                    <dd>
                        <a href="#about" className={ navItems }>
                            About
                        </a>
                    </dd>
                    <dd>
                        <a href="#products" className={ navItems }>
                            Products
                        </a>
                    </dd>
                    <dd>
                        <a href="#collections" className={ navItems }>
                            Collections
                        </a>
                    </dd>
                    <dd>
                        <a href="#contact" className={ navItems }>
                            Contact
                        </a>
                    </dd>
                </dl>
                <div className="text-stone-100 flex flex-row gap-2 pl-[1rem] lg:pl-[2rem] ">
                    { !isLogged ? <>
                        <button className={btnStyles}>
                            Login
                        </button>
                        <button className={btnStyles}>
                            Sign Up
                        </button>
                        </>
                        :
                        <div className="">
                            <button className=""></button>
                            <button className=""></button>
                        </div>
                    }
                </div>
            </div>
        </header>
    )
}

export default Header;