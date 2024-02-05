"use client"

import Image from 'next/image'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import React from 'react'
import Avatar from 'react-avatar'
const zuddlLogo = '/assets/zuddl__logo.png'

const Header = () => {
  return (
    <header>
    <div className='flex flex-col md:flex-row items-center p-5 bg-gray-500/10'>

        <div 
            className='
                absolute
                top-0
                left-0
                w-full
                h-full
                bg-gradient-to-br
                from-pink-400
                to-[#0055d1]
                rounded-md
                filter
                blur-3xl
                opacity-50
                -z-50
            '
        />
      <div className='w-16'>
      <Image
        src={zuddlLogo}
        alt='Zuddl'
        width={300}
        height={150}
        className='w-44 md:w-56 pb-10 md:pb-0 object-contain'
      />
      </div>

      <div className='flex items-center space-x-5 flex-1 justify-end w-full'>
        <form className='flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial'>
            <MagnifyingGlassIcon className='h-6 w-6 text-gray-400' />
            <input type="text" placeholder='Search' className='flex-1 outline-none p-2' />
            <button type='submit' hidden>Search</button>
        </form>

        <Avatar name='Abhay Singh' round size='50' color='#0055d1'  />
      </div>
    </div>
    </header>
  )
}

export default Header
