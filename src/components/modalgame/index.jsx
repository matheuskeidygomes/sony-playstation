import React from "react";
import X from '../images/icons/x.png';
import './index.css';

export default function ModalGame(props) {

    const game = props.game;

    return <>

        <div className="flex justify-center items-center opacitty fixed bottom-0 right-0 left-0 top-0 z-10">

            <div className="flex animate-fade flex-col lg:flex-row bg fixed h-full lg:h-5/6 overflow-y-auto border-t-2 border-b-2 border-gray-900 pt-20 lg:p-10">

                <button className="absolute top-9 right-2 p-1 transition-all hover:scale-110" onClick={() => props.Click()}> <img className="w-6" src={X} alt="X"/> </button>

                <div className="lg:w-3/5 p-4">

                    <img className="rounded-lg border border-gray-900" src={game.image} alt={"game"}/>

                </div>

                <div className="flex flex-col lg:w-2/5 p-4 h-full lg:overflow-y-auto">

                    <div className="pb-3">
                        <span className="text-2xl font-light"> {game.name} </span>
                    </div>

                    <div>
                        <span className="text-sm font-light"> Distributor: </span>
                        <span className="text-sm font-semibold"> {game.distributor} </span>
                    </div>

                    <div>
                        <span className="text-sm font-light"> Release: </span>
                        <span className="text-sm font-semibold"> {game.date} </span>
                    </div>

                    <div>
                        <span className="text-sm font-light"> Genre: </span>
                        <span className="text-sm font-semibold"> {game.genre} </span>
                    </div>

                    <div>
                        <span className="text-sm font-light"> Platform: </span>
                        <span className="text-sm font-semibold"> {game.platform} </span>
                    </div>

                    <div className="pt-3 pb-5">
                        <span className="text-sm font-light"> {game.synopsis}</span>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-center w-full">

                        <button className="bg-red-600 rounded-tl-lg rounded-br-lg p-3 m-2 transition hover:scale-105 lg:w-1/2"> BUY NOW </button>
                        <button className="border rounded-tl-lg rounded-br-lg p p-3 m-2 transition hover:scale-105 lg:w-1/2"> WATCH THE TRAILER </button>

                    </div>

                </div>

            </div>

        </div>

    </>

}