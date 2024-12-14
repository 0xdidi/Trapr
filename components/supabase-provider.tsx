'use client'

import { createContext, useContext } from 'react'
import { useSupabase } from '@/hooks/useSupabase'
import type { Session } from '@supabase/supabase-js'

type SupabaseContext = {
  supabase: ReturnType<typeof useSupabase> | null
  session: Session | null
}

const Context = createContext<SupabaseContext | undefined>(undefined)

export default function SupabaseProvider({ 
  children,
  session
}: { 
  children: React.ReactNode
  session: Session | null
}) {
  const supabase = useSupabase()

  return (
    <Context.Provider value={{ supabase, session }}>
      {children}
    </Context.Provider>
  )
}

export const useSupabaseContext = () => {
  const context = useContext(Context)
  if (context === undefined) {
    throw new Error('useSupabase must be used inside SupabaseProvider')
  }
  return context
}

