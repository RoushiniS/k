import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Reiki from "./components/Reiki/Reiki";
import MeiPadam from "./components/MeiPadam/MeiPadam";
import CosmoEnergies from "./components/CosmoEnergies/CosmoEnergies";
import { nineChakrs } from "./components/Home/constants";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home text={nineChakrs} />} />
        <Route path="/reiki" element={<Reiki />} />
        <Route path="/meipadam" element={<MeiPadam />} />
        <Route path="/cosmoenergies" element={<CosmoEnergies />} />
      </Routes>
      <Footer />
    </div>
  );
}
