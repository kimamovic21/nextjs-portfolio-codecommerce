import React from 'react';
import Image from 'next/image';
import Link from 'next/dist/client/link';

const ProjectItem = ({title, backgroundImg, projectUrl, imageAlt}) => {
  return (
    <div>

        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 
                        rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
            <Image className='rounded-xl group-hover:opacity-10'
                //    src='/..public/assets/projects/property.jpg'
                   src={backgroundImg}
                   width='1000px'
                   height='1000px'
                //    alt='Project 1'
                  alt={imageAlt}
            />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] 
                            translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl text-[#fff] tracking-wider text-center'>
                    {/* Property finder */}
                    {title}
                </h3>
                <p className='pb-4 pt-2 text-[#fff] text-center'>
                    React JS projects
                </p>
                <Link href={projectUrl}>
                    <p className='text-center py-3 rounded-lg bg-[#fff] text-gray-700 font-bold text-lg cursor-pointer '>
                        {/* More info */}
                        More info
                    </p>
                </Link>
            </div>
        </div>

    </div>
  )
}

export default ProjectItem;



// 1. dodajemo props kao parametar u funkciji {title, backgroundImg, projectUrl}
// 2. U Image element dodajemo src = {backgroundImg}
// 3. u h3 element dodajemo {title}
// 4. u Link element dodajemo {projectUrl}
