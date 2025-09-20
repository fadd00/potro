# My Portfolio :3

Hiii!~ I kinda just threw this portfolio together 'cause I was super bored, y'know? XD If you wanna use this as a template or whatever, go for it! I'll drop the instructions down below > = <

## The Tech Stack I Used~!

Sooo, here's all the epic stuff I used to build this thingy:

-   **Next.js**: The god-tier React framework for server-side rendered web app shenanigans.
-   **React**: That awesome JavaScript library for building UIs, duh! :P
-   **TypeScript**: Like JavaScript, but with static typing to stop me from messing up so much, lol.
-   **Tailwind CSS**: A super cool utility-first CSS framework for making things pretty, fast!
-   **Elysia**: A backend framework I used to make my APIs. It's pretty neat! >.<
-   **Turso**: My database for the guestbook and for counting all the cool people who visit my site! UwU
-   **Resend**: I use this to actually send the emails from the contact form. It's magic! ✨

## How to Get This Thing Running >w<

1.  **Clone the Repo, duh!**

    ```bash
    git clone [https://github.com/fadd00/porto-dika-fix.git](https://github.com/fadd00/porto-dika-fix.git)
    cd porto-dika-fix
    ```

2.  **Install the Thingamajigs**

    Make sure you have [Bun](https://bun.sh/) installed, or else it's a no-go, senpai!

    ```bash
    bun install
    ```

3.  **Setup Your .env Stuff**

    Make a `.env.local` file in the main folder and toss these variables in:

    ```
    TURSO_DATABASE_URL="YOUR_TURSO_DATABASE_URL"
    TURSO_AUTH_TOKEN="YOUR_TURSO_AUTH_TOKEN"
    RESEND_API_KEY="YOUR_RESEND_API_KEY"
    ```

    -   **Turso**:
        1.  Go make an account at [Turso](https://turso.tech/). :3
        2.  Install the Turso CLI. On macOS, you can just use Homebrew: `brew install tursodatabase/homebrew-tap/turso`. For other systems, just, like, follow the guide on their site.
        3.  Log in to your Turso account: `turso auth login`
        4.  Make a new database: `turso db create your-database-name-goes-here`
        5.  Get the database URL: `turso db show your-database-name-goes-here --url`
        6.  Make an auth token: `turso db tokens create your-database-name-goes-here`

    -   **Resend**:
        1.  Sign up at [Resend](https://resend.com/). >:3
        2.  Just make a new API Key from your Resend dashboard, easy peasy.

4.  **Fire It Up!**

    ```bash
    bun run dev
    ```

    Now open up [http://localhost:3000](http://localhost:3000) in your browser to see the magic happen!

## So, Like, What's It For? :P

Basically, it's my online base to show off all the cool stuff I've made! >:3 Peeps can learn about me, stalk my projects, and even leave a message in the guestbook! UwU

---

## Where All the Files Are Hiding :3

Here's a map of the project so you don't get lost, lol.

-   **`public/`**: All the static stuff like images and fonts live here. Don't touch 'em unless you know what you're doing! XD
-   **`src/`**: The main magic happens in here! ✨
    -   **`app/`**: The heart of the Next.js app with the App Router.
        -   **`api/`**: The API routes I built with Elysia are in here.
        -   **`sitemap.xml/`**: The route for the sitemap, I guess?
        -   **`globals.css`**: Global CSS file, boring stuff.
        -   **`layout.tsx`**: The main layout for the whole app.
        -   **`page.tsx`**: The main homepage!
    -   **`backend/`**: Server-side code, like the database connection and API logic.
    -   **`components/`**: All the reusable React components I made.
    -   **`images/`**: Pictures used in the components.
-   **`bun.lock`**: Bun's dependency lock file.
-   **`eslint.config.mjs`**: ESLint config file.
-   **`next-env.d.ts`**: Type declaration file for Next.js.
-   **`next-sitemap.config.js`**: Config for making the sitemap.
-   **`next.config.ts`**: The Next.js config file.
-   **`package.json`**: Has all the project info and dependencies.
-   **`postcss.config.mjs`**: PostCSS config file.
-   **`README.md`**: THIS FILE! O_O
-   **`tsconfig.json`**: The TypeScript config file.

---

## What Each Component Does, lol >.<

Here's a quick rundown of every React component I used:

-   **`About.tsx`**: The part where I talk about myself, tee hee~ :3
-   **`Contact.tsx`**: A super cool form so you can send me messages! And my contact info is there too, I guess. ;P
-   **`Experience.tsx`**: Shows my work history and all that professional stuff.
-   **`Footer.tsx`**: The footer at the bottom of the site, with copyright and social media links.
-   **`Guestbook.tsx`**: Lets random people on the internet leave messages... what could go wrong? XD
-   **`Header.tsx`**: The navigation bar at the top with links to all the sections.
-   **`Hero.tsx`**: The big intro section at the top of the page with a huge title and stuff.
-   **`MusicPlayer.tsx`**: A component to play music and show what song is currently playing.
-   **`Projects.tsx`**: A gallery of all the projects I've worked on! >w<
-   **`VisitorCounter.tsx`**: Shows the total count of visitors to the website. So many people! O.O