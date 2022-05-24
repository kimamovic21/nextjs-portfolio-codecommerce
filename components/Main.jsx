import React from 'react';
import {FaLinkedinIn, FaGithub, FaFacebook, FaInstagram} from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>

        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>

            <div className='sm:mt-5'>

                <p className='uppercase text-sm tracking-widest text-gray-500'>
                    Let's build something together.
                </p>
                <h1 className='py-3 text-gray-700'>
                    Hi, I'am <span className='text-[#5651e5]'>Kerim</span>
                </h1>
                <h2 className='py-3 text-gray-700'>
                    I'm learning front-end web technologies
                </h2>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                     Welcome to my portfolio web page. I am practising a front-end development. 
                     Front-end web development is the development of the graphical
                     user interface of a website, through the use of HTML, CSS (Tailwind CSS), 
                     JavaScript and ReactJS (or NextJS).
                </p>

                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer
                                    hover:scale-110 ease-in duration-300'>
        	            <FaLinkedinIn />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer
                                    hover:scale-110 ease-in duration-300'>
        	            <FaGithub />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer
                                    hover:scale-110 ease-in duration-300'>
        	            <FaFacebook />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer
                                    hover:scale-110 ease-in duration-300'>
        	            <FaInstagram />
                    </div>
                </div>

            </div>
            
        </div>

    </div>
  )
}

export default Main;



// 1. kreiramo i uredujemo divove
// 2. uredujemo raspored elemenata unutar divova