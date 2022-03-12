import React, {useState} from "react";
import ExclusiveGames from "../../components/exclusivesbanner";
import GameList from "../../components/gamelist";
import './index.css';


export default function Games() {

    const [visible, setVisible] = useState(false);
    const [game, setGame] = useState();

    function openModal(game) {
        setGame(game);
        setVisible(!visible);
    }

    return <>

        {visible &&

            <div className="flex justify-center items-center fixed opacitty bottom-0 right-0 left-0 top-0 z-10">

                <div className="bg fixed p-10 rounded-lg">

                

                    <span> {game.name} </span>

                <button className="absolute top-2 right-2" onClick={() => setVisible(!visible)}> X </button>


                </div>

            </div>
        }


        <ExclusiveGames />

        <GameList Click={(game)=> openModal(game)} />

        

    </>
} 