import React, { Fragment, useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback, Animated, FlatList } from "react-native";

const ProjectsItem = ({ name, id }) => {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};
export default ProjectsItem;
