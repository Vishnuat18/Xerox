// SMART PRINT HUB - Firebase Client Initialization & Utilities
import { initializeApp, getApps, getApp } from 'firebase/app';
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut,
  onAuthStateChanged,
  User as FirebaseUser
} from 'firebase/auth';
import { 
  getFirestore, 
  collection, 
  doc, 
  setDoc, 
  getDoc, 
  getDocs, 
  query, 
  where, 
  orderBy, 
  limit, 
  serverTimestamp, 
  addDoc 
} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics, isSupported } from 'firebase/analytics';

// Provided Firebase project configuration
export const firebaseConfig = {
  apiKey: "AIzaSyA2Q_FOzkOcaydLadbTzL5Q_CQPZDqM4pU",
  authDomain: "xoxz-945ca.firebaseapp.com",
  projectId: "xoxz-945ca",
  storageBucket: "xoxz-945ca.firebasestorage.app",
  messagingSenderId: "38655969799",
  appId: "1:38655969799:web:db6e67e3e51e83ea7ab8a2",
  measurementId: "G-RK9MW9M5M9"
};

// Singleton App Initialization
export const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();

// Google Auth Settings
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

// Analytics (Safe Client-side only)
export const initAnalytics = async () => {
  if (typeof window !== 'undefined' && await isSupported()) {
    return getAnalytics(app);
  }
  return null;
};

// --- AUTHENTICATION HELPERS ---

/**
 * Sign In or Sign Up with Google for Xerox Shop Owners
 */
export async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    const token = await user.getIdToken();
    return { user, token };
  } catch (error: any) {
    console.error('Google Sign-In Error:', error);
    throw error;
  }
}

/**
 * Sign In with Email & Password
 */
export async function loginWithEmail(email: string, pass: string) {
  try {
    const result = await signInWithEmailAndPassword(auth, email.trim(), pass);
    const token = await result.user.getIdToken();
    return { user: result.user, token };
  } catch (error: any) {
    console.error('Email Login Error:', error);
    throw error;
  }
}

/**
 * Sign Up with Email & Password
 */
export async function registerWithEmail(email: string, pass: string) {
  try {
    const result = await createUserWithEmailAndPassword(auth, email.trim(), pass);
    const token = await result.user.getIdToken();
    return { user: result.user, token };
  } catch (error: any) {
    console.error('Email Registration Error:', error);
    throw error;
  }
}

/**
 * Sign Out from Firebase
 */
export async function logoutFirebase() {
  await signOut(auth);
}

// --- FIRESTORE DATABASE HELPERS FOR CUSTOMERS & SHOPS ---

export interface CustomerProfileData {
  id?: string;
  fullName: string;
  phone: string;
  email?: string | null;
  createdAt?: any;
}

/**
 * Upsert Customer Profile in Firestore (Phone as key for universal identification)
 */
export async function saveCustomerToFirestore(profile: CustomerProfileData) {
  const cleanPhone = profile.phone.replace(/[^0-9]/g, '');
  if (!cleanPhone) return null;

  try {
    const customerRef = doc(db, 'customers', cleanPhone);
    const dataToSave = {
      fullName: profile.fullName,
      phone: cleanPhone,
      email: profile.email || null,
      updatedAt: serverTimestamp(),
    };
    await setDoc(customerRef, dataToSave, { merge: true });
    return { id: cleanPhone, ...dataToSave };
  } catch (err) {
    console.warn('Firestore customer save fallback:', err);
    return profile;
  }
}

/**
 * Fetch Customer Profile from Firestore by Phone
 */
export async function getCustomerFromFirestore(phone: string): Promise<CustomerProfileData | null> {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  if (!cleanPhone) return null;

  try {
    const customerRef = doc(db, 'customers', cleanPhone);
    const snap = await getDoc(customerRef);
    if (snap.exists()) {
      return snap.data() as CustomerProfileData;
    }
  } catch (err) {
    console.warn('Firestore customer fetch fallback:', err);
  }
  return null;
}

/**
 * Fetch Customer Orders History from Firestore
 */
export async function getCustomerOrdersFromFirestore(phone: string) {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  if (!cleanPhone) return [];

  try {
    const ordersCol = collection(db, 'orders');
    const q = query(
      ordersCol,
      where('customerPhone', '==', cleanPhone),
      orderBy('createdAt', 'desc'),
      limit(20)
    );
    const snap = await getDocs(q);
    return snap.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }));
  } catch (err) {
    console.warn('Firestore customer orders fetch fallback:', err);
    return [];
  }
}

/**
 * Save / Mirror Order in Firestore
 */
export async function saveOrderToFirestore(orderData: any) {
  try {
    const ordersCol = collection(db, 'orders');
    const docRef = await addDoc(ordersCol, {
      ...orderData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    return docRef.id;
  } catch (err) {
    console.warn('Firestore order save fallback:', err);
    return null;
  }
}

