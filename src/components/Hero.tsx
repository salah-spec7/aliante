import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover opacity-20"
          style={{ filter: 'brightness(0.6) contrast(1.05)' }}
          onError={(e) => {
            console.log('Video loading error:', e);
          }}
        >
          <source src="/aliante-hero-bg.mov" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background/70" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-primary font-semibold text-sm tracking-widest uppercase mb-6"
            >
              Founder-Led Marketing Agency
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight text-foreground mb-8"
            >
              Creative Productions
              <br />
              That Drive{' '}
              <span className="text-primary">Results</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-foreground/70 max-w-xl mx-auto mb-10 leading-relaxed"
            >
              Helping brands grow through data-driven campaigns and premium design.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center justify-center gap-4"
            >
              <Link
                to="/contact"
                className="inline-block bg-primary text-white font-semibold px-8 py-4 rounded-full text-lg hover:opacity-90 transition-opacity"
              >
                Book a Call
              </Link>
              <Link
                to="/services"
                className="inline-block border border-foreground/30 text-foreground font-semibold px-8 py-4 rounded-full text-lg hover:bg-foreground/10 transition-colors"
              >
                Our Services
              </Link>
            </motion.div>
          </div>
    </section>
  );
}
