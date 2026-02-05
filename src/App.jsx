import data from "./data.json"
import { Project } from "./Project"

export const App = () => {
  return (
    <main>
      <h1>My Portfolio</h1>
      <section className="projects">
        {data.projects.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </section>
    </main >
  )
}