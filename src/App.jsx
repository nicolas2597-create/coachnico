import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Problem } from './components/sections/Problem'
import { Services } from './components/sections/Services'
import { About } from './components/sections/About'
import { Methodology } from './components/sections/Methodology'
import { Contact } from './components/sections/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Problem />
      <Services />
      <About />
      <Methodology />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
