import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className='flex justify-between p-8 items-center'>
                <div>
                    <h1 className='text-4xl font-bold'>MAGA</h1>
                </div>
                <ul className='flex space-x-4'>
                    <li>Home </li>
                    <li>About</li>
                    <li>News</li>
                    <li>Contact</li>
                </ul>
                <div>
                    <button className='px-8 py-2 bg-black text-white rounded-lg'>Get Involved</button>
                </div>
            </nav>
        </>
    )
}

export default Navbar;