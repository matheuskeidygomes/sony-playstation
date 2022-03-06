import React from "react";
import SpiderText from '../../components/images/games/spiderman-text.png';
import Spiderman from '../../components/images/games/spiderman.png';
import Marvel from '../../components/images/icons/marvel.png';
import Guerrila from '../../components/images/icons/guerrilalogo.png'
import Horizon from '../../components/images/games/horizon-zero.png';
import HorizonText from '../../components/images/games/horizon-text.png';
import BannerLeft from "../../components/gamebannerleft";
import BannerRight from "../../components/gamebannerright";
import Consoles from '../../components/images/consoles.png'

export default function Home() {

    return <>

        <section>

            <BannerLeft banner={Spiderman} bannerText={SpiderText} buttonColor="bg-red-600" buy="https://www.playstation.com/pt-br/games/marvels-spider-man-miles-morales/" trailer="https://www.youtube.com/watch?v=qjRzm9A7DU4" gamelogo={Marvel}>

                Marvel's Spider-Man: Miles Morales is a 2020 action-adventure game developed
                by Insomniac Games and published by Sony Interactive Entertainment.

            </BannerLeft>

        </section>

        <section>

            <div className="w-full  ">

                <div className="flex flex-col justify-center items-center mb-10 mt-10">

                    <img className="w-full md:w-3/4" src={Consoles} alt="console" />

                    <span className="mt-10 mb-10 text-gray-400 text-xl text-center">
                        Discover a new generation of amazing PlayStation games.
                        Fun games and non-stop fun. there's never been a better time
                        to have fun.
                    </span>

                    <button className="border transition hover:scale-105 rounded-tl-lg rounded-br-lg p-2 pl-7 pr-7 text-lg"> SHOW MORE </button>

                </div>


            </div>

        </section>

        <section>

            <BannerLeft banner={Horizon} bannerText={HorizonText} buttonColor="bg-sky-700" buy="https://store.playstation.com/en-us/product/UP9000-CUSA10237_00-HRZCE00000000000" trailer="https://www.youtube.com/watch?v=wzx96gYA8ek" gamelogo={Guerrila}>

                Take on the role of skilled hunter Aloy as you explore a lush world inhabited by
                mysterious mechanized creatures in an exhilarating new Open World Action/ RPG
                exclusively for the PlayStation®4 System.

            </BannerLeft>

        </section>

    </>

}