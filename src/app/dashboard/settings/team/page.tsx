'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useAppStore } from '@/lib/store/useAppStore';
import { TeamMembersView } from '@/components/features/admin/TeamMembersView';
import { supabase } from '@/lib/supabase';
import { CompanyMember, CompanyRole } from '@/lib/types';
import { TableSkeleton } from '@/components/shared/tables/TableSkeleton';

export default function TeamPage() {
    const { activeCompany, user, showToast } = useAppStore();
    const [members, setMembers] = useState<CompanyMember[]>([]);
    const [roles, setRoles] = useState<CompanyRole[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchData = useCallback(async (isInitial = false) => {
        if (!activeCompany) return;
        if (isInitial) setLoading(true);
        try {
            const [memsRes, rolesRes] = await Promise.all([
                supabase.from('company_members').select('*, profile:profiles(*), company_roles(*)').eq('company_id', activeCompany.id),
                supabase.from('company_roles').select('*').eq('company_id', activeCompany.id)
            ]);
            if (memsRes.error) throw memsRes.error;
            if (rolesRes.error) throw rolesRes.error;

            if (memsRes.data) setMembers(memsRes.data);
            if (rolesRes.data) setRoles(rolesRes.data);
        } catch (error: any) {
            showToast("Error fetching team data: " + error.message, 'error');
        } finally {
            if (isInitial) setLoading(false);
        }
    }, [activeCompany, showToast]);

    useEffect(() => {
        if (activeCompany) {
            fetchData(true);
        }
    }, [activeCompany, fetchData]);

    if (!user) return null;
    if (!activeCompany) return <TableSkeleton />;

    if (loading) {
        return <TableSkeleton />;
    }

    return <TeamMembersView company={activeCompany} members={members} roles={roles} user={user} onUpdate={() => fetchData(false)} />;
}
