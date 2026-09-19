import { Navigate, useParams } from 'react-router-dom'
import { projects } from '../data/projects'
import { wipeNames } from '../transitions/wipes'
import { TransitionLink } from '../components/TransitionLink'

export function ProjectPage() {
  const { slug } = useParams()
  const index = projects.findIndex((project) => project.slug === slug)

  if (index === -1) return <Navigate to="/" replace />

  const project = projects[index]
  const next = projects[(index + 1) % projects.length]

  return (
    <main className="project-page" data-project={project.slug}>
      <div className="flourish" aria-hidden="true" />

      <header className="project-hero">
        <p className="eyebrow">
          {project.tag} — {project.year}
        </p>
        <h1 className="project-name">{project.name}</h1>
        <p className="project-tagline">{project.tagline}</p>

        <ul className="tech-list">
          {project.tech.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <div className="project-actions">
          {project.links.map((link) => (
            <a
              key={link.href}
              className={`action action-${link.kind}`}
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </header>

      <section className="project-body">
        <div className="project-copy">
          <p className="section-kicker">Overview</p>
          <p className="project-description">{project.description}</p>
        </div>

        <aside className="project-meta">
          <div className="meta-row">
            <span>Role</span>
            <strong>{project.role}</strong>
          </div>
          <div className="meta-row">
            <span>Year</span>
            <strong>{project.year}</strong>
          </div>
          <div className="meta-row">
            <span>Transition</span>
            <strong>{wipeNames[project.wipe]}</strong>
          </div>
        </aside>
      </section>

      <section className="project-highlights">
        <p className="section-kicker">Highlights</p>
        <ul>
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </section>

      <TransitionLink
        to={`/work/${next.slug}`}
        transition={{ wipe: next.wipe, theme: next.theme, label: next.name }}
        className="next-project"
      >
        <span className="next-label">Next project</span>
        <strong className="next-name">{next.name}</strong>
        <span className="next-wipe">{wipeNames[next.wipe]} ↗</span>
      </TransitionLink>
    </main>
  )
}
