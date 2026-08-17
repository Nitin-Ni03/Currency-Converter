# Currency Converter

A lightweight web-based currency converter built with HTML, CSS, and JavaScript.

## Overview

This project provides a simple and polished currency conversion tool that lets users:

- enter an amount
- choose a source currency and a target currency
- view the converted amount with current exchange rates
- swap the selected currencies instantly

It uses a public currency API for live exchange rates and displays country flags for the selected currencies.

## Files

- `index.html` - page structure and layout
- `style.css` - responsive styling and UI design
- `code.js` - currency list and flag mapping logic
- `app.js` - API calls, user interaction, conversion calculation, and swap behavior

## Technical Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6+)
- **API:** Fawaz Ahmed's Currency API (CDN via jsdelivr)
- **Flags:** FlagsAPI.com for country flags
- **Styling:** Custom CSS with responsive design and animations
- **Architecture:** MVC-inspired pattern with separation of concerns

## Features

- Real-time currency conversion using `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api`
- Currency selection dropdowns preloaded with global currency codes
- Country flags shown for both "From" and "To" currencies
- Input validation to ensure the amount is at least `1`
- Swap button to quickly reverse conversion direction
- Fully responsive design that works on desktop, tablet, and mobile devices
- Smooth animations and transitions for better user experience

## How It Works

### Architecture & Design

The application follows a clean separation of concerns:

1. **HTML Structure (index.html)**
   - Semantic HTML5 markup for accessibility
   - Dropdowns for currency selection
   - Input field for amount entry
   - Display area for conversion results and exchange rate information

2. **Styling (style.css)**
   - Flexbox layout for responsive design
   - CSS Grid for component organization
   - Smooth transitions and hover effects
   - Color scheme optimized for readability
   - Mobile-first responsive approach with media queries

3. **Data & Mapping (code.js)**
   - Pre-loaded list of all supported currencies with ISO codes
   - Currency-to-country-flag mapping for visual display
   - Lookup tables for quick currency/flag resolution
   - No external dependencies required

4. **Application Logic (app.js)**
   - Event listeners for user interactions (input, dropdown changes, button clicks)
   - API calls to fetch real-time exchange rates
   - Conversion calculation and result formatting
   - Currency swap functionality with UI updates
   - Error handling and validation

### Conversion Flow

1. User enters an amount and selects source/target currencies
2. Clicking "Get Exchange Rate" triggers an API call to fetch current rates
3. Exchange rate data is received in JSON format with rates for all currency pairs
4. JavaScript calculates the conversion: `amount × exchange_rate`
5. Result is displayed with both the final amount and the exchange rate
6. Swap button instantly reverses the conversion direction and updates display

## Usage

1. Open `index.html` in a web browser.
2. Enter an amount in the "Amount" field.
3. Select the source currency and the target currency.
4. Click "Get Exchange Rate" to see the result.
5. Click the swap icon to reverse the selected currencies.


**Endpoint:** `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api`

The app uses the Fawaz Ahmed's Currency API to fetch real-time exchange rates.
- **Format:** The API provides exchange rates in JSON format
- **Currency Codes:** Supports all standard ISO 4217 currency codes (e.g., USD, EUR, GBP, INR)
- **Response Structure:** Exchange rates are organized by date and currency pairs
- **No Authentication:** The public API requires no authentication or API key
- **Rate Limiting:** Best efforts to handle public rate limits; ensure reasonable usage

### Flags API
**Endpoint:** `https://flagsapi.com`

Displays country flags corresponding to the selected currencies.
- **Flag Format:** SVG flags for modern browsers and optimal display
- **Usage:** Flags are dynamically loaded based on currency code (e.g., `/us.svg` for USD)
- **Size:** Flags scale responsively with the UI

## Notes

- The app loads exchange rates from the external currency API and requires an internet connection.
- Flags are loaded from `https://flagsapi.com`.
- Both APIs are publicly available and free to use with reasonable usage patterns.

## License

This project is provided as-is for learning and demonstration purposes.
