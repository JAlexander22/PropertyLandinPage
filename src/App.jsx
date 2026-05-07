import PropertyModal from "./components/PropertyModal";
import FeaturedProperty from "./components/FeaturedProperty";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";


function App() {
  return ( 
    <div className="min-h-screen w-full bg-gray-50">
      <Home />

      <FeaturedProperty />

      <Contact />

      <Footer /> 



    </div>
  );
}

export default App;
