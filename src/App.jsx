import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Showcase from './components/Showcase.jsx'
import CoverflowSection from './components/CoverflowSection'
import Notes from './components/Notes.jsx'
import Testimonial from './components/Testimonial.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="bg-cream text-ink">
      <Nav />
      <main>
        <Hero />
        <About />
        <Showcase />
        <CoverflowSection />
        <Notes />
        <Testimonial />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}