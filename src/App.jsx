import { Routes, Route, Link } from "react-router";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Page2 from './components/Page2';
import Deals from "./components/Deals";
import Footer from "./components/Footer";
// exemple
//  <Route path="/" element={<Home />} />

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Page2 />
      <Deals />
      <Footer />

    </div>
  )
}

export default App
