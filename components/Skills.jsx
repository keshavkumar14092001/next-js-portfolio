import { 
    FaServer, 
    FaCode, 
    FaKeyboard, 
    FaReact, 
    FaJsSquare, 
    FaCss3Alt, 
    FaHtml5, 
    FaCss3, 
    FaBootstrap, 
    FaNode, 
    FaNodeJs, 
    FaDatabase, 
    FaCuttlefish, 
    FaJava,
    FaPython 
} from 'react-icons/fa';
import { SiNextdotjs } from "react-icons/si";

const Skills = () => {
    return (
        <section id="skills" className="px-4 md:px-16 py-16 md:py-32 bg-gray-100 w-[100%]">
            <h1
                className="text-center text-5xl md:text-6xl font-bold font-mono text-slate-800 pb-16 underline decoration-orange-600 decoration-dashed decoration-4 underline-offset-4">
                Skills
            </h1>
            <div className="w-[100%] lg:w-[50%] mx-auto">
                <div className="flex flex-col items-center mb-4">
                    <div
                        className="flex items-center justify-between bg-orange-600 w-[100%] p-[1.4rem] text-white cursor-pointer rounded-md hover:bg-orange-500 transition shadow-lg">
                        <div
                            className="flex justify-between items-center w-[100%] md:w-[50%] hover:text-gray-200 transition">
                            <FaCode size={28} />
                            <h3 className="text-xl md:text-2xl font-mono font-bold">Frontend Development</h3>
                        </div>
                    </div>
                    <div className="w-[90%]">
                        <div
                            className="flex flex-col p-[1.4rem] bg-gray-200 my-4 hover:bg-white hover:cursor-pointer shadow-md transition">
                            <h4 className="flex items-center text-xl font-bold font-mono text-slate-800">
                                <FaHtml5 /><span className='pl-2'>HTML</span>
                            </h4>
                            <div className="w-[100%] flex items-center">
                                <div className="w-[100%] h-[1rem] bg-orange-300 rounded-md shadow-lg">
                                    <div className="h-[100%] w-[80%] bg-orange-600 rounded-md"></div>
                                </div>
                                <h5 className="pl-4 text-xl font-bold font-mono text-slate-800">80%</h5>
                            </div>
                        </div>

                        <div
                            className="flex flex-col p-[1.4rem] bg-gray-200 my-4 hover:bg-white hover:cursor-pointer shadow-md transition">
                            <h4 className="flex items-center text-xl font-bold font-mono text-slate-800">
                                <FaCss3Alt /><span className='pl-2'>CSS</span>
                            </h4>
                            <div className="w-[100%] flex items-center">
                                <div className="w-[100%] h-[1rem] bg-orange-300 rounded-md shadow-lg">
                                    <div className="h-[100%] w-[70%] bg-orange-600 rounded-md"></div>
                                </div>
                                <h5 className="pl-4 text-xl font-bold font-mono text-slate-800">70%</h5>
                            </div>
                        </div>
                        <div
                            className="flex flex-col p-[1.4rem] bg-gray-200 my-4 hover:bg-white hover:cursor-pointer shadow-md transition">
                            <h4 className="flex items-center text-xl font-bold font-mono text-slate-800">
                                <FaJsSquare /><span className='pl-2'>JavaScript</span>
                            </h4>
                            <div className="w-[100%] flex items-center">
                                <div className="w-[100%] h-[1rem] bg-orange-300 rounded-md shadow-lg">
                                    <div className="h-[100%] w-[60%] bg-orange-600 rounded-md"></div>
                                </div>
                                <h5 className="pl-4 text-xl font-bold font-mono text-slate-800">60%</h5>
                            </div>
                        </div>
                        <div
                            className="flex flex-col p-[1.4rem] bg-gray-200 my-4 hover:bg-white hover:cursor-pointer shadow-md transition">
                            <h4 className="flex items-center text-xl font-bold font-mono text-slate-800">
                                <FaReact /><span className='pl-2'>ReactJs</span>
                            </h4>
                            <div className="w-[100%] flex items-center">
                                <div className="w-[100%] h-[1rem] bg-orange-300 rounded-md shadow-lg">
                                    <div className="h-[100%] w-[65%] bg-orange-600 rounded-md"></div>
                                </div>
                                <h5 className="pl-4 text-xl font-bold font-mono text-slate-800">65%</h5>
                            </div>
                        </div>
                        <div
                            className="flex flex-col p-[1.4rem] bg-gray-200 my-4 hover:bg-white hover:cursor-pointer shadow-md transition">
                            <h4 className="flex items-center text-xl font-bold font-mono text-slate-800">
                                <SiNextdotjs /><span className='pl-2'>NextJs</span>
                            </h4>
                            <div className="w-[100%] flex items-center">
                                <div className="w-[100%] h-[1rem] bg-orange-300 rounded-md shadow-lg">
                                    <div className="h-[100%] w-[50%] bg-orange-600 rounded-md"></div>
                                </div>
                                <h5 className="pl-4 text-xl font-bold font-mono text-slate-800">50%</h5>
                            </div>
                        </div>
                        <div
                            className="flex flex-col p-[1.4rem] bg-gray-200 my-4 hover:bg-white hover:cursor-pointer shadow-md transition">
                            <h4 className="flex items-center text-xl font-bold font-mono text-slate-800">
                                <FaCss3 /><span className='pl-2'>Tailwind CSS</span>
                            </h4>
                            <div className="w-[100%] flex items-center">
                                <div className="w-[100%] h-[1rem] bg-orange-300 rounded-md shadow-lg">
                                    <div className="h-[100%] w-[85%] bg-orange-600 rounded-md"></div>
                                </div>
                                <h5 className="pl-4 text-xl font-bold font-mono text-slate-800">85%</h5>
                            </div>
                        </div>
                        <div
                            className="flex flex-col p-[1.4rem] bg-gray-200 my-4 hover:bg-white hover:cursor-pointer shadow-md transition">
                            <h4 className="flex items-center text-xl font-bold font-mono text-slate-800">
                                <FaBootstrap /><span className='pl-2'>Bootstrap</span>
                            </h4>
                            <div className="w-[100%] flex items-center">
                                <div className="w-[100%] h-[1rem] bg-orange-300 rounded-md shadow-lg">
                                    <div className="h-[100%] w-[60%] bg-orange-600 rounded-md"></div>
                                </div>
                                <h5 className="pl-4 text-xl font-bold font-mono text-slate-800">60%</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center mb-4">
                    <div
                        className="flex items-center justify-between bg-orange-600 w-[100%] p-[1.4rem] text-white cursor-pointer rounded-md hover:bg-orange-500 transition shadow-lg">
                        <div
                            className="left flex justify-between items-center w-[100%] md:w-[50%] hover:text-gray-200 transition">
                            <FaServer size={28} />
                            <h3 className="text-xl md:text-2xl font-mono font-bold">Backend Development</h3>
                        </div>
                    </div>
                    <div className="items w-[90%]">
                        <div
                            className="flex flex-col p-[1.4rem] bg-gray-200 my-4 hover:bg-white hover:cursor-pointer shadow-md transition">
                            <h4 className="flex items-center text-xl font-bold font-mono text-slate-800">
                                <FaNode /><span className='pl-2'>Node.js</span>
                            </h4>
                            <div className="w-[100%] flex items-center">
                                <div className="w-[100%] h-[1rem] bg-orange-300 rounded-md shadow-lg">
                                    <div className="h-[100%] w-[60%] bg-orange-600 rounded-md"></div>
                                </div>
                                <h5 className="pl-4 text-xl font-bold font-mono text-slate-800">60%</h5>
                            </div>
                        </div>
                        <div
                            className="flex flex-col p-[1.4rem] bg-gray-200 my-4 hover:bg-white hover:cursor-pointer shadow-md transition">
                            <h4 className="flex items-center text-xl font-bold font-mono text-slate-800">
                                <FaNodeJs /><span className='pl-2'>Express.js</span>
                            </h4>
                            <div className="w-[100%] flex items-center">
                                <div className="w-[100%] h-[1rem] bg-orange-300 rounded-md shadow-lg">
                                    <div className="h-[100%] w-[70%] bg-orange-600 rounded-md"></div>
                                </div>
                                <h5 className="pl-4 text-xl font-bold font-mono text-slate-800">70%</h5>
                            </div>
                        </div>
                        <div
                            className="flex flex-col p-[1.4rem] bg-gray-200 my-4 hover:bg-white hover:cursor-pointer shadow-md transition">
                            <h4 className="flex items-center text-xl font-bold font-mono text-slate-800">
                                <FaDatabase /><span className='pl-2'>MongoDB</span>
                            </h4>
                            <div className="w-[100%] flex items-center">
                                <div className="w-[100%] h-[1rem] bg-orange-300 rounded-md shadow-lg">
                                    <div className="h-[100%] w-[50%] bg-orange-600 rounded-md"></div>
                                </div>
                                <h5 className="pl-4 text-xl font-bold font-mono text-slate-800">50%</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center mb-4">
                    <div
                        className="flex items-center justify-between bg-orange-600 w-[100%] p-[1.4rem] text-white cursor-pointer rounded-md hover:bg-orange-500 transition shadow-lg">
                        <div
                            className="left flex justify-between items-center w-[100%] md:w-[50%] hover:text-gray-200 transition">
                            <FaKeyboard size={28} />
                            <h3 className="text-xl md:text-2xl font-mono font-bold md:pr-[100px]">Programming</h3>
                        </div>
                    </div>
                    <div className="w-[90%]">
                        <div
                            className="flex flex-col p-[1.4rem] bg-gray-200 my-4 hover:bg-white hover:cursor-pointer shadow-md transition">
                            <h4 className="flex items-center text-xl font-bold font-mono text-slate-800">
                                <FaCuttlefish /><span className='pl-2'>C</span>
                            </h4>
                            <div className="w-[100%] flex items-center">
                                <div className="w-[100%] h-[1rem] bg-orange-300 rounded-md shadow-lg">
                                    <div className="h-[100%] w-[60%] bg-orange-600 rounded-md"></div>
                                </div>
                                <h5 className="pl-4 text-xl font-bold font-mono text-slate-800">60%</h5>
                            </div>
                        </div>
                        <div
                            className="flex flex-col p-[1.4rem] bg-gray-200 my-4 hover:bg-white hover:cursor-pointer shadow-md transition">
                            <h4 className="flex items-center text-xl font-bold font-mono text-slate-800">
                                <FaJava /><span className='pl-2'>Java</span>
                            </h4>
                            <div className="w-[100%] flex items-center">
                                <div className="w-[100%] h-[1rem] bg-orange-300 rounded-md shadow-lg">
                                    <div className="h-[100%] w-[60%] bg-orange-600 rounded-md"></div>
                                </div>
                                <h5 className="pl-4 text-xl font-bold font-mono text-slate-800">60%</h5>
                            </div>
                        </div>
                        <div
                            className="flex flex-col p-[1.4rem] bg-gray-200 my-4 hover:bg-white hover:cursor-pointer shadow-md transition">
                            <h4 className="flex items-center text-xl font-bold font-mono text-slate-800">
                                <FaPython/><span className='pl-2'>Python</span>
                            </h4>
                            <div className="w-[100%] flex items-center">
                                <div className="w-[100%] h-[1rem] bg-orange-300 rounded-md shadow-lg">
                                    <div className="h-[100%] w-[40%] bg-orange-600 rounded-md"></div>
                                </div>
                                <h5 className="pl-4 text-xl font-bold font-mono text-slate-800">40%</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;
