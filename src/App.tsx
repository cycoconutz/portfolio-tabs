import { useLayoutEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { TabSpine } from './components/TabSpine'
import { IndexPage } from './pages/IndexPage'
import { ProjectPage } from './pages/ProjectPage'
import { projects } from './data/projects'
import { TransitionProvider } from './transitions/TransitionProvider'

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

function Shell() {
  const { pathname } = useLocation()
  const meta = metaFor(pathname)

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = meta.theme
    document.title = meta.title
    const description = document.querySelector('meta[name="description"]')
    if (description) description.setAttribute('content', meta.description)
  }, [meta.theme, meta.title, meta.description])

  return (
    <div className="app">
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
  return (
    <BrowserRouter basename="/portfolio-tabs">
      <TransitionProvider>
        <Shell />
      </TransitionProvider>
    </BrowserRouter>
  )
}
