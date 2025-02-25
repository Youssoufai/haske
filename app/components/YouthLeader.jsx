"use client";
import { motion } from 'framer-motion';
import React from 'react'

const YouthLeader = () => {
    return (
        <>

            <section className='bg-slate-100 p-6 md:p-12 flex flex-col md:flex-row items-center space-y-8'>
                <motion.div className='space-y-6 flex-1 text-center md:text-left'
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className='text-green font-bold text-lg'>KNOW MORE ABOUT</h2>
                    <h1 className='text-3xl md:text-4xl font-bold'>IDEOLOGICAL LEADER FOR YOUTH GENERATION</h1>
                    <p>
                        The future belongs to the youth, and <span className="text-green">Abdulrahman Haske</span> is committed to empowering the next generation through education, job creation, and inclusive policies. His leadership ensures young people actively shape the future.
                    </p>
                    <motion.button
                        className="px-6 py-2 bg-[#00A86B] text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition"
                        whileHover={{ scale: 1.05 }}
                    >
                        Get Involved
                    </motion.button>
                </motion.div>
                <motion.div
                    className='flex-1'
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <img src="haske.jpg" className='rounded-lg w-full max-h-[500px] object-cover' alt="Haske" />
                </motion.div>
            </section>


        </>
    )
}

export default YouthLeader