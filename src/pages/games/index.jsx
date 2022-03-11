import React from "react";
import Exclusives from '../../components/images/games/exclusives.jpg';

export default function Games() {

    return <>

        <div class="border-t-2 border-b-2 border-gray-900 flex justify-center items-center bg-cover bg-no-repeat bg-center " style={{ backgroundImage: `url(${Exclusives})`, height:400 }}>

            <div class="bg-black rounded-md p-5 opacity-70">
                    <span className="opacity-100"> olá </span> 
            </div>
    
        </div>
    
    </>
} 