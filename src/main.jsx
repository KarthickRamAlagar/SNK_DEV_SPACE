import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Add your Clerk Publishable Key to the .env file");
}

// Theme customization (optional)
const customTheme = {
  baseTheme: "dark",
  variables: {
    colorPrimary: "#8b5cf6",
    colorPrimaryText: "#ffffff",
    fontFamily: "Inter, sans-serif",
  },
};

// Use environment variables for redirects
const AFTER_SIGN_IN = import.meta.env.VITE_CLERK_AFTER_SIGN_IN_URL;
const AFTER_SIGN_UP = import.meta.env.VITE_CLERK_AFTER_SIGN_UP_URL;
const AFTER_SIGN_OUT = import.meta.env.VITE_CLERK_AFTER_SIGN_OUT_URL;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      appearance={customTheme}
      afterSignInUrl={AFTER_SIGN_IN}
      afterSignUpUrl={AFTER_SIGN_UP}
      afterSignOutUrl={AFTER_SIGN_OUT}
    >
      <I18nextProvider i18n={i18n}>
        {/* Automatically handle Clerk sign-in state */}
        <SignedIn>
          <RouterProvider router={router} />
        </SignedIn>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      </I18nextProvider>
    </ClerkProvider>
  </React.StrictMode>,
);
