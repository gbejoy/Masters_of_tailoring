import { useState } from 'react';
import Logo from '../assets/Website-logo.png';
import styles from './Header.module.css'
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

function Header({ isLogged })
{
    const [ isHamClicked, setIsHamClicked ] = useState(false);
    const [ showUserMenu, setShowUserMenu ] = useState(false);
    const btnStyles = "capitalize backdrop-blur-[24px] rounded-[0.5rem] w-[5rem] py-2 bg-[#13131333] hover:text-[#F28928] shadow-text-light";
    const navItems = "capitalize text-[1rem] md:text-lg text-stone-100 shadow-text-light hover:text-[#F28928]";

    function handleClickShow()
    {
        setIsHamClicked(prevState => !prevState);
    }

    function handleUserMenu()
    {
        setShowUserMenu(prevState => !prevState);
    }

    return (
        <header className={`${isHamClicked ? 'bg-[#131313b5] animated' : 'bg-[#13131334]'} w-full h-[5rem] absolute top-0 left-0 flex flex-row  backdrop-blur-[4px] border-b-[2px] border-stone-100 items-center justify-between p-[1rem] z-50`}>
            <div className="h-16 w-16 ">
                <img src={ Logo } alt="Company's logo" />
            </div>
            <div>
                <button className={`md:hidden ${styles.menuButton} ${isHamClicked ? styles.active : ''}`} onClick={handleClickShow}>
                    <div className={`${styles.menuIcon}`}></div>
                </button>
                <Navbar isClicked={isHamClicked} isLogged={isLogged} />
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
                        <div className="w-[4rem] h-[3rem] rounded-lg bg-[#13131334] relative">
                            <div className='flex flex-row items-center'>
                                <span className='w-[3rem] h-[3rem] rounded-full text-center flex items-center justify-center'><FontAwesomeIcon icon={faUser} className="text-stone-100 text-lg" /></span>
                                <button className="w-[3rem] h-[3rem]" onClick={ handleUserMenu }><FontAwesomeIcon icon={faChevronDown} className="text-[#F28928] text-lg" /></button>
                            </div>
                            { showUserMenu ? 
                                    <div className='flex flex-col gap-2 w-[15rem] absolute -left-[275%] bg-[#131313c7] p-4'>
                                        <div className="h-[3rem] py-8 flex flex-row gap-2 items-center">
                                            <div className="bg-teal-600 rounded-full w-[3rem] h-[3rem]">
                                                
                                            </div>
                                            <div className="flex flex-col gap-0 cursor-default">
                                                <h1 className="text-[1rem]">Name</h1>
                                                <p className="text-[0.75rem]">Account No</p>
                                            </div>
                                        </div>

                                        <dl className="flex flex-col gap-2 py-4 text-left border-t-2 border-[#F28928] cursor-pointer">
                                            <dd>
                                                <a className={navItems}>
                                                    My Cart
                                                </a>
                                            </dd>
                                            <dd>
                                                <a className={navItems}>
                                                    My Wishlist
                                                </a>
                                            </dd>
                                            <dd>
                                                <a className={navItems}>
                                                    Log Out
                                                </a>
                                            </dd>
                                        </dl>
                                    </div>
                                :
                                <></>
                            }
                        </div>
                    }
                </div>
            </div>
        </header>
    )
}

export default Header;