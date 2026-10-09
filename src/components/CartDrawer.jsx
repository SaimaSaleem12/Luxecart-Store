import { AnimatePresence, motion } from 'framer-motion'
import { Minus, Plus, X } from 'lucide-react'
import { useCart } from '../context/CartContext'
import './CartDrawer.css'

function formatPrice(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value)
}

export default function CartDrawer() {
  const { items, total, isOpen, closeCart, updateQty, removeItem, clearCart } = useCart()

  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          <motion.button
            type="button"
            className="cart-backdrop"
            aria-label="Close cart"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />

          <motion.aside
            className="cart"
            role="dialog"
            aria-modal="true"
            aria-label="Shopping bag"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="cart__head">
              <h2>Your bag</h2>
              <button type="button" onClick={closeCart} aria-label="Close">
                <X size={20} strokeWidth={2.2} />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="cart__empty">
                <p>Your bag is empty.</p>
                <button type="button" className="btn btn-primary" onClick={closeCart}>
                  Continue shopping
                </button>
              </div>
            ) : (
              <>
                <ul className="cart__list">
                  {items.map((item) => (
                    <li key={`${item.id}-${item.size}`} className="cart__item">
                      <img src={item.image} alt="" />
                      <div className="cart__meta">
                        <div className="cart__row">
                          <h3>{item.name}</h3>
                          <p>{formatPrice(item.price * item.qty)}</p>
                        </div>
                        <p className="cart__size">Size {item.size}</p>
                        <div className="cart__controls">
                          <div className="cart__qty">
                            <button
                              type="button"
                              aria-label="Decrease quantity"
                              onClick={() => updateQty(item.id, item.size, item.qty - 1)}
                            >
                              <Minus size={14} />
                            </button>
                            <span>{item.qty}</span>
                            <button
                              type="button"
                              aria-label="Increase quantity"
                              onClick={() => updateQty(item.id, item.size, item.qty + 1)}
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <button
                            type="button"
                            className="cart__remove"
                            onClick={() => removeItem(item.id, item.size)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="cart__footer">
                  <div className="cart__total">
                    <span>Subtotal</span>
                    <strong>{formatPrice(total)}</strong>
                  </div>
                  <button type="button" className="btn btn-primary cart__checkout">
                    Checkout — demo only
                  </button>
                  <button type="button" className="cart__clear" onClick={clearCart}>
                    Clear bag
                  </button>
                </div>
              </>
            )}
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  )
}
