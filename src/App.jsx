import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ShopByCategory } from './components/ShopByCategory'
import ShopByOccasion from './components/ShopByOccasion'
import CakeBuilder from './components/CakeBuilder'
import Bestsellers from './components/Bestsellers'
import { CakeMarquee } from './components/CakeMarquee'
import { CakeShowcase } from './components/CakeShowcase'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'
import RawFlavorBanner from "./components/RawFlavorBanner";

function App() {

  return (
    <>
     <Navbar/>
     <Hero/>
     <ShopByCategory/>
     <ShopByOccasion/>
     <CakeBuilder/>
     <Bestsellers/>
     <CakeMarquee/>
     <CakeShowcase/>
     <Testimonials/>
     <RawFlavorBanner/>
     <Footer/>
    </>
  )
}

export default App
