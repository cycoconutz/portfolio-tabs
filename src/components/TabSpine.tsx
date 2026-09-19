import { useLocation } from 'react-router-dom'
import { projects } from '../data/projects'
import { wipeNames } from '../transitions/wipes'
import { TransitionLink } from './TransitionLink'

export function TabSpine() {
  const { pathname } = useLocation()
  const activeSlug = pathname.startsWith('/work/') ? pathname.split('/')[2] : ''

  return (
    <nav className="spine" aria-label="Projects">
      <TransitionLink
        to="/"
        transition={{ wipe: 'bloom', theme: 'hub' }}
        className={`spine-brand${activeSlug === '' ? ' is-active' : ''}`}
      >
        <span className="spine-brand-mark">JY</span>
        <span className="spine-brand-name">John Yates</span>
      </TransitionLink>

      <ol className="spine-list">
        {projects.map((project) => (
          <li key={project.slug}>
            <TransitionLink
              to={`/work/${project.slug}`}
              transition={{ wipe: project.wipe, theme: project.theme }}
              className={`spine-item${activeSlug === project.slug ? ' is-active' : ''}`}
            >
              <span className="spine-num">{project.index}</span>
              <span className="spine-body">
                <span className="spine-name">{project.name}</span>
                <span className="spine-wipe">{wipeNames[project.wipe]}</span>
              </span>
            </TransitionLink>
          </li>
        ))}
      </ol>

      <div className="spine-foot">
        <a className="spine-link" href="https://github.com/cycoconutz" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a className="spine-link" href="https://www.linkedin.com/in/danny-yates/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </nav>
  )
}
