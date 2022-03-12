import React from 'react';
import instagram from '../images/icons/instagram.png';
import youtube from '../images/icons/youtube.png';
import facebook from '../images/icons/facebook.png';
import twitter from '../images/icons/twitter.png';

export default function Social(props) {

    return <>

        <div className={`${!props.menuActive && "hidden"} flex md:flex md:block`}>

            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/SonyBrasil/"> 
                <img className="w-7 m-2 transition hover:scale-110" src={facebook} alt="facebook" /> 
            </a>

            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/playstation_br/"> 
                <img className="w-7 m-2 transition hover:scale-110" src={instagram} alt="instagram" /> 
            </a>

            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/SonyBrasil/"> 
                <img className="w-7 m-2 transition hover:scale-110" src={youtube} alt="youtube" /> 
            </a>
            
            <a target="_blank" rel="noreferrer" href="https://twitter.com/sony"> 
                <img className="w-7 m-2 transition hover:scale-110" src={twitter} alt="twitter" /> 
            </a>

        </div>

    </>

}

