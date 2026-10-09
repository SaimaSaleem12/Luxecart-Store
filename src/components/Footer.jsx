import { useState } from 'react'
import { motion } from 'framer-motion'
import './Footer.css'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!email.trim()) return
    setDone(true)
    setEmail('')
  }

  return (
    <footer className="footer" id="contact">
      <div className="container footer__grid">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="footer__brand">Luxecart</p>
          <p className="footer__tag">Contemporary clothing for the uncompromising.</p>
        </motion.div>

        <motion.form
          className="footer__form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <label htmlFor="newsletter">Join the list</label>
          <div className="footer__field">
            <input
              id="newsletter"
              type="email"
              placeholder="you@email.com"
              value={email}
              onChange={(e) => {
                setDone(false)
                setEmail(e.target.value)
              }}
              required
            />
            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
          </div>
          {done ? <p className="footer__note">You&apos;re on the list — demo only.</p> : null}
        </motion.form>
      </div>

      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} Luxecart Store</p>
        <div className="footer__links">
          <a href="#shop">Shop</a>
          <a href="#lookbook">Lookbook</a>
          <a href="#collection">Collection</a>
        </div>
      </div>
    </footer>
  )
}
