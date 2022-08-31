import { FaServer, FaCode, FaMobileAlt } from 'react-icons/fa';

const Services = () => {
    return (
        <section className="services px-4 md:px-16 py-[5.5rem] bg-gray-200 w-[100%]" id="services">
            <h1
                className="text-center text-5xl md:text-6xl font-mono font-bold text-slate-800 pb-12 underline decoration-orange-600 decoration-dashed decoration-4 underline-offset-4">
                Services
            </h1>
            <div className="mainContainer grid grid-cols-1 lg:grid-cols-3 gap-[2rem]">
                <div
                    className="service bg-white rounded-md text-center flex flex-col items-center justify-center px-[2rem] py-[3rem] gap-8 cursor-pointer shadow-md hover:shadow-xl transition">
                    <span className='text-xl w-[4rem] h-[4rem] mx-auto bg-[#5000CA] flex justify-center items-center rounded-full text-white'>
                        <FaCode size={28} />
                    </span>
                    <h3
                        className="text-2xl md:text-3xl text-slate-800 font-mono font-bold underline decoration-orange-600 decoration-dashed decoration-3 underline-offset-4">
                        Frontend</h3>
                    <p className="text-base md:text-lg text-slate-700 font-mono font-bold">
                        Among all the aspects of the website, doing the front-end part is what excites me the most. I
                        believe that doing the front-end part of a website is what I am most good at, on comparing it with
                        other aspects of web development.
                    </p>
                </div>
                <div
                    className="service bg-white rounded-md text-center flex flex-col items-center justify-center px-[2rem] py-[3rem] gap-8 cursor-pointer shadow-md hover:shadow-xl transition">
                    <span className='text-xl w-[4rem] h-[4rem] mx-auto bg-[#0099FF] flex justify-center items-center rounded-full text-white'>
                        <FaServer size={28} />
                    </span>
                    <h3
                        className="text-2xl md:text-3xl text-slate-800 font-mono font-bold underline decoration-orange-600 decoration-dashed decoration-3 underline-offset-4">
                        Backend</h3>
                    <p className="text-base md:text-lg text-slate-700 font-mono font-bold">
                        I also like to do back-end coding for websites. I have created all of my back-ends that have been
                        used in my projects by myself. I use Node.js as my back-end language and MongoDB as my back-end
                        database. Like front-end doing back-end is also one of my key aspects.
                    </p>
                </div>
                <div
                    className="service bg-white rounded-md text-center flex flex-col items-center justify-center px-[2rem] py-[3rem] gap-8 cursor-pointer shadow-md hover:shadow-xl transition">
                    <span className='text-xl w-[4rem] h-[4rem] mx-auto bg-[#E7008A] flex justify-center items-center rounded-full text-white'>
                        <FaMobileAlt size={28} />
                    </span>
                    <h3
                        className="text-2xl md:text-3xl text-slate-800 font-mono font-bold underline decoration-orange-600 decoration-dashed decoration-3 underline-offset-4">
                        Responsiveness</h3>
                    <p className="text-base md:text-lg text-slate-700 font-mono font-bold">
                        Making a website responsive is one of the key and difficult aspect of website building. But making a
                        website responsive is what thrives me the most in the web development. I make sure that all of my
                        projects and work samples are responsive before submitting it.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Services;