import firebase from 'firebase';

try {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBvmYsZ8kbz3hb7kPVfaJ_B8hzINfQh5_8",
    authDomain: "react-todo-app-c14dc.firebaseapp.com",
    databaseURL: "https://react-todo-app-c14dc.firebaseio.com",
    storageBucket: "react-todo-app-c14dc.appspot.com",
    messagingSenderId: "489899048054"
  };
  firebase.initializeApp(config);
} catch (e) {

}
export var firebaseRef = firebase.database().ref();
export default firebase;
