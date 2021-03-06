import { StatusBar } from "expo-status-bar";
import React, { Fragment, useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback, Animated, FlatList, SafeAreaView } from "react-native";
import { firebaseProjectsGet } from "../../firebase";
import ProjectsItem from "../Elements/ProjectsItem";
import Title from "../Elements/Title";
import "@expo/match-media";
import { useMediaQuery } from "react-responsive";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const ProjectsList = ({ scrollAnimation, firebaseProjects }) => {
  return (
    <AnimatedFlatList
      onScroll={Animated.event(
        [
          {
            nativeEvent: { contentOffset: { y: scrollAnimation } }
          }
        ],
        {
          useNativeDriver: true
        }
      )}
      // refreshing={loading}
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
      style={styles.list}
      data={firebaseProjects}
      keyExtractor={project => project.id}
      renderItem={({ item }) => {
        return ProjectsItem({
          ...item
        });
      }}
    />
  );
};

const Projects = () => {
  const isMobile = useMediaQuery({
    maxDeviceWidth: 1224,
    query: "(max-device-width: 1224px)"
  });
  const [scrollAnimation] = React.useState(new Animated.Value(0));
  const firebaseProjects = firebaseProjectsGet();
  return (
    <SafeAreaView style={styles.container}>
      {isMobile ? <Title text="Rumble Capital" /> : <Title text="Rumble Capital" />}
      <ProjectsList firebaseProjects={firebaseProjects} scrollAnimation={scrollAnimation} />
    </SafeAreaView>
  );
};

export default Projects;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 48,
    flexGrow: 1
  }
});
