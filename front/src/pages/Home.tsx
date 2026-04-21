import Navbar from '../sections/Navbar'
import Hero from '../sections/Hero'
import ComoFunciona from '../sections/ComoFunciona'
import Servicios from '../sections/Servicios'
import Planes from '../sections/Planes'
import Testimonios from '../sections/Testimonios'
import FAQ from '../sections/FAQ'
import Contacto from '../sections/Contacto'
import Footer from '../sections/Footer'
import WhatsAppButton from '../sections/WhatsAppButton'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <ComoFunciona />
        <Servicios />
        <Planes />
        <Testimonios />
        <FAQ />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
