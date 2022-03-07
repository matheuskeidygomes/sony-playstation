import React from 'react';
import Consoles from '../../components/images/consoles.png';

export default function psBanner() {

    return <>

        <div className="w-full  ">

            <div className="flex flex-col justify-center items-center mb-10 mt-10">

                <img className="w-full md:w-3/4" src={Consoles} alt="console" />

                <span className="mt-10 mb-10 text-gray-400 text-xl text-center">
                    Discover a new generation of amazing PlayStation games.
                    Fun games and non-stop fun. there's never been a better time
                    to have fun.
                </span>

                <button className="border transition hover:scale-105 rounded-tl-lg rounded-br-lg p-2 pl-7 pr-7 text-lg"> SHOW MORE </button>

            </div>

        </div>

    </>

};
