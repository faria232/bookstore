import firebase from 'firebase';

var config = {
        apiKey: "AIzaSyC9MVUZ6oI3TgvxA_srFFsmBw9VqH0wvag",
        authDomain: "bookstore-30ab2.firebaseapp.com",
        databaseURL: "https://bookstore-30ab2.firebaseio.com",
        projectId: "bookstore-30ab2",
        storageBucket: "bookstore-30ab2.appspot.com",
        messagingSenderId: "453633987189"};
var firebaseApp = firebase.initializeApp(config);
export const db = app.database();
this.dbref = firebaseApp.database().ref("bookRef");
