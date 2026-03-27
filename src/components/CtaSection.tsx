import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function CtaSection() {
  return (
    <section className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent-purple/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <div className="bg-card border border-border rounded-3xl p-12 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent-purple/5" />
            
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground tracking-tight mb-6">
                Let's grow your brand
              </h2>
              <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
                Ready to scale? Book a free discovery call and let's build a strategy that delivers.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-full text-lg hover:opacity-90 transition-opacity group"
              >
                Book a Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
