# Node.js Task - 2 – Weather App

> A Node.js project for training on using APIs and fetching weather information based on a country name.

## 📌 Overview

This project was developed for hands-on practice with:

- Using Node.js.
- Working with APIs like MapTiler Geocoding and WeatherAPI.
- Fetching location coordinates (Latitude & Longitude) and converting them to weather information.
- Handling errors such as invalid API key, country not found, or network issues.
- Organizing code across multiple files: `app.js`, `geocode.js`, `forecast.js`.

## ⚡ How to Run

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file for storing your API keys:

```env
MAPTILER_KEY=your_maptiler_api_key_here
WEATHER_API_KEY=your_weatherapi_key_here
```

3. Run the app and pass the country name as an argument:

```bash
node app.js "Country Name"
```

**Example:**

```bash
node app.js Syria
```

## ✅ Output

When executed, the app will display:

- Country name
- City name
- Latitude & Longitude
- Current temperature
- Weather condition (Cloudy, Sunny, Rainy, etc.)

## ⚠️ Error Handling

- ❌ **API Error**: If the API key is invalid.
- ❌ **Location not found**: If the country is not found.
- ❌ **Invalid response from service**: If the API response is invalid.
- ❌ **Network error**: If the connection to the API or internet fails.

## 🗂️ Project Structure

```
NODEJS-TASK-2/
├─ app.js
├─ data/
│  ├─ geocode.js
│  └─ forecast.js
├─ package.json
├─ package-lock.json
└─ .gitignore
```

## 💡 Notes

- Never share your API keys publicly. Use `.env` and `.gitignore`.
- This project is for training and learning purposes only.
