import React from 'react';
import quit from '../images/icons/x.png';
import Social from '../social';
import './index.css';

export default function Menu(props) {

    return <>

        <nav className={`${props.display} md:block ml-8`}>

            <ul className={`flex flex-col z-50 md:flex-row md:min-h-fit md:static ${props.menuActive && "items-center min-h-full w-full p-5 fixed top-0 right-0 animate-slide bg-[#ffffff0d] backdrop-blur-lg md:bg-transparent"}`}>

                <img className="w-10 md:hidden absolute top-19 right-5 cursor-pointer" src={quit} onClick={() => props.onClick()} alt="quit" />

                <li className="font p-3 lg:p-5 mt-16 md:mt-0"> HOME </li>
                <li className="font p-3 lg:p-5"> GAMES </li>
                <li className="font p-3 lg:p-5"> WALLPAPERS </li>
                <li className="font p-3 lg:p-5"> CONTACT </li>

                <div className="mt-10 md:hidden">
                    <Social menuActive={props.menuActive} />
                </div>

            </ul>

        </nav>

    </>
}