import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBvmYsZ8kbz3hb7kPVfaJ_B8hzINfQh5_8",
  authDomain: "react-todo-app-c14dc.firebaseapp.com",
  databaseURL: "https://react-todo-app-c14dc.firebaseio.com",
  storageBucket: "react-todo-app-c14dc.appspot.com",
  messagingSenderId: "489899048054"
};
firebase.initializeApp(config);
var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '2.0'
  },
  isRunning: true,
  user: {
    name: 'Jomppe',
    age: 30
  }
});
var todosRef = firebaseRef.child('todos');
todosRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
})

todosRef.push({
  id: 1,
  text: 'Do something'
});
todosRef.push({
  id: 2,
  text: 'Play some videogames'
});


var notesRef = firebaseRef.child('notes');

notesRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
});
notesRef.on('child_changed', (snapshot) => {
  console.log('child_changed', snapshot.key, snapshot.val());
});
notesRef.on('child_removed', (snapshot) => {
  console.log('child_removed', snapshot.key, snapshot.val());
});

var newNoteRef = notesRef.push();
newNoteRef.set({
  text: 'Walk the dog'
});
console.log('Note id', newNoteRef.key);
// firebaseRef.child('user').on('value', (snapshot) => {
//   console.log('change in user', snapshot.val());
// });
// firebaseRef.child('user').update({
//   name: 'Definitely Not Jomppe'
// });
// firebaseRef.child('app').update({
//   name: 'Not Todo'
// })
// firebaseRef.on('value', (snapshot) => {
//   console.log('Got value', snapshot.val());
// });
// firebaseRef.off();
//
// firebaseRef.update({isRunning: false});
// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('Got entire database', snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('Unable to fetch value', e);
// })


// firebaseRef.update({
//   isRunning: null
// });
// firebaseRef.child('user/age').remove();
// firebaseRef.child('app').update({
//   version: '2.0',
//   name: null
// });
// firebaseRef.update({
//   isRunning: false,
//   'app/name' : 'Todo Application'
// });

// firebaseRef.child('app').update({
//   name: 'Todo Application'
// }).then(() => {console.log('update worked')}, (e) => {console.log('update failed')})

// firebaseRef.update({
//   'app/name' : 'Todo Application',
//   'user/name' : 'Joonas'
// })
//
// firebaseRef.child('app').update({
//   name: 'Todo Application'
// })
// firebaseRef.child('user').update({
//   name: 'Joonas'
// })
