import { StatusBar } from "expo-status-bar";
import React, { Fragment, useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";

import * as firebase from "firebase";

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

const storeHighScore = (userId, score) => {
  firebase
    .database()
    .ref("projects/" + userId)
    .set({
      highscore: score
    });
};

export default function App() {
  firebaseProjectsGet();
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TouchableWithoutFeedback
        onPress={() => {
          alert("hi");
          storeHighScore("player two", "1");
        }}
      >
        <Text>Button</Text>
      </TouchableWithoutFeedback>
      <StatusBar style="auto" />
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
