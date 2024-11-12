
import './App.css'
import Contact from './Contact'
import Hero from './hero'
import Project from './Project'
import Skills from './Skills'
import Footer from './footer/footer'
function App() {
  return (
    <section className='appcontainer'>
    <Hero/>
    <Project/>
    <Skills/>
    <Contact/>
    <Footer/>
    </section>
  )
}

export default App
