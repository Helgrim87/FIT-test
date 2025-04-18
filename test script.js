// test.js

const firebaseConfig = {
    apiKey: "AIzaSyDUC7mBCT4R_t3buPLDrDA-GQWGmYEyBnw",
    authDomain: "gf4l-ca7e2.firebaseapp.com",
    databaseURL: "https://gf4l-ca7e2-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "gf4l-ca7e2",
    storageBucket: "gf4l-ca7e2.appspot.com",
    messagingSenderId: "893712610424",
    appId: "1:893712610424:web:5b0db3683d1aff2667298d"
};

window.addEventListener('DOMContentLoaded', () => {
    try {
        firebase.initializeApp(firebaseConfig);
        const db = firebase.database();

        db.ref('test').once('value').then(snapshot => {
            document.getElementById('output').textContent = "Firebase is working! Data: " + JSON.stringify(snapshot.val());
        }).catch(error => {
            document.getElementById('output').textContent = "Error reading data: " + error;
        });
    } catch (error) {
        document.getElementById('output').textContent = "Firebase initialization error: " + error;
    }
});
