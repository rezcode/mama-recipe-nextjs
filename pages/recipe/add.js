import React, { useEffect, useState } from "react";
import Footer from "../../components/footer";
import addRecipeStyle from "../../styles/addRecipe.module.css";
import { IoMdBook } from "react-icons/io";
import { BiImageAlt } from "react-icons/bi";
import { useRouter } from "next/router";
import { Spinner } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";

const add = () => {
  const [userDataStorage, setUserDataStorage] = useState({});
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(1);
  const [ingredients, setIngredients] = useState("");
  const [titleImage, setTitleImage] = useState("Add Recipe Image");
  const [saveImage, setSaveImage] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setUserDataStorage(JSON.parse(localStorage?.getItem("userDataStorage")));
  }, [userDataStorage.name]);

  const handleImage = (e) => {
    let image = e.target?.files[0];
    let nameImage = e.target?.files[0]?.name;
    setTitleImage(nameImage);
    setSaveImage(image);
  };

  const handleAddRecipe = () => {
    setIsLoading(true);
    const config = {
      headers: {
        Authorization: `Bearer ${userDataStorage?.token}`,
        "Content-Type": "multipart/form-data; ",
      },
    };

    const formData = new FormData();
    formData.append("title", title);
    formData.append("id_category", category);
    formData.append("ingredients", ingredients);
    formData.append("foodImage", saveImage);
    formData.append("id_user", userDataStorage?.id);

    axios
      .post(`http://localhost:8000/recipes/add`, formData, config)
      .then((res) => {
        Swal.fire({
          icon: "success",
          text: "Add Recipe Success",
        }).then((result) => (result.isConfirmed ? router.push("/") : null));
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          text: "Add Recipe Failed",
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <div id="addRecipePages" className="row justify-content-center">
        <div className={`col-md-4 ${addRecipeStyle.bodyWrapper}`}>
          <div className="row text-center mt-5">
            <h4>Add Your Recipe</h4>
          </div>
          <div className="row mt-3">
            <div className="container">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleAddRecipe();
                }}
              >
                <div className="mx-3">
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <IoMdBook color="#8B8A8F" size={30} />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Title"
                      required
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>

                  <div className="form-floating mb-3">
                    <select
                      required
                      className="form-select"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                      onChange={(e) => {
                        const selectedCategory = e.target.value;
                        setCategory(selectedCategory);
                      }}
                      style={{ border: "none", borderRadius: "15px" }}
                    >
                      <option value={1}>Cakes</option>
                      <option value={2}>Dessert</option>
                      <option value={3}>Fat Food</option>
                      <option value={4}>Vegan Food</option>
                    </select>
                    <label htmlFor="floatingSelect">Pick Food Category</label>
                  </div>

                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows={6}
                      defaultValue={""}
                      style={{ borderRadius: "15px" }}
                      placeholder="Ingredients"
                      required
                      onChange={(e) => setIngredients(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      required
                      type="file"
                      id="upload"
                      onChange={handleImage}
                      hidden
                    />
                    <label className={addRecipeStyle.labelUpload} for="upload">
                      <div className={addRecipeStyle.iconUpload}>
                        <BiImageAlt size={40} color="#8B8A8F" />
                        <p className="mt-2 title-icon-upload text-muted">
                          {titleImage}
                        </p>
                      </div>
                    </label>
                  </div>

                  <div className="row justify-content-center">
                    <div className="col-7">
                      <div className="d-grid gap-2">
                        <button
                          className="btn btn-warning"
                          type="submit"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <Spinner animation="border" variant="light" />
                          ) : (
                            "SUBMIT"
                          )}
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
      <Footer data={userDataStorage} />
    </>
  );
};

export default add;
