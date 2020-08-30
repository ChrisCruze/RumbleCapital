import React from "react";
import { StyleSheet, View } from "react-native";

import Projects from "./Components/Pages/Projects";

export default function App() {
  return (
    <View style={styles.container}>
      <Projects />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
