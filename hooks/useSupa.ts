import { createClient } from '@supabase/supabase-js'

const url: string = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const anaon: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

export const supabase = createClient(url, anaon)
