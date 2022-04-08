import "./App.css";
import { Routes, Route } from "react-router-dom";
import { TemplatePage, HomePage, SingleVideoPage } from "./Pages/index"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TemplatePage />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/video/:videoId" element={< SingleVideoPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
