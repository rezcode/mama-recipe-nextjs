import React from "react";
import NewRecipes from "../components/NewRecipes";
import Footer from "../components/Footer";
import PopularRecipes from "../components/PopularRecipes";
import { BiSearch } from "react-icons/bi";

const home = () => {
  return (
    <>
      <div>
        <div id="homePage" className="container">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="row mt-3">
                <div className="container">
                  <div className="input-group mb-4">
                    <span className="input-group-text" id="basic-addon1">
                      <BiSearch color="#C4C4C4" size={30} />
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Search Pasta, Bread, etc"
                    />
                  </div>
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
      </div>
      <Footer />
    </>
  );
};

export default home;
