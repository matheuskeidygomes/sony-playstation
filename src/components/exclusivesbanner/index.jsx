import React from "react";
import Exclusives from '../../components/images/games/exclusives.jpg';
import Play from '../../components/images/icons/play.png';

export default function ExclusiveGames() {

    return <>

        <div class="flex justify-center items-center bg-cover bg-no-repeat bg-center border-t-2 border-b-2 border-gray-900" style={{ backgroundImage: `url(${Exclusives})`, height: 400 }}>

            <div class="flex flex-col justify-center items-center p-5 w-72 h-72 md:w-80 md:h-80 bg-black rounded-md text-center opacity-70">

                <img src={Play} alt="playstation" />

                <span className="pt-1 text-xl font-bold md:text-2xl md:font-medium">
                    Games for PlayStation®
                </span>

                <span className="pt-6 text-sm font-light md:text-lg">
                    Discover new games! From exclusive hits to innovative indies,
                    all created with the power of PlayStation consoles ™
                </span>

            </div>

        </div>

    </>

}