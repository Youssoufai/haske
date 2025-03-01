import React from 'react'
import { FaMailBulk } from 'react-icons/fa';
import { FaAddressBook, FaArrowLeft, FaFacebook, FaInstagram, FaPhone, FaTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <>
            <section className="bg-gray-900 text-white py-12 px-6 md:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* First Column - Brand Info */}
                    <div>
                        <h1 className="text-2xl font-bold text-green-400">MAGA HASKE</h1>
                        <p className="mt-4 text-gray-300">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic dolorem iure maxime. A ipsa autem unde eius, magnam repudiandae voluptate laboriosam aperiam nulla omnis deserunt error maxime explicabo facere mollitia.
                        </p>
                        <h3 className="mt-4 flex items-center gap-2 text-green-400 font-semibold">
                            <FaPhone className="text-green-500" />
                            +2347059680374
                        </h3>
                    </div>

                    {/* Second Column - Overview */}
                    <div>
                        <h1 className="font-bold text-green-400 text-lg">Overview</h1>
                        <ul className="mt-4 space-y-2">
                            {["Join Page", "Volunteering", "Contact", "Join Us"].map((item) => (
                                <li key={item} className="hover:text-green-300 transition cursor-pointer">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Third Column - Quick Links */}
                    <div>
                        <h1 className="font-bold text-green-400 text-lg">QUICK LINKS</h1>
                        <ul className="mt-4 space-y-2">
                            {["Home", "About Us", "Speakers", "Blog", "Reservation"].map((item) => (
                                <li key={item} className="hover:text-green-300 transition cursor-pointer">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Fourth Column - Contact Info */}
                    <div>
                        <h1 className="font-bold text-green-400 text-lg">CONTACT US</h1>
                        <ul className="mt-4 space-y-3">
                            <li className="flex items-center gap-2">
                                <FaAddressBook className="text-green-500" />
                                121, King Street, Yola, Adamawa State
                            </li>
                            <li className="flex items-center gap-2">
                                <FaMailBulk className="text-green-500" />
                                info@magahaske.com
                            </li>
                            {/* Social Media Icons */}
                            <li className="flex space-x-4 mt-4">
                                <FaFacebook className="text-blue-500 text-xl cursor-pointer hover:text-blue-400 transition" />
                                <FaTwitter className="text-blue-400 text-xl cursor-pointer hover:text-blue-300 transition" />
                                <FaInstagram className="text-pink-500 text-xl cursor-pointer hover:text-pink-400 transition" />
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Footer;