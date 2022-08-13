import React, { useEffect, useState } from "react";
import NewRecipes from "../components/newRecipes";
import Footer from "../components/footer";
import PopularRecipes from "../components/popularRecipes";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";
import homeStyle from "../styles/Home.module.css";
import RecipeList from "../components/recipeList";

const home = (props) => {
  const [newRecipe] = useState(props?.newRecipes?.data);
  const [popularRecipe] = useState(props?.popularRecipes?.data);
  const [allRecipes] = useState(props?.allRecipes?.data);
  const [search, setSearch] = useState("");
  const [userDataStorage, setUserDataStorage] = useState({});

  useEffect(() => {
    setUserDataStorage(JSON.parse(localStorage?.getItem("userDataStorage")));
    allRecipes;
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
                      type="text"
                      className="form-control"
                      placeholder="Search Pasta, Bread, etc"
                      onChange={(e) => {
                        setSearch(e.target.value);
                      }}
                    />
                  </div>
                  <div className="row">
                    <RecipeList search={search} data={allRecipes} />
                  </div>
                  <div className="row mt-3 mb-3">
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
      <Footer data={userDataStorage} />
    </>
  );
};

export async function getServerSideProps(context) {
  const [newRecipesRes, popularRecipesRes, allRecipesRes] = await Promise.all([
    fetch("http://localhost:8000/recipes/find/recent"),
    fetch("http://localhost:8000/recipes/popular"),
    fetch("http://localhost:8000/recipes"),
  ]);

  const [newRecipes, popularRecipes, allRecipes] = await Promise.all([
    newRecipesRes.json(),
    popularRecipesRes.json(),
    allRecipesRes.json(),
  ]);

  return {
    props: { newRecipes, popularRecipes, allRecipes },
  };
}

export default home;
