import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Capabilities from './components/Capabilities.jsx'
import Process from './components/Process.jsx'
import Quality from './components/Quality.jsx'
import Projects from './components/Projects.jsx'
import News from './components/News.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="font-body">
      <Navbar />
      <main>
        <Hero />
        <Capabilities />
        <Process />
        <Quality />
        <Projects />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
