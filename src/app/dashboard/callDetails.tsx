"use client";

import { useState, useEffect } from "react";


import axios from "axios";

import { Card } from "./ui/card";

interface Conversions {
    id: number;
    Agent: string;


    caller_id: string;

    duration: number;

    transcript: string;
    created_at: string;
}

export default function Conversions() {
    const [text, setText] = useState<Conversions[]>([]);

    const [loading, setloading] = useState(true);
    const [conversions, setconvestions] = useState(true);

    useEffect(() => {
        async function fetchCalls() {
            try {
                const response = await axios.get("/api/calls");

                setCalls(response.data);


            } catch (error) {
                console.error("Error fetching calls",  error);
            }
        }
    })
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
          {calls.map(text.id} className="border-b py-4">
              <p>Caller: {text.caller_id}</p>
              <p>Duration: {text.duration}s</p>
              <p>Transcript: {text.transcript.substring(0, 100)}...</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}