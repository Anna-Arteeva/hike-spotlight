-- Drop the existing INSERT policy that requires authentication
DROP POLICY IF EXISTS "Authenticated users can create events" ON public.events;

-- Create a new policy allowing anyone to insert events
CREATE POLICY "Anyone can create events"
ON public.events
FOR INSERT
TO anon, authenticated
WITH CHECK (true);