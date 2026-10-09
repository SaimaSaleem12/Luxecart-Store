import { motion } from 'framer-motion'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext'
import './Navbar.css'

const links = [
  { href: '#collection', label: 'Collection' },
  { href: '#shop', label: 'Shop' },
  { href: '#lookbook', label: 'Lookbook' },
]

export default function Navbar() {
  const { count, openCart } = useCart()

  return (
    <motion.header
      className="nav"
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="nav__inner container">
        <a href="#top" className="nav__brand" aria-label="Luxecart home">
          Luxecart Store
        </a>

        <nav className="nav__links" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <button className="nav__cart" onClick={openCart} aria-label="Open cart">
          <ShoppingBag size={18} strokeWidth={2.2} />
          <span>Bag</span>
          <span className="nav__count">{count}</span>
        </button>
      </div>
    </motion.header>
  )
}
