async function getWeather(cityInput) {
    try {
        let lat, lon, city;

        if (cityInput) {
            const searchRes = await searchCity(cityInput);
            if (!searchRes) return await getWWeather(cityInput);
            lat = searchRes.latitude;
            lon = searchRes.longitude;
            city = searchRes.name;
        } else {
            const loc = await getIpLocation();
            if (!loc) return await getWWeather("");
            lat = loc.lat;
            lon = loc.lon;
            city = loc.city;
        }

        // Fetch Weather and Air Quality in parallel
        const [weatherData, aqiData] = await Promise.all([
            getOpenMeteoWeather(lat, lon),
            getOpenMeteoAirQuality(lat, lon),
        ]);

        if (!weatherData) return await getWWeather(city);

        const today = weatherData.daily;
        // Process Wind
        let windydesc = getWindDescription(
            today.windspeed_10m_max[0],
            today.winddirection_10m_dominant[0]
        );

        // Process Weather Text and Emoji
        const weatherCode = today.weathercode[0];
        const { text, emoji } = wmoToWeather(weatherCode);
        const textDay = emoji + text;

        // Process Moon Phase
        const moonPhaseStr = getMoonPhase(new Date());

        // Process Air Quality
        const aqiVal = aqiData ? aqiData.us_aqi : 0;
        const airCategory = getAqiCategory(aqiVal);

        // Construct Description
        // Format: ${city} ${textDay}, ${tempMin}~${tempMax}C ${airCategory} ${windydesc} ${moonPhaseStr}
        let desc = `${city} ${textDay}, ${today.temperature_2m_min[0]}~${today.temperature_2m_max[0]}°C ${airCategory} ${windydesc} ${moonPhaseStr}`;
        return desc;
    } catch (e) {
        console.error("Weather Error:", e);
        return await getWWeather(cityInput);
    }
}

// wttr.in Fallback
async function getWWeather(city) {
    if (city === undefined) city = "";
    try {
        let result = await fetch("https://wttr.in/" + city + "?format=%l:+%c+%t+%w").then(res =>
            res.text()
        );
        result = result.replace(/:/g, "").replace(/\+/g, "").replace(", China", "");
        return result;
    } catch (e) {
        return "Weather Unavailable";
    }
}

// API 1: IP Geolocation (ip-api.com) - English
async function getIpLocation() {
    try {
        // lang=en for English
        const res = await fetch("http://ip-api.com/json/?lang=en").then(res => res.json());
        if (res.status === "success") {
            return {
                lat: res.lat,
                lon: res.lon,
                city: res.city,
            };
        }
    } catch (e) {
        console.error("IP Location Error:", e);
    }
    return null;
}

// API 2: City Search (Open-Meteo Geocoding)
async function searchCity(city) {
    try {
        const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`;
        const res = await fetch(url).then(r => r.json());
        if (res.results && res.results.length > 0) {
            return res.results[0];
        }
    } catch (e) {
        console.error("City Search Error:", e);
    }
    return null;
}

// API 3: Weather Data (Open-Meteo)
async function getOpenMeteoWeather(lat, lon) {
    try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weathercode,temperature_2m_max,temperature_2m_min,windspeed_10m_max,winddirection_10m_dominant&current_weather=true&timezone=auto`;
        const res = await fetch(url).then(r => r.json());
        return res;
    } catch (e) {
        console.error("OpenMeteo Weather Error:", e);
        return null;
    }
}

// API 4: Air Quality (Open-Meteo)
async function getOpenMeteoAirQuality(lat, lon) {
    try {
        const url = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lon}&current=us_aqi,pm10,pm2_5&timezone=auto`;
        const res = await fetch(url).then(r => r.json());
        return res.current;
    } catch (e) {
        console.error("OpenMeteo AQI Error:", e);
        return null;
    }
}

// Helper: Wind Description (English)
function getWindDescription(speedKmH, angle) {
    if (speedKmH < 12) return "Light Breeze";
    if (speedKmH < 39) return "Fresh Breeze";

    // Calculate direction string
    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    const index = Math.round(angle / 45) % 8;
    const dirStr = directions[index];

    // Approx beaufort scale from km/h
    let scale = 0;
    if (speedKmH < 1) scale = 0;
    else if (speedKmH < 6) scale = 1;
    else if (speedKmH < 12) scale = 2;
    else if (speedKmH < 20) scale = 3;
    else if (speedKmH < 29) scale = 4;
    else if (speedKmH < 39) scale = 5;
    else if (speedKmH < 50) scale = 6;
    else if (speedKmH < 62) scale = 7;
    else scale = 8;

    return `Wind ${dirStr} Force ${scale}`;
}

// Helper: AQI Category (English)
function getAqiCategory(aqi) {
    if (aqi <= 50) return "Good";
    if (aqi <= 100) return "Moderate";
    if (aqi <= 150) return "Unhealthy for Sensitive Groups";
    if (aqi <= 200) return "Unhealthy";
    if (aqi <= 300) return "Very Unhealthy";
    return "Hazardous";
}

// Helper: Moon Phase Calculator (English)
function getMoonPhase(date) {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    let c = 0;
    let e = 0;
    let jd = 0;
    let b = 0;

    if (month < 3) {
        year--;
        month += 12;
    }

    ++month;
    c = 365.25 * year;
    e = 30.6 * month;
    jd = c + e + day - 694039.09;
    jd /= 29.5305882;
    b = parseInt(jd);
    jd -= b;
    b = Math.round(jd * 8);

    if (b >= 8) b = 0;

    const moons = {
        0: "🌑New Moon",
        1: "🌒Waxing Crescent",
        2: "🌓First Quarter",
        3: "🌔Waxing Gibbous",
        4: "🌕Full Moon",
        5: "🌖Waning Gibbous",
        6: "🌗Last Quarter",
        7: "🌘Waning Crescent",
    };
    return moons[b];
}

// Helper: Weather Code to Text & Emoji (WMO 4677) - English
function wmoToWeather(code) {
    switch (code) {
        case 0:
            return { text: "Clear", emoji: "🌞" };
        case 1:
            return { text: "Mainly Clear", emoji: "🌤" };
        case 2:
            return { text: "Partly Cloudy", emoji: "⛅" };
        case 3:
            return { text: "Overcast", emoji: "☁️" };
        case 45:
        case 48:
            return { text: "Fog", emoji: "🌫" };
        case 51:
        case 53:
        case 55:
            return { text: "Drizzle", emoji: "🌧" };
        case 56:
        case 57:
            return { text: "Freezing Drizzle", emoji: "🌧" };
        case 61:
        case 63:
        case 65:
            return { text: "Rain", emoji: "🌧" };
        case 66:
        case 67:
            return { text: "Freezing Rain", emoji: "❄️" };
        case 71:
        case 73:
        case 75:
        case 77:
            return { text: "Snow", emoji: "❄️" };
        case 80:
        case 81:
        case 82:
            return { text: "Showers", emoji: "🌧" };
        case 85:
        case 86:
            return { text: "Snow Showers", emoji: "❄️" };
        case 95:
        case 96:
        case 99:
            return { text: "Thunderstorm", emoji: "⛈" };
        default:
            return { text: "Unknown", emoji: "❓" };
    }
}

module.exports = getWeather;
