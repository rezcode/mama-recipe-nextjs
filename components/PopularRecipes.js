import React from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import homeStyles from "../styles/Home.module.css";
import Link from "next/link";

const PopularRecipes = (props) => {
  const renderPopularRecipe = () => {
    const jsx = props?.data?.map((item, index) => {
      return (
        <>
          <Link href={`recipe/${item.id_recipe}`} passHref>
            <div key={index} className="row mb-3" style={{ cursor: "pointer" }}>
              <div className={`col-3 ${homeStyles.imagePopular}`}>
                <Image src={item.food_image} height={64} width={64} />
              </div>
              <div className="col-9">
                <p className={homeStyles.title}>{item.title}</p>
                <p className={homeStyles.rating}>
                  <AiFillStar color="#FFB300" />
                  4.6 <span>{item.category}</span>
                </p>
              </div>
            </div>
          </Link>
        </>
      );
    });
    return jsx;
  };

  return <>{renderPopularRecipe()}</>;
};

export default PopularRecipes;
