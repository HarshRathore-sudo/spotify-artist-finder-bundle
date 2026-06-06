const USER_AGENT =
  'DolesMusicArtistFinder/1.0 (https://github.com/HarshRathore-sudo/spotify-artist-finder-bundle)';

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function lookupArtist(name) {
  const q = encodeURIComponent(`artist:"${name}"`);
  const res = await fetch(`https://musicbrainz.org/ws/2/artist/?query=${q}&fmt=json&limit=5`, {
    headers: { 'User-Agent': USER_AGENT },
  });
  if (!res.ok) return null;

  const data = await res.json();
  const best = data.artists?.[0];
  if (!best) return null;

  return {
    country: best.country || null,
    area: best.area?.name || null,
    areaCodes: best.area?.['iso-3166-1-codes'] || [],
    beginArea: best['begin-area']?.name || null,
    beginAreaCodes: best['begin-area']?.['iso-3166-1-codes'] || [],
  };
}

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: cors };
  }
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers: cors, body: JSON.stringify({ error: 'Method Not Allowed' }) };
  }

  let names = [];
  try {
    names = JSON.parse(event.body || '{}').names || [];
  } catch {
    return { statusCode: 400, headers: cors, body: JSON.stringify({ error: 'Invalid JSON body' }) };
  }

  const results = {};
  for (const name of names.slice(0, 25)) {
    results[name] = await lookupArtist(name);
    await sleep(1100);
  }

  return { statusCode: 200, headers: cors, body: JSON.stringify(results) };
};
