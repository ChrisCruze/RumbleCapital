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
export { firebaseConfig as firebase };
