function Hero() {
    return (
        <section
            id="hero-left"
            className="w-full pt-0 pb-12 md:pt-0 md:pb-16"
            aria-label="Présentation"
        >
            <div className="mt-12 grid grid-cols-12 gap-6 items-start">
                {/* Left column content box (use 6/12 on md+ to make it less wide) */}
                <div className="col-span-12 md:col-span-6">
                    <div className="w-full">
                        <span className="uppercase tracking-widest text-text-low text-yellow">
                            UI/UX Designer
                        </span>

                        <h1 className="mt-4 text-4xl md:text-6xl leading-tight font-poppins font-extrabold text-text-high">
                            Hello, my name is Aymeric Moreira
                        </h1>

                        <p className="mr-48 mt-12 text-nunito md:text-lg text-text-low leading-relaxed">
                            Short text with details about you, what you do or your professional career. You can add more information on the about page.
                        </p>

                        <div className="mt-12 flex gap-3">
                            <a
                                href="#projects"
                                className="inline-block px-4 py-2 border-2 border-line rounded text-text-high text-sm bg-yellow"
                            >
                                Projects
                            </a>

                            <a
                                href="https://www.linkedin.com/in/aymeric-moreira-76a04929b/"
                                className="inline-block px-4 py-2 border-2 border-line rounded text-text-high text-sm"
                                target="_blank"
                                rel="noreferrer"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right column : image placeholder (image is global background) */}
                <div className="hidden md:block col-span-12 md:col-span-6" />
            </div>
        </section>
    );
}

export default Hero;
