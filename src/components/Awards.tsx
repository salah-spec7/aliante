'use client'

import { useAwards } from '@/hooks/useAwards'

export function Awards() {
  const { awards: dbAwards, loading } = useAwards()

  return (
    <section id="awards" className="relative py-20 bg-background overflow-hidden">
      
      {/* Elegant Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      


      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-purple rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">
              Recognition & Achievement
            </span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 text-foreground">
            Awards & Recognition
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Celebrated excellence in AI-powered film production
          </p>
        </div>

        {/* Awards Display */}
        <div className="relative max-w-7xl mx-auto">

          {/* Loading State */}
          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-card border border-border rounded-2xl h-48 w-48 mx-auto" />
                </div>
              ))}
            </div>
          )}

          {/* Awards Grid */}
          {!loading && (
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {dbAwards.map((award, index) => (
                <div
                  key={award.id}
                  className="group relative flex flex-col items-center text-center"
                >

                  {/* Award Pedestal */}
                  <div className="relative mb-6">

                    {/* Floating Award Display */}
                    <div className="relative p-6 rounded-2xl border shadow-md transition-all duration-500 hover:scale-105 bg-background border-border"
                         style={{
                           boxShadow: '0 8px 24px rgba(0,0,0,0.08)'
                         }}>

                      {/* Award Image */}
                      {award.image_url && (
                        <img
                          src={award.image_url}
                          alt={award.name}
                          className="w-full h-auto max-w-48 mx-auto"
                          style={{
                            filter: 'contrast(1.02) saturate(1.1)',
                          }}
                        />
                      )}

                      {/* Award Name */}
                      <div className="mt-4">
                        <p className="font-semibold text-foreground">{award.name}</p>
                        {award.year && <p className="text-sm text-muted-foreground">{award.year}</p>}
                      </div>

                    </div>

                    {/* Floating Animation */}
                    <div className="float-gentle absolute inset-0 pointer-events-none" />
                  </div>

                </div>
              ))}
            </div>
          )}

        </div>


      </div>
      
    </section>
  )
}