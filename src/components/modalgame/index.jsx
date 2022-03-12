import React from "react";
import X from '../images/icons/x.png';
import './index.css';

export default function ModalGame(props) {

    const game = props.game;

    return <>

        <div className="flex justify-center items-center opacitty fixed bottom-0 right-0 left-0 top-0 z-10">

            <div className="flex animate-fade flex-col lg:flex-row bg fixed h-screen lg:h-5/6 overflow-y-auto border-t-2 border-b-2 border-gray-900 pt-16 lg:p-10">

                <button className="absolute top-7 right-3" onClick={() => props.Click()}> <img className="w-8" src={X} alt="X"/> </button>

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

                    <div className="pt-3">
                        <span className="text-sm font-light"> {game.synopsis}</span>
                    </div>

                </div>

            </div>

        </div>

    </>

}