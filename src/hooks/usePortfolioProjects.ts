import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  type: 'original' | 'collaboration';
  collaboration_partner?: string;
  digital_partner?: string;
  tags?: string[];
  created_at: string;
  updated_at: string;
}

export function usePortfolioProjects() {
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const { data, error: fetchError } = await supabase
          .from('portfolio_projects')
          .select('*')
          .order('created_at', { ascending: false });

        if (fetchError) {
          throw fetchError;
        }

        const transformedData = data?.map(item => ({
          ...item,
          image: item.image || '',
        })) || [];

        setProjects(transformedData);
        setError(null);
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Failed to fetch projects';
        setError(message);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error };
}
