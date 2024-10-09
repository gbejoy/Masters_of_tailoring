function Navbar({ isClicked, isLogged }) 
{
    const navItems = "capitalize text-[1rem] md:text-lg text-stone-100 shadow-text-light hover:text-[#F28928]";
    const btnStyles = "text-stone-100"

    return (
        <div className={`fixed top-full right-0 w-3/4 h-[calc(100svh-5rem)] bg-[#13131396] backdrop-blur-[4px] md:hidden ${isClicked ? 'flex' : 'hidden'} flex-col items-start pl-[0.5rem] gap-[1rem]`}>
            <div className="text-stone-100 flex flex-row gap-2 pl-[1rem] lg:pl-[2rem]">
                {!isLogged ? (
                    <>
                        <button className={btnStyles}>Login</button>
                        <button className={btnStyles}>Sign Up</button>
                    </>
                ) : (
                    <div className="h-[3rem] pt-4 flex flex-row gap-2 items-center">
                        <div className="bg-teal-600 rounded-full w-[3rem] h-[3rem]">
                            <img src="" />
                        </div>
                        <div className="flex flex-col gap-0">
                            <h1 className="text-[1rem]">Name</h1>
                            <p className="text-[0.75rem]">Account No</p>
                        </div>
                        
                    </div>
                )}
            </div>
            <dl className="flex flex-col gap-2 p-4">
                {
                    isLogged ? 
                    <>
                        <dd>
                            <a href="#about" className={navItems}>
                                My Cart
                            </a>
                        </dd>
                        <dd>
                            <a href="#about" className={navItems}>
                                My Wishlist
                            </a>
                        </dd>
                    </>
                    : ''
                }
                <dd>
                    <a href="#about" className={navItems}>
                        About
                    </a>
                </dd>
                <dd>
                    <a href="#products" className={navItems}>
                        Products
                    </a>
                </dd>
                <dd>
                    <a href="#collections" className={navItems}>
                        Collections
                    </a>
                </dd>
                <dd>
                    <a href="#contact" className={navItems}>
                        Contact
                    </a>
                </dd>
            </dl>
        </div>
    )
}

export default Navbar;