import React from "react";
import SpiderText from '../components/images/games/spiderman-text.png';
import Spiderman from '../components/images/games/spiderman.png';
import Logo from "../components/images/icons/ps.png";
import Marvel from '../components/images/icons/marvel.png';

export default function Home() {

    return <>

        <section>

            <div className="flex flex-col lg:flex-row">

                <div className="flex lg:w-3/5 items-center justify-center"  >
                    <img className="transition hover:scale-110" src={Spiderman} alt="spiderman" />
                </div>

                <div className="flex flex-col p-5 lg:w-2/5 items-center justify-center">

                    <img className="transition hover:scale-105" src={SpiderText} alt="spidertext" />

                    <div className="mt-4">

                        <span className="text-sm text-gray-400">
                            Marvel's Spider-Man: Miles Morales is a 2020 action-adventure game developed
                            by Insomniac Games and published by Sony Interactive Entertainment.
                        </span>

                    </div>

                    <div className="flex mt-3 justify-center w-full">

                        <button className="transition hover:scale-105 bg-red-600 rounded-tl-lg rounded-br-lg w-full m-2 p-2">
                            <a href="https://www.playstation.com/pt-br/games/marvels-spider-man-miles-morales/" target="_blank" rel="noreferrer">
                                PRE-ORDER NOW
                            </a>
                        </button>

                        <button className="border transition hover:scale-105 rounded-tl-lg rounded-br-lg w-full m-2 p-2">
                            <a href="https://www.youtube.com/watch?v=qjRzm9A7DU4" target="_blank" rel="noreferrer">
                                WATCH THE TRAILER
                            </a>
                        </button>

                    </div>

                    <div className="w-full">

                        <div className="flex justify-start items-start">
                            <img className="m-2 w-10 h-10" src={Logo} alt="logo" />
                            <img className="m-2 w-20" src={Marvel} alt="marvel" />
                        </div>

                    </div>

                </div>

            </div>

        </section>

    </>

}