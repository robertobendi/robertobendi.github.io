import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Roberto Bendinelli</title>
        <meta name="description" content="Personal portfolio of Roberto Bendinelli" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;