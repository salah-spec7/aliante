import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { TeamMember } from '@/hooks/useTeamMembers';

export function useTeam() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        setLoading(true);
        const { data, error: supabaseError } = await supabase
          .from('team_members')
          .select('*')
          .order('order', { ascending: true });

        if (supabaseError) throw supabaseError;
        setMembers(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch team members');
        console.error('Team fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  return { members, loading, error };
}
