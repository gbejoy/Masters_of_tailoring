import TailorShop from "../assets/Tailor_shop_interior.jpg"
import React, { useState, useRef } from "react"

export default function Login()
{
    return (
        <section className="bg-[#180101] min-h-screen min-w-full flex flex-row items-center justify-center">
            <div className="bg-stone-100 w-[75vw] md:w-[50vw] lg:w-[75%] h-[80vh] flex flex-row items-center rounded-[10px]">
                <div className="hidden lg:block w-[50%] h-full relative">
                    <img src={TailorShop} className="w-full h-full rounded-l-[10px]"/>
                    <h1 className=" text-center w-full absolute top-[92%] left-[50%] -translate-x-[50%] whitespace-nowrap text-lg py-2 blur-background">Don't have an account, <span className="text-[#F28928] cursor-pointer"><a href="/register">Register</a></span> here.</h1>
                </div>
                
                <div>
                    <form>
                        <title></title>
                    </form>
                </div>
            </div>
        </section>
    )
}