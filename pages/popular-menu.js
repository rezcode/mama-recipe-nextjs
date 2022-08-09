import React, { useEffect, useState } from "react";
import { FiChevronLeft } from "react-icons/fi";
import popularMenuStyle from "../styles/popularMenu.module.css";
import Image from "next/image";
import imgRecipe from "../public/images/example-img.jpg";
import homeStyles from "../styles/Home.module.css";
import savedButton from "../public/images/saved.png";
import likedButton from "../public/images/liked.png";
import saveButton from "../public/images/save.png";
import likeButton from "../public/images/like.png";
import Link from "next/link";
import axios from "axios";

const PopularMenu = () => {
  const [popularList, setPopularList] = useState([]);
  const [userDataStorage, setUserDataStorage] = useState({});

  useEffect(() => {
    setUserDataStorage(JSON.parse(localStorage?.getItem("userDataStorage")));
    getPopular();
  }, []);

  const getPopular = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_URL_API}/recipes/popular`)
      .then((res) => {
        setPopularList(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(popularList);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="row mt-3">
              <div className="col-4">
                <div className={popularMenuStyle.navBack}>
                  <Link href={"/"} passHref>
                    <FiChevronLeft size={40} />
                  </Link>
                </div>
              </div>
              <div className="col-7">
                <div className={popularMenuStyle.verticalCenter}>
                  <p className="mt-1">Popular Menu</p>
                </div>
              </div>
            </div>
            {popularList?.map((item, index) => (
              <Link href={`/recipe/${item.id_recipe}`} passHref>
                <div
                  className="row mt-3 align-items-center"
                  style={{ cursor: "pointer" }}
                  key={index}
                >
                  <div
                    className={`col-3 ${popularMenuStyle.imgList}`}
                    style={{ paddingRight: "0px" }}
                  >
                    <Image
                      src={`http://localhost:8000/${item.food_image.replace(
                        "public/",
                        ""
                      )}`}
                      height={110}
                      width={110}
                      className={homeStyles.imagePopular}
                    />
                  </div>
                  <div className={`col-5 ${popularMenuStyle.contentTitle}`}>
                    <p className={popularMenuStyle.title}>{item.title}</p>
                    <p className={popularMenuStyle.ingredients}>
                      {item.ingredients.split(" ").slice(0, 2).join(" ")}
                    </p>
                    <p className={popularMenuStyle.title}>{item.category}</p>
                  </div>
                  <div className={`col-2 ${popularMenuStyle.buttonSave}`}>
                    <Image src={savedButton} />
                  </div>
                  <div className={`col-2 ${popularMenuStyle.buttonLike}`}>
                    <Image src={likeButton} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularMenu;
