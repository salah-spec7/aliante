import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image_url?: string;
  bio?: string;
  order: number;
  created_at: string;
  updated_at: string;
}

export function useTeamMembers() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        setLoading(true);
        const { data, error: fetchError } = await supabase
          .from('team_members')
          .select('*')
          .order('order', { ascending: true });

        if (fetchError) {
          throw fetchError;
        }

        setMembers(data || []);
        setError(null);
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Failed to fetch team members';
        setError(message);
        setMembers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  return { members, loading, error };
}
