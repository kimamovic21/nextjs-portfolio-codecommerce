import React from 'react';
import Image from 'next/image';

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>

        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>

            <p className='font-xl tracking-widest uppercase text-[#5651e5]'>
                Skills
            </p>

            <h2 className='py-4'>
                What I can do
            </h2>

            <div className='mx-[1%] grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                <div className='p-6 shadow-xl rounded-xl md:hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/assets/skills/html.png' 
                                   width='70px'
                                   height='70px'
                                   alt='Html image'
                            />
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>
                
                <div className='p-6 shadow-xl rounded-xl md:hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/assets/skills/css.png' 
                                   width='70px'
                                   height='70px'
                                   alt='HTML image'
                            />
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h3>CSS</h3>
                        </div>
                    </div>
                </div>
                
                <div className='p-6 shadow-xl rounded-xl md:hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/assets/skills/tailwind.png' 
                                   width='70px'
                                   height='70px'
                                   alt='Tailwind CSS image'
                            />
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h3>Tailwind CSS</h3>
                        </div>
                    </div>
                </div>
                
                <div className='p-6 shadow-xl rounded-xl md:hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/assets/skills/javascript.png' 
                                   width='70px'
                                   height='70px'
                                   alt='Javascript image'
                            />
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h3>Javascript</h3>
                        </div>
                    </div>
                </div>
                
                <div className='p-6 shadow-xl rounded-xl md:hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/assets/skills/react.png' 
                                   width='70px'
                                   height='70px'
                                   alt='React JS image'
                            />
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h3>React JS</h3>
                        </div>
                    </div>
                </div>
                
                <div className='p-6 shadow-xl rounded-xl md:hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/assets/skills/github.png' 
                                   width='70px'
                                   height='70px'
                                   alt='Github image'
                            />
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h3>Github</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl md:hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/assets/skills/firebase.png' 
                                   width='70px'
                                   height='70px'
                                   alt='Firebase image'
                            />
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h3>Firebase</h3>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Skills;



// 1. dodajemo divove
// 2. uredujemo elemente unutar divova