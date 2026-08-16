import './App.css'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToSection } from './utils/scroll'
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
  const location = useLocation();

  useEffect(() => {
    const target = location.state?.scrollTo;
    if (!target) return;
    requestAnimationFrame(() => scrollToSection(target));
    window.history.replaceState({}, document.title);
  }, [location]);

  return (
    <>
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
