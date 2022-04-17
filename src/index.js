import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { CategoryProvider } from "./Context/category-provider"
import { AuthProvider } from './Context/auth-provider'
import { HistoryProvider } from './Context/history-provider'
import { LikedVideoProvider, LikeedVideoProvider } from './Context/likevideo-provider'

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <HistoryProvider>
          <CategoryProvider>
            <LikedVideoProvider>
              <App />
            </LikedVideoProvider>
          </CategoryProvider>
        </HistoryProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
