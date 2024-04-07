import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Introduction1 } from "./pages/Introduction1";
import { Introduction2 } from "./pages/Introduction2";
import { Instructions } from "./pages/Instructions";
import { Game } from "./pages/Game";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/2" element={<Introduction1 />} />
          <Route path="/3" element={<Introduction2 />} />
          <Route path="/4" element={<Instructions />} />
          <Route path="/5" element={<Game />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
