function ProjectCard({ title, description, imageUrl, imageRight = false, viewProjectLink = "#" }) {
    return (
        <div className="max-w-3xl mx-auto">
            <div className="overflow-hidden rounded-[16px] shadow-sm bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
                    {/* Content column */}
                    <div
                        className={`bg-white px-4 md:px-6 h-full flex items-center ${imageRight ? '' : 'md:order-last'}`}
                    >
                        <div className="w-full py-6 md:py-8 flex flex-col justify-center">
                            <h3 className="text-2xl md:text-3xl font-poppins font-bold text-text-high">
                                {title}
                            </h3>

                            <p className="mt-3 md:mt-4 text-sm md:text-base text-text-low leading-relaxed">
                                {description}
                            </p>

                            <div className="mt-4 md:mt-6">
                                <a
                                    href={viewProjectLink}
                                    className="inline-block px-4 py-1 border-2 border-text-high rounded text-text-high text-xs md:text-sm font-raleway hover:bg-text-high hover:text-white transition"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Image column */}
                    <div
                        className={`h-full overflow-hidden ${imageRight ? 'md:order-last' : ''}`}
                    >
                        <img
                            src={imageUrl}
                            alt={title}
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;

