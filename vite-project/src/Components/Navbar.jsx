function Navbar({ isClicked, isLogged }) 
{
    const navItems = "capitalize text-[1rem] md:text-lg text-stone-100 shadow-text-light hover:text-[#F28928]";
    const btnStyles = "text-stone-100"

    return (
        <div className={`absolute top-full left-0 w-full bg-[#13131334] backdrop-blur-[4px] md:hidden ${isClicked ? 'flex' : 'hidden'} flex-col items-center`}>
            <dl className="flex flex-col items-center justify-center gap-2 p-4">
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
            <div className="text-stone-100 flex flex-row gap-2 pl-[1rem] lg:pl-[2rem]">
                {!isLogged ? (
                    <>
                        <button className={btnStyles}>Login</button>
                        <button className={btnStyles}>Sign Up</button>
                    </>
                ) : (
                    <div className="">
                        <button className=""></button>
                        <button className=""></button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar;