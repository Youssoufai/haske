import React from 'react'

const Form = () => {
    return (
        <>

            <section className="h-full flex flex-col justify-center items-center bg-gray-100 px-6 md:px-12 py-10">
                {/* Header Section */}
                <h3 className="text-green-600 font-bold text-center text-lg md:text-xl">
                    JOIN THE MAGA HASKE
                </h3>
                <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mt-2">
                    TOGETHER WE TURN ASPIRATIONS INTO REALITY.
                </h1>

                {/* Form Section */}
                <section className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8 mt-6">
                    <form className="flex flex-col gap-4">
                        {/* First Row - Name, Email, Area */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* Name */}
                            <div className="flex flex-col">
                                <label htmlFor="name" className="text-gray-700 font-medium">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Your Full Name"
                                    className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>

                            {/* Email */}
                            <div className="flex flex-col">
                                <label htmlFor="email" className="text-gray-700 font-medium">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Your Email Address"
                                    className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>

                            {/* Area */}
                            <div className="flex flex-col">
                                <label htmlFor="area" className="text-gray-700 font-medium">Your Area:</label>
                                <input
                                    type="text"
                                    id="area"
                                    placeholder="Enter Your Zip Code"
                                    className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>
                        </div>

                        {/* Phone - Stacked */}
                        <div className="flex flex-col">
                            <label htmlFor="phone" className="text-gray-700 font-medium">Phone:</label>
                            <input
                                type="tel"
                                id="phone"
                                placeholder="Your Phone Number"
                                className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        {/* Message - Stacked */}
                        <div className="flex flex-col">
                            <label htmlFor="message" className="text-gray-700 font-medium">Message:</label>
                            <textarea
                                id="message"
                                rows="4"
                                placeholder="Your Message"
                                className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        {/* Full-width Button */}
                        <button className="w-full bg-green text-white font-semibold py-3 rounded-md shadow-md hover:bg-green-700 transition">
                            Get Involved
                        </button>
                    </form>
                </section>
            </section>


        </>
    )
}

export default Form