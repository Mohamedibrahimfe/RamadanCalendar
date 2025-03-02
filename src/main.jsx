import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
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
  <Provider store={store}>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route
                path="/dashboard"
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
          </ErrorBoundary>
        </BrowserRouter>
      </QueryClientProvider>
    </AuthProvider>
  </Provider>
);
