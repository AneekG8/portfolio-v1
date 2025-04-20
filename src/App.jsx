import Hero from './sections/Hero'
import ShowCase from './sections/ShowCase'
import Navbar from './components/Navbar'
import FeatureCards from './sections/FeatureCards'
import Experience from './sections/Experience'
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowCase />
      <FeatureCards />
      <Experience />
    </>
  )
}

export default App