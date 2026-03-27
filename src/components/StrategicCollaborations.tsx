'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { usePortfolioProjects } from '@/hooks/usePortfolioProjects'

export function StrategicCollaborations({ loading = false }: { loading?: boolean }) {
  // Sample data for immediate visibility - will be replaced by database when migration runs
  const sampleProjects = [
    {
      id: '1',
      title: 'Agrovan Real Estate',
      category: 'COMMERCIAL',
      description: 'Premium real estate marketing campaign targeting luxury property buyers with compelling visual storytelling.',
      image: '/assets/projects/agrovan.jpg.jpg',
      type: 'collaboration',
      collaboration_partner: 'Sage Sparrows',
      digital_partner: null,
      tags: ['commercial', 'real estate', 'luxury', 'marketing']
    },
    {
      id: '2',
      title: 'Fox Star India',
      category: 'ENTERTAINMENT',
      description: 'Complete brand campaign for Housefull 4 & Chhichhore movie promotion with 360° marketing innovation.',
      image: '/assets/projects/foxstar.jpg.jpg',
      type: 'collaboration',
      collaboration_partner: 'Fox Star India',
      digital_partner: null,
      tags: ['entertainment', 'movie', '360°', 'innovation']
    },
    {
      id: '3',
      title: 'Playerzpot Gaming',
      category: 'GAMING',
      description: 'Multi-platform gaming experience featuring Cricket, Ludo, and Carrom with social integration.',
      image: '/assets/projects/playerzpot.jpg.jpg',
      type: 'original',
      collaboration_partner: null,
      digital_partner: null,
      tags: ['gaming', 'cricket', 'ludo', 'carrom', 'mobile']
    },
    {
      id: '4',
      title: 'Braavoking Grooming',
      category: 'LIFESTYLE',
      description: 'Premium grooming services for Worth fashion brand with modern aesthetic and quality products.',
      image: '/assets/projects/braavoking.jpg',
      type: 'collaboration',
      collaboration_partner: 'Worth',
      digital_partner: null,
      tags: ['lifestyle', 'fashion', 'grooming', 'premium']
    },
    {
      id: '5',
      title: 'Suhana Masala',
      category: 'LIFESTYLE',
      description: 'Authentic Indian cuisine brand with traditional flavors and modern packaging design.',
      image: '/assets/projects/suhana.jpg',
      type: 'original',
      collaboration_partner: null,
      digital_partner: null,
      tags: ['lifestyle', 'food', 'indian', 'cuisine', 'packaging']
    },
    {
      id: '6',
      title: 'Hampton Brand Campaign',
      category: 'Commercial',
      description: 'A powerful commercial exploring startup founder isolation and community building through authentic storytelling.',
      image: '/assets/projects/hampton.jpg',
      type: 'collaboration',
      collaboration_partner: 'Hampton',
      digital_partner: 'ContentLab',
      tags: ['commercial', 'brand', 'startup', 'video']
    },
    {
      id: '7',
      title: 'Tech Startup Rebrand',
      category: 'Branding',
      description: 'Complete brand identity redesign for a fintech startup including logo, guidelines, and marketing materials.',
      image: '/assets/projects/rebrand.jpg',
      type: 'original',
      collaboration_partner: null,
      digital_partner: null,
      tags: ['branding', 'logo', 'design', 'fintech']
    },
    {
      id: '8',
      title: 'E-commerce Platform',
      category: 'Web Development',
      description: 'Full-stack e-commerce solution with modern UI/UX and seamless payment integration.',
      image: '/assets/projects/ecommerce.jpg',
      type: 'original',
      collaboration_partner: null,
      digital_partner: null,
      tags: ['web', 'ecommerce', 'react', 'nodejs']
    },
    {
      id: '9',
      title: 'Luxury Fashion House',
      category: 'COMMERCIAL',
      description: 'Exclusive fashion brand launch with runway shows and influencer partnerships.',
      image: '/assets/projects/fashion.jpg',
      type: 'collaboration',
      collaboration_partner: 'Fashion Week',
      digital_partner: null,
      tags: ['fashion', 'luxury', 'runway', 'influencer']
    },
    {
      id: '11',
      title: 'Mobile Banking App',
      category: 'Web Development',
      description: 'Revolutionary banking application with AI-powered features and seamless user experience.',
      image: '/assets/projects/banking.jpg',
      type: 'original',
      collaboration_partner: null,
      digital_partner: null,
      tags: ['mobile', 'banking', 'fintech', 'ai', 'app']
    }
  ];

  const filteredProjects = sampleProjects

  return (
    <section id="strategic-collaborations" className="relative py-28 bg-card/30">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">
              Our Work
            </span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8 text-foreground">
            Strategic Collaborations
          </h2>

          <p className="text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Partnering with industry leaders to deliver exceptional results
          </p>
        </div>


        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
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
                
                {/* Collaboration Badge */}
                {project.collaboration_partner && (
                  <div className="absolute top-4 right-4">
                    <div className="glass-effect rounded-xl px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                      In Collaboration with {project.collaboration_partner}
                    </div>
                  </div>
                )}

                {/* Digital Partner Badge */}
                {project.digital_partner && (
                  <div className="absolute top-4 left-4">
                    <div className="bg-accent-emerald/90 backdrop-blur-sm rounded-xl px-3 py-1.5 text-xs font-bold text-white">
                      Digital Partner: {project.digital_partner}
                    </div>
                  </div>
                )}

                <div className="absolute bottom-4 right-4 w-10 h-10 bg-foreground/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-5 h-5 text-foreground" />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-primary text-xs font-semibold tracking-wider uppercase">
                    {project.category}
                  </span>
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-muted-foreground text-xs">
                      • {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">Loading projects...</p>
          </div>
        )}

        {/* Empty State */}
        {!loading && filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
