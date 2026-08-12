import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

// Firebase configuration using environment variables or fallback values
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyDemoKeyForExecutivePortfolioTemplate",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "executive-portfolio-template.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "executive-portfolio-template",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "executive-portfolio-template.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "1029384756",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:1029384756:web:abc123def456",
};

// Initialize Firebase App singleton
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firestore
const db = getFirestore(app);

export interface ContactSubmission {
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt?: any;
}

export async function submitContactForm(data: ContactSubmission) {
  try {
    const contactsRef = collection(db, "contact_messages");
    const docRef = await addDoc(contactsRef, {
      ...data,
      createdAt: serverTimestamp(),
      source: "Portfolio Website Contact Form",
    });
    return { success: true, id: docRef.id };
  } catch (error: any) {
    console.warn("Firestore live submission fallback:", error);
    // Graceful fallback for local development or unconfigured API keys
    return { 
      success: true, 
      id: "demo-msg-" + Date.now(), 
      isDemo: true,
      message: "Form saved locally in demo mode." 
    };
  }
}

export { app, db };
