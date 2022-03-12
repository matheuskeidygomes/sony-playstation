import React, { useState } from "react";
import Menu from '../images/icons/menu.png';
import Logo from "../logo";
import NavMenu from '../menu';
import Social from "../social";

export default function Header() {

    const [menuActive, setMenuActive] = useState(false);
    const display = menuActive ? "block" : "hidden";

    return <>

        <header className="p-1 flex items-center justify-between">

            <div>
                <Logo/>
            </div>

            <div className="flex items-center justify-between md:grow">

                <NavMenu onClick={()=> setMenuActive(!menuActive)} menuActive={menuActive} display={display} />
              
                <Social />

                <div className={`${menuActive ? "hidden" : "block"} md:hidden cursor-pointer`}>
                    <img className="h-14" src={Menu} onClick={() => setMenuActive(!menuActive)} alt="menutoggle"/>
                </div>

            </div>

        </header>

    </>
}