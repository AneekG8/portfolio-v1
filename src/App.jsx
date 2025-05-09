import Hero from './sections/Hero'
import ShowCase from './sections/ShowCase'
import Navbar from './components/Navbar'
import FeatureCards from './sections/FeatureCards'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <ShowCase />
      <FeatureCards />
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App