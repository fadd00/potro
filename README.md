<img width="1287" height="627" alt="Screenshot_21-Sep_01-07-02_27132" src="https://github.com/user-attachments/assets/7e58a199-1005-4a15-8d75-6afd747252e2" />

# My Portfolio :3

Hiii!~ I kinda just threw this portfolio together 'cause I was super bored, y'know? XD If you wanna use this as a template or whatever, go for it! I'll drop the instructions down below > = <

## The Tech Stack I Used~!

<p align="left">
  <a href="https://nextjs.org/" target="_blank">
    <img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js"/>
  </a>
  <a href="https://react.dev/" target="_blank">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
  </a>
  <a href="https://www.typescriptlang.org/" target="_blank">
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  </a>
  <a href="https://tailwindcss.com/" target="_blank">
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/>
  </a>
  <a href="https://bun.sh/" target="_blank">
    <img src="https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white" alt="Bun"/>
  </a>
  <a href="https://vercel.com/" target="_blank">
    <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel"/>
  </a>
</p>

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

## Let's Go Live! (Deploying Your Site) ✨

Okay, so you got it runnin' on your computer, but now you wanna show it to the world, right?! >:3 To get a real link that anyone can click, you gotta **deploy** it! The easiest way is with **Vercel**, 'cause they, like, literally made Next.js, lol.

1.  **Yeet Your Code to GitHub**

    First, you gotta push your project to a Git provider like [GitHub](https://github.com/). Vercel needs to see your code to build it! If you cloned my repo, make your own new repo for it.

2.  **Vercel Time!**

    -   Go sign up for a [Vercel](https://vercel.com/) account. You can just use your GitHub account, it's super easy. UwU
    -   Once you're in, click **"Add New... > Project"**.
    -   Find your new GitHub repo and click **"Import"**.

3.  **Plug in Your Secrets!**

    -   Vercel is smart and will probably figure out all the build settings on its own.
    -   The most important part is the **"Environment Variables"** section. You gotta add the same secrets from your `.env.local` file here.
        -   `TURSO_DATABASE_URL`
        -   `TURSO_AUTH_TOKEN`
        -   `RESEND_API_KEY`
    -   Don't skip this, or your guestbook and contact form will be totally broken! >.<

4.  **SMASH THAT DEPLOY BUTTON!**

    -   Just click the **"Deploy"** button and watch the magic happen! ✨
    -   Vercel will build your site and give you a super cool link like `your-project-name.vercel.app`. Now you can share it with everyone and show off your epic portfolio! XD

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
-   **`Projects.tsx`**: A gallery of all the projects I've worked on! >w<
-   **`VisitorCounter.tsx`**: Shows the total count of visitors to the website. So many people! O.O