import React from 'react'
import pic from "../../public/photo.avif"

function Navbar() {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md'>
                <div className='flex justify-between items-center h-16'>
                    <div className='flex space-x-2'>
                        <img src={pic} className='h-12 w-12 rounded-full mx-2' alt="My pic" />
                        <h1 className='font-semibold text-xl cursor-pointer'>Kamles<span className='text-green-500 text-xl'>h</span>
                            <p className='text-sm'>Web Developer</p>
                        </h1>
                        
                    </div>
                    
                    <div >
                        <ul className='hidden md:flex space-x-8'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Portfolio</li>
                            <li>Experience</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    
                </div>
               
                
                
            </div>
        </>
    
  )
}

export default Navbar;
