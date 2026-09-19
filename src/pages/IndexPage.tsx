import { projects } from '../data/projects'
import { wipeNames } from '../transitions/wipes'
import { TransitionLink } from '../components/TransitionLink'

export function IndexPage() {
  return (
    <main className="index-page">
      <header className="index-hero">
        <p className="eyebrow">Portfolio / Full-stack web developer</p>
        <h1 className="index-title">
          John Yates
        </h1>
        <p className="index-lede">
          Five projects, five identities. Every build below gets its own design language and its
          own way of arriving on screen. Pick a tab and watch the page turn.
        </p>
      </header>

      <section className="tile-grid" aria-label="Projects">
        {projects.map((project) => (
          <TransitionLink
            key={project.slug}
            to={`/work/${project.slug}`}
            transition={{ wipe: project.wipe, theme: project.theme, label: project.name }}
            className="tile"
          >
            <span className="tile-index">{project.index}</span>
            <span className="tile-tag">{project.tag}</span>
            <h2 className="tile-name">{project.name}</h2>
            <p className="tile-tagline">{project.tagline}</p>
            <ul className="tile-tech">
              {project.tech.slice(0, 3).map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            <span className="tile-wipe">▸ {wipeNames[project.wipe]}</span>
          </TransitionLink>
        ))}
      </section>

      <footer className="index-foot">
        <a href="mailto:johndyates@gmail.com">johndyates@gmail.com</a>
        <span>Built with React, one theme per tab.</span>
      </footer>
    </main>
  )
}
