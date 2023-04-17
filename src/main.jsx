import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyBz4WpJWJO3iUktq9yDdxMgMxk2U_rfe1E",
  authDomain: "emanuelpracticas.firebaseapp.com",
  projectId: "emanuelpracticas",
  storageBucket: "emanuelpracticas.appspot.com",
  messagingSenderId: "1001889669397",
  appId: "1:1001889669397:web:fee54767f5fe8bd944891c",
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
