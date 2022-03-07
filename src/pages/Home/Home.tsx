import React from 'react'
import HaloChar from '../../assets/halo5.png'
import HaloName from '../../assets/halo5name.png'

const Home = () => {
  return (
    <div>
        <section className='flex flex-col lg:flex-row'>

            <div className='flex items-center justify-center lg:w-3/5 md:ml-12'>
                <img className='transition hover:scale-105' src={HaloChar} alt="Halo-Char" />
            </div>

            <div className='flex flex-col items-center justify-center p-5 lg:w-2/5'>
                <img className='transition hover:scale-105' src={HaloName} alt="Halo-Name" />

                <div className='mt-4'>
                    <span className='text-sm text-gray-400'>
                        Esse jogo é um jogo muito pica
                    </span>
                </div>
                
                {/* falta colocar os botões de comprar */}
            </div>

        </section>
    </div>
  )
}

export default Home