import React from 'react';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>

        <div className='max-w-[1240px] mx-auto px-2 py-16'>

            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
                Projects
            </p>
            <h2 className='py-4'>
                What I've build
            </h2>

            <div className='grid md:grid-cols-2 gap-8'>

               <ProjectItem title='Property finder' 
                            backgroundImg='/../public/assets/projects/property.jpg'
                            projectUrl='/property'
                            imageAlt='Project 1'
                />

                <ProjectItem title='Crypto app' 
                             backgroundImg='/../public/assets/projects/crypto.jpg'
                             projectUrl='/crypto'
                             imageAlt='Project 2'
                />

                <ProjectItem title='Netflix' 
                             backgroundImg='/../public/assets/projects/netflix.jpg'
                             projectUrl='/netflix'
                             imageAlt='Project 3'
                />

                <ProjectItem title='Twitch' 
                             backgroundImg='/../public/assets/projects/twitch.jpg'
                             projectUrl='/twitch'
                             imageAlt='Project 4'
                />

            </div>

        </div>

    </div>
  )
}

export default Projects;



// 1. dodajemo divove i elemente unutar njih
// 2. kreiramo novu komponentu ProjectItem.jsx koja ce da sluzi kao props
// 3. dodajemo ProjectItem komponentu sa atributima 
