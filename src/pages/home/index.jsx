import React from "react";
import SpiderText from '../../components/images/games/spiderman-text.png';
import Spiderman from '../../components/images/games/spiderman.png';
import Marvel from '../../components/images/icons/marvel.png';
import Guerrila from '../../components/images/icons/guerrilalogo.png'
import Horizon from '../../components/images/games/horizon-zero.png';
import HorizonText from '../../components/images/games/horizon-text.png';
import GameBanner from "../../components/gamebanner";
import PsBanner from "../../components/psbanner";

export default function Home() {

    return <>

        <section>

            <GameBanner banner={Spiderman} bannerText={SpiderText} buttonColor="bg-red-600" buy="https://www.playstation.com/pt-br/games/marvels-spider-man-miles-morales/" trailer="https://www.youtube.com/watch?v=qjRzm9A7DU4" gamelogo={Marvel}>

                Marvel's Spider-Man: Miles Morales is a 2020 action-adventure game developed
                by Insomniac Games and published by Sony Interactive Entertainment.

            </GameBanner>

        </section>

        <section>

            <PsBanner />

        </section>

        <section>

            <GameBanner banner={Horizon} bannerText={HorizonText} buttonColor="bg-sky-700" buy="https://store.playstation.com/en-us/product/UP9000-CUSA10237_00-HRZCE00000000000" trailer="https://www.youtube.com/watch?v=wzx96gYA8ek" gamelogo={Guerrila}>

                Take on the role of skilled hunter Aloy as you explore a lush world inhabited by
                mysterious mechanized creatures in an exhilarating new Open World Action/ RPG
                exclusively for the PlayStation®4 System.

            </GameBanner>

        </section>

    </>

}