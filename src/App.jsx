import "./app.css";
import { useState } from "react";
import Map from "./components/Map/Map";
import Details from "./components/Details/Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [userData, setUserData] = useState({});
  console.log(userData);
  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Details setUserData={setUserData} />}
          ></Route>
          <Route path="/map" element={<Map />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
