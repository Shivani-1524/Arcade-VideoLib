import "./App.css";
import { Routes, Route } from "react-router-dom";
import { TemplatePage, HomePage, Test2, Test3 } from "./Pages/index"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TemplatePage />}>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/test2" element={<Test2 />} />
          <Route path="/test3" element={<Test3 />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
