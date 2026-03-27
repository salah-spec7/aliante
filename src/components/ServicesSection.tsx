import { motion } from 'framer-motion';
import { BarChart3, Users, FileText, Activity } from 'lucide-react';

const services = [
  {
    icon: BarChart3,
    title: 'Paid Ads & Performance Marketing',
    description: 'Data-driven ad campaigns across Google, Meta, and TikTok that maximize your ROI and scale profitably.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&auto=format',
  },
  {
    icon: Users,
    title: 'Social Media Growth',
    description: 'Strategic organic and paid social media management that builds engaged communities around your brand.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=250&fit=crop&auto=format',
  },
  {
    icon: FileText,
    title: 'Content Strategy',
    description: 'Premium content creation and editorial planning that positions your brand as an industry leader.',
    image: 'https://images.unsplash.com/photo-1542435503-956c469947f6?w=400&h=250&fit=crop&auto=format',
  },
  {
    icon: Activity,
    title: 'Tracking & Analytics',
    description: 'Full-funnel tracking setup with custom dashboards so you always know what\'s driving results.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&auto=format',
  },
];

export function ServicesSection() {
  return (
    <section className="py-28 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-purple/5 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-4">What We Do</p>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground tracking-tight mb-4">
            Services built for growth
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We combine strategy, creativity, and data to deliver marketing that actually moves the needle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all group hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  style={{ filter: 'brightness(0.7) contrast(1.1)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <service.icon className="w-10 h-10 text-primary" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
