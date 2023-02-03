// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs
} from 'firebase/firestore'

import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBmaZGINawXL-hM92niV_g30Gw-tswF9rg",
    authDomain: "boom-gaming-931e5.firebaseapp.com",
    projectId: "boom-gaming-931e5",
    storageBucket: "boom-gaming-931e5.appspot.com",
    messagingSenderId: "860125823825",
    appId: "1:860125823825:web:91e1270b4f2149fcc10970",
    measurementId: "G-FYTC9XJRH7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const db = getFirestore();

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const createUserDocumentFromAuth = async (userAuth, additionalinformations) => {

    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();


        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalinformations
            })
        } catch (error) {
            console.log('Error creating the user', error.message);
        }
    }
    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {

    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);

}

export const signInAuthWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);


/*
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        const data = user.providerData[0];
        const { displayName } = data;
        console.log(displayName)
        // ...
    } else {
        // User is signed out
        // ...
    }
});
*/