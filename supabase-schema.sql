-- Run in Supabase SQL Editor

CREATE TABLE IF NOT EXISTS personality_leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  city TEXT,
  education_level TEXT,
  program_interest TEXT,
  age INTEGER,
  consent BOOLEAN DEFAULT false
);

CREATE TABLE IF NOT EXISTS personality_results (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  lead_id UUID REFERENCES personality_leads(id),
  answers JSONB NOT NULL,
  report JSONB NOT NULL,
  personality_type TEXT,
  overall_score INTEGER
);

ALTER TABLE personality_leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE personality_results ENABLE ROW LEVEL SECURITY;

CREATE POLICY "public_insert_leads" ON personality_leads FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "public_insert_results" ON personality_results FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "service_all_leads" ON personality_leads FOR ALL TO service_role USING (true);
CREATE POLICY "service_all_results" ON personality_results FOR ALL TO service_role USING (true);
