import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export interface Award {
  id: string;
  name: string;
  year: number;
  image_url?: string;
  description?: string;
  order: number;
  created_at: string;
  updated_at: string;
}

export function useAwards() {
  const [awards, setAwards] = useState<Award[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAwards = async () => {
      try {
        setLoading(true);
        const { data, error: fetchError } = await supabase
          .from('awards')
          .select('*')
          .order('order', { ascending: true });

        if (fetchError) {
          throw fetchError;
        }

        setAwards(data || []);
        setError(null);
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Failed to fetch awards';
        setError(message);
        setAwards([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAwards();
  }, []);

  return { awards, loading, error };
}
