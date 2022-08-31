import Link from 'next/link';

const Navbar = () => {

    const openNavBar = (e) => {
        e.preventDefault();
        const hamburger = document.querySelector('#hamburger')
        const navlinks = document.querySelector('#navlinks')

        const line = hamburger.querySelector('#line')
        const line2 = hamburger.querySelector('#line2')

        hamburger.addEventListener('click', function () {
            if (navlinks.classList.contains('hidden')) {
                navlinks.classList.remove('hidden')
                line.classList.add('rotate-45', 'absolute')
                line2.classList.add('-rotate-45', 'absolute')
                line2.classList.remove('mt-1.5')
            } else {
                navlinks.classList.add('hidden')
                line.classList.remove('rotate-45', 'absolute')
                line2.classList.remove('-rotate-45', 'absolute')
                line2.classList.add('mt-1.5')
            }
        })
    }

    return (
        <nav className="bg-gray-800 w-[100%] h-[5rem] fixed top-0 z-10 shadow-lg p-3">
            <div className="relative flex items-center justify-between flex-wrap">
                <div className="relative z-10 w-full px-2 md:px-6 flex items-center justify-between lg:w-auto">
                    <Link href='/'>
                        <a className="py-2 px-2 bg-gray-50 hover:bg-gray-300 rounded-md transition-all">
                            <h3 className="text-2xl md:text-4xl font-semibold md:font-bold font-mono text-orange-500">
                                port_Folio
                            </h3>
                        </a>
                    </Link>

                    <button id="hamburger" onClick={(e) => openNavBar(e)} className="relative w-10 h-10 text-white lg:hidden">
                        <div role="hidden" id="line"
                            className="inset-0 w-6 h-0.5 m-auto rounded-full bg-white transition duration-300"></div>
                        <div role="hidden" id="line2"
                            className="inset-0 w-6 h-0.5 mt-1.5 m-auto rounded-full bg-white transition duration-300"></div>
                    </button>
                </div>

                <div id="navlinks"
                    className="hidden px-6 bg-gray-800 text-gray-400 w-[100%] h-auto transition lg:block lg:w-auto lg:px-0 lg:bg-transparent">
                    <ul className="py-4 text-gray-600 text-lg tracking-wide lg:flex lg:space-x-8 lg:py-0">
                        <li className="lg:inline-flex lg:w-auto py-4 lg:py-0">
                            <Link href='/'>
                                <a
                                    className="lg:inline-flex lg:w-auto px-3 py-4 lg:py-2 rounded text-gray-100 text-xl font-sans hover:bg-gray-900 hover:text-orange-500 transition-all">
                                    Home
                                </a>
                            </Link>
                        </li>
                        <li className="lg:inline-flex lg:w-auto py-4 lg:py-0">
                            <Link href='/#about'>
                                <a
                                    className="lg:inline-flex lg:w-auto px-3 py-4 lg:py-2 rounded text-gray-100 text-xl font-sans hover:bg-gray-900 hover:text-orange-500 transition-all">
                                    About
                                </a>
                            </Link>
                        </li>
                        <li className="lg:inline-flex lg:w-auto py-4 lg:py-0">
                            <Link href="/#skills">
                                <a className="lg:inline-flex lg:w-auto px-3 py-4 lg:py-2 rounded text-gray-100 text-xl font-sans hover:bg-gray-900 hover:text-orange-500 transition-all">
                                    Skills
                                </a>
                            </Link>
                        </li>
                        <li className="lg:inline-flex lg:w-auto py-4 lg:py-0">
                            <Link href="/#services">
                                <a
                                    className="lg:inline-flex lg:w-auto px-3 py-4 lg:py-2 rounded text-gray-100 text-xl font-sans hover:bg-gray-900 hover:text-orange-500 transition-all">
                                    Services
                                </a>
                            </Link>
                        </li>
                        <li className="lg:inline-flex lg:w-auto py-4 lg:py-0">
                            <Link href="/#project">
                                <a
                                    className="lg:inline-flex lg:w-auto px-3 py-4 lg:py-2 rounded text-gray-100 text-xl font-sans hover:bg-gray-900 hover:text-orange-500 transition-all">
                                    Projects
                                </a>
                            </Link>
                        </li>
                        <li className="lg:inline-flex lg:w-auto py-4 lg:py-0">
                            <Link href="/#contact">
                                <a
                                    className="lg:inline-flex lg:w-auto px-3 py-4 lg:py-2 rounded text-gray-100 text-xl font-sans hover:bg-gray-900 hover:text-orange-500 transition-all">
                                    Let's Talk
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;