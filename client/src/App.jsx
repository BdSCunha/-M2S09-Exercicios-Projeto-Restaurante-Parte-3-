import React, { useState } from "react";
import Navbar from "./components/Navbar";
import PageWrapper from "./components/PageWrapper";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Context from "./context/Context";

function App() {
  const [name, setName] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const clearInfo = () => {
    setName("");
    setIsAdmin(false);
  }

  return (
    <>
      <Context.Provider
        value={{ name: [name, setName], isAdmin: [isAdmin, setIsAdmin], clearInfo: [clearInfo] }}
      >
        <Navbar />
        <PageWrapper>
          <HomePage />
        </PageWrapper>
        <Footer />
      </Context.Provider>
    </>
  );
}

export default App;
