import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
    initial={{
        opacity: 0
    }}
    whileInView={{ opacity: 1}}
    transition={{duration: 1.5}}
    className='flex flex-col text-center md:left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center relative h-screen'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
        <motion.img 
        initial={{
            x: -200,
            opacity: 0,
        }} 
        transition={{
            duration: 1.2,
        }}
        whileInView={{
            x:0,
            opacity: 1,
        }}
        className="md:mb-20 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 mt-[140px] xl:w-[450px] xl:h-[550px]"
        viewport={{once: true}}
        src='https://art.ngfiles.com/images/1518000/1518747_skeleben_discord-profile-pic.jpg?f1606265070' />
        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background</h4>
            <p className='text-base text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi delectus, saepe fugit voluptatem beatae laborum numquam accusantium maxime quidem amet adipisci voluptates quibusdam, nemo quod labore, minus facere. Modi suscipit deleniti blanditiis cum molestias minima. Quae, nemo facilis. Temporibus laboriosam labore perspiciatis ullam vel tempora a, odio fugit numquam magnam, ex distinctio fuga cum excepturi expedita. Eius consequuntur non suscipit corrupti atque porro accusantium tenetur a. Corrupti, corporis maxime possimus deserunt saepe velit consectetur nisi amet, repellat reiciendis nulla error!</p>
        </div>
    </motion.div>
  )
}