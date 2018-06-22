<<<<<<< HEAD
import firebase from 'firebase';

var config = {
=======
// import firebase from 'firebase'
import { initializeApp } from 'firebase/firebase';

const app = initializeApp({
>>>>>>> 614ef7a5e9347a758a4a618f2160201bfe8bd7dc
        apiKey: "AIzaSyC9MVUZ6oI3TgvxA_srFFsmBw9VqH0wvag",
        authDomain: "bookstore-30ab2.firebaseapp.com",
        databaseURL: "https://bookstore-30ab2.firebaseio.com",
        projectId: "bookstore-30ab2",
        storageBucket: "bookstore-30ab2.appspot.com",
        messagingSenderId: "453633987189"};
var firebaseApp = firebase.initializeApp(config);
export const db = app.database();
<<<<<<< HEAD
this.dbref = firebaseApp.database().ref("bookRef");
=======
export const bookRef = db.ref('books');
>>>>>>> 614ef7a5e9347a758a4a618f2160201bfe8bd7dc
