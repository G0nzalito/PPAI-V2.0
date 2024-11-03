import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Configura el cliente de Supabase
const supabaseUrl = 'https://jsftpkuvepxoovwnwmtd.supabase.co'
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpzZnRwa3V2ZXB4b292d253bXRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA1NzUwNjEsImV4cCI6MjA0NjE1MTA2MX0.bKd8cfhAzE3KvPnmaqlKUU9oCwPW3PEJPLZrdKYwgn4'
const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase
