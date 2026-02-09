import { Project } from "./Project"

export const FeaturedProjects = ({ projects }) => {
    return (
        <section className="featured">
            <div className="featured-inner">
                <div className="featured-title">
                    <h1>Featured Projects</h1>
                </div>
                <div className="projects">
                    {projects.map((project) => (
                        <Project key={project.name} project={project} />
                    ))}
                </div >
            </div>
        </section>
    )
}