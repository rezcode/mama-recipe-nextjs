import React from "react";
import Layout from "../../components/Layout";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRecipes, recipeSelectors } from "../../redux/features/recipeSlice";
import style from "../../styles/popularMenu.module.css";
import homeStyles from "../../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

const AllRecipe = () => {
  const dispatch = useDispatch();
  const recipeList = useSelector(recipeSelectors.selectAll);

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  return (
    <Layout>
      <div className="container">
        <div className="row">
          {recipeList?.length === 0 ? (
            <div
              className="row align-items-center text-center"
              style={{ minHeight: "80vh" }}
            >
              <h1>
                <div
                  className="spinner-border text-warning"
                  style={{ width: "60px", height: "60px" }}
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
              </h1>
            </div>
          ) : (
            <>
              {recipeList?.map((item, index) => (
                <Link href={`/recipe/${item.id}`} key={index} passHref>
                  <a>
                    <div
                      className="row mt-3 align-items-center"
                      style={{ cursor: "pointer" }}
                    >
                      <div
                        className={`col-3 ${style.imgList}`}
                        style={{ paddingRight: "0px" }}
                      >
                        <Image
                          src={item.food_image}
                          height={110}
                          width={110}
                          className={homeStyles.imagePopular}
                        />
                      </div>
                      <div className={`col-5 ${style.contentTitle}`}>
                        <p className={style.title}>{item.title}</p>
                        <p className={style.title}>{item.category}</p>
                      </div>
                    </div>
                  </a>
                </Link>
              ))}
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default AllRecipe;
