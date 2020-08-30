import { StatusBar } from "expo-status-bar";
import React, { Fragment, useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback, Animated, FlatList } from "react-native";

import * as firebase from "firebase";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

var firebaseConfig = {
  apiKey: "AIzaSyBbaNyXEQHBVLf_CRx7pMOSeTycFKGwF5Q",
  authDomain: "rumble-capital.firebaseapp.com",
  databaseURL: "https://rumble-capital.firebaseio.com",
  projectId: "rumble-capital",
  storageBucket: "rumble-capital.appspot.com",
  messagingSenderId: "785518427005",
  appId: "1:785518427005:web:a485cd63313adf1be16a14",
  measurementId: "G-KDZ076HFDN"
};

firebase.initializeApp(firebaseConfig);

const firebaseProjectsGet = () => {
  const [firebaseProjects, updateFirebaseProjects] = useState([]);
  useEffect(() => {
    firebase
      .database()
      .ref("projects")
      .on("value", snapshot => {
        const database_val = snapshot.val();
        updateFirebaseProjects(database_val);
      });
  }, []);

  return firebaseProjects;
};

const Project = () => {
  return (
    <View>
      <Text>Test</Text>
    </View>
  );
};
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
        return Project({
          ...item
        });
      }}
    />
  );
};

export default function App() {
  const [scrollAnimation] = React.useState(new Animated.Value(0));
  const firebaseProjects = firebaseProjectsGet();
  return (
    <View style={styles.container}>
      <ProjectsList firebaseProjects={firebaseProjects} scrollAnimation={scrollAnimation} />
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
