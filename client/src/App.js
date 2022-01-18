import React from "react";
import { Route,Routes} from "react-router-dom";
import Home from "./components/Home";
import Landing from "./components/Landing";
import Create from "./components/Create";
import CardsDetail from "./components/CardsDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
       <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route path="/" element={<Navbar />} />

      <Route exact path="/Home" element={<Home />} />
      <Route path="/pokemon/:id" element={<CardsDetail />} />

      <Route path="/create" element={<Create />} />
      <Route exact path="/Home" element={<Footer />} />
      </Routes>
    </div>
  );
}

export default App;
