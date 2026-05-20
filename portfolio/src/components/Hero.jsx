import heroImg from '../assets/hero.png';

function Hero() {
    return (
        <section
            id="hero-left"
            className="mx-auto w-full max-w-[1120px] px-6 pt-0 pb-12 md:pt-0 md:pb-16"
            aria-label="Présentation"
        >
            <div className="md:grid md:grid-cols-2 md:gap-8">
                {/* Left column content box */}
                <div className="flex items-start">
                    <div className="w-full">
                        <span className="text-xs uppercase tracking-widest text-text-low">
                            UI/UX Designer
                        </span>

                        <h1 className="mt-4 text-4xl md:text-6xl leading-tight font-poppins font-extrabold text-text-high">
                            Hello, my name is Aymeric Moreira
                        </h1>

                        <p className="mt-6 text-poppins text-text-low">
                            Short text with details about you, what you do or your professional career. You can add more information on the about page.
                        </p>

                        <div className="mt-6 flex gap-3">
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

                {/* Right column : image (alignée en haut pour toucher la navbar) */}
                <div className="flex items-start justify-center">
                    <div className="w-full max-w-[560px] overflow-hidden rounded-sm">
                        <img
                            src={heroImg}
                            alt="Photo de présentation"
                            className="w-full h-[360px] md:h-[520px] object-cover object-center"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
