"use client";

import { React, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-black text-white p-8 fixed w-full z-50">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold">MAGA HASKE</div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    <a href="#" className="hover:text-green-400 transition">Home</a>
                    <a href="#" className="hover:text-green-400 transition">About</a>
                    <a href="#" className="hover:text-green-400 transition">Services</a>
                    <a href="#" className="hover:text-green-400 transition">Contact</a>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-gray-800 py-4 px-6 flex flex-col space-y-4 items-center"
                    >
                        <a href="#" className="hover:text-green-400 transition" onClick={() => setIsOpen(false)}>Home</a>
                        <a href="#" className="hover:text-green-400 transition" onClick={() => setIsOpen(false)}>About</a>
                        <a href="#" className="hover:text-green-400 transition" onClick={() => setIsOpen(false)}>Services</a>
                        <a href="#" className="hover:text-green-400 transition" onClick={() => setIsOpen(false)}>Contact</a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
