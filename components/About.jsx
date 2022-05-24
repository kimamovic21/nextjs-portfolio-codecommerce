import React from 'react';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-12'>

        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>

            <div className='col-span-2'>
                <p className='uppercase text-2xl tracking-widest text-[#5651e5]'>
                    About
                </p>
                <h2 className='py-4'>
                    Who I am ?
                </h2>
                <p className='py-2 text-gray-600'>
                    My name is Kerim Imamović.
                </p>
                <p className='py-2 text-gray-600'>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Id, pariatur minus quidem porro maiores explicabo itaque.
                   Itaque assumenda, pariatur est suscipit ullam ipsum nulla 
                   beatae, provident quos maxime tempora soluta.
                </p>
                <p className='py-2 text-gray-600'>
                   Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                   Autem veritatis, nemo dolores quasi ratione dolore perspiciatis
                   aliquam quae harum doloremque quam, magnam aliquid quisquam
                   cumque ab nihil facere, iusto ipsum!
                </p>
                <p className='py-2 text-gray-600 underline cursor-pointer'>
                    Check out my latest projects I created.
                </p>
            </div>

            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl
                            flex items-center justify-center p-10 md:hover:scale-105 ease-in duration-500'>
                <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820" 
                     alt="Laptop image" 
                />
            </div>

        </div>

    </div>
  )
}

export default About;




// 1. kreiramo i uredujemo divove
// 2. uredujemo elemente unutar divova