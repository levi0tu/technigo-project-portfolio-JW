export const Project = ({ project }) => {
    const { name, description, image, tags, netlify, github } = project

    return (
        <article className="project">
            <img className="project-img" src={image} alt={`${name} screenshot`} />
            <div className="project-content">
                <h3>{name}</h3>
                <p className="project-desc">{description}</p>
                <ul className="tags">
                    {tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                    ))}
                </ul>

                <div className="links">
                    <a className="btn btn-live" href={netlify} target="_blank" rel="noreferrer">Live demo</a>
                    <a className="btn btn-view" href={github} target="_blank" rel="noreferrer">View the code</a>
                </div>
            </div>
        </article>
    )
}
