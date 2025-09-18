import { createClient } from '@libsql/client';

if (!process.env.TURSO_DATABASE_URL) {
  throw new Error('TURSO_DATABASE_URL is not defined');
}
if (!process.env.TURSO_AUTH_TOKEN) {
  throw new Error('TURSO_AUTH_TOKEN is not defined');
}

export const db = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

export async function setupDatabase() {
  try {
    await db.batch([
      `CREATE TABLE IF NOT EXISTS views (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        count INTEGER NOT NULL DEFAULT 1
      );`,
      `CREATE TABLE IF NOT EXISTS guestbook (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        message TEXT NOT NULL,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
      );`,
      // Seed the views table if it's empty
      `INSERT INTO views (count) SELECT 0 WHERE NOT EXISTS (SELECT 1 FROM views);`
    ], 'write');
    console.log('Database setup complete.');
  } catch (error) {
    console.error('Error setting up database:', error);
  }
}
