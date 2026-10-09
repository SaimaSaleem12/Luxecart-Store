import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Collection from './components/Collection'
import ProductGrid from './components/ProductGrid'
import Lookbook from './components/Lookbook'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'

export default function App() {
  return (
    <CartProvider>
      <div className="app">
        <Navbar />
        <main>
          <Hero />
          <Collection />
          <ProductGrid />
          <Lookbook />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
