import React, { useState } from 'react'
import XboxLogo from '../../assets/Xbox_logo.png'
import MenuIcon from '../../assets/menu.png'
import closeMenu from '../../assets/x.png'

const Navbar = () => {
    const [toggleSidebar, setToggleSidebar] = useState(false)


  return (
    <div className='flex items-center justify-between'>

        <div>
            <img className='w-24 h-24 animate-pulse1 ml-8 mt-4' src={XboxLogo} alt="xbox-logo" />
        </div>
        
        <div className='flex items-center justify-between md:grow'>
            
            <nav className={`${toggleSidebar ? "block" : "hidden"} md:block`}>
                <ul className={`flex flex-col md:flex-row md:min-h-fit md:static ${toggleSidebar && 'items-center min-h-full w-full p-5 fixed top-0 right-0 animate-slide bg-[#ffffff1d] backdrop-blur-md md:bg-transparent'}`}>
                    <img className='h-14 md:hidden absolute cursor-pointer right-5' src={closeMenu} alt="close-menu" onClick={()=>setToggleSidebar(!toggleSidebar)} />

                    <a href="/"><li className='text-slate-300 hover:text-green-500 font p-3 lg:p-5 ml-8 mt-16 md:mt-0'>HOME</li></a>
                    <a href="/"><li className='text-slate-300 hover:text-green-500 font p-3 lg:p-5'>GAMES</li></a>
                    <a href="/"><li className='text-slate-300 hover:text-green-500 font p-3 lg:p-5'>WALLPAPERS</li></a>
                    <a href="/"><li className='text-slate-300 hover:text-green-500 font p-3 lg:p-5'>CONTACT</li></a>
                </ul>
            </nav>

            <div className={`${toggleSidebar ? 'hidden': 'block'} md:hidden cursor-pointer`}>
                <img onClick={()=>setToggleSidebar(!toggleSidebar)} className='h-14' src={MenuIcon} alt="Menu-Icon" />
            </div>

        </div>
    </div>
  )
}

export default Navbar