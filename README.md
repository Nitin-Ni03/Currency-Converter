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

## Features

- Real-time currency conversion using `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api`
- Currency selection dropdowns preloaded with global currency codes
- Country flags shown for both "From" and "To" currencies
- Input validation to ensure the amount is at least `1`
- Swap button to quickly reverse conversion direction

## Usage

1. Open `index.html` in a web browser.
2. Enter an amount in the "Amount" field.
3. Select the source currency and the target currency.
4. Click "Get Exchange Rate" to see the result.
5. Click the swap icon to reverse the selected currencies.

## Notes

- The app loads exchange rates from the external currency API and requires an internet connection.
- Flags are loaded from `https://flagsapi.com`.

## License

This project is provided as-is for learning and demonstration purposes.
