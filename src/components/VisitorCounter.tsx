"use client";

import { useState, useEffect } from 'react';

export default function VisitorCounter() {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    const fetchViews = async () => {
      try {
        const res = await fetch('/api/views');
        if (!res.ok) return;
        const data = await res.json();
        setViews(data.views);
      } catch (error) {
        console.error('Failed to fetch views:', error);
      }
    };

    fetchViews();
  }, []);

  return (
    <div className="text-center text-gray-500 text-sm">
      {views !== null ? `Total Visitors: ${views}` : 'Loading visitors...'}
    </div>
  );
}
