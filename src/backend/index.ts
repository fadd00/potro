import { Elysia, t } from 'elysia';
import { Resend } from 'resend';
import { db, setupDatabase } from './db';

// Initialize database tables
setupDatabase();

const resend = new Resend(process.env.RESEND_API_KEY);

const app = new Elysia({ prefix: '/api' })
  // Contact form endpoint
  .post('/send', async ({ body, set }) => {
    const { name, email, message } = body;

    try {
      const { data, error } = await resend.emails.send({
        from: 'onboarding@resend.dev', // Remember to change this
        to: ['andhikahutama9@gmail.com'],
        subject: `New message from ${name} on your portfolio`,
        html: `<p>You have a new message from:</p>
               <p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong></p>
               <p>${message}</p>`,
      });

      if (error) {
        console.error('Resend API Error:', error);
        set.status = 500;
        return { error: 'Error sending email' };
      }

      return { message: 'Email sent successfully!', data };
    } catch (err) {
      console.error('Server Error:', err);
      set.status = 500;
      return { error: 'Internal Server Error' };
    }
  }, {
    body: t.Object({
      name: t.String(),
      email: t.String({ format: 'email' }),
      message: t.String()
    })
  })
  // Visitor count endpoint
  .get('/views', async ({ set }) => {
    try {
      // Increment count
      await db.execute("UPDATE views SET count = count + 1 WHERE id = 1;");
      // Get the new count
      const { rows } = await db.execute("SELECT count FROM views WHERE id = 1;");
      const views = rows[0]?.count ?? 0;
      return { views };
    } catch (error) {
      console.error('Failed to fetch or update views:', error);
      set.status = 500;
      return { error: 'Could not retrieve view count.' };
    }
  })
  // Guestbook endpoints
  .get('/guestbook', async ({ set }) => {
    try {
      const { rows } = await db.execute("SELECT id, name, message, createdAt FROM guestbook ORDER BY createdAt DESC;");
      return rows;
    } catch (error) {
      console.error('Failed to fetch guestbook entries:', error);
      set.status = 500;
      return { error: 'Could not retrieve guestbook entries.' };
    }
  })
  .post('/guestbook', async ({ body, set }) => {
    const { name, message } = body;

    if (!name || !message) {
      set.status = 400;
      return { error: 'Name and message are required.' };
    }

    try {
      await db.execute({
        sql: "INSERT INTO guestbook (name, message) VALUES (?, ?);",
        args: [name, message],
      });
      return { message: 'Guestbook entry added successfully!' };
    } catch (error) {
      console.error('Failed to add guestbook entry:', error);
      set.status = 500;
      return { error: 'Could not add guestbook entry.' };
    }
  }, {
    body: t.Object({
      name: t.String({ minLength: 1 }),
      message: t.String({ minLength: 1 })
    })
  });

export default app;
export type App = typeof app;
