import Hero from './sections/Hero'
import ShowCase from './sections/ShowCase'
import Navbar from './components/Navbar'
import FeatureCards from './sections/FeatureCards'
import ExperienceSection from './sections/ExperienceSection'
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowCase />
      <FeatureCards />
      <ExperienceSection />
    </>
  )
}

export default App