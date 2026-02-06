import { Project } from "./Project"

export const FeaturedProjects = ({ projects }) => {
    return (
        <section className="featured">
            <h1>Featured Projects</h1>
            <div className="projects">
                {projects.map((project) => (
                    <Project key={project.name} project={project} />
                ))}
            </div >
        </section>
    )
}