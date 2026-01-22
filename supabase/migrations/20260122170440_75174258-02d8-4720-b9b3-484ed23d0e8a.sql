-- Add user_id column to events table to track who created the event
ALTER TABLE public.events 
ADD COLUMN user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE;

-- Create index for faster lookups by user
CREATE INDEX idx_events_user_id ON public.events(user_id);

-- Create INSERT policy for authenticated users
CREATE POLICY "Authenticated users can create events"
ON public.events
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Create UPDATE policy for event owners
CREATE POLICY "Users can update their own events"
ON public.events
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Create DELETE policy for event owners
CREATE POLICY "Users can delete their own events"
ON public.events
FOR DELETE
TO authenticated
USING (auth.uid() = user_id);