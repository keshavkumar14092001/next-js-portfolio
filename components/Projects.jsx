import React from 'react'

const Projects = () => {
    return (
        <section id="project" className="myProjects px-4 md:px-16 py-[5.5rem] bg-gray-50">

            <h1
                className="text-center text-slate-800 text-5xl md:text-6xl font-bold font-mono underline decoration-orange-600 decoration-dashed decoration-4 underline-offset-8">
                myProjects
            </h1>
            <h4
                className="text-center pt-10 pb-20 text-slate-700 font-mono font-bold text-xl md:text-3xl underline decoration-orange-600 decoration-dashed decoration-2 underline-offset-4">
                Here are some of my projects and work samples.
            </h4>
            <div className="overflow-auto rounded-lg shadow-lg">
                <table className="w-full">
                    <thead className="bg-orange-600 border-b-2 border-gray-200 text-white">
                        <tr>
                            <th className="p-3 text-sm font-semibold tracking-wide text-left">Project No.</th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-left">Project Title</th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-left">Project Link</th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-left">Project Discription</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-orange-600">
                        <tr className="bg-gray-100">
                            <td className="p-3 text-sm text-slate-700 font-mono font-bold whitespace-nowrap">1</td>
                            <td className="p-3 text-sm text-slate-800 font-mono font-bold whitespace-nowrap">
                                Weather App
                            </td>
                            <td className="p-3 text-sm text-slate-700 font-mono font-bold whitespace-nowrap">
                                <a
                                    href="https://weather-forecasting-app-two.vercel.app/"
                                    target={"_blank"}
                                    className="hover:text-orange-600"
                                    rel="noreferrer"
                                >
                                    Click here
                                </a>
                            </td>
                            <td className="p-3 text-sm text-slate-700 font-bold font-mono whitespace-nowrap">
                                This is a sophisticated weather forecasting application that incorporates an array of advanced features such as wind speed, humidity, and sun rise and set times, among others. Developed using cutting-edge technologies, including Tailwind CSS and Next JS, this app is designed to provide a seamless and intuitive user experience.
                            </td>
                        </tr>
                        <tr className="bg-gray-200">
                            <td className="p-3 text-sm text-slate-700 font-mono font-bold whitespace-nowrap">2</td>
                            <td className="p-3 text-sm text-slate-800 font-mono font-bold whitespace-nowrap">
                                Travel Diaries
                            </td>
                            <td className="p-3 text-sm text-slate-700 font-mono font-bold whitespace-nowrap">
                                <a
                                    href="https://travel-diaries-frontend.vercel.app/"
                                    target={"_blank"}
                                    className="hover:text-orange-600"
                                    rel="noreferrer"
                                >
                                    Click here
                                </a>
                            </td>
                            <td className="p-3 text-sm text-slate-700 font-bold font-mono whitespace-nowrap">
                                This is a full-fledged MERN Stack application that incorporates Tailwind CSS as a robust CSS framework and is fully optimised for responsiveness across all devices. Its primary functionality includes enabling users to create and share their unique travel experiences while also accessing those of others.
                            </td>
                        </tr>
                        <tr className="bg-gray-100">
                            <td className="p-3 text-sm text-slate-700 font-mono font-bold whitespace-nowrap">3</td>
                            <td className="p-3 text-sm text-slate-800 font-mono font-bold whitespace-nowrap">
                                Crypto App
                            </td>
                            <td className="p-3 text-sm text-slate-700 font-mono font-bold whitespace-nowrap">
                                <a
                                    href="https://crypto-app-my-version.vercel.app/"
                                    target={"_blank"}
                                    className="hover:text-orange-600"
                                    rel="noreferrer"
                                >
                                    Click here
                                </a>
                            </td>
                            <td className="p-3 text-sm text-slate-700 font-bold font-mono whitespace-nowrap">
                                This is a highly responsive cryptocurrency application developed with React JS as the front-end framework and Tailwind CSS as the CSS framework. The app delivers real-time updates on the current state of the cryptocurrency market, providing users with the latest information and trends.
                            </td>
                        </tr>
                        <tr className="bg-gray-200">
                            <td className="text-sm p-3 text-slate-700 font-mono font-bold whitespace-nowrap">4</td>
                            <td className="text-sm p-3 text-slate-800 font-bold font-mono whitespace-nowrap">
                                Snake Game
                            </td>
                            <td className="text-sm p-3 text-slate-700 font-mono font-bold whitespace-nowrap">
                                <a
                                    href="https://beware-of-snake.netlify.app"
                                    target={"_blank"}
                                    className="hover:text-orange-600 transition"
                                    rel="noreferrer"
                                >
                                    Click here
                                </a>
                            </td>
                            <td className="text-sm p-3 text-slate-700 font-mono font-bold whitespace-nowrap">
                                It is a PC/Laptop snake game with high score functionality that gets updated in real-time and also has a bit of sound effect. It was made with HTML, CSS, and Javascript as frontend.
                            </td>
                        </tr>
                        <tr className="bg-gray-100">
                            <td className="text-sm text-slate-700 p-3 font-mono font-bold whitespace-nowrap">5</td>
                            <td className="text-sm text-slate-800 p-3 font-mono font-bold whitespace-nowrap">
                                Tic-Tac-Toe
                            </td>
                            <td className="text-sm text-slate-700 p-3 font-mono font-bold whitespace-nowrap">
                                <a
                                    href="https://meratictactoe.netlify.app"
                                    target={"_blank"}
                                    className="hover:text-orange-600 transition"
                                    rel="noreferrer"
                                >
                                    Click here
                                </a>
                            </td>
                            <td className="text-sm text-slate-700 p-3 font-mono font-bold whitespace-nowrap">
                                It is a PC/Laptop/Mobile single-player Tic-Tac-Toe game. It was made with HTML, CSS, and
                                Javascript as frontend. It is responsive so anyone can play on any device with a little bit of sound effect.
                            </td>
                        </tr>
                        <tr className="bg-gray-200">
                            <td className="text-sm text-slate-700 p-3 font-mono font-bold whitespace-nowrap">6</td>
                            <td className="text-sm text-slate-800 p-3 font-mono font-bold whitespace-nowrap">
                                Musicplayer
                            </td>
                            <td className="text-sm text-slate-700 p-3 font-mono font-bold whitespace-nowrap">
                                <a
                                    href="https://my-new-music-player.netlify.app"
                                    target={"_blank"}
                                    className="hover:text-orange-600 transition"
                                    rel="noreferrer"
                                >
                                    Click here
                                </a>
                            </td>
                            <td className="text-sm text-slate-700 p-3 font-mono font-bold whitespace-nowrap">

                                It is a PC/Laptop Musicplayer app made with the help of the latest HTML5 audio functionality. It has play/pause, perv/next, and progress bar functionality with a bit of animation effect. It is made with the help of HTML, CSS, and Javascript as frontend.
                            </td>
                        </tr>
                        <tr className="bg-gray-100">
                            <td className="text-sm text-slate-700 font-bold font-mono p-3 whitespace-nowrap">7</td>
                            <td className="text-sm text-slate-800 font-bold font-mono p-3 whitespace-nowrap">
                                To/Do&#39;s App
                            </td>
                            <td className="text-sm text-slate-700 font-bold font-mono p-3 whitespace-nowrap">
                                <a
                                    href="https://merato-do-s-app.netlify.app"
                                    target={"_blank"}
                                    className="hover:text-orange-600 transition"
                                    rel="noreferrer"
                                >
                                    Click here
                                </a>
                            </td>
                            <td className="text-sm text-slate-700 font-bold font-mono p-3 whitespace-nowrap">

                                It is a modern To/Do&#39;s app with an animation effect and has a Delete functionality in
                                it. It is made with HTML, CSS, and Javascript as frontend.

                            </td>
                        </tr>
                        <tr className="bg-gray-200">
                            <td className="p-3 text-slate-700 font-mono font-bold text-sm whitespace-nowrap">8</td>
                            <td className="p-3 text-slate-800 font-mono font-bold text-sm whitespace-nowrap">
                                Weight Converter
                            </td>
                            <td className="p-3 text-slate-700 font-mono font-bold text-sm whitespace-nowrap">
                                <a
                                    href="https://findweight.netlify.app"
                                    target={"_blank"}
                                    className="hover:text-orange-600 transition"
                                    rel="noreferrer"
                                >
                                    Click here
                                </a>
                            </td>
                            <td className="p-3 text-slate-700 font-mono font-bold text-sm whitespace-nowrap">

                                It is a weight converter app that converts the given weight to all available units of
                                weight with a bit of animation effect. It is made by HTML, CSS, and Javascript as frontend.

                            </td>
                        </tr>
                        <tr className="bg-gray-100">
                            <td className="p-3 text-slate-700 font-mono font-bold text-sm whitespace-nowrap">9</td>
                            <td className="p-3 text-slate-800 font-mono font-bold text-sm whitespace-nowrap">
                                Book list app
                            </td>
                            <td className="p-3 text-slate-700 font-mono font-bold text-sm whitespace-nowrap">
                                <a
                                    href="https://my-book-app-list.netlify.app"
                                    target={"_blank"}
                                    className="hover:text-orange-600 transition"
                                    rel="noreferrer"
                                >
                                    Click here
                                </a>
                            </td>
                            <td className="p-3 text-slate-700 font-mono font-bold text-sm whitespace-nowrap">

                                It is a book app where you can keep record of all of your books, which you have read and
                                which you are about to read. It is built by using HTML, Bootstrap and JavaScript.

                            </td>
                        </tr>
                        <tr className="bg-gray-200">
                            <td className="p-3 text-slate-700 font-mono font-bold text-sm whitespace-nowrap">10</td>
                            <td className="p-3 text-slate-800 font-mono font-bold text-sm whitespace-nowrap">
                                Login Signup container
                            </td>
                            <td className="p-3 text-slate-700 font-mono font-bold text-sm whitespace-nowrap">
                                <a
                                    href="https://login-signup-container.netlify.app"
                                    target={"_blank"}
                                    className="hover:text-orange-600 transition"
                                    rel="noreferrer"
                                >
                                    Click here
                                </a>
                            </td>
                            <td className="p-3 text-slate-700 font-mono font-bold text-sm whitespace-nowrap">

                                It is a frontend design for signup and login form in just one container using HTML, CSS and
                                JavaScript.

                            </td>
                        </tr>
                        <tr className="bg-gray-100">
                            <td className="text-sm text-slate-700 font-bold font-mono p-3 whitespace-nowrap">11</td>
                            <td className="text-sm text-slate-800 font-bold font-mono p-3 whitespace-nowrap">
                                Dummy Website
                            </td>
                            <td className="text-sm text-slate-700 font-bold font-mono p-3 whitespace-nowrap">
                                <a
                                    href="https://boltcli.netlify.app"
                                    target={"_blank"}
                                    className="hover:text-orange-600 transition"
                                    rel="noreferrer"
                                >
                                    Click here
                                </a>
                            </td>
                            <td className="text-sm text-slate-700 font-bold font-mono p-3 whitespace-nowrap">

                                It is a dummy frontend website with amazing design, animation, and active form. It is
                                also responsive so it can be viewed on any device without a problem. It is made by pure HTML,
                                CSS, Javascript.

                            </td>
                        </tr>
                        <tr className="bg-gray-200">
                            <td className="p-3 text-sm font-bold font-mono text-slate-700 whitespace-nowrap">12</td>
                            <td className="p-3 text-sm font-bold font-mono text-slate-800 whitespace-nowrap">
                                Microsoft Clone
                            </td>
                            <td className="p-3 text-sm font-bold font-mono text-slate-700 whitespace-nowrap">
                                <a
                                    href="https://microsoft-front-page-clone-app.netlify.app"
                                    target={"_blank"}
                                    className="hover:text-orange-600 transition"
                                    rel="noreferrer"
                                >
                                    Click here
                                </a>
                            </td>
                            <td className="p-3 text-sm font-bold font-mono text-slate-700 whitespace-nowrap">
                                It is a front-page clone of Microsoft&#39;s official website made by using HTML, CSS, and
                                Javascript. It is responsive so it can be viewed on any device without any issue but
                                keep in mind that this is just a frontend hence no buttons will work after clicking, it is just
                                a frontend design.
                            </td>
                        </tr>
                        <tr className="bg-gray-100">
                            <td className="text-sm p-3 font-mono font-bold text-slate-700 whitespace-nowrap">13</td>
                            <td className="text-sm p-3 font-mono font-bold text-slate-800 whitespace-nowrap">
                                Hulu Clone
                            </td>
                            <td className="text-sm p-3 font-mono font-bold text-slate-700 whitespace-nowrap">
                                <a
                                    href="https://hulu-front-page-clone.netlify.app"
                                    target={"_blank"}
                                    className="hover:text-orange-600 transition"
                                    rel="noreferrer"
                                >
                                    Click here
                                </a>
                            </td>
                            <td className="text-sm p-3 font-mono font-bold text-slate-700 whitespace-nowrap">
                                It is a front-page clone of Hulu&#39;s official website made by using HTML, CSS, and
                                Javascript.It is responsive so it can be viewed on any device without any issue but keep in
                                mind that this is just a frontend hence no buttons will work after clicking, it is just a
                                frontend design.
                            </td>
                        </tr>
                        <tr className="bg-gray-200">
                            <td className="text-sm p-3 font-mono font-bold text-slate-700 whitespace-nowrap">14</td>
                            <td className="text-sm p-3 font-mono font-bold text-slate-800 whitespace-nowrap">
                                Facebook login clone
                            </td>
                            <td className="text-sm p-3 font-mono font-bold text-slate-700 whitespace-nowrap">
                                <a
                                    href="https://4thclone-kk.netlify.app"
                                    target={"_blank"}
                                    className="hover:text-orange-600 transition"
                                    rel="noreferrer"
                                >
                                    Click here
                                </a>
                            </td>
                            <td className="text-sm p-3 font-mono font-bold text-slate-700 whitespace-nowrap">
                                It is a login-page clone of Facebook official website made by using HTML, CSS, and
                                Javascript.It is responsive so it can be viewed on any device without any issue but keep in
                                mind that this is just a frontend hence no buttons will work after clicking, it is just a
                                frontend design.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </section>
    )
}

export default Projects;
