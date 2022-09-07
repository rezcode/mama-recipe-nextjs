import React, { useEffect, useState } from "react";
import PaginatedItems from "../../components/PopularList";
import axios from "axios";
import popularMenuStyle from "../../styles/popularMenu.module.css";
import { FiChevronLeft } from "react-icons/fi";
import Link from "next/link";

const PopularList = () => {
  const [items, setItems] = useState([]);
  const [defaultPopular, setDefaultPopular] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_URL_API}/recipes/popular`)
      .then((res) => {
        setItems(res?.data?.data);
        setDefaultPopular(res?.data?.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const filterResult = (catItem) => {
    console.log(catItem);
    if (catItem === "All") {
      return getPopular();
    } else {
      const result = defaultPopular?.filter((e) => {
        return e.category === catItem;
      });
      setItems(result);
    }
  };
  console.log("items", items);

  return (
    <>
      {isLoading ? (
        <div
          className="row align-items-center text-center"
          style={{ minHeight: "100vh" }}
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
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-4">
                <div className="row mt-3">
                  <div className="col-2">
                    <div className={popularMenuStyle.navBack}>
                      <Link href={"/"} passHref>
                        <FiChevronLeft size={40} />
                      </Link>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className={popularMenuStyle.verticalCenter}>
                      <p className="mt-1">Popular Menu</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div>
                      <select
                        className="form-select"
                        onChange={(e) => {
                          const selectedCategory = e.target.value;
                          setCategory(filterResult(selectedCategory));
                        }}
                      >
                        <option selected>All</option>
                        <option value={"Cakes"}>Cakes</option>
                        <option value={"Dessert"}>Dessert</option>
                        <option value={"Fat Food"}>Fat Food</option>
                        <option value={"Vegan Food"}>Vegan Food</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <PaginatedItems itemsPerPage={4} data={items} />
          </div>
        </>
      )}
    </>
  );
};

export default PopularList;
