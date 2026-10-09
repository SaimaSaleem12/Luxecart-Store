import { motion } from 'framer-motion'
import { lookbook } from '../data/products'
import './Lookbook.css'

export default function Lookbook() {
  return (
    <section className="section lookbook" id="lookbook">
      <div className="container">
        <motion.div
          className="lookbook__intro"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-label">Lookbook</span>
          <h2 className="section-title">How Luxecart moves.</h2>
          <p className="section-copy">
            Editorial frames from the current season — styled for real clothes, real life.
          </p>
        </motion.div>

        <div className="lookbook__grid">
          {lookbook.map((shot, index) => (
            <motion.figure
              key={shot.id}
              className={`lookbook__shot lookbook__shot--${index + 1}`}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <img src={shot.image} alt={shot.title} loading="lazy" />
              <figcaption>{shot.title}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
