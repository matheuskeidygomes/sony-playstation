import React from 'react';
import instagram from '../images/instagram.png';
import youtube from '../images/youtube.png';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';

export default function Social(props) {

    return <>

        <div className={`flex flex-row ${props.menuActive ? ""  : "hidden"} md:block`}>

            <a target="_blank" href="https://www.facebook.com/SonyBrasil/"> <img className="w-6 ml-3" src={facebook} alt="facebook" /> </a>
            <a target="_blank" href="https://www.instagram.com/playstation_br/"> <img className="w-6 ml-3" src={instagram} alt="instagram" /> </a>
            <a target="_blank" href="https://www.facebook.com/SonyBrasil/"> <img className="w-6 ml-3" src={youtube} alt="youtube" /> </a>
            <a target="_blank" href="https://twitter.com/sony"> <img className="w-6 ml-3" src={twitter} alt="twitter" /> </a>

        </div>

    </>

}

