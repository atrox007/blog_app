import React from 'react'
import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-400 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to learn more  ?
            </h2>
            <p className='text-gray-500 my-2'>
                Hit all your queries in below site
            </p>
            <Button gradientDuoTone='greenToBlue' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://www.google.com" target='_blank' rel='noopener noreferrer'>
                    Jump to Google
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg" />
        </div>
    </div>
  )
}