# Spotify Artist Finder — Doles Music

Internal tool to discover artists by country and release year using the Spotify Web API.

## Setup

1. Get your Client ID and Secret from [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Copy `.env.example` to `.env` and fill in your credentials
3. Run locally with Netlify Dev (credentials stay server-side — never in the browser)

```bash
cp .env.example .env
# edit .env with your Spotify credentials
npm run dev
```

Open **http://localhost:8888**

## Files

- `index.html` — the app
- `.env` — your Spotify credentials for local dev (never commit this)
- `.env.example` — template without secrets (safe to commit)
- `netlify/functions/` — serverless functions for auth and artist country lookup

## Hosting on Netlify

1. Push this repo to GitHub (`.env` is gitignored)
2. Connect the repo in Netlify
3. In Netlify → Site Settings → Environment variables, add:
   - `SPOTIFY_CLIENT_ID`
   - `SPOTIFY_CLIENT_SECRET`
4. Deploy

No `config.js` needed — credentials live only in environment variables.

## Countries supported

Germany, UAE, India, US, UK, France, Japan, Brazil, Nigeria, South Africa, South Korea, Mexico, Turkey, Poland, Netherlands, Sweden, Italy, Spain, Australia, Canada, Argentina, Colombia, Pakistan, Indonesia, Philippines, Egypt, Saudi Arabia, Singapore, Thailand, Portugal
