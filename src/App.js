import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import UserRoutes from "./Routes/UserRoutes";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={< UserRoutes/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
