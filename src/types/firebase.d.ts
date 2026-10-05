// Firebase Type Fallbacks for next.js / bundler subpaths
declare module 'firebase/firestore' {
  export const getFirestore: any;
  export const collection: any;
  export const doc: any;
  export const setDoc: any;
  export const getDoc: any;
  export const getDocs: any;
  export const query: any;
  export const where: any;
  export const orderBy: any;
  export const limit: any;
  export const serverTimestamp: any;
  export const addDoc: any;
  export const onSnapshot: any;
  export const updateDoc: any;
  export const deleteDoc: any;
}

declare module 'firebase/storage' {
  export const getStorage: any;
  export const ref: any;
  export const uploadBytes: any;
  export const getDownloadURL: any;
}
