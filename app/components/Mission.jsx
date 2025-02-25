"use client"
import { FaChartLine } from "react-icons/fa6";
import { FaGraduationCap, FaHospital } from "react-icons/fa";
import { motion } from "framer-motion";

const Mission = () => {
    return (
        <>

            <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 md:px-12 py-16">

                {/* Title Section */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center space-y-3"
                >
                    <h2 className="text-xs md:text-sm text-green-500 tracking-widest uppercase">
                        Our Mission & Vision
                    </h2>
                    <h1 className="text-3xl md:text-5xl font-bold text-green">
                        Visionary Leadership, United Progress
                    </h1>
                </motion.div>

                {/* Cards Section */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 w-full max-w-6xl">

                    {/* Economic Growth Card */}
                    <motion.div
                        className="flex flex-col items-center text-center p-8 bg-white text-black rounded-xl shadow-lg transition hover:scale-105"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <FaChartLine className="text-green-600 text-6xl mb-4" />
                        <h2 className="text-xl font-semibold text-green-700">Economic Growth</h2>
                        <p className="text-sm text-gray-600">Building a resilient and sustainable economy that benefits every individual.</p>
                    </motion.div>

                    {/* Education Card */}
                    <motion.div
                        className="flex flex-col items-center text-center p-8 bg-white text-black rounded-xl shadow-lg transition hover:scale-105"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <FaGraduationCap className="text-green-600 text-6xl mb-4" />
                        <h2 className="text-xl font-semibold text-green-700">Quality Education for All</h2>
                        <p className="text-sm text-gray-600">Ensuring equal access to quality education to empower future generations.</p>
                    </motion.div>

                    {/* Healthcare Card */}
                    <motion.div
                        className="flex flex-col items-center text-center p-8 bg-white text-black rounded-xl shadow-lg transition hover:scale-105"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <FaHospital className="text-green-600 text-6xl mb-4" />
                        <h2 className="text-xl font-semibold text-green-700">Healthcare Services for All</h2>
                        <p className="text-sm text-gray-600">Providing accessible and high-quality healthcare to every citizen.</p>
                    </motion.div>

                </section>
            </section>


        </>
    );
};

export default Mission;
