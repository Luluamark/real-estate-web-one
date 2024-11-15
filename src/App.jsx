import react from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import "./app.css";
import Companies from "./components/companies/Companies";
import Residencies from "./components/residencies/Residencies";
import Values from "./components/values/Values";
import Contact from "./components/contacts/Contact";
import GetStarted from "./components/getStarted/GetStarted";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app">
      <div>
        <div className="gray-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Values />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
}
export default App;
