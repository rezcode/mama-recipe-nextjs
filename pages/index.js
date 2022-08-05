import React, { useEffect, useState } from "react";
import NewRecipes from "../components/NewRecipes";
import Footer from "../components/Footer";
import PopularRecipes from "../components/PopularRecipes";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";
import homeStyle from "../styles/Home.module.css";

const home = (props) => {
  const [newRecipe] = useState(props?.newRecipes?.data);
  const [popularRecipe] = useState(props?.popularRecipes?.data);

  useEffect(() => {
    newRecipe;
    popularRecipe;
  }, []);

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
                    <NewRecipes data={newRecipe} />
                  </div>
                  <div className="row mt-5 mb-3">
                    <div className="col-6">
                      <h5>Popular Recipes</h5>
                    </div>
                    <div className={`col-5 text-end ${homeStyle.pointer}`}>
                      <Link href="/popular-menu">
                        <span>more info</span>
                      </Link>
                    </div>
                  </div>
                  <PopularRecipes data={popularRecipe} />
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

export async function getServerSideProps(context) {
  const [newRecipesRes, popularRecipesRes] = await Promise.all([
    fetch("http://localhost:8000/recipes/find/recent"),
    fetch("http://localhost:8000/recipes/popular"),
  ]);

  const [newRecipes, popularRecipes] = await Promise.all([
    newRecipesRes.json(),
    popularRecipesRes.json(),
  ]);

  return {
    props: { newRecipes, popularRecipes },
  };
}

export default home;
