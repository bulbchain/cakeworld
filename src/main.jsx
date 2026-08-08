import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './context/CartContext.jsx'
import CartPage from './components/CartPage.jsx'
import CakeDetail from './components/CakeDetail.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/cake/:id" element={<CakeDetail />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
)
