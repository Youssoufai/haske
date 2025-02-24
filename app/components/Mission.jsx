import React from 'react'
import { FaChartLine, FaGraduationCap, FaHospital } from "react-icons/fa";
const Mission = () => {
    return (
        <>
            <section className='h-screen bg-slate-100 p-12'>
                <div className='text-center space-y-3'>
                    <h2 className='text-xs text-center text-green'>OUR MISSION & VISION</h2>
                    <h1 className='text-3xl font-bold'>VISIONARY LEADERSHIP, UNITED PROGRESS</h1>
                </div>
                <section>
                    <div>
                        <FaChartLine />
                    </div>
                    <div>
                        <FaGraduationCap />
                    </div>
                    <div>
                        <FaHospital />
                    </div>
                </section>
            </section>
        </>
    )
}

export default Mission;