import React, { Fragment, useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback, Animated, FlatList, Image, Linking } from "react-native";

const ProjectsItem = ({ name, id, image_url, url }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Linking.openURL(url);
      }}
    >
      <View>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: image_url
          }}
        />
        <Text>{name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50
  },
  tinyLogo: {
    width: 50,
    height: 50
  },
  logo: {
    width: 66,
    height: 58
  }
});

export default ProjectsItem;
