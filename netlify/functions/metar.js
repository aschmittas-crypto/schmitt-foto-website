exports.handler = async function (event) {
  const icao = (event.queryStringParameters && event.queryStringParameters.icao) || 'EDHI';

  try {
    const res = await fetch(
      `https://aviationweather.gov/api/data/metar?ids=${encodeURIComponent(icao)}&format=json`,
      { headers: { 'User-Agent': 'schmitt-foto.de METAR widget (info@schmitt-foto.de)' } }
    );

    if (!res.ok) throw new Error(`AviationWeather antwortete mit ${res.status}`);

    const data = await res.json();

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300' // 5 Min. Cache, da METAR nur alle ~30 Min. aktualisiert wird
      },
      body: JSON.stringify(data && data[0] ? data[0] : null)
    };
  } catch (err) {
    return {
      statusCode: 502,
      headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: err.message })
    };
  }
};
