import React from "react";
import SpiderText from '../components/images/spiderman-text.png';
import Spiderman from '../components/images/spiderman.png';

export default function Home() {

    return <>

        <section>

            <div className="flex flex-col md:flex-row">



                <div className="flex md:w-3/5 justify-center items-center"  >

                    <img src={Spiderman} alt="spiderman" />

                </div>



                <div className="flex flex-col p-10 md:w-2/5 justify-center items-center">

                    <img className="transition  hover:scale-105" src={SpiderText} alt="spidertext" />

                    <div className="mt-4">
                        <span className="text-sm text-gray-400">
                            Marvel's Spider-Man: Miles Morales is a 2020 action-adventure game developed by Insomniac Games and published by Sony Interactive Entertainment.

                        </span>
                    </div>

                    <div className="flex mt-3 w-full">

                        <button className="border transition  hover:scale-105 bg-red-600 rounded-tl-lg rounded-br-lg w-full lg:w-2/5 m-3 p-2">

                            Pre-order

                        </button>

                        <button className="border transition  hover:scale-105 rounded-tl-lg rounded-br-lg w-full lg:w-2/5 m-3 p-2">

                            Watch Trailer

                        </button>

                    </div>

                </div>


            </div>

        </section>

    </>

}