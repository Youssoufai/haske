"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Button from './Button'

const About = () => {
    return (
        <>
            <section className="min-h-screen flex items-center justify-center p-6 md:p-12 text-center mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="space-y-6"
                >
                    {/* Heading with animation */}
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-3xl md:text-5xl font-bold"
                    >
                        About <span className="text-green-600">Abdulrahman Haske</span>
                    </motion.h1>

                    {/* Paragraph with fade-in effect */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-gray-700 text-lg md:text-xl leading-relaxed"
                    >
                        As a young and ambitious leader, I am driven by the conviction that the future of Nigeria belongs to its youth. Growing up, I witnessed firsthand the transformative power of youth participation in shaping the course of our nation's history. I believe that it's time for a new generation of leaders to take the reins, bringing fresh perspectives, innovative ideas, and a deep commitment to the values of democracy, equity, and justice. As a philosophy, I am dedicated to amplifying the voices of young Nigerians, creating opportunities for their participation and empowerment, and working tirelessly to build a brighter future for our great nation.
                    </motion.p>

                    {/* Button with hover animation */}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-3 bg-green rounded-lg text-white text-lg font-semibold shadow-lg hover:bg-green-700 transition"
                    >
                        Learn More About <span className="font-bold">Haske</span>
                    </motion.button>
                </motion.div>
            </section>
        </>
    )
}

export default About