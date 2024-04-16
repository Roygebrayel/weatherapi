import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather Details</Text>
      <Text style={styles.text}>
        Additional weather details will be displayed here.
      </Text>
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
  },
});

export default DetailsScreen;
