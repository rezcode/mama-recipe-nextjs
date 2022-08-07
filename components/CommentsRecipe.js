import React from "react";
import Image from "next/image";
import recipeStyle from "../styles/recipe.module.css";
import imgUser from "../public/images/img-user-default.png";

const CommentsRecipe = (props) => {
  const comments = props?.data?.data;
  return (
    <>
      <div>
        {comments?.length > 0 ? (
          <>
            {comments?.map((item, index) => (
              <div className="row">
                <div className="col-3 text-center">
                  <div className={recipeStyle.commendAvatar}>
                    <Image
                      src={`http://localhost:8000/${item?.image_profile?.replace(
                        "public/",
                        ""
                      )}`}
                      width={60}
                      height={60}
                      className="text-center"
                    />
                  </div>
                </div>
                <div className="col-9">
                  <div className={`row ${recipeStyle.userName}`}>
                    {item.name}
                  </div>
                  <div className={`row ${recipeStyle.userComment}`}>
                    {item.comment}
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <p className="text-muted">No comment yet..</p>
        )}
      </div>
    </>
  );
};

export default CommentsRecipe;
