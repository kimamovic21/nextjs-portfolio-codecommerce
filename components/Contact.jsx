import React from 'react';
import {FaLinkedinIn, FaGithub, FaFacebook, FaInstagram} from 'react-icons/fa';
import Link from 'next/dist/client/link';
import {HiOutlineChevronDoubleUp} from 'react-icons/hi';

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>

        <div className='max-w-[1240px] mx-auto px-2 py-16 w-full'>

            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
                Contact
            </p>

            <h2>Get in touch</h2>

            <div className='grid lg:grid-cols-5 gap-8'>
                  
                {/* Left  */}
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='h-full'>
                        <div>
                            <img className='rounded-xl hover:scale-105 ease-in duration-300'
                                 src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871" 
                                 alt="Laptop image" 
                            />
                        </div>
                        <div>
                            <h2 className='py-2'>
                                Kerim Imamović
                            </h2>
                            <p>I am practising and learing front-end web technologies.</p>
                            <p className='py-4'>
                                If you would like to know more about me, contact me for more informations.
                            </p>
                        </div>

                      <div className='pt-8'>
                        <p className='uppercase'>
                            Connect with me.
                        </p>
                        <div className='flex items-center justify-between py-4'>
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


                {/* Right */}

                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>

                    <div className='p-4'>
                        <form action="">
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Full name:</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-400'
                                           type="text" 
                                    />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Phone number:</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-400' 
                                           type="text" 
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Email:</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-400' 
                                       type="email" 
                                />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Subject:</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-400' 
                                       type="text" 
                                />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Message:</label>
                                <textarea className='border-2 rounded-lg p-3 border-gray-300'
                                          rows='10' />
                            </div>
                            <button className='w-full p-4 text-gray-100 mt-3'>
                                Send message
                            </button>
                        </form>
                    </div>

                </div>

            </div>

            <div className='flex justify-center py-12'>
                <Link href='/'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer
                                    hover:scale-105 ease-in duration-400'>
                        <HiOutlineChevronDoubleUp className='text-[#5651e5]'
                                                  size={30}/>
                    </div>
                </Link>
            </div>

        </div>

    </div>
  )
}

export default Contact;



// 1. dodajemo i uredujemo divove
// 2. dodajemo formu
