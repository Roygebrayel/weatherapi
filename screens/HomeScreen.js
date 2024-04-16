import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { fetchWeatherData } from "../apis/weather";
import * as Location from "expo-location";

const HomeScreen = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Request permission to access location
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          console.error("Permission to access location was denied");
          return;
        }

        // Get current location
        const location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;

        // Fetch weather data based on current location
        const data = await fetchWeatherData(latitude, longitude);
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {weatherData && (
        <View>
          <Text style={styles.title}>Current Weather</Text>
          <Text style={styles.text}>City: {weatherData.name}</Text>
          <Text style={styles.text}>
            Temperature: {weatherData.main.temp}°C
          </Text>
          <Text style={styles.text}>
            Weather: {weatherData.weather[0].main}
          </Text>
          <Text style={styles.text}>
            Humidity: {weatherData.main.humidity}%
          </Text>
          <Text style={styles.text}>
            Wind Speed: {weatherData.wind.speed} m/s
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default HomeScreen;
