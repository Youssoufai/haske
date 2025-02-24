import React from 'react'
import { FaMapMarkerAlt, FaVoteYea } from 'react-icons/fa'
import { FaBullhorn, FaUser } from 'react-icons/fa6'

const Acheivments = () => {
    return (
        <>

            <section className="flex flex-wrap justify-center items-center gap-6 p-12">
                {/* Total Volunteer */}
                <div className="bg-white p-8 md:p-11 rounded-xl shadow-xl border border-green-500 transition transform hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center text-center">
                    <FaUser className="text-green text-5xl mb-4" />
                    <h2 className="text-3xl font-bold mb-2">4,657K</h2>
                    <p className="text-sm md:text-base text-gray-600">Total Volunteer</p>
                </div>

                {/* Campaign */}
                <div className="bg-white p-8 md:p-11 rounded-xl shadow-xl border border-green-500 transition transform hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center text-center">
                    <FaBullhorn className="text-green text-5xl mb-4" />
                    <h2 className="text-2xl font-bold mb-2">CAMPAIGN</h2>
                    <p className="text-sm md:text-base text-gray-600">580+</p>
                </div>

                {/* Coverage Area */}
                <div className="bg-white p-8 md:p-11 rounded-xl shadow-xl border border-green-500 transition transform hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center text-center">
                    <FaMapMarkerAlt className="text-green text-5xl mb-4" />
                    <h2 className="text-2xl font-bold mb-2">COVERAGE AREA</h2>
                    <p className="text-sm md:text-base text-gray-600">795 miles</p>
                </div>

                {/* Vote Paper */}
                <div className="bg-white p-8 md:p-11 rounded-xl shadow-xl border border-green-500 transition transform hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center text-center">
                    <FaVoteYea className="text-green text-5xl mb-4" />
                    <h2 className="text-2xl font-bold mb-2">VOTE PAPER</h2>
                    <p className="text-sm md:text-base text-gray-600">6,895K</p>
                </div>
            </section>


        </>
    )
}

export default Acheivments