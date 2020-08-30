import React, { Fragment, useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback, Animated, FlatList, Image, Linking } from "react-native";

const Title = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingBottom: 30, paddingTop: 25 },

  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#585858",
    textTransform: "uppercase",
    letterSpacing: 1
    // fontFamily: "afcamberwellone"
  }
});

export default Title;
