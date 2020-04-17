# App

App shows weather information

# Run

In order to run the app follow steps below:

1. Make sure you are in the root directory. Install dependencies typing `npm install`.
2. Start the app typing `npm run start`. The app should start automatically on port `3000`.

# About

App uses `react-router` to route through two routes:

1. `/` - Shows form to search through the OpenWeatherAPI. Use is allowed to type the city name and sends a request to the API. Results are saved to the `LocalStoreage`.
2. `/forecast/:cityId` - Shows forecast (temperatures and humidity) width query set to `CNT=5`.
   s

# Tests

Right now I added just a simple test to `math.js` file and `Dashboard.js`. In the real app, I would go through almost every component and login and write the tests to them.

# Additional information

### Boillerplate

I am using `Create-React-App` as I found it really useful and thanks to it I save a huge amount of time to implement startup boilerplate.
