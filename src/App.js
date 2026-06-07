import { BrowserRouter, Routes, Route } from "react-router-dom";
import AbirCv from "./abir_cv";
import Qr from "./componants/qr";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Qr />} />
        <Route path="/cv" element={<AbirCv />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;