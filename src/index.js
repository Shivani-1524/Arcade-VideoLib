import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { CategoryProvider, AuthProvider, HistoryProvider, LikedVideoProvider, WatchlaterProvider } from './Context/index'

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <HistoryProvider>
          <CategoryProvider>
            <LikedVideoProvider>
              <WatchlaterProvider>
                <App />
              </WatchlaterProvider>
            </LikedVideoProvider>
          </CategoryProvider>
        </HistoryProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
