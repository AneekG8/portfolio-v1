import Hero from './sections/Hero'
import ShowCase from './sections/ShowCase'
import Navbar from './components/Navbar'
import FeatureCards from './sections/FeatureCards'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowCase />
      <FeatureCards />
      <Experience />
      <Skills/>
      <Contact/>
    </>
  )
}

export default App