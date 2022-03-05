import React, { useState } from "react";
import psicon from '../images/ps.png';
import Menu from '../images/menu.png';
import NavMenu from '../menu';
import Social from "../social";

export default function Header() {

    const [menuActive, setMenuActive] = useState(false);
    let display = menuActive ? "block" : "hidden";

    return <>

        <header className="flex items-center justify-between">

            <div>

                <img className="h-28 animate-pulse3" src={psicon} alt="ps"/>

            </div>

            <div className="flex justify-between items-center md:grow">

                <NavMenu onClick={()=> setMenuActive(!menuActive)} menuActive={menuActive} display={display} />

                <Social/>

                <div className={`${menuActive ? "hidden" : "block"} md:hidden cursor-pointer`}>

                    <img className="h-14" src={Menu} onClick={() => setMenuActive(!menuActive)} alt="menutoggle"/>

                </div>

            </div>

        </header>

    </>
}