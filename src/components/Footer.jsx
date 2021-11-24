import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Navibar.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="text-muted">
          Copyright © Elsevier B.V . All rights reserved. Scopus® is a
          registered trademark of Elsevier B.V.
        </p>
      </div>
    </footer>
  );
};
