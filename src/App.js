import "./App.css";
import { Routes, Route } from "react-router-dom";
import { RequiresAuth } from "./RequiresAuth"
import Mockman from "mockman-js"
import { TemplatePage, HomePage, SingleVideoPage, LoginPage, SignupPage, LogoutPage, LikedVideoPage, HistoryPage } from "./Pages/index"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/" element={<TemplatePage />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/video/:videoId" element={< SingleVideoPage />} />
          <Route path="/videos" element={<RequiresAuth />}>
            <Route path="/videos/liked" element={<LikedVideoPage />} />
            <Route path="/videos/history" element={<HistoryPage />} />
          </Route>
        </Route>
        <Route path="/mock" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
