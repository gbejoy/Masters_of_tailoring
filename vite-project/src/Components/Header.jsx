import Logo from "/Website-logo.png"

function Header()
{
    return (
        <header className="w-full h-[5rem] absolute top-0 left-0">
            <div className="h-16 w-16 ">
                <img src={ Logo } alt="Company's logo" className="text-center" />
            </div>
        </header>
    )
}

export default Header;