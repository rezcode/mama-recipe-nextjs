import React from "react";
import recipeStyle from "../../styles/recipe.module.css";
import Image from "next/image";
import backgroundImg from "../../public/images/background-recipe-example.jpg";
import imgUser from "../../public/images/img-user-default.png";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Link from "next/link";
import { FiBookmark, FiChevronLeft } from "react-icons/fi";
import { BiLike } from "react-icons/bi";
import { BsPlay } from "react-icons/bs";

const recipeDetail = () => {
  return (
    <>
      <div id="detailPages" className="row justify-content-center">
        <div className="col-md-4 py-0">
          <div className={`row ${recipeStyle.wrapperTop}`}>
            <div className={recipeStyle.backArrow}>
              <Link href="/" passHref>
                <FiChevronLeft size={40} color="white" />
              </Link>
            </div>
            <div className={recipeStyle.title}>
              <div>
                <div className="row">
                  <div className="col-4 text-center">
                    <div className={recipeStyle.buttonClicked}>
                      <FiBookmark color="white" size={35} />
                    </div>
                  </div>
                  <div className="col-4 text-center">
                    <div className={recipeStyle.buttonUnclicked}>
                      <BiLike color="#EEC302" size={35} />
                    </div>
                  </div>
                </div>
                <p className="m-0">Sandwich with Egg</p>
                <span>By Chef Ronald Humson</span>
              </div>
            </div>
            <Image src={backgroundImg} />
          </div>
          <div className={`row ${recipeStyle.wrapperBot}`}>
            <div className={`container ${recipeStyle.tabMenu}`}>
              <Tabs
                defaultActiveKey="video-step"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="ingredients" title="Ingredients">
                  <div className="container">
                    <div className="row mx-1">
                      <div className={recipeStyle.ingredients}>
                        - 2 slices whole-grain bread (bakery-fresh recommended)
                        - 1 tablespoon hummus - 2 slices tomato - 1/2 small
                        cucumber, thinly sliced lengthwise - 1 slice low-fat
                        cheese
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="video-step" title="Video Step">
                  <div className="container">
                    {[
                      {
                        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos est iste aliquid!",
                      },
                      {
                        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos est iste aliquid!",
                      },
                      {
                        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos est iste aliquid!",
                      },
                      {
                        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos est iste aliquid!",
                      },
                    ]?.map((item, index) => {
                      return (
                        <div
                          className={`row align-items-center ${recipeStyle.listVideo}`}
                          key={index}
                        >
                          <div
                            className={`col-3 text-center ${recipeStyle.playButton}`}
                          >
                            <BsPlay color="#F8F8F8" size={55} />
                          </div>
                          <div className="col-9">
                            <div className={`row ${recipeStyle.videoStep}`}>
                              Step {index + 1}
                            </div>
                            <div className={`row ${recipeStyle.videoDesc}`}>
                              {item.desc}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    <div className="mx-1">
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows={3}
                        defaultValue={""}
                        placeholder="Comment :"
                      />
                    </div>
                    <div className="mx-1 my-3">
                      <div className="d-grid gap-2">
                        <button className="btn btn-warning" type="button">
                          Post Comment
                        </button>
                      </div>
                      <div className="row">
                        <p className={recipeStyle.lighter}>Comment :</p>
                      </div>
                      <div className="row">
                        <div className="col-3">
                          <div className={recipeStyle.commendAvatar}>
                            <Image src={imgUser} className="text-center" />
                          </div>
                        </div>
                        <div className="col-9">
                          <div className={`row ${recipeStyle.userName}`}>
                            Ayudia
                          </div>
                          <div className={`row ${recipeStyle.userComment}`}>
                            Nice recipe. simple and delicious, thankyou
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default recipeDetail;
