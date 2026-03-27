import { useEffect, useState } from 'react';
import { supabase, PortfolioProject } from '@/lib/supabase';

export function usePortfolio() {
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const { data, error: supabaseError } = await supabase
          .from('portfolio_projects')
          .select('*')
          .order('created_at', { ascending: false });

        if (supabaseError) throw supabaseError;
        setProjects(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch projects');
        console.error('Portfolio fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error };
}
