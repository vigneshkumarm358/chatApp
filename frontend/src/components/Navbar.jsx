import React from 'react'
import { MdMessage } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";


const Navbar = () => {
    return (
            <div className='h-[100vh] basis-[5%] bg-zinc-100 flex flex-col justify-between items-center py-4' >
                <div className='flex flex-col space-y-6'>
                    <MdMessage className='text-4xl bg-stone-300 p-2 rounded-full' />
                    <MdGroups className='text-4xl bg-stone-200 p-2 rounded-full' />
                </div>
                <div className='flex flex-col space-y-6'>
                    <IoMdSettings className='text-4xl bg-stone-200 p-2 rounded-full' />
                    <FaCircleUser className='text-4xl bg-stone-200 p-2 rounded-full' />
                </div>
            </div>
    )
}

export default Navbar