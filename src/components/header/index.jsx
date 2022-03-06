import React, { useState } from "react";
import Menu from '../images/menu.png';
import Logo from "../logo";
import NavMenu from '../menu';
import Social from "../social";

export default function Header() {

    const [menuActive, setMenuActive] = useState(false);
    let display = menuActive ? "block" : "hidden";

    return <>

        <header className="flex items-center justify-between">

            <div>
                <Logo/>
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