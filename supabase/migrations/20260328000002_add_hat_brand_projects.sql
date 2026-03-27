-- Add new Hat Brand portfolio projects
DELETE FROM portfolio_projects;

-- Insert existing projects
INSERT INTO portfolio_projects (title, category, description, image, type, collaboration_partner, digital_partner, tags) VALUES
('Hampton Brand Campaign', 'Commercial', 'A powerful commercial exploring startup founder isolation and community building through authentic storytelling.', 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800', 'collaboration', 'Hampton', 'ContentLab', ARRAY['commercial', 'brand', 'startup', 'video']),
('Tech Startup Rebrand', 'Branding', 'Complete brand identity redesign for a fintech startup including logo, guidelines, and marketing materials.', 'https://images.unsplash.com/photo-14609402790-0?w=800', 'original', NULL, NULL, ARRAY['branding', 'logo', 'design', 'fintech']),
('E-commerce Platform', 'Web Development', 'Full-stack e-commerce solution with modern UI/UX and seamless payment integration.', 'https://images.unsplash.com/photo-1556742049-0?w=800', 'original', NULL, NULL, ARRAY['web', 'ecommerce', 'react', 'nodejs']);

-- Add new Hat Brand portfolio projects
INSERT INTO portfolio_projects (title, category, description, image, type, collaboration_partner, digital_partner, tags) VALUES
('Agrovan Real Estate', 'COMMERCIAL', 'Premium real estate marketing campaign targeting luxury property buyers with compelling visual storytelling.', 'https://images.unsplash.com/photo-1560472359-0?w=800', 'collaboration', 'Sage Sparrows', NULL, ARRAY['commercial', 'real estate', 'luxury', 'marketing']),
('Fox Star India', 'ENTERTAINMENT', 'Complete brand campaign for Housefull 4 & Chhichhore movie promotion with 360° marketing innovation.', 'https://images.unsplash.com/photo-1560472359-1?w=800', 'collaboration', 'Fox Star India', NULL, ARRAY['entertainment', 'movie', '360°', 'innovation']),
('Playerzpot Gaming', 'GAMING', 'Multi-platform gaming experience featuring Cricket, Ludo, and Carrom with social integration.', 'https://images.unsplash.com/photo-1560472359-2?w=800', 'original', NULL, NULL, ARRAY['gaming', 'cricket', 'ludo', 'carrom', 'mobile']),
('Braavoking Grooming', 'LIFESTYLE', 'Premium grooming services for Worth fashion brand with modern aesthetic and quality products.', 'https://images.unsplash.com/photo-1560472359-3?w=800', 'collaboration', 'Worth', NULL, ARRAY['lifestyle', 'fashion', 'grooming', 'premium']),
('Suhana Masala', 'LIFESTYLE', 'Authentic Indian cuisine brand with traditional flavors and modern packaging design.', 'https://images.unsplash.com/photo-1560472359-4?w=800', 'original', NULL, NULL, ARRAY['lifestyle', 'food', 'indian', 'cuisine', 'packaging']);
