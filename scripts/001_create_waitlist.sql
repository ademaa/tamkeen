-- Create waitlist table to store email submissions
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS for security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (for public waitlist submissions)
CREATE POLICY "Allow public to insert waitlist emails"
  ON waitlist
  FOR INSERT
  WITH CHECK (true);

-- Only allow reading your own email (optional, can be removed if you want admin-only access)
CREATE POLICY "Allow public to read all waitlist"
  ON waitlist
  FOR SELECT
  USING (true);
