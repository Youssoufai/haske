"use client";
import { motion } from 'framer-motion';
import React from 'react'
import { FaMapMarkerAlt, FaVoteYea } from 'react-icons/fa'
import { FaBullhorn, FaUser } from 'react-icons/fa6'

const Acheivments = () => {
    return (
        <>

            <section className="flex flex-wrap justify-center items-center gap-6 p-6 md:p-12">
                {[
                    { icon: <FaUser />, label: "Total Volunteer", value: "4,657K" },
                    { icon: <FaBullhorn />, label: "CAMPAIGN", value: "580+" },
                    { icon: <FaMapMarkerAlt />, label: "COVERAGE AREA", value: "795 miles" },
                    { icon: <FaVoteYea />, label: "VOTE PAPER", value: "6,895K" }
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        className="bg-white p-6 md:p-8 rounded-xl shadow-xl border border-green-500 transition transform hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center text-center"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="text-green text-5xl mb-4">{item.icon}</div>
                        <h2 className="text-2xl font-bold mb-2">{item.value}</h2>
                        <p className="text-sm md:text-base text-gray-600">{item.label}</p>
                    </motion.div>
                ))}
            </section>


        </>
    )
}

export default Acheivments