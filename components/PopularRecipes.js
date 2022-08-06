import React from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import homeStyles from "../styles/Home.module.css";

const PopularRecipes = (props) => {
  const renderPopularRecipe = () => {
    const jsx = props?.data?.map((item, index) => {
      return (
        <>
          <div key={index} className="row mb-3">
            <div className={`col-3 ${homeStyles.imagePopular}`}>
              <Image
                src={`http://localhost:8000/${item.food_image.replace(
                  "public/",
                  ""
                )}`}
                height={64}
                width={64}
              />
            </div>
            <div className="col-9">
              <p className={homeStyles.title}>{item.title}</p>
              <p className={homeStyles.rating}>
                <AiFillStar color="#FFB300" /> 4.6 <span>{item.category}</span>
              </p>
            </div>
          </div>
        </>
      );
    });
    return jsx;
  };

  return <>{renderPopularRecipe()}</>;
};

export default PopularRecipes;
