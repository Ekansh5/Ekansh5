import React, { useState } from 'react'
import { SocialIcon } from 'react-social-icons';
import {motion} from "framer-motion"

type Props = {}

export default function Header({}: Props) {
    const [colorYt, setColorYt] = useState('gray')
    const [colorFb, setColorFb] = useState('gray')
    const [colorIg, setColorIg] = useState('gray')
    const [colorTw, setColorTw] = useState('gray')
    const [colorMail, setColorMail] = useState('gray')
  return (
    <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 p-5 xl:items-center'>
        <motion.div className='flex flex-row items-center'
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration: 1.4,
        }}
        >
            {/* Social Icons */}
            <SocialIcon url="https://youtube.com/sonnysangha" fgColor={colorYt} bgColor='transparent' onMouseEnter={() => setColorYt('#FF0000')} onMouseLeave={() => setColorYt('gray') } />
            <SocialIcon url="https://www.facebook.com/profile.php?id=100041528515135" fgColor={colorFb} bgColor='transparent' onMouseEnter={() => setColorFb('#1877F2')} onMouseLeave={() => setColorFb('gray') } />
            <SocialIcon url="https://www.instagram.com/ssssangha" fgColor={colorIg} bgColor='transparent' onMouseEnter={() => setColorIg('#E94475')} onMouseLeave={() => setColorIg('gray') } />
            <SocialIcon url="https://twitter.com/SonnySangha" fgColor={colorTw} bgColor='transparent' onMouseEnter={() => setColorTw('#05ACED')} onMouseLeave={() => setColorTw('gray') } />
        </motion.div>
        <motion.div
        initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration: 1.5,
        }}
        className='flex flex-row items-center cursor-pointer text-gray-300'>
            <SocialIcon network='email' className='cursor-pointer' fgColor={colorMail} bgColor='transparent' onMouseEnter={() => setColorMail('#fff')} onMouseLeave={() => setColorMail('gray') } />
            <p className='uppercase hidden md:inline-flex text-small text-gray-400'>Get In Touch</p>
        </motion.div>
    </header>
  )
}