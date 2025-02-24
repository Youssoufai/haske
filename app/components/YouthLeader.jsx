import React from 'react'

const YouthLeader = () => {
    return (
        <>

            <section className='bg-slate-100 p-12 flex'>

                <div className='space-y-8 flex-1'>
                    <h2 className='text-green font-bold'>KNOW MORE ABOUT</h2>
                    <h1 className='text-4xl font-bold'>IDEOLOGICAL LEADER FOR YOUTH GENERATION</h1>
                    <p>The future belongs to the youth, and <span className="text-green">Abdulrahman Haske</span> is committed to ensuring that every young person has the opportunities, resources, and support they need to thrive. As a visionary leader, he believes in empowering the next generation through quality education, job creation, and inclusive policies that amplify youth voices. His leadership is driven by a passion for innovation, entrepreneurship, and social change, ensuring that young people are not just heard but are active participants in shaping the future. Together, we can build a nation where the dreams of the youth become a reality</p>
                    <button className="px-6 py-2 bg-[#00A86B] text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition">
                        Get Involved
                    </button>
                </div>
                <div className='flex-1'>
                    <img src="haske.jpg" className='rounded-lg h-[630px]' alt="" />
                </div>
            </section>

        </>
    )
}

export default YouthLeader