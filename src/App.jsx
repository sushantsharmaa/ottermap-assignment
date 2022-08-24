import { useState } from "react";
import "./app.css";
import Details from "./components/Details/Details";

function App() {
  const [userData, setUserData] = useState({});
  console.log(userData);
  return (
    <div className="main">
      <Details setUserData={setUserData} />
    </div>
  );
}

export default App;
