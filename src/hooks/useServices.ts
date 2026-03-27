import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
  category: string;
  order: number;
  created_at: string;
  updated_at: string;
}

export function useServices(category?: string) {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        let query = supabase.from('services').select('*');

        if (category) {
          query = query.eq('category', category);
        }

        const { data, error: fetchError } = await query.order('order', { ascending: true });

        if (fetchError) {
          throw fetchError;
        }

        setServices(data || []);
        setError(null);
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Failed to fetch services';
        setError(message);
        setServices([]);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [category]);

  return { services, loading, error };
}
