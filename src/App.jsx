import PropertyModal from "./components/PropertyModal";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import FeaturedProperties from "./components/FeaturedProperties";
import { useState } from "react";


function App() {

  const [selectedProperty, setSelectedProperty] = useState(null);

  return ( 
    <div className="min-h-screen w-full bg-gray-50">
      <Home />

      <FeaturedProperties setSelectedProperty={setSelectedProperty}/>

      <Contact />

      <Footer />



    </div>
  );
}

export default App;
