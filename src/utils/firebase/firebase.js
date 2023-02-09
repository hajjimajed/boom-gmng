// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    getUser,
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




export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {

    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());

        batch.set(docRef, object);
    })


    await batch.commit();

    console.log('done');

}

export const getCategoriesAndDocuments = async (collectionKey) => {
    const collectionRef = collection(db, collectionKey);
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const { title, items } = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})



    return categoryMap;

}

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

export const currentUserData = async (currentUser) => {
    if (currentUser) {

        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);
        const datas = docSnap.data()
        return datas;

    }
}

