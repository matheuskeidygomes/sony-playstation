import React from 'react'
import HaloChar from '../../assets/halo5.png'
import HaloName from '../../assets/halo5name.png'
import Tilt from 'react-parallax-tilt';

const Home = () => {
  return (
    <div className='mt-5'>
        <section className='flex flex-col lg:flex-row'>

            <div className='flex items-center justify-center lg:w-3/5 md:ml-12'>
                <Tilt>
                    <img className='transition hover:scale-105 ml-12 md:ml-2' src={HaloChar} alt="Halo-Char" />
                </Tilt>
            </div>

            <div className='flex flex-col items-center justify-center mr-2 p-5 lg:w-2/5'>
                <Tilt>
                    <img className='transition hover:scale-105' src={HaloName} alt="Halo-Name" />
                </Tilt>
                <div className='mt-4'>
                    <span className='text-sm text-gray-400'>
                        Esse jogo é um jogo muito pica
                    </span>
                </div>
                
                <div className='flex-col p-2'>
                    <button className='mr-5 bg-gradient-to-r from-lime-700 to-orange-500 w-72 md:w-52 h-10 border rounded-tl hover:from-yellow-500 hover:to-lime-700 '>
                        Compre agora
                    </button>

                    <button className='ml-5 bg-gradient-to-r from-orange-500 to-lime-700 w-72 md:w-52 h-10 border rounded-tl hover:from-lime-700 hover:to-yellow-500 '>
                        Compre agora
                    </button>
                </div>
            </div>

        </section>
    </div>
  )
}

export default Home