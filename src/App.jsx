import PropertyModal from "./components/PropertyModal";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import FeaturedProperties from "./components/FeaturedProperties";
import { useState } from "react";
import EnquiryForm from "./components/EnquiryForm";
import { useEffect } from "react";
import { initGA } from "./analytics";


function App() {

  const [selectedProperty, setSelectedProperty] = useState(null);
  useEffect(() => {
  initGA();
  }, []);

  return ( 
    <div className="min-h-screen w-full bg-gray-50">
      <Home />

      <FeaturedProperties setSelectedProperty={setSelectedProperty}/>

      <Contact />
      <EnquiryForm selectedProperty={selectedProperty} />
      <Footer />

      {selectedProperty && (
        <PropertyModal properties={[selectedProperty]} onClose={()=> setSelectedProperty(null)} />
      )}

    </div>
  );
}

export default App;
