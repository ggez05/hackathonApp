import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import AddCard from "./components/AddCard/AddCard";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/addcard" element={<AddCard />} />
      </Routes>
    </div>
  );
}

export default App;
