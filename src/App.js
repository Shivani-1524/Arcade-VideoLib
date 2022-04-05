import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage, Test1, Test2, Test3 } from "./Pages/index"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/test1" element={<Test1 />} />
          <Route path="/test2" element={<Test2 />} />
          <Route path="/test3" element={<Test3 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
