This is your new *vault*.

Make a note of something, [[create a link]], or try [the Importer](https://help.obsidian.md/Plugins/Importer)!

When you're ready, delete this note and make the vault your own.

```widget
ID: daily-affirmations
---
---
---
{
  "quote": {
    "author": "Marquis Vauvenargues",
    "text": "Wicked people are always surprised to find ability in those that are good."
  },
  "time": "06:48 AM"
}
```




```widget
ID: weather-atmosphere
<div class="widget-card" id="main-card">
  
  <div class="header">
    <div class="location-group">
      <span class="pin-icon">📍</span>
      <span id="city-name" class="city-name">Locating...</span>
    </div>
    <button id="btn-search" class="icon-btn">🔍</button>
  </div>

  
  <div id="search-panel" class="search-overlay hidden">
    <div class="search-box">
      <input type="text" id="inp-city" placeholder="City name (e.g. Tokyo)">
      <div class="search-actions">
        <button id="btn-go" class="btn-primary">Search</button>
        <button id="btn-cancel" class="btn-sec">Cancel</button>
      </div>
      <div id="search-status" class="status-msg"></div>
    </div>
  </div>

  
  <div class="current-weather">
    <div class="icon-area" id="weather-icon">☀️</div>
    <div class="temp-area">
      <span id="temp-val">--</span><span class="unit">°</span>
    </div>
    <div class="condition" id="condition-text">Loading</div>
  </div>

  
  <div class="details-row">
    <div class="detail">
      <span class="lbl">Wind</span>
      <span class="val" id="wind-val">--</span>
    </div>
    <div class="detail">
      <span class="lbl">Humidity</span>
      <span class="val" id="hum-val">--</span>
    </div>
  </div>

  
  <div class="forecast-row" id="forecast-container">
    
  </div>

  <div class="footer-update">
    <span id="last-update">Updated: Just now</span>
    <button id="btn-refresh" class="refresh-btn">↻</button>
  </div>
</div>
---
:host { display: block; margin: 1rem 0; font-family: var(--font-interface); } * { box-sizing: border-box; } .widget-card { background: linear-gradient(135deg, #3b82f6, #2563eb); color: white; border-radius: 24px; padding: 1.5rem; box-shadow: var(--shadow-l); max-width: 360px; margin: 0 auto; position: relative; overflow: hidden; transition: background 0.5s ease; } /* Dynamic Backgrounds */ .bg-sunny { background: linear-gradient(135deg, #f59e0b, #ea580c); } .bg-cloudy { background: linear-gradient(135deg, #64748b, #475569); } .bg-rain { background: linear-gradient(135deg, #374151, #1f2937); } .bg-night { background: linear-gradient(135deg, #0f172a, #1e293b); } .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; } .location-group { display: flex; align-items: center; gap: 6px; font-weight: 700; font-size: 1rem; text-transform: uppercase; letter-spacing: 0.5px; } .icon-btn { background: rgba(255,255,255,0.2); border: none; width: 32px; height: 32px; border-radius: 50%; color: white; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background 0.2s; } .icon-btn:hover { background: rgba(255,255,255,0.4); } .current-weather { text-align: center; margin: 1.5rem 0; } .icon-area { font-size: 4rem; margin-bottom: 0.5rem; filter: drop-shadow(0 4px 10px rgba(0,0,0,0.2)); animation: float 3s ease-in-out infinite; } @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } } .temp-area { font-size: 3.5rem; font-weight: 800; line-height: 1; } .unit { font-size: 1.5rem; vertical-align: top; opacity: 0.8; } .condition { font-size: 1rem; font-weight: 600; opacity: 0.9; text-transform: capitalize; margin-top: 4px; } .details-row { display: flex; justify-content: space-around; background: rgba(255,255,255,0.15); border-radius: 12px; padding: 10px; margin-bottom: 1.5rem; backdrop-filter: blur(4px); } .detail { display: flex; flex-direction: column; align-items: center; } .lbl { font-size: 0.65rem; text-transform: uppercase; opacity: 0.8; } .val { font-size: 0.9rem; font-weight: 700; } .forecast-row { display: flex; justify-content: space-between; margin-top: 1rem; border-top: 1px solid rgba(255,255,255,0.2); padding-top: 1rem; } .day-col { display: flex; flex-direction: column; align-items: center; gap: 4px; } .day-name { font-size: 0.75rem; font-weight: 700; opacity: 0.8; } .day-icon { font-size: 1.2rem; } .day-temp { font-size: 0.9rem; font-weight: 700; } .footer-update { display: flex; justify-content: space-between; align-items: center; margin-top: 1rem; font-size: 0.7rem; opacity: 0.6; } .refresh-btn { background: none; border: none; color: white; cursor: pointer; font-size: 1rem; transition: transform 0.5s; } .refresh-btn:hover { transform: rotate(180deg); } /* Search Overlay */ .search-overlay { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.85); z-index: 10; display: flex; align-items: center; justify-content: center; opacity: 0; pointer-events: none; transition: opacity 0.2s; backdrop-filter: blur(5px); } .search-overlay:not(.hidden) { opacity: 1; pointer-events: all; } .search-box { background: white; padding: 1.5rem; border-radius: 16px; width: 85%; color: #1e293b; text-align: center; } .search-box input { width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 1rem; margin-bottom: 10px; outline: none; } .search-actions { display: flex; gap: 8px; } .search-actions button { flex: 1; padding: 8px; border-radius: 8px; border: none; font-weight: 700; cursor: pointer; } .btn-primary { background: #3b82f6; color: white; } .btn-sec { background: #e2e8f0; color: #475569; } .status-msg { margin-top: 8px; font-size: 0.8rem; color: #ef4444; min-height: 1.2em; }
---
var root = api.root;
var saveState = api.saveState;
var getState = api.getState;

var state = {
  city: 'Paris',
  lat: 48.8566,
  lon: 2.3522,
  lastFetch: 0,
  data: null
};

function getIcon(code, isDay) {
  // WMO Weather Codes
  if(code === 0) return isDay ? '☀️' : '🌙';
  if(code >= 1 && code <= 3) return isDay ? '⛅' : '☁️';
  if(code >= 45 && code <= 48) return '🌫️';
  if(code >= 51 && code <= 67) return '🌧️';
  if(code >= 71 && code <= 77) return '❄️';
  if(code >= 80 && code <= 82) return '🌧️';
  if(code >= 95) return '⛈️';
  return '🌡️';
}

function getThemeClass(code, isDay) {
  if(!isDay) return 'bg-night';
  if(code <= 1) return 'bg-sunny';
  if(code <= 48) return 'bg-cloudy';
  return 'bg-rain';
}

function render() {
  root.getElementById('city-name').innerText = state.city;
  
  if (!state.data) return;
  
  var current = state.data.current;
  var daily = state.data.daily;
  
  // Current
  var code = current.weather_code;
  var isDay = current.is_day === 1;
  
  root.getElementById('temp-val').innerText = Math.round(current.temperature_2m);
  root.getElementById('condition-text').innerText = 'Code ' + code;
  root.getElementById('wind-val').innerText = current.wind_speed_10m + ' km/h';
  root.getElementById('hum-val').innerText = current.relative_humidity_2m + '%';
  
  // Icon & Theme
  root.getElementById('weather-icon').innerText = getIcon(code, isDay);
  var card = root.getElementById('main-card');
  card.className = 'widget-card ' + getThemeClass(code, isDay);
  
  // Forecast (Next 3 Days)
  var forecastHtml = '';
  // We skip index 0 because it is today, we want next days
  for(var i=1; i<=3; i++) {
      var date = new Date(daily.time[i]);
      var dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
      var maxTemp = Math.round(daily.temperature_2m_max[i]);
      var dCode = daily.weather_code[i];
      var dIcon = getIcon(dCode, true);
      
      forecastHtml += '<div class="day-col">' +
        '<span class="day-name">' + dayName + '</span>' +
        '<span class="day-icon">' + dIcon + '</span>' +
        '<span class="day-temp">' + maxTemp + '°</span>' +
      '</div>';
  }
  root.getElementById('forecast-container').innerHTML = forecastHtml;
  
  // Update Time
  var d = new Date(state.lastFetch);
  root.getElementById('last-update').innerText = 'Updated: ' + d.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}

function fetchData() {
  var url = 'https://api.open-meteo.com/v1/forecast?latitude=' + state.lat + '&longitude=' + state.lon + '&current=temperature_2m,relative_humidity_2m,is_day,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max&timezone=auto';
  
  root.getElementById('condition-text').innerText = 'Updating...';
  
  fetch(url).then(function(r){ return r.json(); }).then(function(data) {
      state.data = data;
      state.lastFetch = Date.now();
      render();
      saveState(state);
  }).catch(function(e) {
      root.getElementById('condition-text').innerText = 'Error';
  });
}

function searchCity() {
  var input = root.getElementById('inp-city');
  var msg = root.getElementById('search-status');
  var query = input.value.trim();
  
  if(!query) return;
  msg.innerText = 'Searching...';
  
  var url = 'https://geocoding-api.open-meteo.com/v1/search?name=' + query + '&count=1&language=en&format=json';
  
  fetch(url).then(function(r){ return r.json(); }).then(function(data) {
      if(data.results && data.results.length > 0) {
          var res = data.results[0];
          state.city = res.name;
          state.lat = res.latitude;
          state.lon = res.longitude;
          toggleSearch(false);
          msg.innerText = '';
          fetchData();
      } else {
          msg.innerText = 'City not found.';
      }
  }).catch(function() {
      msg.innerText = 'Network error.';
  });
}

function toggleSearch(show) {
  var el = root.getElementById('search-panel');
  if(show) {
      el.classList.remove('hidden');
      root.getElementById('inp-city').focus();
  } else {
      el.classList.add('hidden');
  }
}

async function init() {
  var saved = await getState();
  if (saved) state = saved;
  
  render();
  
  // Auto-fetch if data is older than 1 hour or missing
  if(!state.data || (Date.now() - state.lastFetch > 3600000)) {
      fetchData();
  }
  
  root.getElementById('btn-search').onclick = function() { toggleSearch(true); };
  root.getElementById('btn-cancel').onclick = function() { toggleSearch(false); };
  root.getElementById('btn-go').onclick = searchCity;
  root.getElementById('btn-refresh').onclick = fetchData;
  
  // Enter key support
  root.getElementById('inp-city').onkeydown = function(e) {
      if(e.key === 'Enter') searchCity();
  };
}

init();
---
{
  "quote": {
    "author": "Ralph Emerson",
    "text": "We aim above the mark to hit the mark."
  },
  "time": "03:35 AM"
}
```


