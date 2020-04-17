# App

App shows weather information

# Run

In order to run the app follow steps below:

1. Make sure you are in the root directory. Install dependencies typing `npm install`.
2. Start the app typing `npm run start`. App should start autmatically on port `3000`.

# About

App uses `react-router` to route through two routes:

1. `/` - Shows form to search throught the OpenWeatherAPI. Use is allowed to type the city name and sends request to the API. Results are saved to the `LocalStoreage`.
2. `/forecast/:cityId` - Shows forecast (temperatures and humidity) width query set to `CNT=5`.

# Tests

Right now I added just a simple test to `math.js` frile and `Dashboard.js`. In real app I would go through almost every components and login and write the tests to them.
