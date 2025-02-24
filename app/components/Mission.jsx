"use client"
import { FaChartLine } from "react-icons/fa6";
import { FaGraduationCap, FaHospital } from "react-icons/fa";
import { motion } from "framer-motion";

const Mission = () => {
    return (
        <>

            <section className="h-screen bg-black text-white p-12 flex flex-col items-center justify-center">

                <div className="text-center space-y-3">
                    <h2 className="text-xs text-green-500 tracking-widest">OUR MISSION & VISION</h2>
                    <h1 className="text-4xl font-bold text-green">VISIONARY LEADERSHIP, UNITED PROGRESS</h1>
                </div>


                <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

                    <motion.div
                        className="flex flex-col items-center text-center p-8 bg-white text-black rounded-xl shadow-lg"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <FaChartLine className="text-green text-5xl mb-4" />
                        <h2 className="text-xl font-semibold text-green">Economic Growth</h2>
                        <p className="text-sm text-gray-600">Building a resilient and sustainable economy that benefits every individual.</p>
                    </motion.div>

                    <motion.div
                        className="flex flex-col items-center text-center p-8 bg-white text-black rounded-xl shadow-lg"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <FaGraduationCap className="text-green text-5xl mb-4" />
                        <h2 className="text-xl font-semibold text-green">Quality Education for All</h2>
                        <p className="text-sm text-gray-600">Ensuring equal access to quality education to empower future generations.</p>
                    </motion.div>


                    <motion.div
                        className="flex flex-col items-center text-center p-8 bg-white text-black rounded-xl shadow-lg"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <FaHospital className="text-green text-5xl mb-4" />
                        <h2 className="text-xl font-semibold text-green">Healthcare Services for All</h2>
                        <p className="text-sm text-gray-600">Providing accessible and high-quality healthcare to every citizen.</p>
                    </motion.div>
                </section>
            </section>


        </>
    );
};

export default Mission;
