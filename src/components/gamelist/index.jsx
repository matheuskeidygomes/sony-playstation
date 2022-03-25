import React from "react";
import { games } from '../../models/games';
import GameItem from '../gameitem/index';

export default function GameList(props) {

    return <>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-[#ffffff0d] backdrop-blur-xl pt-7 pb-7">

            {games.map((item, index) => {

                return <GameItem game={item} key={index} Click={props.Click}/>
            
            })}

        </div>

    </>

}