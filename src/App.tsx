import "@fontsource/be-vietnam-pro/400.css";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
