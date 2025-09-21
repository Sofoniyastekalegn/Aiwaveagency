// components/Dashboard.tsx
"use client"; // Use a client component for interactivity and state

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from './ui/card'; // Example using a custom Card component

interface CallData {
  id: number;
  caller_id: string;
  duration: number;
  transcript: string;
  created_at: string;
}

export default function SpaDashboard() {
  const [calls, setCalls] = useState<CallData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCalls() {
      try {
        const response = await axios.get('/api/calls'); // Use a Next.js API route
        setCalls(response.data);
      } catch (error) {
        console.error("Error fetching calls", error);
      } finally {
        setLoading(false);
      }
    }
    fetchCalls();
  }, []);

  if (loading) {
    return <div className="text-center p-8">Loading dashboard data...</div>;
  }

  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
      {/* KPI Cards */}
      <Card title="Total Calls Answered" value={calls.length} />
      <Card title="New Bookings" value="25" />
      {/* ... other KPIs */}

      {/* Calls List Section */}
      <section className="lg:col-span-3 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Recent Calls</h2>
        <ul>
          {calls.map(call => (
            <li key={call.id} className="border-b py-4">
              <p>Caller: {call.caller_id}</p>
              <p>Duration: {call.duration}s</p>
              <p>Transcript: {call.transcript.substring(0, 100)}...</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}