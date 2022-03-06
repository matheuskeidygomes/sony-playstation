import React from 'react'
import Logo from "../../components/images/icons/ps.png"

export default function BannerLeft(props) {

    return <>

        <div className="flex flex-col lg:flex-row">

            <div className="flex items-center justify-center lg:w-3/5">
                <img className="transition hover:scale-105" src={props.banner} alt="gamebanner" />
            </div>

            <div className="flex flex-col items-center justify-center p-5 lg:w-2/5">

                <img className="transition hover:scale-105" src={props.bannerText} alt="gametext" />

                <div className="mt-4">

                    <span className="text-sm text-gray-400">
                        {props.children}
                    </span>

                </div>

                <div className="flex justify-center w-full mt-3">

                    <button className={`w-full m-2 p-2 ${props.buttonColor} rounded-tl-lg rounded-br-lg transition hover:scale-105`}>
                        <a href={props.buy} target="_blank" rel="noreferrer">
                            PRE-ORDER NOW
                        </a>
                    </button>

                    <button className="w-full m-2 p-2 border rounded-tl-lg rounded-br-lg transition hover:scale-105">
                        <a href={props.trailer} target="_blank" rel="noreferrer">
                            WATCH THE TRAILER
                        </a>
                    </button>

                </div>

                <div className="w-full">

                    <div className="flex">
                        <img className="m-2 h-10 w-10" src={Logo} alt="logo" />
                        <img className="m-2 h-10" src={props.gamelogo} alt="marvel" />
                    </div>

                </div>

            </div>

        </div>


    </>

}
