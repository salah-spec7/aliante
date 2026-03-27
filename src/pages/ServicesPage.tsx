import { motion } from 'framer-motion';
import { BarChart3, Users, FileText, Activity, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: BarChart3,
    title: 'Paid Ads & Performance Marketing',
    description: 'We build, manage, and optimize paid campaigns across Google, Meta, TikTok, and LinkedIn — focused on measurable results and profitable scaling.',
    benefits: ['Full-funnel campaign management', 'Creative testing & iteration', 'Transparent reporting & optimization', 'Cross-platform budget allocation'],
  },
  {
    icon: Users,
    title: 'Social Media Growth',
    description: 'Strategic organic and paid social media management that grows your audience, builds trust, and turns followers into customers.',
    benefits: ['Content calendar & planning', 'Community management', 'Influencer partnerships', 'Platform-specific strategy'],
  },
  {
    icon: FileText,
    title: 'Content Strategy',
    description: 'Premium content creation and editorial planning designed to position your brand as a thought leader and drive organic traffic.',
    benefits: ['Brand voice development', 'Blog & editorial content', 'Video & visual content', 'SEO-optimized copywriting'],
  },
  {
    icon: Activity,
    title: 'Tracking & Analytics',
    description: 'Comprehensive tracking infrastructure and custom dashboards that give you complete visibility into what\'s driving results.',
    benefits: ['Pixel & conversion setup', 'Attribution modeling', 'Custom dashboards', 'Monthly performance reviews'],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background pt-28 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-4">Our Services</p>
          <h1 className="text-5xl sm:text-6xl font-black text-foreground tracking-tight mb-6">
            Everything you need to scale
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            We offer a full suite of marketing services designed to take your brand from where it is to where it needs to be.
          </p>
        </motion.div>

        <div className="space-y-12">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card border border-border rounded-2xl p-8 md:p-10"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <service.icon className="w-10 h-10 text-primary mb-4" />
                  <h2 className="text-2xl font-bold text-foreground mb-3">{service.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
                <div className="md:w-72 space-y-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">What's included</p>
                  {service.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-full text-lg hover:opacity-90 transition-opacity"
          >
            Get Started <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}