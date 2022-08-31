const About = () => {
    return (
        <section id="about" className="w-[100%] px-2 md:px-4 lg:px-16 py-16 md:py-32 bg-gray-200">
            <div className="flex flex-col justify-around items-center">
                <h1
                    className="text-5xl lg:text-6xl font-bold font-mono text-slate-800 py-8 md:pb-4 lg:pb-8 underline decoration-orange-600 decoration-dashed decoration-4 underline-offset-4 text-left">
                    AboutMe
                </h1>
                <p className="pt-8 px-2 text-left text-base lg:text-lg font-semibold text-slate-800 md:text-slate-700">
                    I am very much an enthusiastic person on how websites are made and what is the logic behind making
                    those wonderful websites. That's why I chose to become a web developer, so that I can understand
                    that logic and not just understand it, but one day make it with my own hands. I know this field is
                    filled with challenges and this might be a very bumpy road in my career but I also know nothing
                    comes without struggling, and when you get it after struggling for it, then it becomes the greatest
                    weapon in your arsenal. I am a good observer and a fast learner. I also like to work on new topics
                    Which are not in my comfort zone. I can work as a team player, but if the situation demands I can
                    also work as a group leader. I don't like putting any kind of restriction on myself, that's why I
                    like to keep exploring new things and technologies, whenever and however I can. 
                </p>
            </div>
        </section>
    )
}

export default About;