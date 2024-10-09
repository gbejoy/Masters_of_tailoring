import Logo from "/Website-logo.png"

function Header({ isLogged })
{
    const btnStyles = "capitalize backdrop-blur-lg rounded-[0.5rem] w-[5rem] py-2 bg-[#13131399] hover:text-[#F28928]";
    const navItems = "capitalize text-lg text-stone-100 shadow-text-light hover:text-[#F28928]"

    return (
        <header className="w-full h-[5rem] absolute top-0 left-0 flex flex-row bg-[#13131334] backdrop-blur-[4px] border-b-2 border-stone-100 items-center justify-between px-[1rem]">
            <div className="h-16 w-16 ">
                <img src={ Logo } alt="Company's logo" />
            </div>
            <div className={`flex flex-row `}>
                <dl className="flex flex-row items-center justify-center gap-[2rem] ">
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
                <div className="text-stone-100 flex flex-row gap-2 pl-[2rem] ">
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