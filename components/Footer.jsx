import React from 'react'
import { FaGithub, FaLinkedin, FaBloggerB } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="footer px-1 md:px-16 py-[2.5rem] bg-gray-50">
            <div className="upperHalf flex flex-col lg:flex-row items-center justify-between">
                <Link href="/#home">
                    <h3 
                        className="text-3xl md:text-4xl font-bold font-mono text-orange-500 hover:cursor-pointer hover:text-orange-600 transition">
                        port_Folio
                    </h3>
                </Link>
                <ul
                    className="flex justify-center items-center space-x-4 md:space-x-8 text-sm md:text-xl font-sans font-semibold text-slate-800 py-8 lg:py-0">
                    <li>
                        <Link href="/#home">
                            <a className="hover:underline hover:underline-offset-4 hover:text-orange-600 transition">
                                Home
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/#about">
                            <a className="hover:underline hover:underline-offset-4 hover:text-orange-600 transition-all">
                                About
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/#skills">
                            <a className="hover:underline hover:underline-offset-4 hover:text-orange-600 transition-all">
                                Skills
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/#services">
                            <a className="hover:underline hover:underline-offset-4 hover:text-orange-600 transition-all">
                                Services
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/#project">
                            <a className="hover:underline hover:underline-offset-4 hover:text-orange-600 transition-all">
                                Projects
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#contact">
                            <a className="hover:underline hover:underline-offset-4 hover:text-orange-600 transition-all">
                                Let's Talk
                            </a>
                        </Link>
                    </li>
                </ul>
                <div className="flex items-center space-x-7 md:space-x-5">
                    <button
                        className="bg-white p-2 rounded-full shadow-md hover:shadow-xl text-slate-800 hover:text-red-700 transition">
                        <a href="https://github.com/keshavkumar14092001" target="_blank">
                            <FaGithub size={28} />
                        </a>
                    </button>
                    <button
                        className="bg-white p-2 rounded-full shadow-md hover:shadow-xl text-slate-800 hover:text-blue-900 transition">
                        <a href="https://www.linkedin.com/in/keshav-kumar-6b0789222/" target="_blank">
                            <FaLinkedin size={28} />
                        </a>
                    </button>
                    <button
                        className="bg-white p-2 rounded-full shadow-md hover:shadow-xl text-slate-800 hover:text-orange-600 transition">
                        <a href="https://kkwebtech.blogspot.com/" target="_blank">
                            <FaBloggerB size={28} />
                        </a>
                    </button>
                </div>
            </div>
            <div className="h-1 bg-slate-300 my-6"></div>
            <div className="copyRight">
                <h1 className="text-center text-slate-600 text-base md:text-xl font-mono">
                    kk@tech.pvt.ltd || Copyright &copy; 2022 || All Rights Reserved!!!
                </h1>
            </div>
        </footer>
    )
}

export default Footer;