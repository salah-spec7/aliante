import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { usePortfolio } from '@/hooks/usePortfolio';

export function FeaturedWork() {
  const { projects, loading, error } = usePortfolio();
  const sampleProjects = [
    {
      id: '1',
      title: 'Hampton Brand Campaign',
      category: 'Commercial',
      description: 'A powerful commercial exploring startup founder isolation and community building through authentic storytelling.',
      image: '/aliante/assets/portfolio/hampton-portfolio.jpg',
      type: 'collaboration',
      collaboration_partner: 'Hampton',
      digital_partner: 'ContentLab',
      tags: ['commercial', 'brand', 'startup', 'video']
    },
    {
      id: '2',
      title: 'Tech Startup Rebrand',
      category: 'Branding',
      description: 'Complete brand identity redesign for a fintech startup including logo, guidelines, and marketing materials.',
      image: '/aliante/assets/portfolio/rebrand-portfolio.jpg',
      type: 'original',
      collaboration_partner: null,
      digital_partner: null,
      tags: ['branding', 'logo', 'design', 'fintech']
    },
    {
      id: '3',
      title: 'E-commerce Platform',
      category: 'Web Development',
      description: 'Full-stack e-commerce solution with modern UI/UX and seamless payment integration.',
      image: '/aliante/assets/portfolio/ecommerce-portfolio.jpg',
      type: 'original',
      collaboration_partner: null,
      digital_partner: null,
      tags: ['web', 'ecommerce', 'react', 'nodejs']
    },
    {
      id: '4',
      title: 'Agrovan Real Estate',
      category: 'COMMERCIAL',
      description: 'Premium real estate marketing campaign targeting luxury property buyers with compelling visual storytelling.',
      image: '/aliante/assets/portfolio/agrovan-portfolio.jpg',
      type: 'collaboration',
      collaboration_partner: 'Sage Sparrows',
      digital_partner: null,
      tags: ['commercial', 'real estate', 'luxury', 'marketing']
    },
    {
      id: '5',
      title: 'Tech Startup Summit',
      category: 'ENTERTAINMENT',
      description: 'Major tech conference sponsorship with keynote presentations and workshop series.',
      image: '/aliante/assets/portfolio/summit-portfolio.jpg',
      type: 'collaboration',
      collaboration_partner: 'TechCrunch',
      digital_partner: null,
      tags: ['tech', 'conference', 'summit', 'keynote', 'workshop']
    }
  ];

  // Force use of sampleProjects instead of hook data
  const projectsToDisplay = sampleProjects;

  if (error) {
    console.error('Failed to load portfolio:', error);
  }

  return (
    <section className="py-28 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-4">Portfolio</p>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground tracking-tight">
            Featured work
          </h2>
        </div>

        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="relative aspect-[4/3] bg-card border border-border rounded-2xl mb-5 h-48" />
                <div className="h-4 bg-card rounded mb-2" />
                <div className="h-4 bg-card rounded w-2/3" />
              </div>
            ))}
          </div>
        )}

        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectsToDisplay.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] bg-card border border-border rounded-2xl mb-5 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    style={{ filter: 'brightness(0.8) contrast(1.05)' }}
                    onLoad={() => console.log(`Image loaded: ${project.title}`)}
                    onError={(e) => console.error(`Image failed to load: ${project.title}`, e)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 right-4 w-10 h-10 bg-foreground/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-5 h-5 text-foreground" />
                  </div>
                </div>
                <p className="text-primary text-xs font-semibold tracking-wider uppercase mb-2">{project.category}</p>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
