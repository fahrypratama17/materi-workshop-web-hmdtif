import { Route, Routes } from "react-router-dom";
import Home from "./features/home/pages/Home.tsx";
import PengenalanHTML from "./features/pengenalan-html/pages/PengenalanHTML.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/pengenalan-html" element={<PengenalanHTML />}></Route>
    </Routes>
  );
}

export default App;
