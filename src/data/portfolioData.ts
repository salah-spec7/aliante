export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  type: 'original' | 'collaboration';
  collaborationPartner?: string;
  digitalPartner?: string;
  tags: string[];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'agrovan',
    title: 'Agrovan',
    category: 'Real Estate',
    description: 'Premium real estate digital campaign with innovative storytelling and immersive visuals.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop&auto=format',
    type: 'collaboration',
    collaborationPartner: 'The Hat Brand',
    digitalPartner: 'Sage Sparrows',
    tags: ['Real Estate', 'Digital Campaign']
  },
  {
    id: 'housefull-4',
    title: 'Housefull 4',
    category: 'Entertainment',
    description: 'Multi-platform marketing campaign for Fox Star India blockbuster film.',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=500&fit=crop&auto=format',
    type: 'collaboration',
    collaborationPartner: 'The Hat Brand',
    tags: ['Entertainment', 'Film Marketing']
  },
  {
    id: 'chhichhore',
    title: 'Chhichhore',
    category: 'Entertainment',
    description: 'Strategic social media and digital campaign for Fox Star India production.',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=500&fit=crop&auto=format',
    type: 'collaboration',
    collaborationPartner: 'The Hat Brand',
    tags: ['Entertainment', 'Social Media']
  },
  {
    id: 'war-planet-apes',
    title: 'War for the Planet of the Apes',
    category: 'Entertainment',
    description: '360° Innovation Campaign delivering immersive fan experiences.',
    image: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=800&h=500&fit=crop&auto=format',
    type: 'collaboration',
    collaborationPartner: 'The Hat Brand',
    tags: ['Entertainment', '360° Campaign']
  },
  {
    id: 'royal-challenge-ipl',
    title: 'Royal Challenge IPL',
    category: 'Entertainment',
    description: 'High-energy sports marketing campaign for cricket\'s biggest league.',
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&h=500&fit=crop&auto=format',
    type: 'collaboration',
    collaborationPartner: 'The Hat Brand',
    tags: ['Sports', 'IPL']
  },
  {
    id: 'playerzpot-cricket',
    title: 'Playerzpot Cricket',
    category: 'Gaming',
    description: 'Engaging digital campaigns for cricket fantasy gaming platform.',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&h=500&fit=crop&auto=format',
    type: 'collaboration',
    collaborationPartner: 'The Hat Brand',
    tags: ['Gaming', 'Cricket']
  },
  {
    id: 'playerzpot-ludo',
    title: 'Playerzpot Ludo & Carrom',
    category: 'Gaming',
    description: 'Multi-game promotional campaigns targeting casual gaming audience.',
    image: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=800&h=500&fit=crop&auto=format',
    type: 'collaboration',
    collaborationPartner: 'The Hat Brand',
    tags: ['Gaming', 'Casual Games']
  },
  {
    id: 'braavoking',
    title: 'Braavoking',
    category: 'D2C & FMCG',
    description: 'Premium grooming brand launch with targeted social media strategy.',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&h=500&fit=crop&auto=format',
    type: 'collaboration',
    collaborationPartner: 'The Hat Brand',
    tags: ['D2C', 'Grooming']
  },
  {
    id: 'worth-fashion',
    title: 'Worth',
    category: 'D2C & FMCG',
    description: 'Fashion brand positioning and e-commerce growth campaign.',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=500&fit=crop&auto=format',
    type: 'collaboration',
    collaborationPartner: 'The Hat Brand',
    tags: ['Fashion', 'E-commerce']
  },
  {
    id: 'suhana-masala',
    title: 'Suhana Masala',
    category: 'D2C & FMCG',
    description: 'Traditional FMCG brand digital transformation and market expansion.',
    image: 'https://images.unsplash.com/photo-1596040033229-a0b3b83d6452?w=800&h=500&fit=crop&auto=format',
    type: 'collaboration',
    collaborationPartner: 'The Hat Brand',
    tags: ['FMCG', 'Food & Beverage']
  }
];
