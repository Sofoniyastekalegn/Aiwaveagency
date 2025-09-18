// app/api/calls/route.ts
// This route should be protected by authentication.
import { NextResponse } from 'next/server';
// You would use Supabase or another DB client here
// import { supabase } from '@/lib/supabase';

export async function GET(request: Request) {
  // Add authentication check here, e.g., check for a valid JWT
  // if (!isAuthenticated(request)) {
  //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  // }
  
  // Example data instead of a database query
  const dummyCalls = [
    { id: 1, caller_id: '555-0101', duration: 120, transcript: 'Hello, I would like to book an appointment...', created_at: '2025-09-18T10:00:00Z' },
    { id: 2, caller_id: '555-0202', duration: 90, transcript: 'Hi, is this the medspa? I want to reschedule...', created_at: '2025-09-18T10:15:00Z' },
  ];
  return NextResponse.json(dummyCalls);
}
