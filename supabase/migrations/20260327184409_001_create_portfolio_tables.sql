/*
  # Create Portfolio and Content Tables

  1. New Tables
    - `portfolio_projects` - Portfolio projects showcase
      - `id` (uuid, primary key)
      - `title` (text) - Project title
      - `category` (text) - Project category
      - `description` (text) - Project description
      - `image` (text) - Project image URL
      - `type` (text) - 'original' or 'collaboration'
      - `collaboration_partner` (text, nullable) - Partner name
      - `digital_partner` (text, nullable) - Digital partner name
      - `tags` (text[]) - Project tags
      - `created_at` (timestamp)
      - `updated_at` (timestamp)


    - `services` - Services offered
      - `id` (uuid, primary key)
      - `title` (text) - Service title
      - `description` (text) - Service description
      - `icon` (text, nullable) - Icon name
      - `category` (text) - Service category
      - `order` (integer) - Display order
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `team_members` - Team member profiles
      - `id` (uuid, primary key)
      - `name` (text) - Team member name
      - `role` (text) - Job role
      - `image_url` (text, nullable) - Profile image URL
      - `bio` (text, nullable) - Biography
      - `order` (integer) - Display order
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `awards` - Awards and recognitions
      - `id` (uuid, primary key)
      - `name` (text) - Award name
      - `year` (integer) - Award year
      - `image_url` (text, nullable) - Award image/badge URL
      - `description` (text, nullable) - Award description
      - `order` (integer) - Display order
      - `created_at` (timestamp)
      - `updated_at` (timestamp)


  2. Security
    - Enable RLS on all tables
    - Add policies for public read access on portfolio, services, team, awards
*/

-- Portfolio Projects Table
CREATE TABLE IF NOT EXISTS portfolio_projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  category text NOT NULL,
  description text NOT NULL,
  image text NOT NULL,
  type text NOT NULL CHECK (type IN ('original', 'collaboration')),
  collaboration_partner text,
  digital_partner text,
  tags text[] DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE portfolio_projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Portfolio projects are publicly readable"
  ON portfolio_projects
  FOR SELECT
  TO public
  USING (true);


-- Services Table
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  icon text,
  category text NOT NULL,
  "order" integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE services ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Services are publicly readable"
  ON services
  FOR SELECT
  TO public
  USING (true);

-- Team Members Table
CREATE TABLE IF NOT EXISTS team_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  image_url text,
  bio text,
  "order" integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Team members are publicly readable"
  ON team_members
  FOR SELECT
  TO public
  USING (true);

-- Awards Table
CREATE TABLE IF NOT EXISTS awards (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  year integer NOT NULL,
  image_url text,
  description text,
  "order" integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE awards ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Awards are publicly readable"
  ON awards
  FOR SELECT
  TO public
  USING (true);
