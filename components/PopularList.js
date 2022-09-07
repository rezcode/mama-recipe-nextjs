import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import style from "../styles/popularPagination.module.css";
import Link from "next/link";
import homeStyles from "../styles/Home.module.css";
import popularMenuStyle from "../styles/popularMenu.module.css";
import { FiChevronLeft } from "react-icons/fi";
import { TbDatabaseOff } from "react-icons/tb";
import Image from "next/image";

function Items({ currentItems }) {
  return (
    <>
      <div style={{ minHeight: "75vh" }}>
        {currentItems?.length !== 0 ? (
          currentItems?.map((item, index) => (
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
                    src={item.food_image}
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
                  <p className={popularMenuStyle.total}>
                    Total liked {item.total}
                  </p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <>
            <div className="container">
              <div className="row mt-5">
                <TbDatabaseOff size={150} />
                <p className="text-center">No Recipe</p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

function PaginatedItems({ itemsPerPage, data }) {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      {currentItems ? (
        <ReactPaginate
          breakLabel="..."
          nextLabel="&raquo;"
          onPageChange={handlePageClick}
          marginPagesDisplayed={0}
          pageRangeDisplayed={4}
          pageCount={pageCount}
          previousLabel="&laquo;"
          renderOnZeroPageCount={null}
          containerClassName={style.pagination}
          pageLinkClassName={style.pageNum}
          previousLinkClassName={style.pageNum}
          nextLinkClassName={style.pageNum}
          activeLinkClassName={style.active}
        />
      ) : null}
    </>
  );
}

export default PaginatedItems;
