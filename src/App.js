import React, { useState, useEffect } from "react";
import { Wrapper } from "./components/Wrapper";
import { Navibar } from "./components/Navibar";
import { useRoutes } from "hookrouter";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import { CSV_Input } from "./pages/CSV_Input";
import { Footer } from "./components/Footer";

const routes = {
  "/": () => <Home />,
  "/about*": () => <About />,
  "/contact": () => <Contact />,
  "/CSV_Input": () => <CSV_Input />,
  "/contact/:name": ({ name }) => <Contact name={name} />,
};

function App() {
  const match = useRoutes(routes);

  return (
    <div className="bg-light">
      <Wrapper>
        <Navibar />
        {match || <NotFound />}
        <Footer />
      </Wrapper>
    </div>
  );
}

export default App;
