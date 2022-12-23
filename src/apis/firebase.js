import { isEmpty } from "class-validator";
import { initializeApp } from "firebase/app";
import { 
    createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, 
    onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, 
    signInWithPopup, signOut, updateProfile 
} from 'firebase/auth'
import { 
    doc, getDoc, setDoc, increment, getFirestore, addDoc, 
    collection, runTransaction, serverTimestamp, getDocs, writeBatch, updateDoc, query, where, orderBy, deleteDoc 
} from "firebase/firestore";
import { deleteObject, getDownloadURL, getStorage, ref, uploadString } from "firebase/storage";
import { get, getDatabase, set } from 'firebase/database'
import { FIREBASE_ERRORS } from "./errors";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const firestore = getFirestore(app)
const storage = getStorage(app)
const db = getDatabase(app)
const auth = getAuth()

export async function requestTest(newRequest) {
    try {
        
        const Request = {
            ...newRequest,
            createdAt: serverTimestamp()
        }
        // store the post in db
        const postDocRef = await addDoc(collection(firestore, 'leveltest'), Request)

        return 'success'
        
    } catch (error) {
        console.error('requestTest Error: ', error.message)
        return error.message
    }
}

export async function requestHelp(newRequest) {
    try {
        
        const Request = {
            ...newRequest,
            createdAt: serverTimestamp()
        }
        // store the post in db
        const postDocRef = await addDoc(collection(firestore, 'faqs'), Request)

        return 'success'
        
    } catch (error) {
        console.error('requestHelp Error: ', error.message)
        return error.message
    }
}

