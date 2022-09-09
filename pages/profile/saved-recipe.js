import React, { useEffect, useState } from "react";
import popularMenuStyle from "../../styles/popularMenu.module.css";
import Image from "next/image";
import homeStyles from "../../styles/Home.module.css";
import HeaderProfile from "../../components/HeaderProfile";
import axios from "axios";
import { TbDatabaseOff } from "react-icons/tb";
import Link from "next/link";

const SavedRecipe = () => {
  const [myRecipeList, setMyRecipeList] = useState([]);
  const [userDataStorage, setUserDataStorage] = useState({});

  useEffect(() => {
    setUserDataStorage(JSON.parse(localStorage?.getItem("userDataStorage")));
    getMyRecipeList();
  }, [userDataStorage?.id]);

  const config = {
    headers: {
      Authorization: `Bearer ${userDataStorage?.token}`,
    },
  };

  const getMyRecipeList = () => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_URL_API}/recipes/my/save/${userDataStorage?.id}`,
        config
      )
      .then((res) => {
        setMyRecipeList(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <HeaderProfile header={"My Recipe"} />
            {myRecipeList?.length === 0 ? (
              <>
                <div className="container">
                  <div className="row mt-5">
                    <TbDatabaseOff size={150} />
                    <p className="text-center">No Recipe</p>
                  </div>
                </div>
              </>
            ) : (
              myRecipeList?.map((item, index) => (
                <Link href={`/recipe/${item.id_recipe}`}>
                  <div
                    className="row mt-3 align-items-center"
                    key={index}
                    style={{ cursor: "pointer" }}
                  >
                    <div className={`col-3 ${popularMenuStyle.imgList}`}>
                      <Image
                        src={item.food_image}
                        height={110}
                        width={110}
                        className={homeStyles.imagePopular}
                      />
                    </div>
                    <div className={`col-8 ${popularMenuStyle.contentTitle}`}>
                      <p className={popularMenuStyle.title}>{item.title}</p>
                      <p className={popularMenuStyle.ingredients}>
                        {item.ingredients?.split(" ").slice(0, 2).join(" ")}
                      </p>
                      <p className={popularMenuStyle.title}>{item.category}</p>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SavedRecipe;
