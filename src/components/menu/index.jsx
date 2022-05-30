import React from 'react';
import quit from '../images/icons/x.png';
import Social from '../social';
import './index.css';
import { useNavigate } from 'react-router-dom';

export default function Menu(props) {

    const navigate = useNavigate();

    return <>

        <nav className={`${props.display} md:block ml-8`}>

            <ul className={`flex flex-col p-5 z-10 md:flex-row md:static md:bg-transparent ${props.menuActive && "items-center justify-center min-h-full w-full fixed top-0 left-0 bottom-0 right-0 animate-slide bg-[#ffffff0d] backdrop-blur-xl"}`}>

                <img className="w-7 md:hidden absolute top-10 right-5 cursor-pointer" src={quit} onClick={() => props.onClick()} alt="quit" />

                <li className="font p-3 lg:p-5 mt-16 md:mt-0 transition hover:scale-110 cursor-pointer" onClick={() => { navigate("/"); props.desactiveMenu(); }}> HOME </li>
                <li className="font p-3 lg:p-5 transition hover:scale-110 cursor-pointer" onClick={() => { navigate("/games"); props.desactiveMenu(); }}> GAMES </li>
                <li className="font p-3 lg:p-5 transition hover:scale-110 cursor-pointer" onClick={() => { navigate("/wallpapers"); props.desactiveMenu(); }}> WALLPAPERS </li>

                <div className="mt-10 md:hidden">
                    <Social menuActive={props.menuActive} />
                </div>

            </ul>

        </nav>

    </>
}