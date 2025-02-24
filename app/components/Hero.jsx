"use client";

import { motion } from "framer-motion";
export default function Hero() {
    return (
        <section className="relative flex flex-col md:flex-row items-center justify-between p-8 min-h-screen bg-black text-white">
            {/* Left Section */}
            <motion.div
                className="space-y-4 max-w-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-lg font-medium tracking-wide text-green-500">Abdulrahman <span className="text-green">Haske</span></h2>
                <h1 className="text-5xl font-bold leading-tight">
                    EMPOWERING TOMORROW, <br /> UNITING TODAY
                </h1>
                <p className="text-lg opacity-80">
                    Welcome to the heart of democracy, where every voice resonates and every vote shapes
                    the destiny of our nation.
                </p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <button className="px-6 py-3 text-lg font-semibold bg-green text-white rounded-full shadow-md hover:bg-green-600 transition">
                        Get Involved
                    </button>
                </motion.div>
            </motion.div>

            {/* Right Section - Image */}
            <motion.div
                className="mt-6 md:mt-0"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <img
                    src="corporate.jpg"
                    className="rounded-lg shadow-2xl w-full max-w-md border-4 border-green-500"
                    alt="Politician"
                />
            </motion.div>

            {/* Background Green Glow Effect */}
            <div className="absolute inset-0 bg-green-500/10 opacity-30 blur-2xl"></div>
        </section>
    );
}
