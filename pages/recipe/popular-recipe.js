import React, { useEffect, useState } from "react";
import PaginatedItems from "../../components/PopularList";
import axios from "axios";

const PopularList = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_URL_API}/recipes/popular`)
      .then((res) => {
        setItems(res?.data?.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
        <PaginatedItems itemsPerPage={4} data={items} />
      )}
    </>
  );
};

export default PopularList;
