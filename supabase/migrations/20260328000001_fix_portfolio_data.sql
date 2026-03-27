-- Clean existing data and insert correct unique portfolio projects
DELETE FROM portfolio_projects;

-- Insert unique portfolio projects
INSERT INTO portfolio_projects (title, category, description, image, type, collaboration_partner, digital_partner, tags) VALUES
('Hampton Brand Campaign', 'Commercial', 'A powerful commercial exploring startup founder isolation and community building through authentic storytelling.', 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800', 'collaboration', 'Hampton', 'ContentLab', ARRAY['commercial', 'brand', 'startup', 'video']),
('Tech Startup Rebrand', 'Branding', 'Complete brand identity redesign for a fintech startup including logo, guidelines, and marketing materials.', 'https://images.unsplash.com/photo-14609402790-0?w=800', 'original', NULL, NULL, ARRAY['branding', 'logo', 'design', 'fintech']),
('E-commerce Platform', 'Web Development', 'Full-stack e-commerce solution with modern UI/UX and seamless payment integration.', 'https://images.unsplash.com/photo-1556742049-0?w=800', 'original', NULL, NULL, ARRAY['web', 'ecommerce', 'react', 'nodejs']),
('Social Media Campaign', 'Digital Marketing', 'Comprehensive social media strategy and execution for a major retail brand.', 'https://images.unsplash.com/photo-1611225287-0?w=800', 'original', NULL, NULL, ARRAY['social', 'marketing', 'campaign']),
('Mobile App Launch', 'Web Development', 'Native mobile application development for iOS and Android with real-time synchronization.', 'https://images.unsplash.com/photo-1560472359-1?w=800', 'original', NULL, NULL, ARRAY['mobile', 'app', 'development', 'ios', 'android']),
('Brand Photography', 'Commercial', 'Professional product photography and brand visual identity development.', 'https://images.unsplash.com/photo-1560472359-2?w=800', 'original', NULL, NULL, ARRAY['photography', 'brand', 'commercial', 'visual']);
