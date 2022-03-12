import React, {useState} from "react";
import ExclusiveGames from "../../components/exclusivesbanner";
import GameList from "../../components/gamelist";
import ModalGame from "../../components/modalgame";

export default function Games() {

    const [visible, setVisible] = useState(false);
    const [game, setGame] = useState();

    function openModal(game) {
        setGame(game);
        setVisible(!visible);
    }

    return <>

        {visible &&
            <ModalGame game={game} Click={()=>setVisible(!visible)}/>
        }

        <ExclusiveGames />

        <GameList Click={(game)=> openModal(game)} />

    </>
} 