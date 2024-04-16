import axios from "axios";

const API_KEY = "acdff23be7c5aa0853d2f46c732154d9";
const BASE_URL = "http://api.openweathermap.org/data/2.5/weather";

export const fetchWeatherData = async (city) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};
