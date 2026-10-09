import { motion } from 'framer-motion'
import './Collection.css'

const seasons = [
  {
    title: 'Outerwear',
    copy: 'Structured coats built for sharp silhouettes.',
    image:
      'https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=1000&q=80',
    href: '#shop',
  },
  {
    title: 'Essentials',
    copy: 'Refined basics that hold their shape and story.',
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=80',
    href: '#shop',
  },
  {
    title: 'Knitwear',
    copy: 'Soft layers with a quiet, expensive hand-feel.',
    image:
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=1000&q=80',
    href: '#shop',
  },
]

export default function Collection() {
  return (
    <section className="section collection" id="collection">
      <div className="container">
        <motion.div
          className="collection__intro"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-label">Fall edit</span>
          <h2 className="section-title">Three ways to dress the season.</h2>
          <p className="section-copy">
            A focused lineup of outerwear, essentials, and knit layers.
          </p>
        </motion.div>

        <div className="collection__grid">
          {seasons.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.href}
              className="collection__item"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.75,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="collection__image">
                <img src={item.image} alt="" loading="lazy" />
              </div>
              <div className="collection__meta">
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
