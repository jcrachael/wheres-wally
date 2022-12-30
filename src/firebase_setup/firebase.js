import { initializeApp } from "firebase/app";
import { getFirebaseConfig } from "./firebaseConfig";
import { getFirestore } from "@firebase/firestore";

// This  app's Firebase configuration
const firebaseConfig = getFirebaseConfig(getFirebaseConfig);

// Initialise Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
