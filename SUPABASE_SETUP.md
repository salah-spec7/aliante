# Supabase Setup Guide

This guide walks you through setting up Supabase for the ALIANTÉ Marketing website step by step.

## Step 1: Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com) and sign up/login
2. Click "New Project"
3. Choose your organization (or create one)
4. Enter project details:
   - **Name**: `aliante-marketing`
   - **Database Password**: Create a strong password (save this!)
   - **Region**: Choose closest to your users (e.g., `us-east-1` for US)
5. Click "Create new project"
6. Wait 2-3 minutes for the project to initialize

## Step 2: Get Your API Credentials

1. In your Supabase dashboard, go to **Project Settings** (gear icon)
2. Click **API** in the left sidebar
3. Copy these values:
   - **Project URL** (e.g., `https://your-project-id.supabase.co`)
   - **anon public** API key (starts with `eyJ...`)
4. Save these somewhere secure - you'll need them in Step 4

## Step 3: Install Supabase Client (if not already installed)

```bash
# Using npm
npm install @supabase/supabase-js

# Using bun
bun add @supabase/supabase-js
```

**Note**: This is already in your `package.json`, but run this if you need to reinstall.

## Step 4: Configure Environment Variables

1. Create a `.env` file in your project root:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

2. Replace the placeholder values with your actual credentials from Step 2

3. **Important**: Add `.env` to your `.gitignore` file:

```bash
echo ".env" >> .gitignore
```

## Step 5: Verify Supabase Client Configuration

Your project already has the Supabase client configured at `src/lib/supabase.ts`:

```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseKey);
```

## Step 6: Run Database Migrations

### Option A: Using Supabase Dashboard (Easiest)

1. Go to your Supabase project dashboard
2. Click **SQL Editor** in the left sidebar
3. Click **New query**
4. Open your migration file: `supabase/migrations/20260327184409_001_create_portfolio_tables.sql`
5. Copy all the SQL content
6. Paste into the SQL Editor
7. Click **Run** to execute the migration
8. Repeat for: `20260328000000_002_create_contact_submissions_table.sql`

### Option B: Using Supabase CLI (Advanced)

```bash
# Install Supabase CLI (if not already installed)
npm install -g supabase

# Login to Supabase
supabase login

# Link your project
supabase link --project-ref your-project-id

# Push migrations
supabase db push
```

## Step 7: Add Sample Data (Optional but Recommended)

1. In Supabase dashboard, go to **Table Editor**
2. Click on each table:
   - `portfolio_projects`
   - `services`
   - `team_members`
   - `awards`
3. Click **Insert Row** and add sample data

### Sample Portfolio Project:
```json
{
  "title": "Hampton Brand Campaign",
  "category": "Commercial",
  "description": "A powerful commercial exploring startup founder isolation and community building",
  "image": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800",
  "type": "collaboration",
  "collaboration_partner": "Hampton",
  "digital_partner": "ContentLab",
  "tags": ["commercial", "brand", "startup"]
}
```

## Step 8: Test the Connection

1. Start your development server:

```bash
npm run dev
```

2. Open browser console (F12)
3. Test Supabase connection by checking if data loads:
   - Visit the Services page
   - Visit the Portfolio page
   - Check Network tab for Supabase API calls

## Step 9: Test Contact Form

1. Go to `/contact` page
2. Fill out the contact form:
   - Name: Test User
   - Email: test@example.com
   - Business: Test Business
   - Message: Test message
3. Submit the form
4. Check Supabase dashboard:
   - Go to **Table Editor**
   - Click `contact_submissions`
   - Verify your test entry appears

## Step 10: Enable Row Level Security (RLS) - Already Done

Your migrations already include RLS policies:

- ✅ Public can INSERT to `contact_submissions`
- ✅ Public can SELECT from `portfolio_projects`, `services`, `team_members`, `awards`
- ✅ Authenticated users have full access

## Troubleshooting

### "Missing Supabase environment variables" error
- Check `.env` file exists in project root
- Verify variable names: `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`
- Restart dev server after adding env variables

### "Failed to fetch" errors
- Check your internet connection
- Verify Supabase project is active (not paused)
- Check browser console for CORS errors
- Ensure RLS policies allow the operation

### Tables not found
- Migrations may not have run successfully
- Check SQL Editor in Supabase dashboard for errors
- Verify tables exist in **Table Editor**

### Data not loading
- Check browser Network tab for API calls
- Verify tables have data (not empty)
- Check console for JavaScript errors

## Security Checklist

- ✅ `.env` file is in `.gitignore`
- ✅ Using `anon` key (public) not `service_role` key (private)
- ✅ RLS policies are enabled on all tables
- ✅ Production URL is set in environment variables
- ✅ Supabase project has strong database password

## Next Steps

1. Set up custom domain (optional)
2. Configure authentication (if needed for admin panel)
3. Set up storage for image uploads
4. Configure email notifications for contact form submissions
5. Add analytics tracking

## Support Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)
- [Row Level Security Guide](https://supabase.com/docs/guides/auth/row-level-security)
