import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4" style={{ minHeight: "85vh" }}>
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
