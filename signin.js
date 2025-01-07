import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyAxKWD7Mpq0JZVVd08asxVJyntv5bGx004",
    authDomain: "signup-hacathon.firebaseapp.com",
    projectId: "signup-hacathon",
    storageBucket: "signup-hacathon.firebasestorage.app",
    messagingSenderId: "366641068429",
    appId: "1:366641068429:web:6c64566f082d9ecea3e5c4",
    measurementId: "G-T842417C6G"
};


const signIn = document.getElementById('signin')
signIn.addEventListener('click', (event) => {
    event.preventDefault();
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const email = document.getElementById('11email').value;
    const password = document.getElementById('11Password').value
    console.log(email + password);

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential)
            window.location.href = "./index.html"
        })
        .catch((error) => {
            const errorCode = error.code;
            console.log(error)
        })
})















