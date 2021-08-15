import React from "react";
import Home from "./pages/Home";
import "./styles/App.css";
import Header from "./components/Header";

const App = () => (
  <>
    <div
      className="w-full flex flex-col items-center min-h-screen"
      style={{ backgroundImage: "url(/giphy.gif)" }}
    >
      <Header />
      <Home />
    </div>
  </>
);

export default App;
