import { useState, useEffect } from 'react'
import { createClient, SupabaseClient } from '@supabase/supabase-js'

export function useSupabase() {
  const [supabase, setSupabase] = useState<SupabaseClient | null>(null)

  useEffect(() => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (supabaseUrl && supabaseAnonKey) {
      const supabaseClient = createClient(supabaseUrl, supabaseAnonKey)
      setSupabase(supabaseClient)
    } else {
      console.error('Supabase environment variables are missing')
    }
  }, [])

  return supabase
}

