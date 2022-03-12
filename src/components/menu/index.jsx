import React from 'react';
import quit from '../images/icons/x.png';
import Social from '../social';
import './index.css';

export default function Menu(props) {

    return <>

        <nav className={`${props.display} md:block ml-8`}>

            <ul className={`flex flex-col p-5 z-10 md:flex-row md:static md:bg-transparent ${props.menuActive && "items-center justify-center min-h-full w-full fixed top-0 right-0 animate-slide bg-[#ffffff0d] backdrop-blur-xl"}`}>

                <img className="w-10 md:hidden absolute top-5 right-5 cursor-pointer" src={quit} onClick={() => props.onClick()} alt="quit" />

                <li className="font p-3 lg:p-5 mt-16 md:mt-0 transition hover:scale-110"> <a href="/"> HOME </a> </li>
                <li className="font p-3 lg:p-5 transition hover:scale-110"> <a href="/games"> GAMES </a> </li>
                <li className="font p-3 lg:p-5 transition hover:scale-110"> <a href="/wallpapers"> WALLPAPERS </a> </li>

                <div className="mt-10 md:hidden">
                    <Social menuActive={props.menuActive} />
                </div>

            </ul>

        </nav>

    </>
}