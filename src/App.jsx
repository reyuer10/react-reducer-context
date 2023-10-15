import React from "react";

import { Routes, Route } from "react-router-dom";

import { AppProvider } from "./AppContext";
import RootLayout from "./layout/RootLayout";
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Applications from "./components/Applications";
import GuessNumberField from "./apps/GuessNumberField";
import CatsFacts from "./apps/CatsFacts";

export default function App() {
  return (
    <AppProvider>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/guessnumberfield" element={<GuessNumberField />} />
          <Route path="/catfacts" element={<CatsFacts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AppProvider>
  );
}
