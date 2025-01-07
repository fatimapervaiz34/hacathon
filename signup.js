

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";



const firebaseConfig = {
    apiKey: "AIzaSyAxKWD7Mpq0JZVVd08asxVJyntv5bGx004",
    authDomain: "signup-hacathon.firebaseapp.com",
    projectId: "signup-hacathon",
    storageBucket: "signup-hacathon.firebasestorage.app",
    messagingSenderId: "366641068429",
    appId: "1:366641068429:web:6c64566f082d9ecea3e5c4",
    measurementId: "G-T842417C6G"
};

const app = initializeApp(firebaseConfig);
function showMessage(message, divId) {
    var messageDiv = document.getElementById(divId);
    messageDiv.style.display = "block";
    messageDiv.innerHTML = message;
    messageDiv.style.opacity = 1;
    setTimeout(function () {
        messageDiv.style.opacity = 0;
    }, 5000);
}

const signUp = document.getElementById('signup');
signUp.addEventListener('click', (event) => {
    console.log("asdashd")
    event.preventDefault();
    const email = document.getElementById('r22Email').value;
    const password = document.getElementById('r22Password').value;
    const firstName = document.getElementById('fName').value;
    const lastName = document.getElementById('lName').value;

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential)
        })
        .catch((error) => {
            const errorCode = error.code;
            console.log(error)
        })
});

