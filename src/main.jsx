import React, { lazy, Suspense } from "react";  // Add Suspense
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ClerkProvider, SignIn } from "@clerk/clerk-react";
import ProtectedRoute from "./components/ProtectedRoute";
// all components are loading lazy
const Layout = lazy(() => import("./layouts/Layout"));
const Welcome = lazy(() => import("./pages/Welcome"));
const Calender = lazy(() => import("./pages/Calender"));
const PrayerTimes = lazy(() => import("./pages/PrayerTimes"));
const Settings = lazy(() => import("./pages/Settings"));
const Recommended = lazy(() => import("./pages/Recommended"));
const Hadith = lazy(() => import("./pages/Hadith"));
const Ai = lazy(() => import("./pages/Ai"));
const Progress = lazy(() => import("./pages/Progress"));
const NoPage = lazy(() => import("./pages/NoPage"));
const SalahTutorial = lazy(() => import("./pages/SalahTutorial"));
// react query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
// ErrorBoundary
import ErrorBoundary from "./components/ErrorBoundary";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ClerkProvider
    publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}
    afterSignInUrl="/dashboard"
    afterSignUpUrl="/dashboard"
    signInUrl="/"
    signUpUrl="/"
    navigateUrl="/dashboard"
    navigate={(to) => navigate(to, { replace: true })} // Add this line
  >
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ErrorBoundary>
            <Suspense fallback={<div className="h-screen w-screen flex items-center justify-center">Loading...</div>}>
              <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/sign-in/*" element={
                  <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
                    <SignIn routing="path" path="/sign-in" />
                  </div>
                } />
                <Route path="/sign-up/*" element={
                  <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
                    <SignIn routing="path" path="/sign-up" />
                  </div>
                } />
                <Route
                  path="/dashboard/*"  // Add wildcard to handle nested routes
                  element={
                    <ProtectedRoute>
                      <Layout />
                    </ProtectedRoute>
                  }
                >
                  <Route index element={<Calender />} />
                  <Route path="prayer-times" element={<PrayerTimes />} />
                  <Route path="settings" element={<Settings />} />
                  <Route path="recommended" element={<Recommended />} />
                  <Route path="hadith" element={<Hadith />} />
                  <Route path="ai" element={<Ai />} />
                  <Route path="progress" element={<Progress />} />
                  <Route path="salah-tutorial" element={<SalahTutorial />} />
                  <Route path="*" element={<NoPage />} />
                </Route>
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  </ClerkProvider>
);
