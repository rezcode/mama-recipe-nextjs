import React from "react";
import Link from "next/link";
import { FiChevronLeft } from "react-icons/fi";
import popularMenuStyle from "../styles/popularMenu.module.css";

const HeaderProfile = (props) => {
  return (
    <>
      <div className="row mt-3">
        <div className="col-4">
          <Link href="/profile/user" passHref>
            <div className={popularMenuStyle.navBack}>
              <FiChevronLeft size={40} />
            </div>
          </Link>
        </div>
        <div className="col-7">
          <div className={popularMenuStyle.verticalCenter}>
            <p className="mt-1">{props.header}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderProfile;
