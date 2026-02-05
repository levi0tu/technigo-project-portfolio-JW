export const Project = ({ project }) => {
    const { name, description, image, tags, netlify, github } = project;

    return (
        <article className="project">
            <h2>{name}</h2>
            {image && <img src={image} alt={`${name} screenshot`} />}
            <ul className="tags">
                {tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                ))}
            </ul>
            <div className="links">
                <a href={netlify} target="_blank" rel="noreferrer">Live</a>
                <a href={github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
        </article>
    )
}