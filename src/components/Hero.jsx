import { motion } from 'framer-motion'
import { ArrowDownRight } from 'lucide-react'
import './Hero.css'

const heroImage =
  'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1800&q=80'

export default function Hero() {
  return (
    <section className="hero" id="top" aria-label="Luxecart hero">
      <div className="hero__media" aria-hidden="true">
        <motion.img
          src={heroImage}
          alt=""
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="hero__veil" />
      </div>

      <div className="hero__content container">
        <motion.p
          className="hero__brand"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          Luxecart
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          Clothes with presence.
        </motion.h1>

        <motion.p
          className="hero__lead"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
        >
          Contemporary cuts and quiet luxury for everyday statements.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <a className="btn btn-primary" href="#shop">
            Shop the edit
            <ArrowDownRight size={18} strokeWidth={2.4} />
          </a>
          <a className="btn btn-ghost" href="#lookbook">
            View lookbook
          </a>
        </motion.div>
      </div>
    </section>
  )
}
