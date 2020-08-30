import React, { Fragment, useState, useEffect } from "react";

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

export const firebaseProjectsGet = () => {
  const [firebaseProjects, updateFirebaseProjects] = useState([]);
  useEffect(() => {
    firebase
      .database()
      .ref("projects")
      .on("value", snapshot => {
        const fbObject = snapshot.val();
        const newArr = [];
        Object.keys(fbObject).map((key, index) => {
          newArr.push(fbObject[key]);
        });
        updateFirebaseProjects(newArr);
      });
  }, []);

  return firebaseProjects;
};
