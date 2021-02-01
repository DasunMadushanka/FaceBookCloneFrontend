import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWGX9XQUc0zByituVZqcpk7W0VPCPnP58",
  authDomain: "facebook-clone-fc8c1.firebaseapp.com",
  projectId: "facebook-clone-fc8c1",
  storageBucket: "facebook-clone-fc8c1.appspot.com",
  messagingSenderId: "798619832970",
  appId: "1:798619832970:web:9d3aaafb6571370503d373",
  measurementId: "G-D775R90SJP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = firebase.auth.GoogleAuthProvider();

export {auth,provider}
export default db