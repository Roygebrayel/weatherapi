
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { fetchWeatherData } from "../apis/weather";

const HomeScreen = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchWeatherData("London");
      setWeatherData(data);
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
