import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import cakeLogo from './assets/cakeLogo.png'
import './index.css'

const favicon = document.querySelector("link[rel='icon']")
if (favicon) favicon.href = cakeLogo
import App from './App.jsx'
import { CartProvider } from './context/CartContext.jsx'
import CartPage from './components/CartPage.jsx'
import CakeDetail from './components/CakeDetail.jsx'
import ClassicCakes from './components/pages/ClassicCakes.jsx'
import { Navbar } from './components/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
           <Navbar/>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/cake/:id" element={<CakeDetail />} />
          <Route path="/category/classic-cakes" element={<ClassicCakes />} />
          <Route path="/category/gourmet-cakes" element={<ClassicCakes />} />
          <Route path="/category/theme-cakes" element={<ClassicCakes />} />
          <Route path="/category/desserts" element={<ClassicCakes />} />
          <Route path="/category/cookies" element={<ClassicCakes />} />
          <Route path="/category/hampers" element={<ClassicCakes />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
)
