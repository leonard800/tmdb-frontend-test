import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar.tsx'
import NowPlaying from './components/NowPlaying.tsx'
import TopRated from './components/TopRated.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <NowPlaying />
    <TopRated />
  </StrictMode>,
)
