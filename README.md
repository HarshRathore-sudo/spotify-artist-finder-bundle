# Spotify Artist Finder — Doles Music

Internal tool to discover artists by country and release year using the Spotify Web API.

## Setup

1. Get your Client ID and Secret from [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Fill them into `config.js`
3. Host both `index.html` and `config.js` on any static host

## Files

- `index.html` — the app
- `config.js` — your Spotify credentials (never commit this)
- `.gitignore` — excludes config.js from git

## Hosting on Netlify

1. Push this repo to GitHub (without config.js)
2. Connect the repo in Netlify
3. In Netlify: Site Settings → Build & Deploy → add a `config.js` file manually via the Netlify UI, or use the approach below

### Easier Netlify approach

Since config.js is gitignored, after deploying on Netlify go to:
**Deploys → drag and drop** your full folder (including config.js) directly onto Netlify Drop at app.netlify.com/drop

That way your credentials never touch GitHub.

## Countries supported

Germany, UAE, India, US, UK, France, Japan, Brazil, Nigeria, South Africa, South Korea, Mexico, Turkey, Poland, Netherlands, Sweden, Italy, Spain, Australia, Canada, Argentina, Colombia, Pakistan, Indonesia, Philippines, Egypt, Saudi Arabia, Singapore, Thailand, Portugal
