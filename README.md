# CryptoTracker

CryptoTracker is a responsive frontend-only cryptocurrency tracking application built with React. It allows users to view real-time crypto prices, market statistics, and historical price charts using the CoinGecko API.

---

## Features

- Real-time cryptocurrency prices
- Top 10 coins by market cap (default view)
- Live search with auto-suggestions
- Multi-currency support (USD, INR, EUR)
- Individual coin detail pages
- Historical price chart (last 20 days)
- Loading spinner for better UX

---

## Tech Stack

- React (Vite)
- React Router DOM
- React Context API
- CoinGecko API
- react-google-charts
- CSS (custom styling)

---
## API Usage

CryptoTracker uses the **CoinGecko API** to fetch real-time and historical cryptocurrency data.

### APIs Used

- **Markets API**
  - Fetches top cryptocurrencies by market capitalization
  - Provides price, 24h change, market cap, and rank
  - Endpoint:
    ```
    /coins/markets
    ```

- **Coin Details API**
  - Fetches detailed information for a single cryptocurrency
  - Includes name, symbol, image, and market data
  - Endpoint:
    ```
    /coins/{coinId}
    ```


> CoinGecko demo API key is used for development purposes.

---

## Future Improvements

Planned enhancements for future versions of CryptoTracker:

- Pagination or infinite scrolling for large coin lists
- Debounced search for better performance
- Multiple chart ranges (7d, 30d, 90d, 1y)
- Watchlist feature with local storage
- Sorting by price, market cap, and percentage change
- Improved mobile responsiveness
- Error handling and fallback UI
- Backend integration for user accounts
- Deployment with CI/CD pipeline

---



## Project Structure

```text
src/
├── assets/
├── components/
│   ├── Home/
│   │   ├── Home.jsx
│   │   └── Home.css
│   ├── Coin/
│   │   ├── Coin.jsx
│   │   └── Coin.css
│   ├── LineChart/
│   │   ├── LineChart.jsx
│   │   └── LineChart.css
│   ├── Navbar/
│   │   ├── Navbar.jsx
│   └── Footer/
│       ├── Footer.jsx
│       └── Footer.css
├── context/
│   └── CoinContext.jsx
├── App.jsx
├── main.jsx
└── index.css
