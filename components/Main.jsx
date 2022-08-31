import Image from 'next/image';
import { FaGithub, FaLinkedin, FaBloggerB, FaDatabase, FaServer, FaCode, FaPhone, FaDownload } from 'react-icons/fa';
import Link from 'next/link';

const Main = () => {
    return (
        <section id="home"
            className="grid place-items-center relative top-8 lg:top-16 pt-[5rem] lg:pt-[10rem] pb-[10rem] lg:pb-[20rem]">
            <div className="px-4 lg:px-16 flex flex-col lg:flex-row items-center justify-between">
                <div className="hidden lg:flex lg:flex-col lg:space-y-12 lg:pr-4">
                    <button className="bg-white p-2 rounded-full shadow-md text-slate-800 hover:text-red-700 transition">
                        <a href="https://github.com/keshavkumar14092001" rel="noreferrer" target="_blank">
                            <FaGithub size={28} />
                        </a>
                    </button>
                    <button className="bg-white p-2 rounded-full shadow-md text-slate-800 hover:text-blue-900 transition">
                        <a href="https://www.linkedin.com/in/keshav-kumar-6b0789222/" rel="noreferrer" target="_blank">
                            <FaLinkedin size={28} />
                        </a>
                    </button>
                    <button className="bg-white p-2 rounded-full shadow-md text-slate-800 hover:text-orange-600 transition">
                        <a href="https://kkwebtech.blogspot.com/" rel="noreferrer" target="_blank">
                            <FaBloggerB size={28} />
                        </a>
                    </button>
                </div>
                <div className="md:px-8 lg:px-28">
                    <h3
                        className="text-xl md:text-2xl lg:text-3xl font-semibold text-slate-800  underline decoration-orange-600 decoration-dashed decoration-2 underline-offset-4">
                        Hi, I&#39;m Keshav Kumar
                    </h3>
                    <h1
                        className="text-2xl md:text-4xl lg:text-6xl font-bold text-slate-800 font-mono text-left whitespace-nowrap underline decoration-orange-600 decoration-dashed decoration-4 underline-offset-4 mt-4 mb-6">
                        Full Stack Web Developer
                    </h1>
                    <p className="text-sm md:text-base lg:text-lg text-slate-900 font-semibold">
                        I&#39;m very much an enthusiast of how websites are made. That&#39;s why I chose to become a Web developer.
                        I also know quite a lot about languages like HTML, CSS, JS, Node.js, React.js. Since they are used
                        in full-stack Web development. And, I am fairly new at this, so, ny priority will always be work,
                        not how much I&#39;m earning.
                    </p>
                    <button
                        className="mt-9 py-2 px-2 md:px-4 bg-orange-600 text-white rounded-md text-base md:text-xl font-bold font-mono hover:bg-orange-500 shadow-md hover:shadow-lg">
                        <a href="/Keshav_Kumar_Resume.pdf" className='flex items-center justify-around' download>
                            <FaDownload /><span className='pl-2'>Download CV</span>
                        </a>
                    </button>
                    <button
                        className="mt-9 ml-4 py-2 px-2 md:px-4 bg-orange-600 text-white rounded-md text-base md:text-xl font-bold font-mono hover:bg-orange-500 shadow-md hover:shadow-lg">
                        <Link href="/#contact">
                            <a className='flex items-center justify-around'>
                                <FaPhone /><span className='pl-2'>Let&#39;s Talk</span>
                            </a>
                        </Link>
                    </button>
                </div>
                <div className="flex justify-center items-center pt-16">
                    <div
                        className="w-[15rem] md:w-[20rem] h-[15rem] md:h-[20rem] border border-orange-600 rounded-[50%] relative animate-[spin_30s_linear_infinite]">
                        <i
                            className="fas fa-pencil-ruler w-[2rem] h-[2rem] rounded-[50%] absolute bg-white text-orange-600 flex justify-center items-center shadow-md left-[calc(50%-2rem)] top-[-1rem]">
                            <FaCode />
                        </i>
                        <i
                            className="fas fa-server w-[2rem] h-[2rem] rounded-[50%] absolute bg-white text-orange-600 flex justify-center items-center shadow-md right-[-1rem] top-[calc(50%-2rem)]">
                            <FaServer />
                        </i>
                        <i
                            className="fas fa-code w-[2rem] h-[2rem] rounded-[50%] absolute bg-white text-orange-600 flex justify-center items-center shadow-md left-[-1rem] top-[calc(50%-2rem)]">
                            <FaDatabase />
                        </i>
                        <i
                            className="fab fa-blogger-b w-[2rem] h-[2rem] rounded-[50%] absolute bg-white text-orange-600 flex justify-center items-center shadow-md bottom-[-1rem] left-[calc(50%-2rem)]">
                            <FaBloggerB />
                        </i>
                    </div>
                    <div
                        className="absolute w-[10rem] md:w-[15rem] h-[10rem] md:h-[15rem] rounded-[50%] overflow-hidden shadow-lg">
                        <Image src={'/Pic.jpeg'} width={200} height={300} alt='loading' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main;