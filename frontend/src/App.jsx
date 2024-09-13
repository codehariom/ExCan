import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientSideRoutes from "./Routes/ClientSideRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<ClientSideRoutes />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
