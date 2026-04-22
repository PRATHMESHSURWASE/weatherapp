# 🌤️ Weather App

## 📸 Screenshots

| Pune | Delhi |
|------|-------|
| ![Pune](./screenshots/Screenshot%202026-04-22%20150701.png) | ![Delhi](./screenshots/Screenshot%202026-04-22%20150732.png) |

| London | Hong Kong |
|--------|-----------|
| ![London](./screenshots/Screenshot%202026-04-22%20150749.png) | ![HongKong](./screenshots/Screenshot%202026-04-22%20150808.png) |

> Weather icons change dynamically based on conditions — sunny ☀️, cloudy ⛅, rainy 🌧️ and more.

---

## ✨ Features

- 🔍 Search weather by city name
- 🌡️ Real-time temperature in °C
- 💧 Humidity percentage
- 🌬️ Wind speed in km/h
- 🌥️ Dynamic weather icons based on conditions
- ⚠️ Error handling for invalid city names
- 🎨 Beautiful teal-to-purple gradient UI
- 📱 Responsive design — works on mobile & desktop

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| HTML5 | Structure & markup |
| CSS3 | Styling, gradient UI & responsive layout |
| JavaScript (Vanilla) | Logic, API calls, DOM manipulation |
| OpenWeatherMap API | Real-time weather data |

---

## 📁 Project Structure

```
WEATHER-APP/
├── index.html          # Main HTML file
├── style.css           # Styling & gradient layout
├── script.js           # API calls & DOM logic
└── screenshots/        # Demo screenshots (optional)
```

---

## ⚙️ How It Works

1. User enters a city name and clicks the search button
2. A `fetch()` request hits the **OpenWeatherMap API**
3. The API returns weather data as JSON
4. JavaScript parses the response and updates the UI dynamically
5. Weather icon updates based on the condition code returned

```
User Input → fetch() → OpenWeatherMap API → JSON Response → DOM Update
```

---

## 🔑 API Setup

This project uses the [OpenWeatherMap API](https://openweathermap.org/api).

1. Go to [openweathermap.org](https://openweathermap.org/) and create a free account
2. Generate your API key from the dashboard
3. In `script.js`, replace the placeholder with your key:

```js
const apiKey = "YOUR_API_KEY_HERE";
```

> ⚠️ **Never push your real API key to GitHub.** Add it to `.gitignore` or use environment variables for production.

---

## 🧑‍💻 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/PRATHMESHSURWASE/weather-app.git
cd weather-app
```

### 2. Add your API key

Open `script.js` and paste your OpenWeatherMap API key.

### 3. Open in browser

```bash
# Just open index.html in your browser
# Or use the VS Code Live Server extension
```

---

## ⚠️ Known Limitations

- Free API tier has a **rate limit** (60 calls/min)
- API key is exposed in client-side JS — avoid using paid keys without a backend proxy
- No geolocation support (manual city search only)

---

## 💡 Future Improvements

- 📍 Auto-detect user location via Geolocation API
- 📅 5-day forecast view
- 🌙 Dark / Light mode toggle
- 🌐 Multi-language support

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Prathmesh Surwase**
- GitHub: [@PRATHMESHSURWASE](https://github.com/PRATHMESHSURWASE)
- LinkedIn: [Prathmesh Surwase](https://linkedin.com/in/prathmesh-surwase)

---

> ⭐ If you found this useful, consider starring the repo!
