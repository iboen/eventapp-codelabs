import { useState, useEffect, useCallback } from 'react';

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  type: string;
  status: string;
  image: string;
  description: string;
}

export const useEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEvents = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // Simulating network delay
      await new Promise((resolve) => setTimeout(resolve, 800));

      // In a real app, this would be: const response = await fetch('/api/events');
      // For this codelab, we'll fetch our local json
      const response = await fetch('/data/events.json');
      
      if (!response.ok) {
        throw new Error('Failed to fetch events');
      }

      const data: Event[] = await response.json();
      
      // Sort by date (soonest first)
      const sortedData = data.sort((a, b) => 
        new Date(a.date).getTime() - new Date(b.date).getTime()
      );

      setEvents(sortedData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  return { events, loading, error, retry: fetchEvents };
};
