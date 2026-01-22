-- Create a storage bucket for event cover photos
INSERT INTO storage.buckets (id, name, public)
VALUES ('event-photos', 'event-photos', true);

-- Allow anyone to upload photos to the event-photos bucket
CREATE POLICY "Anyone can upload event photos"
ON storage.objects
FOR INSERT
TO anon, authenticated
WITH CHECK (bucket_id = 'event-photos');

-- Allow public read access to event photos
CREATE POLICY "Event photos are publicly accessible"
ON storage.objects
FOR SELECT
TO anon, authenticated
USING (bucket_id = 'event-photos');

-- Allow users to delete their own uploaded photos
CREATE POLICY "Anyone can delete event photos"
ON storage.objects
FOR DELETE
TO anon, authenticated
USING (bucket_id = 'event-photos');