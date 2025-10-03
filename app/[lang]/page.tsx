import Header from "../../components/Header"
import Hero from "../../components/Hero"
import Problems from "../../components/Problems"
import Services from "../../components/Services"
import Process from "../../components/Process"
import Testimonials from "../../components/Testimonials"
import About from "../../components/About"
import Pricing from "../../components/Pricing"
import FAQ from "../../components/FAQ"
import Booking from "../../components/Booking"
import Footer from "../../components/Footer"

export default function HomePage({ params }: { params: { lang: string } }) {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Problems />
      <Services />
      <Process />
      <Testimonials />
      <About />
      <Pricing />
      <FAQ />
      <Booking />
      <Footer />
    </div>
  )
}