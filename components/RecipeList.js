import React from "react";
import Image from "next/image";
import recipeListStyle from "../styles/recipeList.module.css";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";

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
            <Link href={`/recipe/${item.id}`} passHref>
              <div
                key={index}
                className={`row mb-3 ${recipeListStyle.pointer}`}
              >
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
            </Link>
          );
        })}
    </>
  );
};

export default RecipeList;
