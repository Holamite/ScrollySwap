import "./App.css";
import Navbar from "./Navbar/Navbar";
import Hero from "./Section/Hero";
import Footer from "./Section/Footer";

function App() {
  return (
    <>
      <main className="hero-section">
        <Navbar />
        <Hero />
        <Footer />
      </main>
    </>
  );
}

export default App;
