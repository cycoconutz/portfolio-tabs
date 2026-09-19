import { projects } from '../data/projects'
import { TransitionLink } from '../components/TransitionLink'

export function IndexPage() {
  return (
    <main className="index-page">
      <header className="index-hero">
        <p className="eyebrow">Project catalog</p>
        <h1 className="index-title">
          The Catalog
        </h1>
        <p className="index-lede">
          Five builds, five identities. Every project below gets its own design language and its
          own way of arriving on screen. Pick a tab and watch the page turn.
        </p>
      </header>

      <section className="tile-grid" aria-label="Projects">
        {projects.map((project) => (
          <TransitionLink
            key={project.slug}
            to={`/work/${project.slug}`}
            transition={{ wipe: project.wipe, theme: project.theme }}
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
          </TransitionLink>
        ))}
      </section>

      <footer className="index-foot">
        <a href="https://www.johndyates.com">The full portfolio</a>
        <span>Built with React, one theme per tab.</span>
      </footer>
    </main>
  )
}
