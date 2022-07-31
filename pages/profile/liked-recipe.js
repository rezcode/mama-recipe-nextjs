import React from "react";
import popularMenuStyle from "../../styles/popularMenu.module.css";
import Image from "next/image";
import imgRecipe from "../../public/images/example-img.jpg";
import homeStyles from "../../styles/Home.module.css";
import HeaderProfile from "../../components/HeaderProfile";

const LikedRecipe = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <HeaderProfile header={"Liked Recipe"} />
            <div className="row mt-3 align-items-center">
              <div className="col-3" style={{ paddingRight: "0px" }}>
                <Image src={imgRecipe} className={homeStyles.imagePopular} />
              </div>
              <div className={`col-9 ${popularMenuStyle.contentTitle}`}>
                <p className={popularMenuStyle.title}>Margherita</p>
                <p className={popularMenuStyle.ingredients}>In Veg Pizza</p>
              </div>
            </div>
            <div className="row mt-3 align-items-center">
              <div className="col-3" style={{ paddingRight: "0px" }}>
                <Image src={imgRecipe} className={homeStyles.imagePopular} />
              </div>
              <div className={`col-9 ${popularMenuStyle.contentTitle}`}>
                <p className={popularMenuStyle.title}>Margherita</p>
                <p className={popularMenuStyle.ingredients}>In Veg Pizza</p>
              </div>
            </div>
            <div className="row mt-3 align-items-center">
              <div className="col-3" style={{ paddingRight: "0px" }}>
                <Image src={imgRecipe} className={homeStyles.imagePopular} />
              </div>
              <div className={`col-9 ${popularMenuStyle.contentTitle}`}>
                <p className={popularMenuStyle.title}>Margherita</p>
                <p className={popularMenuStyle.ingredients}>In Veg Pizza</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LikedRecipe;
