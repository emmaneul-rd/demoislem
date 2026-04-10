import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Languages from './components/Languages'
import EnglishCourse from './components/EnglishCourse'
import ProgramDuration from './components/ProgramDuration'
import Location from './components/Location'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Languages />
        <EnglishCourse />
        <ProgramDuration />
        <Location />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
