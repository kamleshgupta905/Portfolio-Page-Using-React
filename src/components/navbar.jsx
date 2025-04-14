import React, { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

function Navbar() {
    const [menu, setMenu] = useState(false);
    const navItems = [
        { id: 1, text: "Home" },
        { id: 2, text: "About" },
        { id: 3, text: "Portfolio" },
        { id: 4, text: "Experiance" },
        { id: 5, text: "Contact" },

    ];
    return (
        <>
            <div className='bg-white max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0'>
                <div className='flex justify-between items-center h-16'>
                    <div className='flex  space-x-2'>
                        <img src="/photo.avif" className="h-12 w-12 rounded-full mx-2" alt="My pic" />
                        <div >
                            <h1 className="font-semibold text-xl cursor-pointer">
                                Kamles<span className="text-green-500 text-xl">h</span>
                            </h1>
                            <p className="text-sm">Web Developer</p>
                        </div>
                        
                        
                    </div>
                    {/* desktop navbar */}
                    <div >
                        <ul className='hidden md:flex space-x-8'>
                            {navItems.map(({ id, text }) => (
                                <li className= 'hover:scale-105 duration-200 cursor-pointer' key={id}>
                                    {text}
                                </li>
                            ))}
                        </ul>
                        <div onClick={()=>setMenu(!menu)} className='md:hidden cursor-pointer'>
                            {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
                        </div>
                    </div>
                </div>  
                {/* mobile navbar */}
                {menu && (
                    <div>
                        <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-3'>
                            {navItems.map(({ id, text }) => (
                                <li className='hover:scale-105 duration-200 cursor-pointer text-2xl' key={id}>
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                
            </div>
        </>
    
  )
}

export default Navbar;
