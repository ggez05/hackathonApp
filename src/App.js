import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import AddCard from "./components/AddCard/AddCard";
import CardPage from "./components/cardpage/CardPage";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/addcard" element={<AddCard />} />
        <Route path="/cardpreview" element={<CardPage />} />
      </Routes>
    </div>
  );
}

export default App;
