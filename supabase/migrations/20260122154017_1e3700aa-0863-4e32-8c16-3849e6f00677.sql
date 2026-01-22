-- Create enum types for events
CREATE TYPE public.transport_type AS ENUM ('train', 'bus', 'none');
CREATE TYPE public.activity_type AS ENUM ('hiking', 'cycling');
CREATE TYPE public.difficulty_level AS ENUM ('E', 'E+', 'T');
CREATE TYPE public.elevation_type AS ENUM ('total height', 'descent');

-- Create the events table
CREATE TABLE public.events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  event_date DATE NOT NULL,
  event_time TIME NOT NULL,
  duration_text TEXT, -- e.g., "3 days", "12 hours"
  image_url TEXT,
  organizer_name TEXT NOT NULL,
  organizer_avatar TEXT,
  departure_location TEXT NOT NULL,
  transport transport_type NOT NULL DEFAULT 'none',
  transport_subtext TEXT,
  activity activity_type NOT NULL DEFAULT 'hiking',
  difficulty difficulty_level NOT NULL DEFAULT 'E',
  distance TEXT, -- e.g., "18km"
  elevation TEXT, -- e.g., "1982"
  elevation_type elevation_type DEFAULT 'total height',
  max_participants INTEGER NOT NULL DEFAULT 20,
  current_participants INTEGER NOT NULL DEFAULT 0,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (events are public)
CREATE POLICY "Events are publicly readable"
  ON public.events
  FOR SELECT
  USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_events_updated_at
  BEFORE UPDATE ON public.events
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();