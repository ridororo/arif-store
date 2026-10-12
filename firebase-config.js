// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC23PX4jrdI3LJCIu8zoIHYzdb-6tNoTcc",
  authDomain: "arif-store-9c532.firebaseapp.com",
  databaseURL: "https://arif-store-9c532-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "arif-store-9c532",
  storageBucket: "arif-store-9c532.firebasestorage.app",
  messagingSenderId: "231548527332",
  appId: "1:231548527332:web:2b169c5f43d6eea243c2f1",
  measurementId: "G-ML25D18LLS"
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app); // Ekspor Auth resmi

export const NO_WA_ADMIN = "6285832787212"; // Sesuaikan dengan nomor WA kamu