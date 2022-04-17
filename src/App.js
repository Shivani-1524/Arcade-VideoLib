import "./App.css";
import { Routes, Route } from "react-router-dom";
import { RequiresAuth } from "./RequiresAuth"
import Mockman from "mockman-js"
import { WatchLaterPage, VideoPlaylistPage, TemplatePage, HomePage, SingleVideoPage, LoginPage, SignupPage, LogoutPage, LikedVideoPage, HistoryPage, PlaylistPage } from "./Pages/index"
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
            <Route path="/videos/watchlater" element={<WatchLaterPage />} />
            <Route path="/videos/playlists" element={<PlaylistPage />} />
            <Route path="/videos/playlists/:playlistId" element={<VideoPlaylistPage />} />
          </Route>
        </Route>
        <Route path="/mock" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
