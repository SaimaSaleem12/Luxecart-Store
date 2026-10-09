import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { categories, products } from '../data/products'
import { useCart } from '../context/CartContext'
import './ProductGrid.css'

function formatPrice(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value)
}

function ProductTile({ product }) {
  const { addItem } = useCart()
  const [size, setSize] = useState(product.sizes[1] ?? product.sizes[0])
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    addItem(product, size)
    setAdded(true)
    window.setTimeout(() => setAdded(false), 1200)
  }

  return (
    <article className="product">
      <div className="product__media">
        <img src={product.image} alt={product.name} loading="lazy" />
        {product.tag ? <span className="product__tag">{product.tag}</span> : null}
      </div>

      <div className="product__body">
        <div className="product__top">
          <h3>{product.name}</h3>
          <p>{formatPrice(product.price)}</p>
        </div>

        <div className="product__sizes" role="group" aria-label={`Sizes for ${product.name}`}>
          {product.sizes.map((option) => (
            <button
              key={option}
              type="button"
              className={option === size ? 'is-active' : undefined}
              onClick={() => setSize(option)}
            >
              {option}
            </button>
          ))}
        </div>

        <button type="button" className="product__add" onClick={handleAdd}>
          <Plus size={16} strokeWidth={2.5} />
          {added ? 'Added' : 'Add to bag'}
        </button>
      </div>
    </article>
  )
}

export default function ProductGrid() {
  const [active, setActive] = useState('All')
  const filtered =
    active === 'All' ? products : products.filter((item) => item.category === active)

  return (
    <section className="section shop" id="shop">
      <div className="container">
        <motion.div
          className="shop__intro"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-label">Shop</span>
          <h2 className="section-title">Pieces worth returning to.</h2>
          <p className="section-copy">
            Select a size and add to bag — your cart stays on this device.
          </p>
        </motion.div>

        <div className="shop__filters" role="tablist" aria-label="Filter by category">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={active === category}
              className={active === category ? 'is-active' : undefined}
              onClick={() => setActive(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div className="shop__grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProductTile product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
