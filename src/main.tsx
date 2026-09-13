// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/globals.css'

// The comparison is available only in development, outside the public router.
// Vite removes this branch and its assets from the production build.
async function bootstrap() {
  const { default: Page } = import.meta.env.DEV && window.location.pathname === '/designs'
    ? await import('./design/DesignGallery.tsx')
    : import.meta.env.DEV && window.location.pathname === '/design-study'
    ? await import('./design/TypeStudy.tsx')
    : await import('./App.tsx')

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Page />
    </React.StrictMode>,
  )
}

void bootstrap()
