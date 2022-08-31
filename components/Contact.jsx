import React from 'react'

const Contact = () => {
    return (
        <section id="contact"
            className="bg-[url('/Contact_me.jpg')] bg-no-repeat bg-center bg-cover p-0 max-w-[100vw] h-[1000px]">
            <div className="overlay w-[100%] h-[100%] bg-[rgba(0,0,0,0.8)]">
                <div className="contactContainer py-[5.5rem] w-[85%] mx-auto">
                    <h1
                        className="text-white font-mono text-4xl md:text-6xl font-semibold text-center py-5 underline decoration-orange-600 decoration-dashed decoration-4 underline-offset-8">
                        Let&#39;s Talk!
                    </h1>
                    <h3
                        className="text-center text-white font-semibold font-mono text-lg md:text-2xl py-5 underline decoration-orange-600 decoration-dashed decoration-2 underline-offset-4">
                        If you want to hire me for a project or want to collaborate with me or just want to talk.
                    </h3>
                    <h3
                        className="text-center text-white font-semibold font-mono text-xl md:text-3xl pt-2 pb-5 underline decoration-orange-600 decoration-dashed decoration-2 underline-offset-4">
                        Feel free to Contact me
                    </h3>
                    <form action="https://formspree.io/f/xnqwpjjo" method="POST" className="mt-[3rem]">
                        <input type="text"
                            className="block w-[100%] md:w-[80%] lg:w-[50%] mx-auto my-[1rem] px-[1.6rem] py-[1rem] border border-white bg-transparent text-white rounded-md text-base md:text-xl font-mono focus:bg-white focus:text-slate-800 placeholder:text-gray-100"
                            name="Name" placeholder="Enter your Name!!!" required />
                        <input type="email"
                            className="block w-[100%] md:w-[80%] lg:w-[50%] mx-auto my-[1rem] px-[1.6rem] py-[1rem] border border-white bg-transparent text-white rounded-md text-base md:text-xl font-mono focus:bg-white focus:text-slate-800 placeholder:text-gray-100"
                            name="Email" placeholder="Enter your Email address!!!" required />
                        <input type="text"
                            className="block w-[100%] md:w-[80%] lg:w-[50%] mx-auto my-[1rem] px-[1.6rem] py-[1rem] border border-white bg-transparent text-white rounded-md text-base md:text-xl font-mono focus:bg-white focus:text-slate-800 placeholder:text-gray-100"
                            name="Subject" placeholder="Subject for contacting me!!!" required />
                        <textarea name="Message"
                            className="block h-[12rem] w-[100%] md:w-[80%] lg:w-[50%] mx-auto my-[1rem] px-[1.6rem] py-[1rem] border border-white bg-transparent text-white rounded-md text-base md:text-xl font-mono focus:bg-white focus:text-slate-800 placeholder:text-gray-100"
                            placeholder="Enter your Message!!!" required></textarea>
                        <input type="submit"
                            className="block w-[100%] md:w-[80%] lg:w-[50%] mx-auto my-[2rem] px-[1.6rem] py-[1rem] border border-white bg-transparent text-white rounded-md text-base md:text-2xl font-mono focus:bg-white focus:text-slate-800 placeholder:text-gray-100 hover:bg-orange-600 hover:text-white hover:cursor-pointer transition"
                            value="Submit" />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;