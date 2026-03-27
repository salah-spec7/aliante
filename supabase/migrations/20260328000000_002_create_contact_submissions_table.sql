/*
  # Create Contact Submissions Table with Secure RLS Policies

  This migration creates the contact_submissions table with proper security:
  - Enables RLS by default
  - Allows public INSERT operations (for contact form submissions)
  - Restricts SELECT to authenticated users only (for viewing submissions)
  - Prevents UPDATE/DELETE operations for public users
*/

-- Create Contact Submissions Table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  business text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Policy for public INSERT (contact form submissions)
CREATE POLICY "Anyone can submit contact forms"
  ON contact_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Policy for authenticated users to view submissions
CREATE POLICY "Authenticated users can view contact submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy to prevent public users from updating submissions
CREATE POLICY "Prevent public updates to contact submissions"
  ON contact_submissions
  FOR UPDATE
  TO public
  WITH CHECK (false);

-- Policy to prevent public users from deleting submissions
CREATE POLICY "Prevent public deletes to contact submissions"
  ON contact_submissions
  FOR DELETE
  TO public
  USING (false);

-- Allow authenticated users to update submissions (for admin purposes)
CREATE POLICY "Authenticated users can update contact submissions"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Allow authenticated users to delete submissions (for admin purposes)
CREATE POLICY "Authenticated users can delete contact submissions"
  ON contact_submissions
  FOR DELETE
  TO authenticated
  USING (true);
