import React from "react";
import Image from "next/image";
import imgRecipe from "../public/images/example-img.jpg";
import { AiFillStar } from "react-icons/ai";
import homeStyles from "../styles/Home.module.css";

const RecipeList = () => {
  return (
    <>
      <div className="row mb-3">
        <div className="col-3">
          <Image src={imgRecipe} className={homeStyles.imagePopular} />
        </div>
        <div className="col-9">
          <p className={homeStyles.title}>Orange La Pasta</p>
          <p className={homeStyles.rating}>
            <AiFillStar color="#FFB300" /> 4.6
          </p>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-3">
          <Image src={imgRecipe} className={homeStyles.imagePopular} />
        </div>
        <div className="col-9">
          <p className={homeStyles.title}>Orange La Pasta</p>
          <p className={homeStyles.rating}>
            <AiFillStar color="#FFB300" /> 4.6
          </p>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-3">
          <Image src={imgRecipe} className={homeStyles.imagePopular} />
        </div>
        <div className="col-9">
          <p className={homeStyles.title}>Orange La Pasta</p>
          <p className={homeStyles.rating}>
            <AiFillStar color="#FFB300" /> 4.6
          </p>
        </div>
      </div>
    </>
  );
};

export default RecipeList;
