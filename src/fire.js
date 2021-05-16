import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAHknp0mtUZXTUR3MUZOx1H4mXIByGvjwg",
  authDomain: "bootstrap-login-435a1.firebaseapp.com",
  projectId: "bootstrap-login-435a1",
  storageBucket: "bootstrap-login-435a1.appspot.com",
  messagingSenderId: "288141530251",
  appId: "1:288141530251:web:da53d562c86a8da23a708e"
};
  
  const fire =firebase.initializeApp(firebaseConfig);

  export default fire;