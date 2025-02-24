import React from 'react'
import Button from './Button'

const About = () => {
    return (
        <>
            <section className='h-screen p-12 text-center space-y-3 mx-14 flex flex-col items-center justify-center'>
                <div className='space-y-4'>
                    <h1 className='font-bold text-4xl'>About <span className="text-green">Abdulrahman Haske</span></h1>
                    <p>As a young and ambitious leader, I am driven by the conviction that the future of Nigeria belongs to its youth. Growing up, I witnessed firsthand the transformative power of youth participation in shaping the course of our nation's history. I believe that it's time for a new generation of leaders to take the reins, bringing fresh perspectives, innovative ideas, and a deep commitment to the values of democracy, equity, and justice. As a gubernatorial candidate, I am dedicated to amplifying the voices of young Nigerians, creating opportunities for their participation and empowerment, and working tirelessly to build a brighter future for our great nation</p>
                    <button className='px-14 py-3 bg-green rounded-lg text-white'>Learn More About <span className="font-bold">Haske</span></button>
                </div>
            </section>
        </>
    )
}

export default About