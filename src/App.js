
import "./App.css";
import { Home1page } from "./Pages/User/Home1page";
import { Route, Routes, BrowserRouter} from "react-router-dom";
import { Loginpage } from "./Pages/User/Loginpage";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home1page />} />
          <Route path="/Login" element={<Loginpage/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
