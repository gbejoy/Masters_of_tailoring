import TailorShop from "../assets/Tailor_shop_interior.jpg"
import Logo from '../assets/Website-logo.png';
import React, { useState, useRef } from "react"


export default function Register()
{
    const [formData, setFormData ] = useState(
        {
            email: '',
            username: '',
            password: ''
        }
    )

    function handleChange(event)
    {
        const { name, value } = event.target;
        setFormData(prevState => (
            {
                ...prevState,
                [name]: value
            }
        ));
        console.log(formData);
    }
    return (
        <section className="bg-[#180101] min-h-screen w-full flex flex-row items-center justify-center">
            <div className="bg-stone-100 w-[75vw] md:w-[50vw] lg:w-[75%] h-[80vh] flex flex-row items-center rounded-[10px]">
                <div className="hidden lg:block w-[50%] h-full relative">
                    <img src={TailorShop} className="w-full h-full rounded-l-[10px]"/>
                    <h1 className="text-stone-100 shadow-text-light text-center w-full absolute top-[92%] left-[50%] -translate-x-[50%] whitespace-nowrap text-lg py-2 blur-background">Don't have an account, <span className="text-[#F28928] cursor-pointer whitespace-wrap"><a href="/register">Register Now</a></span>.</h1>
                </div>
                
                <div className="w-full lg:w-[50%] h-full py-[1rem] px-[1rem]">
                    <div className="w-full flex flex-row justify-center py-4"><img src={Logo} className="w-[6rem] h-[6rem]" /></div>
                    <h1 className="text-3xl text-[#F28928] text-center font-medium pb-[1rem] capitalize">Let us know you!</h1>
                    <form className="text-[#262626]">
                        <p className="pb-4 w-full flex flex-col items-center">
                            <label htmlFor="username" className="block pb-1 w-[80%] text-left">
                                Email Id:
                            </label>
                            <input 
                                type="email" 
                                id="email" 
                                onChange={ handleChange }
                                className="bg-stone-300 w-[80%] h-[2rem] focus:outline-none border-[#180101] rounded-md px-2 focus:border-b-2"
                                autoComplete="username"
                            />
                        </p>
                        <p className="pb-4 w-full flex flex-col items-center">
                            <label htmlFor="username" className="block pb-1 w-[80%] text-left">
                                Username:
                            </label>
                            <input 
                                type="text" 
                                id="username"
                                name="username"
                                onChange={ handleChange }
                                className="bg-stone-300 w-[80%] h-[2rem] focus:outline-none border-[#180101] rounded-md px-2 focus:border-b-2"
                                autoComplete="username"
                            />
                        </p>

                        <p className="pb-4 w-full flex flex-col items-center">
                            <label htmlFor="password" className="block pb-1 w-[80%] text-left">
                                Password:
                            </label>
                            <input 
                                type="password" 
                                id="password" 
                                name="password"
                                onChange={ handleChange }
                                className="bg-stone-300 w-[80%] h-[2rem] focus:outline-none border-[#180101] rounded-md px-2 focus:border-b-2"
                                autoComplete="current-password"
                            />
                        </p>

                        <p className="w-[90%] text-right pb-8">
                            <button className="bg-[#262626] text-stone-100 px-4 py-2 rounded-md">
                                <a href="/login">
                                    Register
                                </a>
                            </button>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    )
}