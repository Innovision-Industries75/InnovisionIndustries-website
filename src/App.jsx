import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Products from './components/Products.jsx'
import Quality from './components/Quality.jsx'
import Partners from './components/Partners.jsx'
import News from './components/News.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="font-body">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Quality />
        <Partners />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
