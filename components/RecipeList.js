import React from "react";
import Image from "next/image";
import recipeListStyle from "../styles/recipeList.module.css";
import { AiFillStar } from "react-icons/ai";

const RecipeList = (props) => {
  return (
    <>
      {props?.data
        ?.filter((item) => {
          if (props?.search === "") {
            return null;
          } else if (
            item.title.toLowerCase().includes(props?.search.toLowerCase())
          ) {
            return item;
          }
        })
        .map((item, index) => {
          return (
            <div key={index} className="row mb-3">
              <div className={`col-3 ${recipeListStyle.recipeImg}`}>
                <Image
                  src={`http://localhost:8000/${item.food_image.replace(
                    "public/",
                    ""
                  )}`}
                  height={85}
                  width={80}
                />
              </div>
              <div className="col-9">
                <p className={recipeListStyle.title}>{item.title}</p>
                <p className={recipeListStyle.rating}>
                  <AiFillStar color="#FFB300" /> 4.6{" "}
                  <span>{item.category}</span>
                </p>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default RecipeList;
