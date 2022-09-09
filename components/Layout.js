import React from "react";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  const [userDataStorage, setUserDataStorage] = useState({});
  useEffect(() => {
    setUserDataStorage(JSON.parse(localStorage?.getItem("userDataStorage")));
  }, []);

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
      <Footer data={userDataStorage} />
    </>
  );
};

export default Layout;
