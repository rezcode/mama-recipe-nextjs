import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import imgRecipe from "../public/images/example-img.jpg";
import homeStyles from "../styles/Home.module.css";

const NewRecipes = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="ml-2">
          <div className={`card ${homeStyles.cardImageNewRecipes}`}>
            <Image
              src={imgRecipe}
              layout="fill"
              className={homeStyles.ImageNewRecipes}
              alt="Picture of the author"
            />
            <div className="card-img-overlay">
              <h5 className={`card-title ${homeStyles.titleNewRecipes}`}>
                Card title
              </h5>
            </div>
          </div>
        </div>
        <div className="ml-2">
          <div className={`card ${homeStyles.cardImageNewRecipes}`}>
            <Image
              src={imgRecipe}
              layout="fill"
              className={homeStyles.ImageNewRecipes}
              alt="Picture of the author"
            />
            <div className="card-img-overlay">
              <h5 className={`card-title ${homeStyles.titleNewRecipes}`}>
                Card title
              </h5>
            </div>
          </div>
        </div>
        <div className="ml-2">
          <div className={`card ${homeStyles.cardImageNewRecipes}`}>
            <Image
              src={imgRecipe}
              layout="fill"
              className={homeStyles.ImageNewRecipes}
              alt="Picture of the author"
            />
            <div className="card-img-overlay">
              <h5 className={`card-title ${homeStyles.titleNewRecipes}`}>
                Card title
              </h5>
            </div>
          </div>
        </div>
        <div className="ml-2">
          <div className={`card ${homeStyles.cardImageNewRecipes}`}>
            <Image
              src={imgRecipe}
              layout="fill"
              className={homeStyles.ImageNewRecipes}
              alt="Picture of the author"
            />
            <div className="card-img-overlay">
              <h5 className={`card-title ${homeStyles.titleNewRecipes}`}>
                Card title
              </h5>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default NewRecipes;
