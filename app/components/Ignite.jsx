"use client"
import React from 'react'
import Button from './Button'
import { motion } from 'framer-motion'
const Ignite = () => {
    return (
        <>
            <section className='p-6 md:p-12' id='bg'>
                <motion.div
                    className='flex flex-col md:flex-row justify-between items-center p-4'
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className='text-white text-center md:text-left text-lg md:text-2xl font-bold'>
                        EMPOWER CHANGE, IGNITE PROCESS JOIN THE UNITY FORCE.
                    </h1>
                    <motion.button
                        className="px-6 py-2 bg-[#00A86B] text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition"
                        whileHover={{ scale: 1.05 }}
                    >
                        Get Involved
                    </motion.button>
                </motion.div>
            </section>

        </>
    )
}

export default Ignite