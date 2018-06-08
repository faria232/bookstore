import { intializeApp } from 'firebase';

const app = intializeApp({
        apiKey: "AIzaSyC9MVUZ6oI3TgvxA_srFFsmBw9VqH0wvag",
        authDomain: "bookstore-30ab2.firebaseapp.com",
        databaseURL: "https://bookstore-30ab2.firebaseio.com",
        projectId: "bookstore-30ab2",
        storageBucket: "bookstore-30ab2.appspot.com",
        messagingSenderId: "453633987189"});

export const db = app.database();
export const bookRef = db.ref('books');