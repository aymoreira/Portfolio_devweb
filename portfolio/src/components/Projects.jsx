import ProjectCard from './ProjectCard';
import img1 from '../assets/image1.png';
import img2 from '../assets/image2.png';
import img3 from '../assets/image3.png';

function Projects() {
    const projectsData = [
        {
            id: 1,
            title: "Project Name",
            description: "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
            imageUrl: img1,
            imageRight: true
        },
        {
            id: 2,
            title: "Project Name",
            description: "What was your role, your deliverables, if the project was personal, freelancing.",
            imageUrl: img2,
            imageRight: false
        },
        {
            id: 3,
            title: "Project Name",
            description: "You can also add in this description the type of the project, if it was for web, mobile, electron.",
            imageUrl: img3,
            imageRight: true
        }
    ];

    return (
        <section id="projects" className="w-full pt-12 md:pt-20 pb-12 md:pb-16" aria-label="Projets">
            {/* Section title */}
            <div className="text-center mb-12 md:mb-16">
                <h2 className="text-4xl md:text-5xl text-text-high font-playfair font-bold">
                    Projects
                </h2>
                <div className="mt-4 flex justify-center">
                    <div className="h-1 w-16 bg-yellow"></div>
                </div>
            </div>

            {/* Projects list */}
            <div className="space-y-8 md:space-y-12">
                {projectsData.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                        imageRight={project.imageRight}
                        viewProjectLink="#"
                    />
                ))}
            </div>
        </section>
    );
}

export default Projects;

