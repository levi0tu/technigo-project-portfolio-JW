import data from "./data.json"
import { Hero } from "./Hero"
import { Tech } from "./Tech"
import { FeaturedProjects } from "./FeaturedProjects"
import { Words } from "./Words"
import { Skills } from "./Skills"
import { Contact } from "./Contact"

export const App = () => {
  return (
    <main>
      <Hero />
      <Tech />
      <FeaturedProjects projects={data.projects} />
      <Words />
      <Skills />
      <Contact />
    </main >
  )
}