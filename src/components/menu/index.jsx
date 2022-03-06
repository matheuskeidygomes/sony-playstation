import React from "react";
import quit from '../images/x.png';
import Social from "../social";

export default function Menu(props) {

    return <>

        <nav className={`${props.display} ml-8 md:block`}>

            <ul className={`flex flex-col ${props.menuActive ? "animate-slide items-center w-80 bg-[#ffffff0d] backdrop-blur-sm md:bg-transparent absolute top-0 right-0 min-h-screen p-5" : ""} md:flex-row md:static md:min-h-fit`}>

                <img className="w-10 cursor-pointer md:hidden absolute top-19 right-5 bg" src={quit} onClick={() => props.onClick()} alt="quit" />

                <li className="p-3 lg:p-5 mt-16 md:mt-0"> HOME </li>
                <li className="p-3 lg:p-5"> GAMES </li>
                <li className="p-3 lg:p-5"> WALLPAPERS </li>



            </ul>

            <div className="md:hidden">

                <Social menuActive={props.menuActive} flex="flex" />

            </div>


        </nav>

    </>
}