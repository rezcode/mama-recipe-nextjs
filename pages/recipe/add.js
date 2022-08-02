import React from "react";
import Footer from "../../components/Footer";
import addRecipeStyle from "../../styles/addRecipe.module.css";
import { IoMdBook } from "react-icons/io";
import { FiVideo } from "react-icons/fi";

const add = () => {
  return (
    <>
      <div id="addRecipePages" className="row justify-content-center">
        <div className={`col-md-4 ${addRecipeStyle.bodyWrapper}`}>
          <div className="row text-center mt-5">
            <h4>Add Your Recipe</h4>
          </div>
          <div className="row mt-3">
            <div className="container">
              <form action="submit">
                <div className="mx-3">
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <IoMdBook color="#8B8A8F" size={30} />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Title"
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows={6}
                      defaultValue={""}
                      style={{ borderRadius: "15px" }}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <FiVideo color="#8B8A8F" size={30} />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-7">
                      <div className="d-grid gap-2">
                        <button className="btn btn-warning" type="button">
                          Post Comment
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default add;
