"use client";

import { useState, useEffect, FormEvent } from 'react';

interface GuestbookEntry {
  id: number;
  name: string;
  message: string;
  createdAt: string;
}

export default function Guestbook() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchEntries = async () => {
    try {
      const res = await fetch('/api/guestbook');
      if (!res.ok) throw new Error('Failed to fetch entries');
      const data = await res.json();
      setEntries(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setError('Please fill out both name and message.');
      return;
    }

    const forbiddenWords = [
      // English
      'nigger', 'nigga',
      // Indonesian
      'kontol', 'memek', 'anjing', 'babi', 'bangsat', 
      'bajingan', 'asu', 'goblok', 'tolol', 'pantek'
    ];

    const lowerCaseMessage = message.toLowerCase();
    const lowerCaseName = name.toLowerCase();

    for (const word of forbiddenWords) {
      if (lowerCaseMessage.includes(word) || lowerCaseName.includes(word)) {
        setError('Your message or name contains a forbidden word. Please be nice!');
        return;
      }
    }
    
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch('/api/guestbook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, message }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Failed to submit entry');
      }
      
      setName('');
      setMessage('');
      await fetchEntries(); // Refresh entries after submitting
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="guestbook" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Guest<span className="text-rose-400">book</span>
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="guest-name" className="block text-gray-300 mb-2">Name</label>
                <input
                  id="guest-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 focus:border-rose-400 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="guest-message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="guest-message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Leave a message..."
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 focus:border-rose-400 focus:outline-none resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-lg transition-colors font-medium disabled:bg-gray-500 disabled:cursor-not-allowed"
              >
                {submitting ? 'Signing...' : 'Sign Guestbook'}
              </button>
              {error && <p className="text-red-500 mt-2">{error}</p>}
            </form>
          </div>

          <div className="space-y-4">
            {loading ? (
              <p className="text-center text-gray-400">Loading entries...</p>
            ) : entries.length === 0 ? (
              <p className="text-center text-gray-400">No entries yet. Be the first to sign!</p>
            ) : (
              entries.map((entry) => (
                <div key={entry.id} className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                  <p className="text-gray-300 mb-2">{entry.message}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span className="font-semibold text-rose-400">{entry.name}</span>
                    <span>{new Date(entry.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
