# Spotify Artist Finder — Doles Music

Track which artists **from a chosen country** **released music on Spotify** within a specific timeline. Export results to CSV or check a roster of artist names.

## What it does

1. **Discover mode** (default) — finds artists from your selected country who released in the date range
2. **Roster mode** — paste artist names (one per line) to see who released **Yes/No** in that period
3. **Export CSV** — download results for A&R / label workflows

## Setup

1. Get credentials from [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Copy `.env.example` to `.env` and add your credentials
3. Run locally:

```bash
cp .env.example .env
npm run dev
```

Open **http://localhost:8888**

## Netlify deploy

Set environment variables:
- `SPOTIFY_CLIENT_ID`
- `SPOTIFY_CLIENT_SECRET`

## Timeline options

- **Date range** — e.g. Jan 2025 → Jun 2026
- **Single month**
- **New** — last 2 weeks (Spotify `tag:new`)

## Limitations

- Spotify has no artist-country field — origin is verified via MusicBrainz (Netlify function)
- Country checks take ~1 second per artist
- Spotify search caps at 10 results per request; wide ranges may not capture every release
