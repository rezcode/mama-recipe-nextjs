import React from "react";
import NewRecipes from "../components/NewRecipes";
import Footer from "../components/Footer";
import PopularRecipes from "../components/PopularRecipes";

const home = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="row mt-3" style={{ height: "100vh" }}>
                <div className="container">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Search Pasta, Bread, etc"
                    aria-label=".form-control-lg example"
                  />
                  <div className="row mt-5 mb-3">
                    <h5>New Recipes</h5>
                  </div>
                  <div className="row">
                    <NewRecipes />
                  </div>
                  <div className="row mt-5 mb-3">
                    <h5>Popular Recipes</h5>
                  </div>
                  <PopularRecipes />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default home;
