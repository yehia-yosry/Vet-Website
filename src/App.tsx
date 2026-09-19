import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import { LoadingState } from './components/common/States'
import { Layout } from './components/layout/Layout'
import { HomePage } from './pages/HomePage'

// Inner pages are split into their own chunks so the home page stays light.
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const ArticlePage = lazy(() => import('./pages/ArticlePage'))
const GalleryPage = lazy(() => import('./pages/GalleryPage'))
const TeamPage = lazy(() => import('./pages/TeamPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingState />}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="blog/:slug" element={<ArticlePage />} />
            <Route path="gallery" element={<GalleryPage />} />
            <Route path="team" element={<TeamPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
