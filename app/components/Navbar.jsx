"use client";

import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <motion.nav
            className="flex justify-between p-6 md:p-8 items-center bg-black text-white"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
        >
            {/* Logo */}
            <motion.div
                className="text-3xl md:text-4xl font-bold text-white"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                MAGA
            </motion.div>

            {/* Navigation Links */}
            <ul className="flex space-x-6 text-lg font-medium">
                {["Home", "About", "News", "Contact"].map((item, index) => (
                    <motion.li
                        key={index}
                        className="cursor-pointer hover:text-green-500 transition duration-300"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        {item}
                    </motion.li>
                ))}
            </ul>

            {/* Button */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <button className="px-6 py-2 bg-[#00A86B] text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition">
                    Get Involved
                </button>
            </motion.div>
        </motion.nav>
    );
};

export default Navbar;
