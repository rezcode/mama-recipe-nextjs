import React, { useEffect, useState } from "react";
import recipeStyle from "../../styles/recipe.module.css";
import Image from "next/image";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Link from "next/link";
import { Spinner } from "react-bootstrap";
import { useRouter } from "next/router";
import { FiBookmark, FiChevronLeft } from "react-icons/fi";
import { BiLike } from "react-icons/bi";
import { BsPlay } from "react-icons/bs";
import { AiFillInfoCircle } from "react-icons/ai";
import axios from "axios";
import CommentsRecipe from "../../components/commentsRecipe";
import Swal from "sweetalert2";

const recipeDetail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userDataStorage, setUserDataStorage] = useState({});
  const [detailRecipe, setDetailRecipe] = useState([]);
  const [videoRecipe, setVideoRecipe] = useState([]);
  const [commentUserData, setCommentUserData] = useState([]);
  const [videoLink, setVideoLink] = useState("");
  const [videoDesc, setVideoDesc] = useState("");
  const [show, setShow] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [isSave, setIsSave] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    setUserDataStorage(JSON.parse(localStorage?.getItem("userDataStorage")));
    getDetailData();
    getLikeByUser();
    getVideoRecipe();
    getCommentData();
    getSaveByUser();
  }, [id]);

  const config = {
    headers: {
      Authorization: `Bearer ${userDataStorage?.token}`,
    },
  };

  const getLikeByUser = () => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_URL_API}/recipes/like/${userDataStorage?.id}`
      )
      .then((res) => {
        const likeStatus = res?.data?.data?.some(
          (item) => item?.id_recipe == id
        );
        setIsLike(likeStatus);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getSaveByUser = () => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_URL_API}/recipes/save/${userDataStorage?.id}`
      )
      .then((res) => {
        const saveStatus = res?.data?.data?.some(
          (item) => item?.id_recipe == id
        );
        setIsSave(saveStatus);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getDetailData = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_URL_API}/recipes/${id}`)
      .then((res) => {
        const dataRecipe = res?.data?.data[0];
        setDetailRecipe(dataRecipe);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getVideoRecipe = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_URL_API}/recipes/video/${id}`)
      .then((res) => {
        setVideoRecipe(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCommentData = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_URL_API}/comments/recipe/${id}`)
      .then((res) => {
        const response = res?.data;
        setCommentUserData(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAddVideo = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const body = {
      id_recipe: parseInt(id),
      id_user: userDataStorage?.id,
      video_link: videoLink,
      video_desc: videoDesc,
    };
    if (videoLink === "" || videoDesc === "") {
      Swal.fire({
        icon: "error",
        text: "All Forms must be fullfiled",
      });
      setIsLoading(false);
    } else {
      axios
        .post(
          `${process.env.NEXT_PUBLIC_URL_API}/recipes/video/add`,
          body,
          config
        )
        .then((res) => {
          Swal.fire({
            icon: "success",
            text: "Step Video Added",
          }).then((result) => (result.isConfirmed ? router.reload() : null));
        })
        .catch((err) => {
          const { message } = err?.response?.data;
          Swal.fire({
            icon: "error",
            text: message,
          });
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  // console.log("detailRecipe", detailRecipe);
  console.log("isSave", isSave);
  console.log("isLike", isLike);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            <div className={recipeStyle?.title}>
              <div>
                <div className="row">
                  <div className="col-4 text-center">
                    {isSave ? (
                      <button type="button" className="btn btn-warning">
                        <FiBookmark color="white" size={25} />
                      </button>
                    ) : (
                      <button type="button" className="btn btn-light">
                        <FiBookmark color="#FFBF0A" size={25} />
                      </button>
                    )}
                  </div>
                  <div
                    className="col-4 text-center"
                    style={{ paddingLeft: "0px" }}
                  >
                    {isLike ? (
                      <button type="button" className="btn btn-warning">
                        <BiLike color="white" size={25} />
                      </button>
                    ) : (
                      <button type="button" className="btn btn-light">
                        <BiLike color="#FFBF0A" size={25} />
                      </button>
                    )}
                  </div>
                </div>
                <p className="m-0">{detailRecipe?.title}</p>
                <span>By {detailRecipe?.recipe_owner}</span>
              </div>
            </div>
            <Image
              src={`http://localhost:8000/${detailRecipe?.food_image?.replace(
                "public/",
                ""
              )}`}
              layout="fill"
            />
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
                        {detailRecipe?.ingredients}
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="video-step" title="Video Step">
                  <div className="container">
                    {videoRecipe?.length > 0 ? (
                      videoRecipe?.map((item, index) => {
                        return (
                          <>
                            <div
                              className={`row align-items-center ${recipeStyle.listVideo}`}
                              key={index}
                            >
                              <div
                                className={`col-3 text-center ${recipeStyle.playButton}`}
                              >
                                <a
                                  target="_blank"
                                  href={item.video_link}
                                  rel="noopener noreferrer"
                                >
                                  <BsPlay color="#F8F8F8" size={55} />
                                </a>
                              </div>
                              <div className="col-9">
                                <div className={`row ${recipeStyle.videoStep}`}>
                                  Step {index + 1}
                                </div>
                                <div className={`row ${recipeStyle.videoDesc}`}>
                                  {item.video_desc ?? "No description"}
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      })
                    ) : (
                      <>
                        {/* depepe */}
                        <div className="container">
                          <div className="row mb-3 text-center">
                            <div className={recipeStyle.ingredients}>
                              <AiFillInfoCircle size={70} color="#FFC007" />
                              <p className="mt-2">
                                This recipe has no step video from the owner
                                {detailRecipe?.user_id ===
                                userDataStorage?.id ? (
                                  <>
                                    <Button
                                      variant="light"
                                      onClick={handleShow}
                                      className="mt-3"
                                      size="sm"
                                    >
                                      Add Video Step
                                    </Button>

                                    <Modal show={show} onHide={handleClose}>
                                      <Modal.Header closeButton>
                                        <Modal.Title>
                                          Add Video Step
                                        </Modal.Title>
                                      </Modal.Header>
                                      <Modal.Body>
                                        <div className="container">
                                          <div className="mb-3">
                                            <input
                                              className="form-control form-control-sm"
                                              type="text"
                                              placeholder="Step Description"
                                              aria-label=".form-control-sm example"
                                              onChange={(e) =>
                                                setVideoDesc(e.target.value)
                                              }
                                            />
                                          </div>
                                          <div>
                                            <input
                                              className="form-control form-control-sm"
                                              type="text"
                                              placeholder="Video Link"
                                              aria-label=".form-control-sm example"
                                              onChange={(e) =>
                                                setVideoLink(e.target.value)
                                              }
                                            />
                                          </div>
                                        </div>
                                      </Modal.Body>
                                      <Modal.Footer>
                                        <Button
                                          variant="secondary"
                                          onClick={handleClose}
                                          size="sm"
                                        >
                                          Cancel
                                        </Button>
                                        <Button
                                          variant="primary"
                                          onClick={handleAddVideo}
                                          size="sm"
                                          disabled={isLoading}
                                        >
                                          {isLoading ? (
                                            <Spinner
                                              animation="border"
                                              variant="light"
                                            />
                                          ) : (
                                            "Submit"
                                          )}
                                        </Button>
                                      </Modal.Footer>
                                    </Modal>
                                  </>
                                ) : null}
                              </p>
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {videoRecipe?.length > 0 &&
                    detailRecipe?.user_id === userDataStorage?.id ? (
                      <div className="mx-1 my-3">
                        <div className="mx-1 my-3">
                          <div className="d-grid gap-2">
                            <button
                              className="btn btn-outline-warning"
                              type="button"
                              onClick={handleShow}
                            >
                              Add More Step Video
                            </button>
                          </div>
                        </div>

                        <Modal show={show} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>Add Video Step</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <div className="container">
                              <div className="mb-3">
                                <input
                                  className="form-control form-control-sm"
                                  type="text"
                                  placeholder="Step Description"
                                  aria-label=".form-control-sm example"
                                  onChange={(e) => setVideoDesc(e.target.value)}
                                />
                              </div>
                              <div>
                                <input
                                  className="form-control form-control-sm"
                                  type="text"
                                  placeholder="Video Link"
                                  aria-label=".form-control-sm example"
                                  onChange={(e) => setVideoLink(e.target.value)}
                                />
                              </div>
                            </div>
                          </Modal.Body>
                          <Modal.Footer>
                            <Button
                              variant="secondary"
                              onClick={handleClose}
                              size="sm"
                            >
                              Cancel
                            </Button>
                            <Button
                              variant="primary"
                              onClick={handleAddVideo}
                              size="sm"
                              disabled={isLoading}
                            >
                              {isLoading ? (
                                <Spinner animation="border" variant="light" />
                              ) : (
                                "Submit"
                              )}
                            </Button>
                          </Modal.Footer>
                        </Modal>
                        <hr className="my-4 mx-1" />
                      </div>
                    ) : null}

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
                      <CommentsRecipe data={commentUserData} />
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
