import React from "react";

export default function GameItem(props) {

    const game = props.game;

    return <>

        <div className="flex flex-col m-4">

            <div>
                <img className="rounded-lg border-2 border-gray-900" src={game.image} alt="game" />
            </div>

            <div className="flex flex-col">

                <div className="pt-5 pb-2">
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

                <button className="mt-5 p-3 border-2 rounded-tl-xl rounded-br-xl transition hover:scale-105 text-lg" onClick={()=> props.Click(game)}> 
                    Show More 
                </button>

            </div>

        </div>


    </>

}