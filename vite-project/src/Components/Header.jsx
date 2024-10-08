import Logo from "/Website-logo.png"

function Header()
{
    return (
        <header className="">
            <div className="">
                <img src={ Logo } alt="Company's logo" />
            </div>
        </header>
    )
}

export default Header;