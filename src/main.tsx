import * as React from "react";
import ReactDOM from "react-dom/client";
import emailjs from "@emailjs/browser";
import { Toaster } from "sonner";

import App from "./app";

import "./index.css";

const rootEl = document.getElementById("root");

console.log("Vite Env Variables:", import.meta.env);

// Initialize EmailJS
emailjs.init({
  publicKey: import.meta.env.VITE_APP_EMAILJS_KEY,
});

// Render react app
ReactDOM.createRoot(rootEl!).render(
  <React.StrictMode>
    <Toaster
      theme="dark"
      richColors
      closeButton
      toastOptions={{
        style: { background: "#050816", opacity: 0.95 },
      }}
    />
    <App />
  </React.StrictMode>,
);
