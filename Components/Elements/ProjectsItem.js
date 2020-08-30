import React, { Fragment, useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback, Animated, FlatList, Image, Linking } from "react-native";

const ProjectsItem = ({ name, id, image_url, url }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Linking.openURL(url);
      }}
    >
      <View style={styles.project_container}>
        <Image
          style={styles.logo}
          source={{
            uri: image_url
          }}
        />
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50
  },
  project_container: {
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    width: 200,
    height: 200
  },
  text: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    fontSize: 30,
    fontWeight: "bold"
  }
});

export default ProjectsItem;
