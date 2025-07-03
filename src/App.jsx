import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar";
import "./App.css";

import Footer from "./components/footer";
import Pricing from "./pages/pricing/Pricing";
import Home from "./pages/Home";
import { Box, Button, Container } from "@mui/material";
import Faq from "./pages/Faq";
import WhatWeRemove from "./pages/WWR/WhatWeRemove";
import Furniture from "./pages/WWR/Furniture";
import Junk from "./pages/WWR/Junk";
import Appliances from "./pages/WWR/Appliances";
import Pianos from "./pages/WWR/Pianos";
import HotTubs from "./pages/WWR/HotTubs";
import Pallets from "./pages/WWR/Pallets";
import ExerciseEquipment from "./pages/WWR/ExerciseEquipment";
import ConstructionDebris from "./pages/WWR/ConstructionDebris";
import AllItems from "./pages/WWR/AllItems";
import Gallery from "./pages/gallery/Gallery";
import Locations from "./pages/Locations";
import AdminLayout from "./components/admin/AdminLayout";
import AdminLogin from "./pages/admin/Login";
import AdminDashboard from "./pages/admin/Dashboard";
import About from "./pages/about";
import Categories from "./pages/admin/Categories";
import FAQ from "./pages/admin/faq";
import AdminGallery from "./pages/admin/gallery";
import Appointment from "./pages/admin/Appointment";
import WhatsApp from "./pages/admin/whatsApp";
import WhatsAppNumber from "./pages/admin/whatsApp";
import HowItWorks from "./components/howitworks";

// Main Layout Component
const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
    
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/about" element={<About />} />
          <Route path="/get-quote" element={<HowItWorks />} />
          <Route path="/what_we_remove" element={<WhatWeRemove />} />
          <Route path="/what_we_remove/furniture" element={<Furniture />} />
          <Route path="/what_we_remove/junk" element={<Junk />} />
          <Route path="/what_we_remove/appliances" element={<Appliances />} />
          <Route path="/what_we_remove/pianos" element={<Pianos />} />
          <Route path="/what_we_remove/hot-tubs" element={<HotTubs />} />
          <Route path="/what_we_remove/pallets" element={<Pallets />} />
          <Route
            path="/what_we_remove/exercise-equipment"
            element={<ExerciseEquipment />}
          />
          <Route
            path="/what_we_remove/construction-debris"
            element={<ConstructionDebris />}
          />
          <Route path="/what_we_remove/all" element={<AllItems />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/*" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="categories" element={<Categories />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="gallery" element={<AdminGallery />} />
          <Route path="appointment" element={<Appointment />} />
          <Route path="whatsapp" element={<WhatsAppNumber />} />
        </Route>

        {/* Main Application Routes */}
        <Route path="/*" element={<MainLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
