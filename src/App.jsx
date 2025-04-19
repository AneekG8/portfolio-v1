import Hero from './sections/Hero'
import ShowCase from './sections/ShowCase'
import Navbar from './components/Navbar'
import FeatureCards from './sections/FeatureCards'
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowCase />
      <FeatureCards />
    </>
  )
}

export default App