# ALIANTÉ Marketing Website

## Overview

A modern, responsive marketing agency website built with React, TypeScript, and Tailwind CSS. This website showcases ALIANTÉ Marketing's services, portfolio, team, and provides a contact form for potential clients.

## Technologies

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Backend**: Supabase (PostgreSQL + Authentication)
- **Database**: PostgreSQL with Row Level Security

## Project Structure

```
src/
  components/      # React components
  pages/          # Page components
  hooks/          # Custom React hooks
  lib/            # Utility functions and configurations
  data/           # Static data and content
  types/          # TypeScript type definitions
supabase/
  migrations/     # Database schema migrations
public/           # Static assets
```

## Development

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Features

- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Modern UI**: Clean, professional design with smooth animations
- **Portfolio Showcase**: Display of creative work and projects
- **Services Section**: Detailed service offerings with descriptions
- **Team Profiles**: Team member profiles and information
- **Contact Form**: Secure contact form with database integration
- **Performance**: Optimized for fast loading and smooth interactions

## Database Schema

The application uses Supabase PostgreSQL with the following tables:
- `portfolio_projects` - Portfolio items and case studies
- `services` - Service offerings
- `team_members` - Team information
- `awards` - Awards and recognitions
- `contact_submissions` - Contact form submissions

All tables have Row Level Security (RLS) policies for data protection.

## Deployment

The site can be deployed to any static hosting platform:
- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages

Build command: `npm run build`
Output directory: `dist`

## License

© 2026 ALIANTÉ Marketing. All rights reserved.
