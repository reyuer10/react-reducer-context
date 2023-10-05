import React from "react";

import { Routes, Route } from "react-router-dom";

import { AppProvider } from "./AppContext";
import Count from "./components/Count";
import RootLayout from "./layout/RootLayout";
import Home from "./components/Home";
import About from "./components/About";
import Todo from "./components/Todo";

export default function App() {
  return (
    <AppProvider>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Count" element={<Count />} />
          <Route path="/todo" element={<Todo />} />
        </Route>
      </Routes>
    </AppProvider>
  );
}
