import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Work = ({isDarkMode}) => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    id='work' className='w-full px-[12%] py-10 scroll-mt-20'>

      <motion.h4 
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className='text-center mb-2 text-lg font-Ovo'>
      My portfolio</motion.h4>

      <motion.h2
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className='text-center text-5xl font-Ovo'>
      My latest work</motion.h2>

      <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.5 }}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
      Welcome to my portfolio! Explore a collection of projects showcasing my expertise in development.</motion.p>

                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className='grid grid-cols-auto my-10 gap-5 dark:text-black'>
                    {workData.map((project, index)=>(
                        <motion.a
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            key={index}
            href={project.link}
            target='_blank'
            rel='noopener noreferrer'
            className='cursor-pointer group'
            >
            <div
                className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg'
                style={{ backgroundImage: `url(${project.bgImage})` }}
            />

            <div className='mt-4 px-1 text-center'>
                <h2 className='text-lg font-semibold'>{project.title}</h2>
                <p className='text-sm text-gray-600 dark:text-gray-300 mt-1 text-justify'>{project.description}</p>
            </div>
            </motion.a>

        ))}
    </motion.div>

    <motion.a 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 1.1, duration: 0.5 }}
    href="https://github.com/dea-238" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'>
        Show more 
        <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right arrow' className='w-4'/>
    </motion.a>

    </motion.div>
  )
}

export default Work
