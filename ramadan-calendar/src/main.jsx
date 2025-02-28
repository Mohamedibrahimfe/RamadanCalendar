import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./layouts/Layout";
import Welcome from "./pages/Welcome";
import Calender from "./pages/Calender";
import NoPage from "./pages/NoPage";
import Settings from "./pages/Settings";
import Hadith from "./pages/Hadith";
import Recommended from "./pages/Recommended";
import Ai from "./pages/Ai";
import Progress from "./pages/Progress";
import PrayerTimes from "./pages/PrayerTimes";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

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
                <Route path="*" element={<NoPage />} />
              </Route>
            </Routes>
          </ErrorBoundary>
        </BrowserRouter>
      </QueryClientProvider>
    </AuthProvider>
  </Provider>
);
