import { motion } from 'framer-motion';
import { Linkedin, Instagram } from 'lucide-react';

export default function FounderPage() {
  // Static founder data since we removed the database tables
  const founder = {
    name: "Affan Liaqat Ali",
    title: "Founder & Creative Director",
    bio: "With over 10 years of experience in digital marketing and creative direction, I lead our team in delivering exceptional results for our clients. My passion lies in creating compelling brand stories that resonate with audiences and drive business growth.",
    image_url: "/founder image.png",
    social_links: [
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/affan-liaqat-ali-1162a6322?utm_source=share_via&utm_content=profile&utm_medium=member_android"
      },
      {
        platform: "instagram", 
        url: "https://www.instagram.com/_theaffann?igsh=bGxkZG93ZjJ5NWUz"
      }
    ]
  };

  const linkedinLink = founder?.social_links.find(l => l.platform.toLowerCase() === 'linkedin')?.url;
  const instagramLink = founder?.social_links.find(l => l.platform.toLowerCase() === 'instagram')?.url;

  return (
    <div className="min-h-screen bg-background pt-28 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-[3/4] bg-card border border-border rounded-2xl overflow-hidden relative">
              {founder.image_url ? (
                <img
                  src={founder.image_url}
                  alt={founder.name}
                  className="w-full h-full object-cover"
                  style={{ filter: 'brightness(1.1) contrast(1.05)' }}
                />
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-muted-foreground/60 text-sm font-medium">Founder Photo</span>
                  </div>
                </>
              )}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-4">Meet the Founder</p>
            <h1 className="text-4xl sm:text-5xl font-black text-foreground tracking-tight mb-2">
              {founder.name}
            </h1>
            <p className="text-muted-foreground font-medium text-lg mb-8">
              {founder.title}
            </p>

            <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
              {founder.bio.split('\n').map((line, i) => (
                line.trim() && <p key={i}>{line}</p>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {linkedinLink && (
                <a
                  href={linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors border border-border rounded-full px-4 py-2 text-sm"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              )}
              {instagramLink && (
                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors border border-border rounded-full px-4 py-2 text-sm"
                >
                  <Instagram className="w-4 h-4" /> Instagram
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
