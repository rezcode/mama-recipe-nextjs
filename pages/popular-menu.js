import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import popularMenuStyle from "../styles/popularMenu.module.css";
import Image from "next/image";
import imgRecipe from "../public/images/example-img.jpg";
import homeStyles from "../styles/Home.module.css";
import savedButton from "../public/images/saved.png";
import likedButton from "../public/images/liked.png";
import saveButton from "../public/images/save.png";
import likeButton from "../public/images/like.png";

const PopularMenu = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="row mt-3">
              <div className="col-4">
                <div className={popularMenuStyle.navBack}>
                  <FiChevronLeft size={40} />
                </div>
              </div>
              <div className="col-7">
                <div className={popularMenuStyle.verticalCenter}>
                  <p className="mt-1">Popular Menu</p>
                </div>
              </div>
            </div>
            <div className="row mt-3 align-items-center">
              <div className="col-3" style={{ paddingRight: "0px" }}>
                <Image src={imgRecipe} className={homeStyles.imagePopular} />
              </div>
              <div className={`col-5 ${popularMenuStyle.contentTitle}`}>
                <p className={popularMenuStyle.title}>Margherita</p>
                <p className={popularMenuStyle.ingredients}>In Veg Pizza</p>
              </div>
              <div className={`col-2 ${popularMenuStyle.buttonSave}`}>
                <Image src={savedButton} />
              </div>
              <div className={`col-2 ${popularMenuStyle.buttonLike}`}>
                <Image src={likeButton} />
              </div>
            </div>
            <div className="row mt-3 align-items-center">
              <div className="col-3" style={{ paddingRight: "0px" }}>
                <Image src={imgRecipe} className={homeStyles.imagePopular} />
              </div>
              <div className={`col-5 ${popularMenuStyle.contentTitle}`}>
                <p className={popularMenuStyle.title}>Margherita</p>
                <p className={popularMenuStyle.ingredients}>In Veg Pizza</p>
              </div>
              <div className={`col-2 ${popularMenuStyle.buttonSave}`}>
                <Image src={saveButton} />
              </div>
              <div className={`col-2 ${popularMenuStyle.buttonLike}`}>
                <Image src={likedButton} />
              </div>
            </div>
            <div className="row mt-3 align-items-center">
              <div className="col-3" style={{ paddingRight: "0px" }}>
                <Image src={imgRecipe} className={homeStyles.imagePopular} />
              </div>
              <div className={`col-5 ${popularMenuStyle.contentTitle}`}>
                <p className={popularMenuStyle.title}>Margherita</p>
                <p className={popularMenuStyle.ingredients}>In Veg Pizza</p>
              </div>
              <div className={`col-2 ${popularMenuStyle.buttonSave}`}>
                <Image src={savedButton} />
              </div>
              <div className={`col-2 ${popularMenuStyle.buttonLike}`}>
                <Image src={likeButton} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularMenu;
