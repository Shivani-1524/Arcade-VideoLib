import React from "react";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import { CategoryProvider } from "./Context/category-provider"
const container = document.getElementById('root');
const root = createRoot(container)

// Call make Server
makeServer();

root.render(
  <React.StrictMode>
    <Router>
      <CategoryProvider>
        <App />
      </CategoryProvider>
    </Router>
  </React.StrictMode>
);
