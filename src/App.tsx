import { useLayoutEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { TabSpine } from './components/TabSpine'
import { BubblyToggle } from './components/BubblyToggle'
import { IndexPage } from './pages/IndexPage'
import { ProjectPage } from './pages/ProjectPage'
import { projects } from './data/projects'
import { TransitionProvider } from './transitions/TransitionProvider'

const BUBBLY_KEY = 'catalog-bubbly'

const fallback = {
  theme: 'hub',
  title: 'Project Catalog — Selected Work',
  description:
    'A catalog of web projects, each built with its own design language and its own way of arriving on screen.',
}

function metaFor(pathname: string) {
  if (pathname.startsWith('/work/')) {
    const slug = pathname.split('/')[2]
    const project = projects.find((entry) => entry.slug === slug)
    if (project) {
      return {
        theme: project.theme,
        title: `${project.name} — Project Catalog`,
        description: project.tagline,
      }
    }
  }
  return fallback
}

function Shell({
  bubbly,
  onToggleBubbly,
}: {
  bubbly: boolean
  onToggleBubbly: () => void
}) {
  const { pathname } = useLocation()
  const meta = metaFor(pathname)
  const theme = bubbly ? 'bubbly' : meta.theme

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme
    document.title = meta.title
    const description = document.querySelector('meta[name="description"]')
    if (description) description.setAttribute('content', meta.description)
  }, [theme, meta.title, meta.description])

  return (
    <div className="app">
      <BubblyToggle active={bubbly} onToggle={onToggleBubbly} />
      <TabSpine />
      <div className="stage">
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/work/:slug" element={<ProjectPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  )
}

export default function App() {
  const [bubbly, setBubbly] = useState<boolean>(() => {
    try {
      return localStorage.getItem(BUBBLY_KEY) === '1'
    } catch {
      return false
    }
  })

  const toggleBubbly = () => {
    setBubbly((current) => {
      const next = !current
      try {
        localStorage.setItem(BUBBLY_KEY, next ? '1' : '0')
      } catch {
        /* storage unavailable */
      }
      return next
    })
  }

  return (
    <BrowserRouter basename="/portfolio-tabs">
      <TransitionProvider forcedTheme={bubbly ? 'bubbly' : null}>
        <Shell bubbly={bubbly} onToggleBubbly={toggleBubbly} />
      </TransitionProvider>
    </BrowserRouter>
  )
}
